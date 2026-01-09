import { useState } from "react";
import PlusIcon from "../../assets/plus.png";
import MinusIcon from "../../assets/minus.png";

function FAQItem() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does Solverous help businesses grow?",
            answer:
                "We help businesses scale through digital transformation, automation, cloud solutions, and data-driven systems that improve efficiency and customer engagement.",
        },
        {
            question: "What services does Solverous provide?",
            answer:
                "Solverous offers custom software development, web and application development, AI-powered and smart systems, and end-to-end project solutions.",
        },
        {
            question: "Does Solverous work with both startups and established brands?",
            answer:
                "Yes, Solverous works with startups, growing businesses, and established brands, delivering solutions tailored to their specific goals and scale.",
        },
        {
            question: "How does Solverous incorporate AI into its projects?",
            answer:
                "We integrate AI features such as automation, chatbots, and data-driven tools to improve efficiency, user experience, and decision-making.",
        },
        {
            question: "How do I begin working with Solverous?",
            answer:
                "Simply contact us through our website to discuss your idea, and our team will guide you through the next steps.",
        },
    ];

    return (
        <div className=" flex flex-col space-y-6 ">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`h-fit rounded-2xl w-full max-w-5xl transition-all duration-300
              ${isOpen ? "bg-white p-6 md:p-8" : "bg-transparent p-0"}
            `}
                    >
                        <div className="flex justify-between items-center">
                            <h5
                                className={`h5_title transition-colors duration-300 w-[87%]
                  ${isOpen ? "text-[#004D8C]" : "text-white"}
                `}
                            >
                                {faq.question}
                            </h5>

                            <button
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                            >
                                <img
                                    src={isOpen ? MinusIcon : PlusIcon}
                                    alt={isOpen ? "Minimize" : "Expand"}
                                    className="w-6 h-6 md:w-5 md:h-5"
                                />
                            </button>
                        </div>

                        <div
                            className={` w-full md:w-[90%] overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}
              `}
                        >
                            <p className="p_white_bg">{faq.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default FAQItem;
