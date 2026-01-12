import React from 'react';
import Facebook from "../../assets/facebook.png";
import WhatsApp from "../../assets/whatsapp.png";
import LinkedIn from "../../assets/linkedin.png";
import logo from '../../assets/solverous2.png';

function Footer() {
    return (
        <footer className='bg-[#004D8C] flex flex-col py-14 space-y-14'>
            <div className=' flex flex-col md:flex-row body_margin justify-between items-center space-y-14 md:space-y-0 '>
                <div className='space-y-8 w-fit'>
                    <div className=' space-y-5 md:space-y-3 w-full '>
                        <div className=" w-[8rem] md:w-[7.5rem] h-16 md:h-16 "><img src={logo} alt="Automation Icon" /></div>
                        <p className='text-white text-2xl md:text-[1rem] w-full md:w-[60%]'>Empowering Your Business with Expert Solutions and Insights</p>
                    </div>
                    <div className=" flex flex-row space-x-3 w-fit ">
                        <a href="https://www.facebook.com/profile.php?id=61573101443685" target="_blank" rel="noopener noreferrer" className=" footer_icons hover:bg-[#007EE6] hover:border-collapse transition-all ease-in-out active:scale-95 "><img src={Facebook} alt="Automation Icon" /></a>
                        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className=" footer_icons hover:bg-[#007EE6] hover:border-collapse transition-all ease-in-out active:scale-95 "><img src={WhatsApp} alt="Automation Icon" /></a>
                        <a href="https://www.linkedin.com/company/solverous" target="_blank" rel="noopener noreferrer" className=" footer_icons hover:bg-[#007EE6] hover:border-collapse transition-all ease-in-out active:scale-95 "><img src={LinkedIn} alt="Automation Icon" /></a>
                    </div>
                </div>
                <div className='flex flex-row text-white space-x-0 md:space-x-6 '>
                    <div className=' flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-16 '>
                        {/* PRODUCTS LINK */}
                        <div className='w-fit space-y-4'>
                            <h5 className='h5_title'>Products</h5>
                            <div className='space-y-3'>
                                <a href="https://luna.solverous.com/" target="_blank" rel="noopener noreferrer" className='hover:underline'>Luna AI</a>
                                <p className='hover:underline'>DTR System</p>
                                <p className='hover:underline'>Payroll System</p>
                            </div>
                        </div>
                        {/* SERVICES LINK */}
                        <div className=' w-[75%] md:w-[50%] space-y-4'>
                            <h5 className='h5_title'>Services</h5>
                            <div className='space-y-3 flex flex-col'>
                                <a href="#services" target="_self" rel="noopener noreferrer" className='hover:underline'>Modern Website Development</a>
                                <a href="#services" target="_self" rel="noopener noreferrer" className='hover:underline'>Cloud & Infrastructure Services</a>
                                <a href="#services" target="_self" rel="noopener noreferrer" className='hover:underline'>AI & Automation Solutions</a>
                                <a href="#services" target="_self" rel="noopener noreferrer" className='hover:underline'>Digital Marketing & Customer Engagement</a>
                            </div>
                        </div>
                    </div>
                    <div className='  flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-16 '>
                    {/* COMPANY INFO LINK */}
                    <div className='w-fit space-y-4'>
                        <h5 className='h5_title'>Company</h5>
                        <div className='space-y-3 flex flex-col'>
                            <a href="#home" target="_self" rel="noopener noreferrer" className='hover:underline'>Home</a>
                            <a href="#services" target="_self" rel="noopener noreferrer" className='hover:underline'>Services</a>
                            <a href="#clients" target="_self" rel="noopener noreferrer" className='hover:underline'>Clients</a>
                            <a href="#about-us" target="_self" rel="noopener noreferrer" className='hover:underline'>About Us</a>
                        </div>
                    </div>
                    {/* INFORMATION LINK */}
                    <div className='w-fit space-y-4'>
                        <h5 className='h5_title'>Information</h5>
                        <div className='space-y-3 flex flex-col'>
                            <a href="#faqs" target="_self" rel="noopener noreferrer" className='hover:underline'>FAQs</a>
                            <a href="#contact-us" target="_self" rel="noopener noreferrer" className='hover:underline'>Contact</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* LINE */}
            <div className='space-y-3'>
                <div className=' border-white border border-b-0 body_margin'></div>
                <div className=' body_margin flex flex-col md:flex-row justify-between space-y-4 md:space-y-0'>
                    <p className='p_blue_bg'>© Solverous 2026. All rights reserved. </p>
                    <div className='flex flex-row space-x-4'>
                        <p className='p_blue_bg'>Privacy & Policy</p>
                        <div className='border-white border border-l-0 body_margin'></div>
                        <p className='p_blue_bg'>Terms & Condition</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
