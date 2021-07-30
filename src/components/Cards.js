import React from "react";
import M from "materialize-css"
import data from "../utils/paymentData"
import {Main, Card} from "grommet";

console.log(data[0].Payee.Name);

for (let i = 0; i < data.length; i++) {
  console.log(data[i].Payee.Name)
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

const Cards = () => {
    return (
      <Main>
        <div>
          <section>Click any of the following rows to expand</section>
          {data.map((item) => (
            <ul className="collapsible">
            <li>
              <div className="collapsible-header"><i className="material-icons">filter_drama</i>Payee: {item.Payee.Name}</div>
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
          ))}
        </div>

    </Main>
    );
  };

  
  export default Cards;