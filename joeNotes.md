run app: npm start
deploy the build: npm run deploy

ideas for Cards.js

1. Consolidate both data and nonData into one array
const numbers = [10, 3, 4, 6];
const dollars = numbers.map( number => '$' + number);
console.log(dollars);
// ['$10', '$3', '$4', '$6'];

2. Do something with keys so you can make sure both maps are synced up

index?

3. outerArray: [
  { id: '1st', innerArray: [ 'this', 'that' ]},
  { id: '2nd', innerArray: [ 'some', 'what' ]},
]

<ul>
  {outerArray.map(outerElement => {
    return outerElement.innerArray.map(innerElement => (
      <li key={outerElement.id}>
        {innerElement} - {outerElement.id}
      </li>
    ))
  })}
</ul>

<ul>
<li>this - 1st</li>
<li>that - 1st</li>
<li>some - 2nd</li>
<li>what - 2nd</li>
</ul>