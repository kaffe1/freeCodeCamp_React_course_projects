import { useState, useEffect } from "react";

export default function Main() {
    const [memes, setMemes] = useState(null)
    const [meme, setMeme] = useState({ topText: 'asldjfa', bottomText: 'asdfasf', imgUrl: 'src/imgs/meme.jpg' })

    console.log('Main rendered')

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    setMemes(data.data.memes)
                }
            })
        console.log('useEffect in Main')
    }, [])

    //handle input change on caption
    const handleChange = (event) => {
        const { value, name } = event.target;
        console.log(value);
        setMeme(preMeme => ({ ...preMeme, [name]: value }))
    }
    //get meme img from memes when clicked
    const getMeme = () => {
        if (memes) {
            const index = Math.floor(Math.random() * 100)
            console.log(index)
            setMeme(preMeme => ({ ...preMeme, imgUrl: memes[index].url }))
        }

    }

    return (
        <main >
            <div className="input-ctn">
                <div>
                    <div><strong>Top Text</strong></div>
                    <input className="text-input"
                        type="text"
                        onChange={handleChange}
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                    />
                </div>
                <div>
                    <div><strong>Bottom Text</strong></div>
                    <input className="text-input"
                        type="text"
                        onChange={handleChange}
                        placeholder="Bottom Text"
                        value={meme.bottomText}
                        name="bottomText"

                    />
                </div>
            </div>

            <button className="get-img-btn" onClick={getMeme} >
                Get a new meme image 🖼️
            </button>

            <div style={{ position: "relative", marginTop: "1rem" }}>
                <img
                    src={meme.imgUrl}
                    alt="Meme"
                    style={{ width: "100%", borderRadius: "8px" }}
                />
                <h2 className="top-text">
                    {meme.topText.toUpperCase()}
                </h2>
                <h2 className="bottom-text">
                    {meme.bottomText.toUpperCase()}
                </h2>
            </div>
        </main>
    );
}
