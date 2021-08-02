import data from './paymentData'

const regex = /\d{1,12}/;

// data.map((item) => newFunc(item.Payment.PAN))
const notData = data.map((item) => (item.Payment.PAN).toString().replace(regex, "xxxxxxxxxxxx"))

export default notData ; 