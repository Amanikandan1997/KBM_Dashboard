import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Business Summary </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Business</a></li>
              <li className="breadcrumb-item active" aria-current="page">Business Summary</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Business Summary</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User Id</th>
                        <th> User name </th>
                        <th> Referal Id</th>
                        <th> Start Date</th>
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
                          KLM0001
                        </td>
                        <td> May 15, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM10007
                        </td>
                        <td> Messsy Adam </td>
                        <td>
                          KLM0002
                        </td>
                        <td> July 1, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM10008
                        </td>
                        <td> John Richards </td>
                        <td>
                          KLM0003
                        </td>
                        <td> Apr 12, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM10009
                        </td>
                        <td> Peter Meggik </td>
                        <td>
                          KLM0004
                        </td>
                        <td> May 15, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM100010
                        </td>
                        <td> Edward </td>
                        <td>
                          KLM0005
                        </td>
                        <td> May 03, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM100011
                        </td>
                        <td> John Doe </td>
                        <td>
                          KLM0006
                        </td>
                        <td> April 05, 2022 </td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        KLM100012
                        </td>
                        <td> Henry Tom </td>
                        <td>
                          KLM0007
                        </td>
                        <td> June 16, 2015 </td>
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

export default BasicTable
