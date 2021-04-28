import React, { Component, createContext, useContext } from 'react';

const errCb = () => {
    throw new Error('User context methods not initialized yet!');
};

interface UserCtxState {
    firstName: string;
    email: string;
}

type Setter = (newState: { [K in keyof UserCtxState]: UserCtxState[K] }) => void;

interface UserCtxMethods {
    set: Setter;
}

type UserCtxModel = UserCtxState & UserCtxMethods;

const initialState: UserCtxModel = {
    firstName: 'Pedro',
    email: 'psescoboza@gmail.com',

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

            set: (newState: { [K in keyof UserCtxState]: UserCtxState[K] }) => this.setState(newState),
        };
    }

    render() {
        return <UserCtx.Provider value={this.state}>{this.props.children}</UserCtx.Provider>;
    }
}

export const useUserCtx = () => useContext(UserCtx);
