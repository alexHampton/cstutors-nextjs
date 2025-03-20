'use client';
import ContactForm from '../contact-form/contact-form';
import './contact.css';

type Props = {
    contactMessage: string,
    setContactMessage: CallableFunction
}

export default function Contact({contactMessage, setContactMessage} : Props) {

    return(
        <section id="contact-1388">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Contact Us</span>
                    <h2 className="cs-title">Get in Touch</h2>
                    <p className="cs-text">
                        Whether you are ready to start your first session, or you just want to learn more about us, please fill out this form and we will get back to you shortly.
                    </p>
                    <ul className="cs-ul">
                        {/* <!-- <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg"
                                    alt="phone icon" className="cs-icon" width="40" height="40" decoding="async">
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Phone</span>
                                <a href="tel:442-353-3759
                        " className="cs-link">+1 (442) 353-3759
                                </a>
                            </div>
                        </li> --> */}
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                                    alt="address icon" className="cs-icon" width="40" height="40" decoding="async" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Email</span>
                                <a href="mailto:info@computersciencetutors.com" className="cs-link">info@computersciencetutors.com</a>
                            </div>
                        </li>
                        {/* <!-- <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-76.svg"
                                    alt="address icon" className="cs-icon" width="40" height="40" decoding="async">
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Address</span>
                                <a href="" className="cs-link">We are based out of the US.</a>
                            </div>
                        </li> --> */}
                    </ul>
                </div>

                <ContactForm contactMessage={contactMessage} setContactMessage={setContactMessage} />
            </div>
        </section>
    );
}