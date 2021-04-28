import React, { useEffect, Component, createContext, useContext } from 'react';

const errCb = () => {
    throw new Error('User context methods not initialized yet!');
};

interface UserCtxState {
    firstName: string;
    email: string;
    lastName: string;
    roles: string[];
}

type Setter = (newState: Partial<{ [K in keyof UserCtxState]: UserCtxState[K] }>) => void;

interface UserCtxMethods {
    set: Setter;
}

type UserCtxModel = UserCtxState & UserCtxMethods;

const initialState: UserCtxModel = {
    firstName: '',
    lastName: '',
    email: '',
    roles: [],

    set: errCb as any,
};

const UserCtx = createContext<UserCtxModel>({ ...initialState });

/**
 *  User context provider. Stores the local client state for the user data.
 *
 *  Usage:
 *
 *  const Component = () => {
 *      const {firstName, email} = useUserCtx();
 *      return <div>{`Hello ${firstName}, your email is ${email}`}</div>;
 *  }
 */
export default class UserProvider extends Component<{}, UserCtxModel> {
    constructor(props: {}) {
        super(props);
        this.state = {
            ...initialState,

            set: (newState: Partial<{ [K in keyof UserCtxState]: UserCtxState[K] }>) => this.setState(newState as any),
        };
    }

    render() {
        return <UserCtx.Provider value={this.state}>{this.props.children}</UserCtx.Provider>;
    }
}

export const useUserCtx = () => useContext(UserCtx);

export const Example = () => {
    const { set: setUserValue, firstName, email } = useUserCtx();

    useEffect(() => {
        setUserValue({ firstName: 'Paulina', email: 'abc@email.com' });
    }, [setUserValue]);

    return (
        <div>
            <p>{`Nombre: ${firstName}`}</p>
            <br />
            <p>{`Email: ${email}`}</p>

            <form>
                <label htmlFor="firstName">Cambiar nombre</label>{' '}
                <input
                    name="firstName"
                    type="text"
                    onChange={(e) => {
                        e.preventDefault();
                        setUserValue({ firstName: e.target.value });
                    }}
                />{' '}
                <br />
                <label htmlFor="email">Cambiar nombre</label>{' '}
                <input
                    name="email"
                    type="text"
                    onChange={(e) => {
                        e.preventDefault();
                        setUserValue({ email: e.target.value });
                    }}
                />
            </form>
        </div>
    );
};
