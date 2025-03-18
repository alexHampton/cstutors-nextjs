import './exam.css';

export default function Exam() {
    return(

        <section id="faq-1720">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Faq</span>
                    <h2 className="cs-title">Questions About the Exam</h2>
                </div>
                <div className="cs-flex-group">
                    <div className="cs-button-group">
                        {/* <!--If you need to add another button, make sure to copy and paste from one of the buttons here and increment the data-filter value, so the next one would be data-filter="four", and so on--> */}
                        <div className="cs-flex">
                            <h3>If you have a question but do not see it listed here, please contact us and we will be happy to help you.</h3>
                            <a href="index.html#contact-1388" className="cs-button-solid">Contact Us</a>
                        </div>
                        <picture className="cs-picture">
                            {/* <!--Mobile Image--> */}
                            {/* <source media="(max-width: 600px)"
                                srcset="images/exam.jpg">
                                <!--Tablet and above Image-->
                                <source media="(min-width: 601px)"
                                    srcset="images/exam.jpg"> */}
                                    <img loading="lazy" decoding="async"
                                        src="images/exam.jpg" alt="people"
                                        width="353" height="493" />

                                        
                                    </picture>
                                </div>
                                {/* <!--We need this wrapper so the absolutely positioned FAQ lists can be positioned to the top of it to so the animations don't amke it overlap the buttons group above it. We needed a wrapper div around it for the faq lists to be relatively positioned to in order to get the effect we wanted--> */}
                                <div className="cs-wrapper">
                                    {/* <!--If you add more FAQ's, copy and paste of of the .cs-faq-grop lists and increment the data-category to the next number. We have three right now, if you added a fourth you'd change it to data-category="four" to correspond to the new button you created in the .cs-button-group. The filter and category data attributes need to match so they can work together--> */}
                                    <ul className="cs-faq-group" data-category="one">
                                        {/* <!-- Active class added as default --> */}
                                        <li className="cs-faq-item">
                                            <button className="cs-button">
                                                <span className="cs-button-text">
                                                    Why take the AP Computer Science A exam?
                                                </span>
                                            </button>
                                            <p className="cs-item-p">
                                                A high score on the exam may count as credit for a college course. The score you need, and the course credit it provides
                                                depends on the college.
                                                See the list of colleges that provide credit on <a target="_blank" href="https://apstudents.collegeboard.org/getting-credit-placement/search-policies/course/8">the college board site</a>.
                                            </p>
                                        </li>
                                        <li className="cs-faq-item">
                                            <button className="cs-button">
                                                <span className="cs-button-text">
                                                    How is the exam scored?
                                                </span>
                                            </button>
                                            <p className="cs-item-p">
                                                You can receive a score of 1 to 5, with 5 being the highest. You will need at least a 3 to earn college credit, but you
                                                may need to earn a 4 or a 5 depending on the college.
                                            </p>
                                        </li>
                                        <li className="cs-faq-item">
                                            <button className="cs-button">
                                                <span className="cs-button-text">
                                                    What percentage is needed to get a specific score?
                                                </span>
                                            </button>
                                            <div className="cs-item-p">
                                                <p>The actual percentage can vary from year to year, but it should be something along these lines:</p>


                                                {/* <!-- ============================================ -->
                                                <!--                    Table                     -->
                                                <!-- ============================================ --> */}

                                                <section id="table-1669">
                                                    <div className="cs-container">
                                                        <table className="cs-table">
                                                            <thead>
                                                                <tr className="cs-color">
                                                                    <th className="cs-th">AP Score</th>
                                                                    <th className="cs-th">Percentage</th>
                                                                    <th className="cs-th">Calculated Score (80 possible)</th>
                                                                    <th className="cs-th">Meaning</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="cs-tr">
                                                                    <td className="cs-td">5</td>
                                                                    <td className="cs-td">78% and up</td>
                                                                    <td className="cs-td">62 - 80</td>
                                                                    <td className="cs-td">Extremely Well Qualified</td>
                                                                </tr>
                                                                <tr className="cs-tr">
                                                                    <td className="cs-td">4</td>
                                                                    <td className="cs-td">~55% to 78%</td>
                                                                    <td className="cs-td">44 - 61</td>
                                                                    <td className="cs-td">Well Qualified</td>
                                                                </tr>
                                                                <tr className="cs-tr">
                                                                    <td className="cs-td">3</td>
                                                                    <td className="cs-td">~38% to 55%</td>
                                                                    <td className="cs-td">31 - 43</td>
                                                                    <td className="cs-td">Qualified</td>
                                                                </tr>
                                                                <tr className="cs-tr">
                                                                    <td className="cs-td">2</td>
                                                                    <td className="cs-td">~32% to 38%</td>
                                                                    <td className="cs-td">25 - 30</td>
                                                                    <td className="cs-td">Possibly Qualified</td>
                                                                </tr>
                                                                <tr className="cs-tr">
                                                                    <td className="cs-td">1</td>
                                                                    <td className="cs-td">~32% and below</td>
                                                                    <td className="cs-td">0 - 24</td>
                                                                    <td className="cs-td">No Recommendation</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </section>

                                            </div>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How is the exam scored?
                                            </span>
                                        </button>
                                        <div className="cs-item-p">
                                            <p>There are 2 sections to the exam: The Multiple Choice section and the Free Response Section. Each section is worth 40 points, for a total of 80 points possible.</p>

                                            {/* <!-- ============================================ -->
                                            <!--                    Table                     -->
                                            <!-- ============================================ --> */}

                                            <section id="table-1669">
                                                <div className="cs-container">
                                                    <table className="cs-table">
                                                        <thead>
                                                            <tr className="cs-tr">
                                                                <th className="cs-th">Section</th>
                                                                <th className="cs-th">Total Questions</th>
                                                                <th className="cs-th">Time</th>
                                                                <th className="cs-th">How to calculate score</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="cs-tr">
                                                                <td className="cs-td">Multiple Choice</td>
                                                                <td className="cs-td">40 questions</td>
                                                                <td className="cs-td">90 minutes</td>
                                                                <td className="cs-td">1 point per question for a total out of 40.</td>
                                                            </tr>
                                                            <tr className="cs-tr">
                                                                <td className="cs-td">Free Response Questions (FRQs)</td>
                                                                <td className="cs-td">4 questions</td>
                                                                <td className="cs-td">90 minutes</td>
                                                                <td className="cs-td">9 points per question. Multiply points by 1.111 to get a total out of 40. </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                        </div>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What topics are covered on the Multiple Choice section of the exam?</span>
                                        </button>
                                        <div className="cs-item-p">
                                            <p>The exam uses Java and the topics covered are as follows:</p>
                                            <ul>
                                                <li>Primitive Types</li>
                                                <li>Using Objects</li>
                                                <li>Boolean Expressions and if statements</li>
                                                <li>Iteration (loops)</li>
                                                <li>Writing Classes</li>
                                                <li>Arrays</li>
                                                <li>ArrayList</li>
                                                <li>2D Arrays</li>
                                                <li>Inheritance</li>
                                                <li>Recursion</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What topics are covered on the FRQ section of the exam?</span>
                                        </button>
                                        <div className="cs-item-p">
                                            <p>Each question of the FRQ section has one major focus:</p>
                                            <ol>
                                                <li>You will need to write and use methods. You will need to know how to use if statements and loops.</li>
                                                <li>You will need to implement a class.</li>
                                                <li>You will use arrays or ArrayLists. You should know the differences between arrays and ArrayLists.</li>
                                                <li>You will use 2D arrays.</li>
                                            </ol>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="cs-faq-group cs-hidden" data-category="two">
                                    {/* <!-- Active class added as default --> */}
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the best way to start investing?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What are the tax implications of investing in the stock market?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the difference between a traditional IRA and a Roth IRA?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="cs-faq-group cs-hidden" data-category="three">
                                    {/* <!-- Active class added as default --> */}
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the best way to start investing?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What are the tax implications of investing in the stock market?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the difference between a traditional IRA and a Roth IRA?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="cs-faq-group cs-hidden" data-category="four">
                                    {/* <!-- Active class added as default --> */}
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the best way to start investing?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What are the tax implications of investing in the stock market?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the difference between a traditional IRA and a Roth IRA?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="cs-faq-group cs-hidden" data-category="five">
                                    {/* <!-- Active class added as default --> */}
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the best way to start investing?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides
                                            legal services such as giving legal advice, writing legal documents and providing policy
                                            counsel to governments. An attorney, on top of these things also holds a state or regional
                                            license to represent clients in a law court.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What are the tax implications of investing in the stock market?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I improve my credit score?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                What is the difference between a traditional IRA and a Roth IRA?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                    <li className="cs-faq-item">
                                        <button className="cs-button">
                                            <span className="cs-button-text">
                                                How can I reduce my tax liability as a self-employed individual?
                                            </span>
                                        </button>
                                        <p className="cs-item-p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum
                                            pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim
                                            ipsum porta enim, magna urna, quam.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
        </section>
    );
}