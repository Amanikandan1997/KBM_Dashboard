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

export class UserBasicElements extends Component {
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
          <h3 className="page-title"> Add Profile Details </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Recuritement</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add Profile</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">User Profile</h4>
                <p className="card-description"> Add Profile Details </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail3">Email id</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPhone">Phone Number</label>
                    <Form.Control type="phone" className="form-control" id="exampleInputPhone" placeholder="Mobile Number" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                    <div className="col-sm-9">
                      <DatePicker className="form-control w-100"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label>Upload Resume</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                      <label className="custom-file-label" htmlFor="customFileLang">Upload resume</label>
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Job Title</label>
                    <div className="col-sm-9">
                      <select className="form-control">
                        <option>Category1</option>
                        <option>Category2</option>
                        <option>Category3</option>
                        <option>Category4</option>
                      </select>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label className='col-sm-3 col-form-label' htmlFor="exampleInputCity1">Skills</label>
                    <span
                      class="d-inline-block col-sm-9"
                      data-toggle="popover"
                      data-trigger="focus"
                      data-content="Please selecet account(s)"
                    >
                      <ReactSelect
                        options={colourOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                          Option
                        }}
                        onChange={this.handleChange}
                        allowSelectAll={true}
                        value={this.state.optionSelected}
                      />
                    </span></Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">Current Location</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Current Location" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">Preferred Location</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Preffered Location" />
                  </Form.Group>
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Shift Timing</label>
                    <div className="col-sm-4">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Day Shift
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Night Shift
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Experience Details</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                  </Form.Group>
                  <p className="card-description"> Address Details</p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 1</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">State 1</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 2</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Postal code</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default UserBasicElements