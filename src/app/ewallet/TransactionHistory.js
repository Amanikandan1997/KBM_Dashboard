import React, { Component, useState, useMemo } from 'react';
import Pagination from '../Pagination';
import '../pagination.scss';
import "../../assets/styles/style.css";

let PageSize = 10;

export class Wallet extends Component {
  state = { date: new Date() }


  render() {
    const mystyle = {
      color: "9c9fa6 !important",
      backgroundColor: "#fff",
    };

    const mystyle1 = {
      color: "9c9fa6 !important",
    };

    return (
      <div>

        <div className="page-header">
          <h3 className="page-title">
            Transaction History
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>E-Wallet</a></li>
              <li className="breadcrumb-item active" aria-current="page">Transaction History</li>
            </ol>
          </nav>
        </div>
        <Pagination />
        

       {/*  <div className="row">
          <div className="col-md-12">
            <div className="wrapper rounded">
              <div className="table-responsive mt-3">
                <table className="table table-dark table-borderless" style={mystyle}>
                  <thead>
                    <tr>
                      <th scope="col" className='text-muted'>User</th>
                      <th scope="col" className='text-muted'>Mode</th>
                      <th scope="col" className='text-muted'>Date</th>
                      <th scope="col" className="text-right text-muted">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-briefcase mr-1"></span> Magesh </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">12 Jul 2020, 12:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +600 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-bed mr-1"></span> Suresh </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">11 Jul 2020, 2:00 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +500 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-exchange mr-1"></span> Ramesh </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">10 Jul 2020, 8:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-down mr-1"></span> +200 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-exchange mr-1"></span> Rajesh </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">12 May 2020, 4:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +400 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-cutlery mr-1"></span> Dinesh </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">11 May 2020, 5:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +200 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-briefcase mr-1"></span> Nivash </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">10 May 2020, 01:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +600 </td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-muted'> <span className="fa fa-briefcase mr-1"></span> Nithish </td>
                      <td><span className="mdi mdi-card mdi-24px text-danger"></span></td>
                      <td className="text-muted">09 May 2020, 01:30 PM</td>
                      <td className="d-flex justify-content-end align-items-center text-muted"> <span className="fa fa-long-arrow-up mr-1"></span> +800 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-between align-items-center results">
                <span className="pl-md-3">Showing<b className="text-white text-muted"> 1-7 0f 200 </b> trasactions</span>
                <div className="pt-3">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item disabled"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li>
                      <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    )
  }
}

export default Wallet
