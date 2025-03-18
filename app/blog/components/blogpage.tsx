import { JSX, ReactNode } from 'react';
import './blogpage.css';
import Banner from './banner';

export default function BlogPage({image, title, date, children}: {image: string, title: string, date: string, children: ReactNode}) {
    return (
        <>
            <Banner image={image} />

            <section id="content-page-849">
                <div className="cs-container">
                    <div className="cs-content">
                        <h1 className="cs-title">{title}</h1>
                        <h4>{date}</h4>
                        {children}
                    </div>

                </div>
            </section>
        </>
    );
}