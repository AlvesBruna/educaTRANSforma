const recipeIngredientsList = ['sugar', 'brown sugar', 'flour', 'butter', 'eggs', 'baking soda', 'salt', 'chocolate chips']

// esse exercicio é pra contarmos a quantidade total de ingredientes da receita (tamanho do array recipeIngredientsList)
function getIngredientsCount() {

}

// esse exercicio é pra adicionar um ingrediente que comprei (ingredientIBought) na lista de ingredientes que tenho em casa (ingredientsThatIHaveAtHome)
// use .push para resolver
function addIngredientsToMyList(ingredientsThatIHaveAtHome, ingredientIBought) {
    
}

// esse exercicio é pra remover um ingrediente que já usei (ingredientIUsed) da lista de ingredientes que tenho em casa (ingredientsThatIHaveAtHome)
// use for pra resolver

// try using .filter to solve
function removeIngredientsFromMyList(ingredientsThatIHaveAtHome, ingredientIUsed) {

}

// esse exercicio é pra mostrar quais ingredientes da receita (recipeIngredientsList) estão faltando na lista de ingredientes que tenho em casa (ingredientsThatIHaveAtHome)
// use for pra resolver

// try using .filter and .includes to solve 
function getMissingIngredients(ingredientsThatIHaveAtHome) {

}

module.exports = {
    getIngredientsCount,
    getMissingIngredients,
    addIngredientsToMyList,
    removeIngredientsFromMyList
}

// filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// includes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
