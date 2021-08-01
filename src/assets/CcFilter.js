const p = '1234567890123456';
//set p equal to className PAN
const regex = /\d{1,12}/;
console.log(p.replace(regex, 'xxxxxxxxxxxx'));

for (let i = 0; i < p.length; i++) {
    text += p[i].replace(regex, 'xxxxxxxxxxxx')
  }

export default CcFilter;
