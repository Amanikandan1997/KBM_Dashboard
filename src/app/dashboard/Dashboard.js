import React, { Component } from 'react';
import TableData from '../TableData.json';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/style.css";
// import "react-datepicker/dist/react-datepicker.css";
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        customers: []
    }
}
componentDidMount() {
    fetch("http://localhost:3000/api/reg_user")
    .then(res => res.json())
    .then(
        (customers) => {
            this.setState({ customers: customers });
        },
        (error) => {
            alert(error);
        }
    )
}


  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Total User
                <i className='mdi mdi-account-supervisor mdi-24px float-right'></i>
                </h4>
                <h2 className="mb-5">190 User</h2>
                <h6 className="card-text">Increased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Total Local User 
                <i className='mdi mdi-account-supervisor-circle mdi-24px float-right'></i>
                </h4>
                <h2 className="mb-5">300 User</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Total Clients 
                <i className="mdi mdi-cart-arrow-down mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">490</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="page-header">
          <h3 className="page-title"> Recuritement </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Recuritement</a></li>
              <li className="breadcrumb-item active" aria-current="page">Profile Details</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Profile Details</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> Skill Capacity</th>
                        <th> Last Updated Date</th>
                        <th> Status </th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {console.log("data------pp"+this.state.customers)}
                      {this.state.customers.map((data, i) => {
                        console.log("data------"+data);
                        this.skillVariant = '0';
                        if (data.skillCapacity > 0 && data.skillCapacity < 36) {
                          this.skillVariant = "danger"
                        } else if (data.skillCapacity > 37 && data.skillCapacity < 76) {
                          this.skillVariant = "warning"
                        } else { this.skillVariant = "success" }

                        this.profileStatus = '0';
                        if (data.status.toLowerCase() === 'rejected') {
                          this.profileStatus = "badge badge-danger"
                        } else if (data.status.toLowerCase() === 'inprogress') {
                          this.profileStatus = "badge badge-warning"
                        } else { this.profileStatus = "badge badge-success" }

                        return (

                          <tr key={i}>
                            <td className="py-1">
                              <img src={data.path} alt="user icon" />
                            </td>
                            <td> {data.fullName}</td>
                            <td> <ProgressBar striped variant={this.skillVariant} now={data.skillCapacity} /> </td>
                            <td> {data.lastUpdatedDate} </td>
                            <td> <label class={this.profileStatus}>{data.status}</label> </td>
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
                        )

                      })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}
const ListItem = (props) => {

  return (
    <li className={(props.isCompleted ? 'completed' : null)}>
      <div className="form-check">
        <label htmlFor="" className="form-check-label">
          <input className="checkbox" type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          /> {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
    </li>
  )
};
export default Dashboard;