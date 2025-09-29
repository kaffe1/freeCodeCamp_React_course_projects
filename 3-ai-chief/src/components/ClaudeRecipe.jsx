import Markdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {

    return (
        <section className='recipe'>
            <Markdown>{recipe}</Markdown>
        </section>
    )
}
