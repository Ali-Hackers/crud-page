import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CrudPage = () => {
    const [student, setstudent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8899/')
            .then(res => setstudent(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-75 bg-white rounded p-4">
                    <h2 className="text-center mb-4">Todo List</h2>
                    <div className="text-center mb-3">
                        <Link to="/add" className="btn btn-primary p-2 w-25 float-end ">Add+</Link>
                    </div>

                    {/* Table for Displaying Todos */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Todo</th>
                                <th scope="col">Emails</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.Name || 'empty name'}</td>
                                    <td>{data.Email || 'email@gmail.com'}</td>
                                    <td>
                                        <button className="btn btn-warning me-2">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CrudPage;
