import ResponsivePicture from "../../components/Image/image_process";
import processIcon1 from "../../assets/process1.png"
import processIcon2 from "../../assets/process2.png"

function Process() {
    return (
        <div>
            {/* MOBILE VIEW - Shows only centered icon */}
            <div className="md:hidden flex flex-row items-center space-x-6">
                <img
                    src={processIcon2}
                    alt="Solverous Process"
                    className="w-11"
                />

                {/* MOBILE CONTENT */}
                <div className="w-[90%] space-y-7">
                    <div className="bg-white p-6 rounded-xl">
                        <h5 className="h5_title text-left text-[#004D8C]">Discover & Define</h5>
                        <p className="p_white_bg text-left">We start by understanding your business, objectives, and challenges. Through detailed discussions and research, we define the scope and outcomes you need.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                        <h5 className="h5_title text-left text-[#004D8C]">Strategize & Plan</h5>
                        <p className="p_white_bg text-left">We craft a tailored strategy — selecting the right technologies, outlining timelines, and defining milestones to ensure transparency and alignment.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                        <h5 className="h5_title text-left text-[#004D8C]">Design & Build</h5>
                        <p className="p_white_bg text-left">Our team designs intuitive interfaces and develops scalable, high-performance solutions using modern tools and best practices.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                        <h5 className="h5_title text-left text-[#004D8C]">Test & Refine</h5>
                        <p className="p_white_bg text-left">Before launch, we rigorously test everything — from performance and security to user experience — ensuring a flawless, reliable outcome.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                        <h5 className="h5_title text-left text-[#004D8C]">Launch & Optimize</h5>
                        <p className="p_white_bg text-left">Once deployed, we monitor closely, gather feedback, and continuously improve your solution for maximum impact and long-term success.</p>
                    </div>
                </div>
            </div>

            {/* TABLET VIEW - Added responsive layout for tablets */}
            <div className="hidden md:block xl:hidden">
                <div className="flex flex-col space-y-8">
                    {/* Two-column grid for tablet */}
                    <div className="grid grid-cols-2 gap-6 px-8">
                        <div className="bg-white p-6 rounded-xl">
                            <h5 className="h5_title text-[#004D8C] text-left">Discover & Define</h5>
                            <p className="p_white_bg reasons_margin text-left">
                                We start by understanding your business, objectives, and challenges. Through detailed discussions and research, we define the scope and outcomes you need.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl">
                            <h5 className="h5_title text-[#004D8C] text-left">Strategize & Plan</h5>
                            <p className="p_white_bg reasons_margin text-left">
                                We craft a tailored strategy — selecting the right technologies, outlining timelines, and defining milestones to ensure transparency and alignment.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl">
                            <h5 className="h5_title text-[#004D8C] text-left">Design & Build</h5>
                            <p className="p_white_bg reasons_margin text-left">
                                Our team designs intuitive interfaces and develops scalable, high-performance solutions using modern tools and best practices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl">
                            <h5 className="h5_title text-[#004D8C] text-left">Test & Refine</h5>
                            <p className="p_white_bg reasons_margin text-left">
                                Before launch, we rigorously test everything — from performance and security to user experience — ensuring a flawless, reliable outcome.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl col-span-2 w-1/2 mx-auto">
                            <h5 className="h5_title text-[#004D8C] text-left">Launch & Optimize</h5>
                            <p className="p_white_bg reasons_margin text-left">
                                Once deployed, we monitor closely, gather feedback, and continuously improve your solution for maximum impact and long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP VIEW - Original layout with icon in middle */}
            <div className="hidden lg:block">
                <div className="flex flex-col-reverse space-y-6">
                    {/* ABOVE PROCESS */}
                    <div className="flex flex-row space-x-[13%] justify-center">
                        {/* FIRST ABOVE PROCESS */}
                        <div className="bg-white p-7 w-[25%] rounded-xl content-center">
                            <h5 className="h5_title text-[#004D8C] text-left">Strategize & Plan</h5>
                            <p className="p_white_bg reasons_margin w-full text-left">
                                We craft a tailored strategy — selecting the right technologies, outlining timelines, and defining milestones to ensure transparency and alignment.
                            </p>
                        </div>
                        {/* SECOND ABOVE PROCESS */}
                        <div className="bg-white p-7 w-[25%] rounded-xl content-center">
                            <h5 className="h5_title text-[#004D8C] text-left">Test & Refine</h5>
                            <p className="p_white_bg reasons_margin w-full text-left">
                                Before launch, we rigorously test everything — from performance and security to user experience — ensuring a flawless, reliable outcome.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col pb-6">
                        <img
                            src={processIcon1}
                            alt="Solverous Process"
                            className="w-full"
                        />
                    </div>

                    {/* BELOW PROCESS */}
                    <div className="flex flex-row space-x-[13%] justify-center">
                        {/* FIRST BELOW PROCESS */}
                        <div className="bg-white p-7 w-[25%] rounded-xl content-center">
                            <h5 className="h5_title text-[#004D8C] text-left">Discover & Define</h5>
                            <p className="p_white_bg reasons_margin w-full text-left">
                                We start by understanding your business, objectives, and challenges. Through detailed discussions and research, we define the scope and outcomes you need.
                            </p>
                        </div>
                        {/* SECOND BELOW PROCESS */}
                        <div className="bg-white p-7 w-[25%] rounded-xl content-center">
                            <h5 className="h5_title text-[#004D8C] text-left">Design & Build</h5>
                            <p className="p_white_bg reasons_margin w-full text-left">
                                Our team designs intuitive interfaces and develops scalable, high-performance solutions using modern tools and best practices.
                            </p>
                        </div>
                        {/* THIRD BELOW PROCESS */}
                        <div className="bg-white p-7 w-[25%] rounded-xl content-center">
                            <h5 className="h5_title text-[#004D8C] text-left">Launch & Optimize</h5>
                            <p className="p_white_bg reasons_margin w-full text-left">
                                Once deployed, we monitor closely, gather feedback, and continuously improve your solution for maximum impact and long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;