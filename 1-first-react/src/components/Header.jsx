export default function Header() {
    return (
        <header>
            <div className='toothless-ctn'>
                <img src="/src/toothles.JPG" alt="this is my pet" className="toothless" />
            </div>
            <nav>
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}