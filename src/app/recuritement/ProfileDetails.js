import axios from 'axios'
import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function RecurProfileDetails() {
    const [data, setData] = useState([])
    //const navigate = useNavigate()
    useEffect(()=> {
        axios.post("http://localhost:3000/users", data)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <div className="page-header">
          <h3 className="page-title"> Users List </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Members List</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Details</li>
            </ol>
          </nav>
        </div>
         <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">User Details
                <Link className='btn btn-success btn-sm float-right' to="/recuritement/basic-elements">Add User</Link>
                </h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User ID </th>
                        <th> User Name</th>
                        <th> Referal Name </th>
                        <th> Referal ID </th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                          <tr>
                            <td>KBM111</td>
                            <td>Kalai</td>
                            <td> Admin </td>
                            <td> KBM100 </td>
                            <td>          <button type="button" className="btn btn-gradient-dark btn-icon-text">
                              Edit
                              <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                              <button type="button" className="btn btn-gradient-danger btn-icon-text">
                                <i className="mdi mdi-delete btn-icon-trash"></i>
                                Delete
                              </button>
                            </td>
                          </tr>
                        
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecurProfileDetails
