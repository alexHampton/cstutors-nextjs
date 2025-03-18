import './pricing.css';
export default function Pricing() {
    const flexPassPrice = 70;
    const monthlyPassPrice = 60;
    const semesterPassPrice = 50;

    return(
        <section id="pricing-1790">
            <div className="cs-container">
                <div className="cs-content">
                    <div className="cs-flex">
                        <span className="cs-topper">Pricing</span>
                        <h2 className="cs-title">Choose Pricing Plans</h2>
                    </div>
                </div>
                <div className="cs-wrapper">
                    <ul className="cs-card-group">
                        <li className="cs-item">
                            <span className="cs-package">Flex Pass</span>
                            <div className="cs-flex-wrapper">
                                <span id="flexPassPrice" className="cs-price">${flexPassPrice}</span>
                                <span className="cs-frequency">
                                    /Session
                                </span>
                            </div>
                            <p className="cs-item-text">
                                No commitment, just sign up whenever you have time.
                            </p>
                            <a id="flexPassBtn" href="#contact-1388" className="cs-button-solid cs-price-button">Contact Us</a>
                        </li>
                        <li className="cs-item cs-popular">
                            <span className="cs-package">Monthly Pass</span>
                            <div className="cs-flex-wrapper">
                                <span id="monthlyPassPrice" className="cs-price">${monthlyPassPrice}</span>
                                <span className="cs-frequency">
                                    /Session
                                </span>
                            </div>
                            <p className="cs-item-text">
                                Prepay for 4  1-hour sessions ahead of time and get a $10 discount per session.
                            </p>
                            <a id="monthlyPassBtn" href="#contact-1388" className="cs-button-solid cs-price-button">Contact Us</a>
                        </li>
                        <li className="cs-item">
                            <span className="cs-package">Semester Pass</span>
                            <div className="cs-flex-wrapper">
                                <span id="semesterPassPrice" className="cs-price">${semesterPassPrice}</span>
                                <span className="cs-frequency">
                                    /Session
                                </span>
                            </div>
                            <p className="cs-item-text">
                                Prepay for 16 sessions and get $20 discount per session as compared to the Flex Pass
                            </p>
                            <a id="semesterPassBtn" href="#contact-1388" className="cs-button-solid cs-price-button">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- SVG Graphic --> */}
            <img className="cs-graphic cs-light"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-texture.svg" alt="graphic"
                height="1920" width="483" loading="lazy" decoding="async" aria-hidden="true"/>
                {/* <!--Dark mode graphic, download and save locally, then open the file in your code editor and change the fill color to match the background color of the section below it on dark mode--> */}
                <img className="cs-graphic cs-dark" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/dark-spatter.svg"
                    alt="graphic" height="1920" width="483" loading="lazy" decoding="async" aria-hidden="true"/>
        </section>
    );
}