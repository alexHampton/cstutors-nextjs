import PriceCard from '../price-card/price-card';
import './pricing.css';
import Image from 'next/image';

export default function Pricing({ setContactMessage }: { setContactMessage: CallableFunction}) {
    const flexPassPrice = 70;
    const monthlyPassPrice = 60;
    const semesterPassPrice = 50;

    const pricingPlans = [
        {
            id: 0,
            passType: 'Flex Pass',
            description: 'No commitment, just sign up whenever you have time.',
            price: flexPassPrice,
            isFocus: false
        },
        {
            id: 1,
            passType: 'Monthly Pass',
            description: 'Prepay for 4 1-hour sessions ahead of time and get a $10 discount per session.',
            price: monthlyPassPrice,
            isFocus: true
        },
        {
            id: 2,
            passType: 'Semester Pass',
            description: 'Prepay for 16 sessions and get $20 discount per session as compared to the Flex Pass.',
            price: semesterPassPrice,
            isFocus: false
        }
    ];

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

                        {pricingPlans.map((plan) => (
                            <PriceCard
                                key={plan.id}
                                passType={plan.passType}
                                description={plan.description}
                                price={plan.price}
                                setContactMessage={setContactMessage}
                                isFocus={plan.isFocus}
                            />
                        ))}

                    </ul>
                </div>
            </div>
            {/* <!-- SVG Graphic --> */}
            <Image className="cs-graphic cs-light"
                src="/white-texture.svg" alt="graphic"
                height={1920} width={483} loading="lazy" decoding="async" aria-hidden="true"/>
                {/* <!--Dark mode graphic, download and save locally, then open the file in your code editor and change the fill color to match the background color of the section below it on dark mode--> */}
                <Image className="cs-graphic cs-dark" src="/dark-spatter.svg"
                    alt="graphic" height={1920} width={483} loading="lazy" decoding="async" aria-hidden="true"/>
        </section>
    );
}