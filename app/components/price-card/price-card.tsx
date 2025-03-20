import Link from "next/link";
type Props = {
    passType: string,
    description: string,
    price: number,
    setContactMessage: CallableFunction,
    isFocus: boolean
}

export default function PriceCard({passType, description, price, setContactMessage, isFocus}: Props) {
    return(
        <li className={isFocus ? "cs-item cs-popular" : "cs-item"}>
            <span className="cs-package">{passType}</span>
            <div className="cs-flex-wrapper">
                <span id="flexPassPrice" className="cs-price">${price}</span>
                <span className="cs-frequency">
                    /Session
                </span>
            </div>
            <p className="cs-item-text">
                {/* No commitment, just sign up whenever you have time. */}
                {description}
            </p>
            <Link id="flexPassBtn" onClick={() => setContactMessage(`I am interested in the ${passType} at \$${price} per session.`)} href="/#contact-1388" className="cs-button-solid cs-price-button">Contact Us</Link>
        </li>
    );
}