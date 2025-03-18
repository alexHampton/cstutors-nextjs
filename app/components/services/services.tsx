import './services.css';

export default function Services() {
    return(
        <section id="h-services-143">
            <ul className="cs-card-group">
                <li className="cs-item">
                    <picture className="cs-icon">

                        <img loading="lazy" decoding="async" src="images/people.svg"
                            alt="icon" width="52" height="52" aria-hidden="true" />
                    </picture>
                    <h2 className="cs-title">Pair programming</h2>
                    <p className="cs-text">
                        Hands on coding in real time with your tutor so you can feel confident in your understanding of Java.
                    </p>
                </li>
                <li className="cs-item">
                    <picture className="cs-icon">
                        <img loading="lazy" decoding="async" src="images/list.svg"
                            alt="icon" width="52" height="52" aria-hidden="true" />
                    </picture>
                    <h2 className="cs-title">Multiple Choice practice</h2>
                    <p className="cs-text">
                        We provide questions similiar to actual questions you may see on the exam.
                    </p>
                </li>
                <li className="cs-item">
                    <picture className="cs-icon">
                        <img loading="lazy" decoding="async" src="images/code.svg"
                            alt="icon" width="52" height="52" aria-hidden="true" />
                    </picture>
                    <h2 className="cs-title">Free Response practice</h2>
                    <p className="cs-text">
                        We will challenge and guide you with questions that will prepare you for the FRQ section of the exam.
                    </p>
                </li>
                <li className="cs-item">
                    <picture className="cs-icon">
                        <img loading="lazy" decoding="async" src="images/dollar.svg"
                            alt="icon" width="52" height="52" aria-hidden="true" />
                    </picture>
                    <h2 className="cs-title">First lesson free!</h2>
                    <p className="cs-text">
                        Not sure if we are a good fit for you? Try a 1-hour session at no cost!
                    </p>
                </li>
            </ul>
        </section>
    );
}