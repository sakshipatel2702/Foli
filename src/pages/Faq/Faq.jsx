import React, { useState } from "react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: "How do I know the status of my order? ",
            answer: "Once your order is placed online we receive it in our queue. From there we pick, pack and ship your plant beauty so it can get to you as quickly as possible! You will be provided with tracking information and a link to our shipping carrier site that will allow you to receive text or email updates on the journey of your plant. If you need any further assistance regarding your order please reach out to info@foli.ca with your order number in the subject line.      ",
        },
        {
            question: "Can I change my shipping address?",
            answer: "Please email us at info@foli.ca as soon as possible with your request for a shipping address change. We try our best to get orders out the door quickly, so the sooner you can let us know, the better!",
        },
        {
            question: " Do you offer same day delivery? ",
            answer: "We don't offer same day delivery, however our shipping timelines are pretty quick as we use express service which works out to about 2-9 days from placing your order to receiving your plant. We do offer pick up from our facility in Burlington, Ontario.",
        },
        {
            question: "Can I change or cancel my order? ",
            answer: "Please email us at info@foli.ca as soon as possible with your change or cancellation. We will do everything we can do update your request. Since we are busy packing plants please allow for 48 hours in response time.",
        },
        {
            question: " What are your shipping rates? ",
            answer: "Our shipping rates are calculated based on postal code location and dimensional weight of your items. Our rates are pulled live from our shipping partner FedEx.            ",
        },
    ];

    return (
        <div className="faq-page">
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Frequently Asked Questions</h1>
            <br></br>
            <br></br>
            <div className="faq-list" style={{ marginBottom: "20px", marginLeft: 300, marginRight: 300 }}>
                {faqData.map((faq, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                    >
                        <br></br>
                        <br></br>
                        <div
                            className="question"
                            onClick={() => toggleQuestion(index)}
                            style={{ cursor: "pointer" }}
                        >
                            {faq.question}
                            <span className="arrow">
                                {activeIndex === index ? "▲" : "▼"}
                            </span>
                        </div>
                        {activeIndex === index && <div className="answer">{faq.answer}</div>}
                        <br></br>
                        <br></br>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Faq;
