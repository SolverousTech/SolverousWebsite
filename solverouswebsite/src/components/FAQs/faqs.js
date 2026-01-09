import { useState } from "react";
import PlusIcon from "../../assets/plus.png";
import MinusIcon from "../../assets/minus.png";

function FAQItem() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`h-fit p-8 rounded-2xl w-full max-w-5xl transition-all duration-300
            ${isOpen ? "bg-white" : "bg-transparent"}`}
        >
            <div className="flex justify-between items-center">
                <h5 className={`h5_title ${isOpen ? "text-[#004D8C]" : "text-white" }`}>
                    What services does Solverous provide?
                </h5>

                <button onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src={isOpen ? MinusIcon : PlusIcon}
                        alt={isOpen ? "Minimize" : "Expand"}
                        className="w-6 h-6 md:w-5 md:h-5"
                    />
                </button>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="p_white_bg">
                    Solverous offers custom software development, web and application
                    development, AI-powered and smart systems, and end-to-end project
                    solutions. We design, build, and deploy secure, scalable technology
                    tailored to your goals and needs.
                </p>
            </div>
        </div>
    );
}

export default FAQItem;
