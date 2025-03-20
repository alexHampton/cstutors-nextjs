import './banner.css';

type Props = {
    image: string
}

export default function Banner({image}: Props) {
    return(
        < div id = "banner-849" >
            <div className="cs-container">
                <span className="cs-int-title">Blog</span>
            </div>
            {/* <!--Background Image--> */ }
            <picture className="cs-background" aria-hidden="true">
                {/* <!--Mobile Image--> */}
                {/* <source media="(max-width: 600px)"
                                srcset="../images/blog/blog1-m.webp">
                                <!--Tablet and above Image-->
                                <source media="(min-width: 601px)"
                                    srcset="../images/blog/blog1.webp"> */}
                <img loading="lazy" decoding="async" src={`../images/blog/${image}`}
                    alt="typing on a computer" width="1280" height="568" />
            </picture>
            {/* <!--Change the svg path fill color to whatever color the section below is so you can match it and create the illusion it is all one piece--> */ }
            <svg className="cs-wave" width="1920" height="179" viewBox="0 0 1920 179"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z"
                    fill="white" />
            </svg>
        </div >
    );
}