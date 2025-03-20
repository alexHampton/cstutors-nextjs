'use client'

import { useRouter } from "next/navigation";
import ContactForm from "../contact-form/contact-form";

export default function Modal() {
    const router = useRouter()
    const dummyMethod = () => {
        return false;
    }

    return (
        <div id='contact-modal' className="fixed inset-0 bg-gray-600 bg-opacity-50  h-full w-full flex items-center justify-center">
            <div className="border w-100 shadow-lg rounded-md bg-white">

                <ContactForm contactMessage="" setContactMessage={dummyMethod} />

                <div className="text-center">
                    <div className="flex justify-center mt-4">

                        {/* Using useRouter to dismiss modal*/}
                        <button
                            onClick={router.back}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}