import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../img/papanico.png';
import Axios from 'axios';

export const Userpanel = () =>{

    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')
    const [RegStatus, setRegStatus] = useState('')

    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(mname!=''){
            var userjson = {
                fname,
                mname,
                lname,
                email,
                password,
                type
        }}else{
            var userjson = {
                fname,
                lname,
                email,
                password,
                type
        }}
        Axios.post('./api/user-panel/signup', userjson).then((response) => {
            console.log(response);
        
        if(response.data.message){
            setRegStatus(response.data.message)
        } else {
            setRegStatus("Usuario " + response.data + " creado.")
        }
    });
    };

    const getUsers = () => {
        Axios.get('./api/user-panel/todos').then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
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
                        <button className="btn btn-custom" onClick={e => setType(e.target.value), getUsers} 
                                    value="2">Medico</button>
                        <button className="btn btn-custom" onClick={e => setType(e.target.value), getUsers} 
                                    value="1">Trabajador Social</button>
                    </div>
                    <form onSubmit={handleSubmit} className="card card-body">
                    <label>{RegStatus}</label>
                           <div className="form-group">
                               <input 
                                    type="text" 
                                    onChange={e => setFName(e.target.value)} 
                                    className="form-control"
                                    placeholder="Nombre"
                                    autoFocus 
                                />
                           </div>
                           <div className="form-group">
                               <input 
                                    type="text" 
                                    onChange={e => setMName(e.target.value)} 
                                    className="form-control"
                                    placeholder="Segundo Nombre (Opcional)"
                                    autoFocus 
                                />
                           </div>
                           <div className="form-group">
                               <input 
                                    type="text" 
                                    onChange={e => setLName(e.target.value)} 
                                    className="form-control"
                                    placeholder="Apellidos"
                                    autoFocus 
                                />
                           </div>
                           <div className="form-group">
                               <input 
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)} 
                                    className="form-control"
                                    placeholder="Correo"
                                />
                           </div>
                           <div className="form-group">
                               <input 
                                    type="text" 
                                    onChange={e => setPassword(e.target.value)} 
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
                                <tr key={user._id.$_oid}>
                                    <td>{user.nombre} {user.apellido_paterno} {user.apellido_materno}</td>
                                    <td>{user.usuario}</td>
                                    <td>{user.contrasena}</td>
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

    export default Userpanel;