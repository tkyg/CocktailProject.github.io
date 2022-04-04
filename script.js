// Get data from local API to show up on DOM
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submit-btn')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const searchTerm = document.querySelector('#search').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then (response => response.json())
    .then(allCocktailObj => {
      drinksCollection.innerHTML = " ";
      allCocktailObj.drinks.forEach(cocktail => renderOneDrink(cocktail))
    })
  })
})

// Create Tags and Elements for heading and sub-heading
const createHeading = document.createElement('h1')
document.body.appendChild(createHeading)
createHeading.setAttribute('id', 'heading')
createHeading.innerText = "COCKTAIL RECIPES"

const createSubHeading = document.createElement('h2')
document.body.appendChild(createSubHeading)
createSubHeading.setAttribute('id', 'subHeading')
createSubHeading.innerText = "SEARCH YOUR NEXT COCKTAIL"

// Create tags and elements for submit button
const createFormSubmit = document.createElement('form')
document.body.appendChild(createFormSubmit)
createFormSubmit.setAttribute('id', 'drinks')

const createInputSubmit = document.createElement('input')
createInputSubmit.setAttribute('id', 'search')
createInputSubmit.setAttribute('type', 'text')
createInputSubmit.setAttribute('name', 'Search')
createFormSubmit.appendChild(createInputSubmit)

const createInputForSubmit = document.createElement('input')
createInputForSubmit.setAttribute('type', 'submit')
createInputForSubmit.setAttribute('name', 'Submit')
createInputForSubmit.setAttribute('id', 'submit-btn')
createFormSubmit.appendChild(createInputForSubmit)

// Create tag and element to uphold data
const drinksCollection = document.createElement('div')
drinksCollection.setAttribute ('id', 'drinks-collection')
document.body.appendChild(drinksCollection)

//Combine ingredient and measurement
function combineIngredientAndMeasurement(cocktail) {
let ingredientAndMeasurementArr = [];
for(let i=1; i<=15; i++){
  let ingr = `strIngredient${i}`;
  let meas = `strMeasure${i}`
  if(!cocktail[ingr] && !cocktail[meas]) {
    break;
  }
  ingredientAndMeasurementArray.push({
    ingr: cocktail[ingr],
    meas: cocktail[meas]
  })
}
cocktail.newIngrAndMeas = ingredientAndMeasurementArr;
}


// Section 1: Displaying single data on DOM
const renderOneDrink = (cocktail) =>{
  const drinkCard = document.createElement('ul')
  drinkCard.className = "card";
  
  //Add cocktail information
  // 1a. cocktail image - strDrinkThumb
  const drinkImage = document.createElement('img')
  drinkImage.src = cocktail.strDrinkThumb
  drinkImage.className = 'drink-image';
  
  // 1b. cocktail name - strDrink
  const drinkName = document.createElement('p')
  drinkName.innerText = cocktail.strDrink
  
  // 1c. cocktail glass - strGlass
  const drinkGlassType = document.createElement('p')
  drinkGlassType.innerText = cocktail.strGlass
  
  // 1d. cocktail instruction - strInstructions
  const drinkInstructions = document.createElement('p')
  drinkInstructions.innerText = cocktail.strInstructions
  
  drinkCard.append(drinkImage, drinkName, drinkGlassType, drinkInstructions )
  
  drinksCollection.append(drinkCard)
  
}