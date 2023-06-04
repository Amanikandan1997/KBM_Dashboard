import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export class Wallet extends Component {
  state = { date: new Date() }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            E-Wallet
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>E-Wallet</a></li>
              <li className="breadcrumb-item active" aria-current="page">Wallet Amount</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12 stretch-card grid-margin">
            <div className="card bg-gradient-primary card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Hi, Anu Ram
                  <i className='mdi mdi-calendar-today mdi-24px float-right'></i>
                  <br></br><span>Date : {this.state.date.toLocaleDateString()} </span>
                </h4>
                <h2 className="mb-5">Gold Plan</h2>
                <h6 className="card-text">Welcome back to your KalaiMarketing App</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Today Earnings
                  <i className='mdi mdi-calendar-today mdi-24px float-right'></i>
                  <br></br><span>Date : {this.state.date.toLocaleDateString()} </span>
                </h4>
                <h2 className="mb-5">600</h2>
                <h6 className="card-text"><a href="/#" >Click here</a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Total Earnings
                  <i className='mdi mdi-cash-multiple mdi-24px float-right'></i>
                </h4>
                <h2 className="mb-5">2000</h2>
                <h6 className="card-text"><a href="">Click here</a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Available Earnings
                  <i className="mdi mdi-wallet mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">700</h2>
                <h6 className="card-text"><a href="">Click here</a></h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Transaction</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label className="col-form-label">User ID</label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <label className="col-form-label">User Name</label>
                    <select className="form-control">
                      <option>Anu Ram</option>
                      <option>Diviya</option>
                      <option>Manikandan</option>
                      <option>Anugragha</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label className="col-form-label">Amount</label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <label className="col-form-label">Mode of Transaction</label>
                    <select className="form-control">
                      <option>G-pay</option>
                      <option>Netbanking</option>
                      <option>Cash</option>
                    </select>
                  </Form.Group>
                  <button type="submit" className="btn btn-gradient-primary mr-2">Add</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">History</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User Id</th>
                        <th> User name </th>
                        <th> Amount</th>
                        <th> Type</th>
                        <th> Status </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                          KLM10006
                        </td>
                        <td> Herman Beck </td>
                        <td>
                          200
                        </td>
                        <td> G-pay </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM10007
                        </td>
                        <td> Messsy Adam </td>
                        <td>
                          600
                        </td>
                        <td> Netbanking </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM10008
                        </td>
                        <td> John Richards </td>
                        <td>
                          800
                        </td>
                        <td> Cash </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM10009
                        </td>
                        <td> Peter Meggik </td>
                        <td>
                          400
                        </td>
                        <td> G-pay </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM100010
                        </td>
                        <td> Edward </td>
                        <td>
                          200
                        </td>
                        <td> Netbanking </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM100011
                        </td>
                        <td> John Doe </td>
                        <td>
                          1000
                        </td>
                        <td> G-pay </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          KLM100012
                        </td>
                        <td> Henry Tom </td>
                        <td>
                          600
                        </td>
                        <td> G-pay </td>
                        <td><label className="badge badge-success">Completed</label></td>
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
}

export default Wallet
