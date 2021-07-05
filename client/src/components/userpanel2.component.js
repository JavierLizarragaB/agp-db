import React, { useEffect, useState } from 'react';
import NavBar from './navbar.component';
import Axios from 'axios';

export const Userpanel2 = () => {
    const [name, setName] = useState('');
    const [lpname, setLPName] = useState('');
    const [lmname, setLMName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(1);
    const [RegStatus, setRegStatus] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState('');
;
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!isEditing){
            var userjson = {
                name,
                lpname,
                lmname,
                email,
                password,
                type,
            };
            Axios.post('./api/user-panel/signup', userjson).then((response) => {
                console.log(response);
    
                if (response.data.message) {
                    setRegStatus(response.data.message);
                } else {
                    setRegStatus('Usuario ' + response.data + ' creado.');
                    getUsers();
                    setName('');
                    setLPName('');
                    setLMName('');
                    setEmail('');
                    setPassword('');
                }
            });
        } else {
            var userjson = {
                id,
                name,
                lpname,
                lmname,
                email,
                type,
            };
            Axios.post('./api/user-panel/update', userjson).then((response) => {
                console.log(response);
    
                if (response.data.message) {
                    setRegStatus(response.data.message);
                } else {
                    setRegStatus('Usuario ' + response.data + ' actualizado.');
                    setIsEditing(false);
                    getUsers();
                    setName('');
                    setLPName('');
                    setLMName('');
                    setEmail('');
                    setPassword('');
                }
            });
        }
        
    };

    const getUsers = () => {
        Axios.get('./api/user-panel/todos', { params: { type } }).then((response) => {
            console.log(type);
            setUsers(response.data);
        });
    };

    useEffect(() => {
        getUsers();
    }, [type]);

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

    const editUser = (email) => {
        Axios.get('./api/user-panel/edit', { params: { email } }).then((response) => {
            console.log(response);

            setId(response.data._id.$oid);
            setEmail(response.data.usuario);
            setName(response.data.nombre);
            setLPName(response.data.apellido_paterno);
            setLMName(response.data.apellido_materno);
            setType(response.data.type);
            setPassword("Este campo no se puede alterar")

            setIsEditing(true);
        });
    };

    useEffect(() => {
        console.log(id)
    }, [isEditing]);

    return (
        <div>
            <NavBar />

            <p>{RegStatus}</p>
            <br></br>
            
            <div class="container">
                    <button id="Médico" className="btn btn-custom" onClick={() => setType(2)}>
                        Medico
                    </button>

                    <button id="TrabajadorSocial" className="btn btn-custom" onClick={() => setType(1)}>
                        Trabajador Social
                    </button>

                    <table id="Tabla" className="table table-bordered table-hover">
                        <thead className="thead-custom">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Tipo</th>
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
                                    <td>{user.type}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm btn-block" onClick={() => editUser(user.usuario)}>Editar</button>
                                        <button className="btn btn-danger btn-sm btn-block" onClick={() => deleteUser(user.usuario)}>
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button id="Administrador" className="btn btn-custom " onClick={() => setType(3)}>
                        Administrador
                    </button>
                    <form id="Registro" onSubmit={handleSubmit} className="card card-body bg-custom">
                            <h4 className="h4-custom">Registro</h4>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onChange={e => setName(e.target.value)} 
                                    value={name}
                                    className="form-control"
                                    placeholder="Nombre"
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
                                Guardar
                            </button>
                    </form>
                
            </div>

        </div>
    );
};

export default Userpanel2;
