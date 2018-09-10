/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure as earlier:

var inventory = [
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

Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

Brunello Cucinelli,tasselled black low-top lace-up,1000
Gucci,black leather laced sneakers,900
etc



Write your own unit tests.

*/

var inventory = [
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

let blackShoes = [];

for (let i = 0; i < inventory.length; i++){
    designerObject = inventory[i];
    for (let j = 0; j < designerObject.shoes.length; j++) {
        splitWord = designerObject.shoes[j].name.split(' ');
        if (isBlack(splitWord) === true){
            blackShoes.push([`${designerObject.name}, ${designerObject.shoes[j].name}, ${designerObject.shoes[i].price}`]);
        }
    }
}

function isBlack(string) {
    let flag = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'black') {
            flag = true;
        }
    }

    if (flag === true) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < blackShoes.length; i++) {
    console.log(`${blackShoes[i]}`);
}
