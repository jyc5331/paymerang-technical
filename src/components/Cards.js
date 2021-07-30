import React from "react";
import M from "materialize-css"
import data from "../utils/paymentData"
import {Main} from "grommet";

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
              <div className="collapsible-body">
                <span>
                <div>Fax: {item.Payee.Fax} </div>
                <div>Phone: {item.Payee.Phone} </div> <br/>
                  <address>
                    Address: Attn: {item.Payee.Attention} <br/>
                    {item.Payee.Address.Address1 + item.Payee.Address.Address2} <br/>
                    {item.Payee.Address.City} , {item.Payee.Address.StateOrProvince} <br/>
                    {item.Payee.Address.Country} , {item.Payee.Address.PostalCode}
                  </address>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">place</i>Payment Method: </div>
              <div className="collapsible-body">
                <span>
                <div> PAN: {item.Payment.PAN}</div> <br/>
                <div> CVV: {item.Payment.CVV}</div> <br/>
                <div> Exp: {item.Payment.Exp}</div> <br/>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
              <div className="collapsible-body">
                <span> Consider a for loop for remittance array or a second map
                </span>
              </div>
            </li>
          </ul>  
          ))}
        </div>

    </Main>
    );
  };

  
  export default Cards;