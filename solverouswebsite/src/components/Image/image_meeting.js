// ResponsivePicture.jsx
import React from 'react';
import MeetingInTable from "../../assets/meeting_in_table.webp";
import MeetingInTablePhone from "../../assets/meeting_in_table_phone_tablet.webp";

const MeetingImage = () => {
    return (
        <div className="w-full md:w-full lg:w-full xl:w-[67%] 2xl:w-[70%] flex items-center justify-center">
            {/* MeetingInTablePhone - Mobile, Tablet, and 2XL */}
            <img
                src={MeetingInTablePhone}
                alt="People in A Meeting"
                className='w-full block lg:hidden 2xl:block rounded-xl 2xl:rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />

            {/* MeetingInTable - Large and XL only */}
            <img
                src={MeetingInTable}
                alt="People in A Meeting"
                className='hidden lg:block 2xl:hidden w-full rounded-xl xl:rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />
        </div>
    );
};

export default MeetingImage;
