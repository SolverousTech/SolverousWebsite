import { useRef, useState, useEffect } from "react";
import Websites from "../../assets/modern_website.webp";
import Cloud from "../../assets/cloud.webp";
import AIautomation from "../../assets/ai_automation.webp";
import Marketing from "../../assets/marketing.webp";
import arrowBack from "../../assets/arrow_back.png"
import arrowForward from "../../assets/arrow_forward.png"

function Services() {
    const listRef = useRef(null);
    // ADDED: State to track if arrows should be shown
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // ADDED: Function to check scroll position and update arrow visibility
    const checkScroll = () => {
        if (!listRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = listRef.current;

        // Show left arrow if not at the start
        setShowLeftArrow(scrollLeft > 0);

        // Show right arrow if not at the end
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // ADDED: Check scroll position on mount and resize
    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (!listRef.current) return;

        const scrollAmount = listRef.current.offsetWidth * 0.8;

        listRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">

            {/* LEFT ARROW - CHANGED: Added conditional rendering */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-8 md:left-[6rem] top-1/2 -translate-y-1/2 z-10
                       bg-[#007EE6]/50 text-white shadow-lg rounded-full pl-[1rem] md:pl-[1.4rem] pr-[0.4rem] md:pr-[0.8rem] py-[0.7rem] md:py-[1rem] hover:scale-110 transition active:scale-100"
                >
                    <img src={arrowBack} alt="Arrow Back" />
                </button>
            )}

            {/* SERVICES LIST - ADDED: onScroll event to track scrolling */}
            <div className="px-2">
                <ul
                    ref={listRef}
                    onScroll={checkScroll}
                    className="body_margin flex flex-row gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide"
                >
                    {/* SERVICE 1 */}
                    <li className="services">
                        <div className="w-fit flex justify-center scale_animation">
                            <img src={Websites} alt="Modern Website Development" className="w-[90%] md:w-[90%]" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5_title text-left text-[#004D8C]">
                                01 Modern Website Development
                            </h5>
                            <p className="p_white_bg w-fit text-left">
                                We build high-performance, mobile-friendly websites designed to
                                attract visitors and convert them into loyal customers.
                            </p>
                        </div>
                    </li>

                    {/* SERVICE 2 */}
                    <li className="services">
                        <div className="w-fit flex justify-center scale_animation">
                            <img src={Cloud} alt="Cloud and Infrastructure Services" className="w-[90%] md:w-[80%]" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5_title text-left text-[#004D8C]">
                                02 Cloud & Infrastructure Services
                            </h5>
                            <p className="p_white_bg w-fit text-left">
                                Get enterprise-grade speed, uptime, and scalability with fully managed cloud hosting tailored for small businesses and growing startups.
                            </p>
                        </div>
                    </li>

                    {/* SERVICE 3 */}
                    <li className="services">
                        <div className="w-fit flex justify-center scale_animation">
                            <img src={AIautomation} alt="AI and Automation Solutions" className="w-[90%] md:w-[90%]" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5_title text-left text-[#004D8C]">
                                03 AI & Automation Solutions
                            </h5>
                            <p className="p_white_bg w-fit text-left">
                                Transform your business with AI-powered features like chatbots and automation, enhancing user experience and streamlining operations.
                            </p>
                        </div>
                    </li>

                    {/* SERVICE 4 */}
                    <li className="services">
                        <div className="w-fit flex justify-center scale_animation">
                            <img src={Marketing} alt="Digital Marketing and Customer Engagement" className="w-[90%] md:w-[75%]" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5_title text-left text-[#004D8C]">
                                04 Digital Marketing & Customer Engagement
                            </h5>
                            <p className="p_white_bg w-fit text-left">
                                Turn your website into a growth engine with SEO, social media, content, and email strategies that drive traffic and connect you with the right audience.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* RIGHT ARROW - CHANGED: Added conditional rendering */}
            {showRightArrow && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-8 md:right-[6rem] top-1/2 -translate-y-1/2 z-10
                       bg-[#007EE6]/50 text-white shadow-lg rounded-full pl-[0.9rem] md:pl-[1.2rem] pr-[0.6rem] md:pr-[1rem] py-[0.7rem] md:py-[1rem]
                       hover:scale-110 transition active:scale-100"
                >
                    <img src={arrowForward} alt="Arrow Forward" />
                </button>
            )}
        </div>
    );
}

export default Services;