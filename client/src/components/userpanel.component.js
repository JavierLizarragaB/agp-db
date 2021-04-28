import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../img/papanico.png';
/* Axios? */

export const Signin = () =>{

    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        console.log(e)
        /* Agregar datos de backend */
    };

    const getUsers = async () => {
        /* Introducir servicios de backend */
        const res = await fetch('%{API}/user-panel')
        const data = await res.json();
        setUsers(data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    const deleteUser = (id) => {
        /* Datos de base de datos */
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div>
                        <img className="logoAGP-up" src={logo} />
                    </div>
                    
                <Link className="navbar-brand" to={"/inicio"}>Inicio</Link> 
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                </div>
                </div>
            </nav>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <button className="btn btn-custom">Medico</button>
                        <button className="btn btn-custom">Trabajador Social</button>
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
                                    onChange={e => setLName(e.target.value)} 
                                    value={lname}
                                    className="form-control"
                                    placeholder="Apellidos"
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
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                /* Conseguir id de usuarios */
                                <tr key={user._id}>
                                    <td>${user.fname} ${user.mname} ${user.lname}</td>
                                    <td>${user.email}</td>
                                    <td>${user.password}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm btn-block">
                                            Editar
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm btn-block"
                                            onClick={deleteUser}
                                            >
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
    }

    export default Signin;