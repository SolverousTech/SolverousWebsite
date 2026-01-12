import Button from '../../components/Buttons/button';

function ContactForm() {
    return (
        <form className="bg-gradient-to-b from-[#004D8C] to-[#027FE5] space-y-6 md:space-y-4 h-full w-full md:w-full lg:w-[50%] flex flex-col p-8 rounded-2xl">
            
            {/* Full Name */}
            <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1">
                    <label htmlFor="name" className="label_style">
                        Full Name
                    </label>
                    <span className="text-red-400">*</span>
                </div>
                <input id="name" type="text" className="input_style" required />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-1 w-full">
                    <div className="flex items-center space-x-1">
                        <label htmlFor="email" className="label_style">
                            Email
                        </label>
                        <span className="text-red-400">*</span>
                    </div>
                    <input id="email" type="email" className="input_style" required />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                    <div className="flex items-center space-x-1">
                        <label htmlFor="phone" className="label_style">
                            Mobile Number
                        </label>
                        <span className="text-red-400">*</span>
                    </div>
                    <input id="phone" type="tel" className="input_style" required />
                </div>
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1">
                    <label htmlFor="message" className="label_style">
                        Message
                    </label>
                    <span className="text-red-400">*</span>
                </div>
                <textarea
                    id="message"
                    className="input_style h-[8rem] resize-none"
                    required
                />
            </div>

            <Button
                title="Send"
                type="none"
                buttonCustomStyle="bg-white text-[#007EE6] hover:bg-[#DDE7EF] py-3 px-[42.5%] md:py-2 md:px-[46%] [box-shadow:0_4px_8px_rgba(1,0,0,0.2)]"
            />
        </form>
    );
}

export default ContactForm;
