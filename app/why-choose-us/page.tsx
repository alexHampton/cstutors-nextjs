import './why-choose-us.css';

export default function Page() {
    return(
        <section id="why-choose-1662">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Why Choose Us</span>
                    <h2 className="cs-title">Get The Help You Need</h2>
                    <p>Are you looking for an AP Computer Science A Tutor, but you're not sure which to choose? Here's what sets us apart
                        from the rest. </p>

                </div>
                <div className="cs-wrapper">
                    <ul className="cs-card-group">
                        <li className="cs-item">
                            <span className="cs-item-number">01</span>
                            <div className="cs-item-wrapper">
                                <h3 className="cs-h3">
                                    We specialize in AP Computer Science A
                                </h3>
                                <p className="cs-item-text">
                                    When looking for tutors, most sites will have tutors who are great at computer programming,
                                    but they lack the knowledge of the AP course structure.
                                    So some of their guidance can be detrimental when studying for the exam.
                                    When choosing the right tutor, you want to ensure they understand all of your needs for the course.
                                </p>
                            </div>
                        </li>
                        <li className="cs-item">
                            <span className="cs-item-number">02</span>
                            <div className="cs-item-wrapper">
                                <h3 className="cs-h3">
                                    We provide pair programming
                                </h3>
                                <p className="cs-item-text">
                                    When you sign up with Computer Science Tutors, we provide you with access to an online code editor that
                                    allows you to code along with the tutor in real time.
                                    Since it's all online, there is no hassle with getting things set up on your computer.
                                    Just create an account and you are ready to start coding!
                                    The code editor allows for file structure, so you can create your own Java classes.
                                    It also provides debugging tools so you can practice tracing your code and see variable values as your
                                    code is running!
                                </p>
                            </div>
                        </li>
                        <li className="cs-item">
                            <span className="cs-item-number">03</span>
                            <div className="cs-item-wrapper">
                                <h3 className="cs-h3">
                                    Try us risk-free
                                </h3>
                                <p className="cs-item-text">
                                    Since the first lesson is free, you can try us out before making a commitment. No credit card needed.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className="cs-card-group">
                        <li className="cs-item">
                            <span className="cs-item-number">04</span>
                            <div className="cs-item-wrapper">
                                <h3 className="cs-h3">
                                    We tailor our plans to each student
                                </h3>
                                <ul className="cs-item-text">
                                    <li>
                                        <h3>Homework help</h3>
                                        <p>We review homework prior to lessons so we know how to help ahead of time.</p>
                                    </li>
                                    <li>
                                        <h3>Multiple Choice Questions (MCQs)</h3>
                                        <p>We provide practice problems so you can feel confident about this part of the exam.</p>
                                    </li>
                                    <li>
                                        <h3>Free Response Questions (FRQs)</h3>
                                        <p>The FRQs can be very scary if you're not prepared. We start small with practice challenges, and work our way
                                            up to full-sized FRQs.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="cs-item">
                            <span className="cs-item-number">05</span>
                            <div className="cs-item-wrapper">
                                <h3 className="cs-h3">
                                    Our tutors are professional software developers.
                                </h3>
                                <p className="cs-item-text">
                                    With professional experience, we can handle even the tougher questions. We understand programming at a deeper level. We can also provide unique insight into software development.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <!---SVG Graphic--> */}
                <img className="cs-floater" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/diagnol-ovals.svg"
                    alt="graphic" loading="lazy" decoding="async" height="710" aria-hidden="true" width="690"/>
            </div>
        </section>
    );
}