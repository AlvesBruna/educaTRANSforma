const {getIngredientsCount, getMissingIngredients, addIngredientsToMyList, removeIngredientsFromMyList} = require('./arrays')

test('getIngredientsCount returns the recipe ingredients count', () => {
    const result = getIngredientsCount()

    expect(result).toBe(8)
})

test('addIngredientsToMyList returns the updated list of ingredients that I have at home', () => {
    const ingredientsThatIHaveAtHome = ['sugar', 'flour', 'butter', 'eggs', 'salt']
    const ingredientsIBought = 'baking soda'

    const result = addIngredientsToMyList(ingredientsThatIHaveAtHome, ingredientsIBought)

    expect(result).toEqual(['sugar', 'flour', 'butter', 'eggs', 'salt', 'baking soda'])
})

test('removeIngredientsFromMyList returns the updated list of ingredients that I have at home', () => {
    const ingredientsThatIHaveAtHome = ['sugar', 'flour', 'butter', 'eggs', 'salt']
    const ingredientIUsed = 'eggs'

    const result = removeIngredientsFromMyList(ingredientsThatIHaveAtHome, ingredientIUsed)

    expect(result).toEqual(['sugar', 'flour', 'butter', 'salt'])
})

test('getMissingIngredients returns the ingredients from the recipe that I don\'t have at home', () => {
    const ingredientsThatIHaveAtHome = ['sugar', 'flour', 'butter', 'eggs', 'salt']
    const result = getMissingIngredients(ingredientsThatIHaveAtHome)

    expect(result).toEqual(['brown sugar', 'baking soda', 'chocolate chips'])
})
