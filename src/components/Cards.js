import {React, useState} from 'react';
import M from "materialize-css";
import data from "../utils/paymentData";
import {Main, Card, Grid, Box} from "grommet";
import SearchBar from "./SearchBar"

const Cards = () => {

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: false});
  });

  const regex = /\d{1,12}/;

  const [value, setValue] = useState('');
  console.log(value);
    return (
      <Main>
        <Box>
          <SearchBar value={value} setValue={setValue}/>
          <div>
            <Box background="light-4" pad="small"><h5>Click any of the following rows to expand</h5></Box>
            {data.map((item) => {
              if(value === '' || (value !== '' && value===item.Payee.Name)) return (
              <ul className="collapsible"  key={item.Payee.Name}>
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
                  <div> PAN: {item.Payment.PAN.toString().replace(regex, "xxxxxxxxxxxx")}</div>
                  <div> CVV: {item.Payment.CVV}</div>
                  <div> Exp: {item.Payment.Exp}</div> <br/>
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
                          <Card overflow="auto" height="small" width="small" key={remittance.PayorName}>Payor name:{remittance.PayorName} <br/>
                          Payor ID: {remittance.PayorId} <br/>
                          Invoice Number: {remittance.InvoiceNo} <br/>
                          Amount: {remittance.Amount} <br/>
                          Description: {remittance.Description} <br/>
                          </Card>
                        ))}
                        </Grid> 
                      </Box>
                    </div>
                  </span>
                </div>
              </li>
            </ul>  
            )}
            )}
          </div>
        </Box>
    </Main>
    );
  };

  
  export default Cards;