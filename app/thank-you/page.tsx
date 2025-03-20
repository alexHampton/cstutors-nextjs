import './thank-you.css';
import Link from 'next/link';

export default function ThankYou() {
    return(
        <div className="main">
            <div className="card">
                <h1>Thank you!</h1>
                <p>We have received your info and will get back to you shortly.</p>
                <p>
                    <Link href="/" className='flex flex-row items-center '>
                        <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1 6 16">
                            <path id="back-icon"
                                d="M11.9998836,4.09370803 L8.55809517,7.43294953 C8.23531459,7.74611298 8.23531459,8.25388736 8.55809517,8.56693769 L12,11.9062921 L9.84187871,14 L4.24208544,8.56693751 C3.91930485,8.25388719 3.91930485,7.74611281 4.24208544,7.43294936 L9.84199531,2 L11.9998836,4.09370803 Z">
                            </path>
                        </svg>
                        Back to Computer Science Tutors
                    </Link>
                </p>
            </div>
        </div>
    );
}