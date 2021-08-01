import {React, useState} from 'react';
import M from "materialize-css";
import data from "../utils/paymentData";
import {Main, Card, Grid, Box} from "grommet";
import SearchBar from "./SearchBar"


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

const Cards = () => {

  const [change, setChange] = useState(true);      
function newFunc(){console.log("Yeehaw")}
// const [default, newFunc] = useState(item.Payment.PAN)
// function newFunc(){
// const p = '1234567890123456';
// //set p equal to className PAN
// const regex = /\d{1,12}/;
// console.log(p.replace(regex, 'xxxxxxxxxxxx'));
// }
// for (let i = 0; i < p.length; i++) {
//     text += p[i].replace(regex, 'xxxxxxxxxxxx')
//}
    return (
      <Main>
        <Box>
          <SearchBar />
          <div>
            <section>Click any of the following rows to expand</section>
            {data.map((item) => (
              <ul className="collapsible" key={item.Payee.Name}>
              <li>
                <div className="collapsible-header"><i className="material-icons">business_center</i>Payee:  {item.Payee.Name} </div>
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
                <div className="collapsible-header"><i className="material-icons">credit_card</i>Payment Method: </div>
                <div className="collapsible-body">
                  <span>
                  <button onClick = {() => setChange(!change)}> PAN: {item.Payment.PAN}</button> <br/>
                    {change?<h1>{item.Payment.PAN}</h1>:
                    newFunc()}
                  <div> CVV: {item.Payment.CVV}</div> <br/>
                  <div> Exp: {item.Payment.Exp}</div> <br/>
                  </span>
                </div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">account_balance</i>Remittance:</div>
                <div className="collapsible-body">
                  <span> 
                    <div>
                    <Box>
                      <Grid
                        gap="small"
                        rows="small"
                        columns={{ count: "fit", size: ["small", "small"] }}
                        
                      >
                        {item.Remittance.map((remittance) => (
                          <Card height="small" width="small" key={remittance.PayorName}>{remittance.PayorName} <br/>
                          {remittance.PayorId} <br/>
                          {remittance.InvoiceNo} <br/>
                          {remittance.Description} <br/>
                          {remittance.Amount}
                          </Card>
                        ))}
                        </Grid> 
                      </Box>
                    </div>
                  </span>
                </div>
              </li>
            </ul>  
            ))}
          </div>
        </Box>
    </Main>
    );
  };

  
  export default Cards;