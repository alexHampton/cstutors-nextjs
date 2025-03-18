import './hero.css';

export default function Hero() {
    return(
        <section id="hero-143">
            <div className="cs-container">
                <h1 className="cs-title">Master AP Computer Science A with Expert Java Tutoring</h1>
                <p className="cs-text">
                    Our tutors are Computer Science professionals and are well-versed in the exam.
                </p>
                <p className="cs-text">With a range of experiences, we can help with all sorts of computer science topics. Not sure if we're right for you? Contact us now, and we can discuss your goals to determine if we are a good fit!</p>
                <a id="freeSessionBtn" href="#contact-1388" className="cs-button-solid">Sign up for a free first session!</a>
            </div>

            {/*Background Image*/}
            <picture className="cs-background">
                {/*<!-- <source media="(max-width: 600px)" srcset="https://csimg.nyc3.digitaloceanspaces.com/Hero/kitchen-m.jpg">
                    <source media="(min-width: 601px)" srcset="https://csimg.nyc3.digitaloceanspaces.com/Hero/kitchen.jpg">
                        <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Hero/kitchen.jpg"
                            alt="kitchen" width="2250" height="1500" aria-hidden="true"> */}
            </picture>
        </section>
    );
}