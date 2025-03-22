import './contact-form.css';
import { useState } from 'react';

type Props = {
    contactMessage: string,
    setContactMessage: CallableFunction
}

export default function ContactForm({ contactMessage, setContactMessage }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactMessage(e.target.value);
    }
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const params = new URLSearchParams();
            for (const [key, value] of (formData as FormData).entries()) {
                params.append(key, value as string);
            }

            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };


    // const handleFormSubmit02 = async (event: React.ChangeEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     await fetch("/__forms.html", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString(),
    //     });

    return(
        <form name='contact' onSubmit={handleFormSubmit} action='/thank-you' className="cs-form" id="cs-form-1388" method="post" >
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


            {status === 'ok' && (
                <div className="alert alert-success">
                    <SuccessIcon />
                    Submitted!
                </div>
            )}
            {status === 'error' && (
                <div className="alert alert-error">
                    <ErrorIcon />
                    {error}
                </div>
            )}
        </form>
    );
}


function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}