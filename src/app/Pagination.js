import React from 'react';
import { MDBDataTable } from 'mdbreact';
import '../../src/assets/styles/style.css'

const Pagination = () => {
  const data = {
    columns: [
      {
        label: 'User',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Mode',
        field: 'mode',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },
      {
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },{
        name: 'Tiger Nixon',
        mode: 'G-pay',
        date: '26-3-2023',
        amount: '+800',
      },
      {
        name: 'Garrett Winters',
        mode: 'Netbanking',
        date: '20-8-2022',
        amount: '+500',
      },
      {
        name: 'Ashton Cox',
        mode: 'G-pay',
        date: '03-12-2022',
        amount: '+200',
      },
  ]
};

return (
    <>
    <div className="row">
          <div className="col-md-12">
            <div className="wrapper rounded">

              <div className="row mt-2 pt-2">
                <div className="col-md-6" id="income">
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mdi mdi-transfer-down mdi-24px float-right text-success"></p>
                    <p className="text mx-3">Income</p>
                    <p className="ml-4 money text-primary font-weight-bold">$9,758.23</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-md-end align-items-center">
                    <p className="mdi mdi-transfer-up mdi-24px float-right text-danger"></p>
                    <div className="text mx-3">Expense</div>
                    <div className="ml-4 money text-danger font-weight-bold">$961.23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  <MDBDataTable striped bordered medium order={['amount', 'asc' ]} data={data} />
  </>
  );
}

export default Pagination;