/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

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

The task now is to find all the laced shoes.
Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.

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

let laceWords = [];

for (let i = 0; i < inventory.length; i++ ) {
    for (let j = 0; j < inventory[i].shoes.length; j++) {
        if (typeof hasLace(inventory[i].shoes[j].name) === 'object') {
            laceWords.push(hasLace(inventory[i].shoes[j].name))
        }
    }
}

function hasLace(string) {
    let flag = false;
    let targetIndex = 0;
    let stringSplit = string.split(' ');
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i][0] === 'l' && stringSplit[i][1] === 'a' && stringSplit[i][2] === 'c' && stringSplit[i][3] === 'e' ) {
            flag = true;
            targetIndex = i;
        }

    }

    if (flag) {
        return {["nameWords"]: stringSplit, ["targetWordIndex"]: targetIndex}
    } else {
        return false
    }
}

// Finished in 24:26
