import { useRef } from "react";
import Websites from "../../assets/websites_mockup.png";

function Services() {
    const listRef = useRef(null);

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

            {/* LEFT ARROW */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-[3rem] top-1/2 -translate-y-1/2 z-10
                   bg-[#007EE6] text-white shadow-lg rounded-full pl-[1.25rem] pr-[1.36rem] py-[1rem]
                   hover:scale-110 transition"
            >
                ◀
            </button>

            {/* SERVICES LIST */}
            <ul
                ref={listRef}
                className=" body_margin flex flex-row gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide px-10 "
            >
                {/* SERVICE 1 */}
                <li className="bg-white w-[33%] p-7 space-y-6 rounded-xl snap-start flex-shrink-0 content-center ">
                    <div className=" w-fit flex justify-center ">
                        <img src={Websites} alt="Modern Website" className=" w-[70%] " />
                    </div>
                    <div className="space-y-2">
                        <h5 className="h5_title text-left text-[#004D8C]">
                            01 Modern Website Development
                        </h5>
                        <p className="p_white_bg w-fit text-left ">
                            We build high-performance, mobile-friendly websites designed to
                            attract visitors and convert them into loyal customers.
                        </p>
                    </div>
                </li>

                {/* SERVICE 2 */}
                <li className="bg-white w-[33%] p-7 space-y-6 rounded-xl snap-start flex-shrink-0 content-center">
                    <div className=" w-fit flex justify-center ">
                        <img src={Websites} alt="Modern Website" className=" w-[70%] " />
                    </div>
                    <div className="space-y-2">
                        <h5 className="h5_title text-left text-[#004D8C]">
                            02 Cloud & Infrastructure Services
                        </h5>
                        <p className="p_white_bg w-fit text-left ">
                            Get enterprise-grade speed, uptime, and scalability with fully managed cloud hosting tailored for small businesses and growing startups. 
                        </p>
                    </div>
                </li>

                {/* SERVICE 3 */}
                <li className="bg-white w-[33%] p-7 space-y-6 rounded-xl snap-start flex-shrink-0 content-center">
                    <div className=" w-fit flex justify-center ">
                        <img src={Websites} alt="Modern Website" className=" w-[70%] " />
                    </div>
                    <div className="space-y-2">
                        <h5 className="h5_title text-left text-[#004D8C]">
                            03 AI & Automation Solutions
                        </h5>
                        <p className="p_white_bg w-fit text-left ">
                            Transform your business with AI-powered features like chatbots and automation, enhancing user experience and streamlining operations. 
                        </p>
                    </div>
                </li>

                {/* SERVICE 4 */}
                <li className="bg-white w-[33%] p-7 space-y-6 rounded-xl snap-start flex-shrink-0 content-center">
                    <div className=" w-fit flex justify-center ">
                        <img src={Websites} alt="Modern Website" className=" w-[70%] " />
                    </div>
                    <div className="space-y-2">
                        <h5 className="h5_title text-left text-[#004D8C]">
                            04 Digital Marketing & Customer Engagement
                        </h5>
                        <p className="p_white_bg w-fit text-left ">
                            Turn your website into a growth engine with SEO, social media, content, and email strategies that drive traffic and connect you with the right audience.
                        </p>
                    </div>
                </li>
            </ul>

            {/* RIGHT ARROW */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-[3rem] top-1/2 -translate-y-1/2 z-10
                   bg-[#007EE6] text-white shadow-lg rounded-full pl-[1.36rem] pr-[1.25rem] py-[1rem]
                   hover:scale-110 transition"
            >
                ▶
            </button>
        </div>
    );
}

export default Services;
