/*
You have a fashion catalog, an inventory of items from various high-fashion designers.
Each designer has a lineup of shoes. Each shoe has a name and a price.
It looks like this:
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...
// ^ this implies that the return value is a string, with each new line separated by a newline symbol ('\n')
Write your own unit tests.
*/

var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
        ]
    }
];

function inventoryList(currentInventory) {
    let answerString = '';
    for (let i = 0; i < currentInventory.length; i++) {
        let inventory = currentInventory[i];
        let name = currentInventory[i].name;
        for (let j = 0; j < inventory.shoes.length; j++) {
            let shoeName = inventory.shoes[i].name;
            let shoePrice = inventory.shoes[i].price;
            answerString += `${name}, ${shoeName}, ${shoePrice}\n`
        }
    }
    return answerString
}

let answer = inventoryList(currentInventory);

console.log(answer);
