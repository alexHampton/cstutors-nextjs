import Image from 'next/image';
import './navbar.css';
import logo from './images/cst-logo-dark.svg';
import Link from 'next/link';

export default function Navbar() {
    return (

        <header id="cs-navigation">
            <div className="cs-container">
                {/*Nav Logo*/}
                <Link href="/" className="cs-logo" aria-label="back to home">
                    <Image
                        src="/images/cst-logo-dark.svg"
                        alt='logo for computer science tutors'
                        width={210}
                        height={29}/>
                    {/* <img src="images/cst-logo-dark.svg" alt="logo - Computer Science Tutors" width="210"
                        height="29" aria-hidden="true" decoding="async" /> */}
                </Link>
                {/*Navigation List*/}
                <nav className="cs-nav" role="navigation">
                    {/*Mobile Nav Toggle*/}
                    <button className="cs-toggle" aria-label="mobile menu toggle">
                        <div className="cs-box" aria-hidden="true">
                            <span className="cs-line cs-line1" aria-hidden="true"></span>
                            <span className="cs-line cs-line2" aria-hidden="true"></span>
                            <span className="cs-line cs-line3" aria-hidden="true"></span>
                        </div>
                    </button>
                    {/* We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are*/}
                    <div className="cs-ul-wrapper">
                        <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                            <li className="cs-li">
                                <Link href="/" className="cs-li-link cs-active">
                                    Home
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link href="/why-choose-us" className="cs-li-link">
                                    Why Choose Us
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link href="/blog/" className="cs-li-link">
                                    Blog
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link href="exam" className="cs-li-link">
                                    The Exam
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Link id='navContactUs' href="/#contact-1388" className="cs-button-solid cs-nav-button">Contact Us</Link>
                {/*Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle*/}
                {/* <button id="dark-mode-toggle" aria-label="dark mode toggle">
                    <svg className="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z" /></svg>
                    <img className="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15">
                </button> */}
            </div>
        </header>
    )
}