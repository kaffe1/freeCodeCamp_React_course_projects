function Main(props) {
    return (
        <article className='journal-entry'>
            <div className="main-img-ctn">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="entry-text">
                <div>
                    <img className="location-icon" src='/src/imgs/pin.png' alt={props.img.alt} />
                    <span>{props.location}</span>
                    <a href="https://www.flaticon.com/search?word=location">view on google map</a>
                </div>
                <h2>{props.name}</h2>
                <p>12 Jan, 2021-2024</p>
                <p>{props.description} </p>
            </div>

        </article>
    )
}
export default Main