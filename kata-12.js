const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let matchesA = [];
  let matchesB = [];
  //all recipes from bakeryA
  for (ingredient of bakeryA) {
    for (recipe of recipes) {
      if (ingredient === recipe.ingredients[0] || ingredient === recipe.ingredients[1]) {
        matchesA.push(recipe.name);
      }
    }
  }
  //all recipes for bakeryB
  for (ingredient of bakeryB) {
    for (recipe of recipes) {
      if (ingredient === recipe.ingredients[0] || ingredient === recipe.ingredients[1]) {
        matchesB.push(recipe.name);
      }
    }
  }
  //the recipe they share
  for (matchB of matchesB) {
    for (matchA of matchesA) {
      if (matchA === matchB) {
        return matchA;
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
      name: 'Custard Surprise',
      ingredients: ['custard', 'ground beef']
    }
  ];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
      },
      {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
      },
      {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
      }
    ];
    
    console.log(chooseRecipe(bakeryA, bakeryB, recipes));
    