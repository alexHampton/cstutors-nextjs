import './footer.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return(
        <footer id="footer-1390">
            <div className="cs-container">
                <div className="cs-top">
                    <Link aria-label="go back to home" className="cs-logo" href="/">
                    <Image
                                            src="/images/cst-logo-light.svg"
                                            alt='logo for computer science tutors'
                                            width={210}
                                            height={29}/>
                        {/* <img className="cs-logo-img" loading="lazy" decoding="async"
                            src="images/cst-logo-light.svg" alt="logo" width="209"
                            height="40" /> */}
                    </Link>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <Link href="/" className="cs-link">Home</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="why-choose-us" className="cs-link">Why Choose Us</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/blog" className="cs-link">Blog</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="exam" className="cs-link">The Exam</Link>
                        </li>
                    </ul>
                </div>
                <div className="cs-bottom">

                    <span className="cs-copyright">
                        © Copyright {new Date().getFullYear()} - Computer Science Tutors, LLC
                    </span>
                    {/* <!-- <div className="cs-flex">
                        <a href="" className="cs-copyright-link">Privacy Policy</a>
                        <span className="cs-separater">|</span>
                        <a href="" className="cs-copyright-link">Terms of Use</a>
                    </div> --> */}
                </div>
            </div>
        </footer>

    );
}