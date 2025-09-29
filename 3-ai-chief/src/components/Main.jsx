import { useState, useEffect, useRef } from 'react'
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../outside_files/ai';



export default function Main() {
    const [ingredientArr, updateArr] = useState([])

    function handleSubmit(formData) {

        const newIngredient = formData.get('ingredient')
        if (!newIngredient) {
            alert('please enter an ingredient')
            return;
        }
        updateArr(preArr => [...preArr, newIngredient])
    }
    const ingredientListItems = ingredientArr.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const recipeSection = useRef(null);

    const [recipe, setRecipe] = useState(false)
    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [recipe])

    async function getRecipe() {
        //---!!!--- recipe should have come from an AI api, but I failed using it, still try to figure it out myself

        // const recipeMarkdown = await getRecipeFromMistral(ingredientArr)

        const recipeMarkdown = `# Lime Curry Chicken

## Ingredients
- 500g chicken breast, diced
- 1 lime (zest and juice)
- 1 tbsp curry powder
- 200ml milk (full-fat or coconut milk for creaminess)
- 1 tbsp cooking oil
- 1 medium onion, finely chopped
- 2 cloves garlic, minced
- Salt and pepper to taste
- Fresh coriander (optional, for garnish)

## Instructions
1. **Marinate the chicken**  
   - In a bowl, mix the diced chicken with lime juice, half of the curry powder, and a pinch of salt.  
   - Let it marinate for at least 15 minutes.

2. **Cook the aromatics**  
   - Heat oil in a pan over medium heat.  
   - Add the chopped onion and garlic, sauté until fragrant and translucent.

3. **Add the chicken**  
    - Add marinated chicken to the pan and cook until lightly browned on all sides.

4. **Add curry and milk**  
   - Sprinkle in the remaining curry powder, stir well.  
   - Pour in the milk and bring to a gentle simmer.  
   - Reduce heat and cook for 10–15 minutes until the chicken is fully cooked and sauce slightly thickens.

5. **Finish with lime zest**  
   - Stir in lime zest, adjust seasoning with salt and pepper.

6. **Serve**  
   - Garnish with fresh coriander if desired.  
   - Serve hot with steamed rice or flatbread.

## Notes
- For a richer flavor, replace regular milk with coconut milk.  
- You can add vegetables like bell peppers or carrots for extra texture.
`
        setRecipe(recipeMarkdown)
    }




    return (
        < main >
            <form
                className='add-ingredient-form' action={handleSubmit}
            >
                <input
                    name="ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    arial-label='add ingredients'
                />
                <button >Add ingredients</button>
            </form>


            {ingredientArr.length > 0 ? <IngredientsList ingredientArr={ingredientArr} getRecipe={getRecipe} ingredientListItems={ingredientListItems} ref={recipeSection} /> : null}


            {recipe && <ClaudeRecipe recipe={recipe} />}

        </main >
    )
}