import React, { useEffect, useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../img/papanico.png';
import Axios from 'axios';

export const Userpanel = () => {
    const [fname, setFName] = useState('');
    const [mname, setMName] = useState('');
    const [lpname, setLPName] = useState('');
    const [lmname, setLMName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(1);
    const [RegStatus, setRegStatus] = useState('');

    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mname != '') {
            var name = fname + ' ' + mname;
            var userjson = {
                name,
                lpname,
                lmname,
                email,
                password,
                type,
            };
        } else {
            var name = fname;
            var userjson = {
                name,
                lpname,
                lmname,
                email,
                password,
                type,
            };
        }
        Axios.post('./api/user-panel/signup', userjson).then((response) => {
            console.log(response);

            if (response.data.message) {
                setRegStatus(response.data.message);
            } else {
                setRegStatus('Usuario ' + response.data + ' creado.');
            }
        });
    };

    const handleClick = (value) => {
        setType(value);
        getUsers();
    };

    const getUsers = () => {
        Axios.get('./api/user-panel/todos', { params: { type } }).then((response) => {
            console.log(type);
            setUsers(response.data);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = (email) => {
        Axios.post('./api/user-panel/delete', { "email": email }).then((response) => {
            console.log(response);

            if (response.data.message) {
                setRegStatus(response.data.message);
            } else {
                setRegStatus('Usuario ' + response.data + ' eliminado.');
            }
            getUsers();
        });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div>
                        <img className="logoAGP-up" src={logo} />
                    </div>

                    <Link className="navbar-brand nav-item" to={'/inicio'}>
                        Inicio
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                </div>
            </nav>

            <div className="row container-space">
                <div className="col-md-4">
                    <div className="row">
                        <button className="btn btn-custom col-md-5 btn-space" onClick={(e) => handleClick(e.target.value)} value="2">
                            Medico
                        </button>
                        <button className="btn btn-custom col-md-5" onClick={(e) => handleClick(e.target.value)} value="1">
                            Trabajador Social
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="card card-body bg-custom">
                            <h4 className="h4-custom">Registro</h4>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setFName(e.target.value)} 
                                    value={fname}
                                    className="form-control"
                                    placeholder="Nombre"
                                    autoFocus 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setMName(e.target.value)} 
                                    value={mname}
                                    className="form-control"
                                    placeholder="Segundo Nombre (Opcional)"
                                    autoFocus 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setLPName(e.target.value)} 
                                    value={lpname}
                                    className="form-control"
                                    placeholder="Apellido Paterno"
                                    autoFocus 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setLMName(e.target.value)} 
                                    value={lmname}
                                    className="form-control"
                                    placeholder="Apellido Materno"
                                    autoFocus 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)} 
                                    value={email}
                                    className="form-control"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setPassword(e.target.value)} 
                                    value={password}
                                    className="form-control"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <button className="btn btn-custom btn-block">
                                Registrar
                            </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-custom">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                /* Conseguir id de usuarios */
                                <tr key={user._id.$_oid}>
                                    <td>
                                        {user.nombre} 
                                    </td>
                                    <td>{user.apellido_paterno} {user.apellido_materno}</td>
                                    <td>{user.usuario}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm btn-block">Editar</button>
                                        <button className="btn btn-danger btn-sm btn-block" onClick={(e) => deleteUser(user.usuario)}>
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Userpanel;
