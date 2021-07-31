import React from "react";
import M from "materialize-css"
import data from "../utils/paymentData"
import {Main} from "grommet";

// const remittanceArray = [data.Remittance]
// console.log(remittanceArray)

// (function () {
//   var item = data; //create a local variable
//   for (var i = 0; i < item.length; i++) {
//       for (var j = 0; j < item[i].Remittance.length; j++) {
//           // console.log(item[j].Remittance);
//           const remittances = item[j].Remittance
//           console.log(remittances)
//       }
//   }
// }());

// for (let i = 0; i < data.length; i++) {
// const remittanceArray = data[i].Remittance
// console.log(remittanceArray)
// }

// data.map((item) => (
// console.log("mapping about")  
// ))


// console.log(data[0].Remittance[0].PayorName)
// const remittanceData = data.Remittance
// console.log(RemittanceData)

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
            <ul className="collapsible" key={item.Payee.Name}>
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
                <span> 
                  <div>Insert loop here
                  {/* {item.Remittance.map((remittance) => (
                    console.log(remittance)
                    ))} */}
                  </div>
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