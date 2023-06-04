import React, { Component } from 'react';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" }
];

export class RecurBasicElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
  };

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Add User Profile </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Members list</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add User</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">User Profile</h4>
                <p className="card-description"> Add User </p>
                <form className="forms-sample row">
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleInputName1">Referal Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                    {/*  <select className="form-control" id="exampleSelectGender">
                      <option>Rajesh</option>
                      <option>Magesh</option>
                      <option>Suresh</option>
                      <option>Ramesh</option>
                      <option>Nivas</option>
                      <option>Denser</option>
                    </select> */}
                  </Form.Group>
                  {/*                   <Form.Group className='col-4'>
                    <label htmlFor="exampleInputName1">Referal Id</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>KLM0001</option>
                      <option>KLM0002</option>
                      <option>KLM0003</option>
                      <option>KLM0004</option>
                      <option>KLM0005</option>
                      <option>KLM0006</option>
                    </select>
                  </Form.Group>
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleInputEmail3">Email id</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleInputPhone">Phone Number</label>
                    <Form.Control type="phone" className="form-control" id="exampleInputPhone" placeholder="Mobile Number" />
                  </Form.Group>
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label htmlFor="exampleInputCity1">Date of Birth</label>
                    <DatePicker className="col-12 form-control"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className='col-4'>
                    <label htmlFor="exampleInputCity1">Current Location</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Current Location" />
                  </Form.Group>
                  
                  <p className="card-description col-12" style={{ fontWeight: "bold", textDecorationLine: "underline" }}> Address Details</p>
                  <Form.Group className="col-4">
                    <label className="col-form-label">Address 1</label>
                    <div className="">
                      <Form.Control type="text" />
                    </div>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label className="col-form-label">State 1</label>
                    <div className="">
                      <Form.Control type="text" />
                    </div>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label className="col-form-label">Address 2</label>
                    <div className="">
                      <Form.Control type="text" />
                    </div>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label className="col-form-label">Postal code</label>
                    <div className="">
                      <Form.Control type="text" />
                    </div>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label className="col-form-label">City</label>
                    <div className="">
                      <Form.Control type="text" />
                    </div>
                  </Form.Group>
                  <Form.Group className="col-4">
                    <label className="col-form-label">Country</label>
                    <div className="">
                      <select className="form-control">
                        <option>America</option>
                        <option>Italy</option>
                        <option>Russia</option>
                        <option>Britain</option>
                      </select>
                    </div>
                  </Form.Group>
 */}
                  <div className='col-12'>
                    <button type="submit" className="col-2 btn btn-gradient-primary mr-2">Submit</button>
                    <button className="col-2 btn btn-light">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RecurBasicElements
