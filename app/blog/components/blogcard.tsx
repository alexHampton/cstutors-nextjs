import Link from "next/link";
import Image from "next/image";

type Props = { 
    title: string, 
    date: string, 
    image: string, 
    href: string
};

export default function BlogCard({ title, date, image, href }: Props) {
    return(
        <li className="cs-item">
            <Link className="cs-link" href={href} title={title}>
                <picture className="cs-picture">
                    {/* <source media="(max-width: 600px)"
                                    srcset="./images/blog/blog1-m.webp">
                                    <source media="(min-width: 601px)"
                                        srcset="./images/blog/blog1-m.webp"> */}
                    <Image
                        src={`/images/blog/${image}`}
                        alt="computer" width={413} height={374} aria-hidden="true" />
                </picture>
                <div className="cs-item-text">
                    <h3 className="cs-h3">
                        {title}
                        <picture className="cs-icon-wrapper">
                            <Image className="cs-icon" decoding="async"
                                src="/agency-arrow-upper-right.svg"
                                alt="arrow" width={413} height={374} aria-hidden="true" />
                        </picture>
                    </h3>
                    <div className="cs-info">
                        <span className="cs-date">
                            <Image className="cs-date-icon" decoding="async"
                                src="./images/calendar-days-solid.svg"
                                alt="calendar" width={413} height={374} aria-hidden="true" />
                            {date}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}