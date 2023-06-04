import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"> Copyright © <a href="https://kalaimarketing.com/" target="_blank" rel="noopener noreferrer">KalaiMarketing </a>2023</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Designed by <a href="http://kitecareer.com/" target="_blank" rel="noopener noreferrer"> KiteCareer  </a>   </span>
        </div>
      </footer> 
    );
  }
}

export default Footer;