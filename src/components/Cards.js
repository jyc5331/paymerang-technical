import React from "react";
import M from "materialize-css"
import data from "../utils/paymentData"

console.log(data);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

const Cards = () => {
    return (
      <ul className="collapsible">
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
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