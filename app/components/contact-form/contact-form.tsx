
import './contact-form.css';

type Props = {
    contactMessage: string,
    setContactMessage: CallableFunction
}

export default function ContactForm({ contactMessage, setContactMessage }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactMessage(e.target.value);
    }

    return(
        <form action='/thank-you' className="cs-form" id="cs-form-1388" name="Contact Form" method="post" netlify-honeypot="bot-field" data-netlify='true'>
            <h3 className="cs-h3">Send us a message</h3>
            <label className="cs-label">
                Name
                <input className="cs-input" required type="text" id="name-1388" name="name" placeholder="Name" />
            </label>
            <label className="cs-label cs-email">
                Email
                <input className="cs-input" required type="email" id="email-1388" name="email" placeholder="Email" />
            </label>
            <label className="cs-label cs-phone">
                Phone
                <input className="cs-input" required type="tel" id="phone-1388" name="phone" placeholder="Phone" />
            </label>
            <label className="cs-label">
                Message
                <textarea className="cs-input cs-textarea" required name="Message" id="message-1388"
                    placeholder="Write message..." value={contactMessage} onChange={handleChange}></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">Send Message</button>
            <label style={{'display': 'none'}} htmlFor="bot-field">Bot-name: <input name="bot-field" type="text" /></label>
        </form>
    );
}