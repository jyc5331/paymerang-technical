import React from "react";
import M from "materialize-css"
import data from "../utils/paymentData"

console.log(data[0].Payee.Name); //don't forget to cap!

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

// const bigData = item => {
//   item.map(console.log(item))
// }

// bigData(data);


const Cards = () => {
    return (

      <ul className="collapsible">
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{data[0].Payee.Name}</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>  
    );
  };

  
  export default Cards;