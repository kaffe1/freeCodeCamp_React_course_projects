export default function SignupForm() {
    function signUp(formData) {
        const email = formData.get('email')
        const favColor = formData.get('favColor')
        console.log(favColor)

    }

    return (
        <section>
            <h1>Signup form</h1>
            <form className='signup-form' action={signUp} >
                <div><label htmlFor="email">Email: </label>
                    <input id='email' type="email" name='email' placeholder='example.@stie.com' />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id='password' type="password" name='password' />
                </div>

                <fieldset className='employment-status'>
                    <legend>Dietary restrictions:</legend>
                    <div>
                        <input id='une' type="checkbox" name='dietaryRestrictions' value='kosher' />
                        <label htmlFor="une">Kosher</label>
                    </div>
                    <div>
                        <input id='par' type="checkbox" name='dietaryRestrictions' value='vegan' />
                        <label htmlFor="par">Vegan</label>
                    </div>
                    <div>
                        <input id='ful' type="checkbox" name='dietaryRestrictions' value='gluten-free' />
                        <label htmlFor="ful">Gluten-free</label>
                    </div>
                </fieldset>

                <select name="favColor" id="" required>
                    <option style={{ display: 'none' }} value="" ></option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="white">white</option>
                    <option value="black">black</option>
                    <option value="purple" >purple</option>
                </select>


                <button className='submit-btn'>Submit</button>
            </form>
        </section>
    )
}