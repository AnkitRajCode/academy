const FAQ = () => {
    return ( 
        <div className="faq">
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-list">
                        <ul>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed"> What courses are provided here?  <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-2" className="collapse show" data-bs-parent=".faq-list">
                                    <p>
                                    We understand the value of authenticity and knowledge, which is why we have selected only the finest for you. To keep the sessions engaging, we make sure that our mentors are extremely skilled and have excellent interpersonal skill sets. The courses provided are C and C++, SOL, HTML and CSS, DATA SCIENCE, and more.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1"> What are some suggestions for future developers? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    <b>Maintain constant awareness of the most recent web technology.</b> Languages and frameworks are always evolving, as are the most recent design trends.
                                    <br/><br/><b>Benefit from professionals who have a lot of web development expertise.</b> These more skilled web developers can assist you navigate the web development world–not only can they provide insights that only people with a lot of expertise would know, but they can also give you a stronger sense of what's to come.
                                    <br/><br/><b>Comment your code.</b> This is especially crucial for rookie web developers who are still getting the hang. Commenting code guarantees that your code is understood by the whole team. But don't overdo it: too much comments makes the code more jumbled. If the code is modified, the comments must be upgraded as well.
                                    <br/><br/><b>Build things.</b> Nobody can teach you the skills you'll learn by creating (and breaking) your personal site. Now is the moment to begin constructing components for your portfolio. Download a project, then disassemble and reassemble it in your own style. Examine the source code.
                                </p>
                            </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-3">What facilities does LTC Academy provide? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                As we focus on the overall development of our members, we partake in collaborative education, development, and growth.
                                </p>
                                <p>
                                    <div><b>&#x22C4;</b>Live Online Classes at the Best Prices</div>
                                    <div><b>&#x22C4;</b>Offering Free Handwritten Notes</div>
                                    <div><b>&#x22C4;</b>Separated Classes for Clearing Doubts </div>
                                    <div><b>&#x22C4;</b>Every week, regular assessments are carried out</div>
                                    <div><b>&#x22C4;</b>Every two weeks, there is a free bootcamp</div>
                                    <div><b>&#x22C4;</b>Guaranteed mock interviews for B. Tech final year students</div>
                                    <div><b>&#x22C4;</b>A mentor for the duration of the course</div>
                                    <div><b>&#x22C4;</b>College Recommendations for 12th graders and dropouts</div>
                                </p>
                            </div>
                            </li>
                           
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}
 
export default FAQ;