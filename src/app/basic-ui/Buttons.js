import React, { Component } from 'react';
import BinaryTree from "family-binary-tree";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100%",
};
const data = [
  {
    id: 1,
    left_child_id: 2,
    right_child_id: 3,
    username: "Admin",
    userid:"KB100",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 2,
    left_child_id: 4,
    right_child_id: 5,
    username: "Kalai",
    userid:"KB112",
    Referalid:"KB100",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 3,
    left_child_id: 6,
    right_child_id: null,
    username: "Arun",
    userid:"KB113",
    Referalid:"KB100",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 4,
    left_child_id: 7,
    right_child_id: 8,
    username: "Anu",
    userid:"KB114",
    Referalid:"KB112",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 5,
    left_child_id: null,
    right_child_id: null,
    username: "Divi",
    userid:"KB115",
    Referalid:"KB112",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 6,
    left_child_id: null,
    right_child_id: null,
    username: "Santo",
    userid:"KB116",
    Referalid:"KB113",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 7,
    left_child_id: 9,
    right_child_id: null,
    username: "dhanu",
    userid:"KB117",
    Referalid:"KB114",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 8,
    left_child_id: null,
    right_child_id: 10,
    username: "vinu",
    userid:"KB118",
    Referalid:"KB116",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 9,
    left_child_id: null,
    right_child_id: null,
    username: "manu",
    userid:"KB119",
    Referalid:"KB117",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:300",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 10,
    left_child_id: null,
    right_child_id: null,
    username: "vijay",
    userid:"KB120",
    Referalid:"KB118",
    Joindate:"23/05/23",
    JoiningAmount:"Rs:1000",
    ReferalAmount:"Rs:0",
    image: "https://i.imgur.com/yzUDPMJ.png"
  }
];

class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Family Binary Tree </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Network</a></li>
              <li className="breadcrumb-item active" aria-current="page">Binary Tree</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div style={styles}>
              <BinaryTree
                allUsers={data}
                rootUser={data[0]}
                bgSideBar={"#333"}
                colorText={"#333"}
                colorSideBar={"#fff"}
              // bgButton={'blue'}
              // colorButton={'black'}
              // disableSideBar
              // disableNavigation
              // renderNode={user=>{
              //   return (<div>Node</div>);
              // }}
              // renderDetail={user => {
              //   return <div>User</div>;
              // }}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Buttons;