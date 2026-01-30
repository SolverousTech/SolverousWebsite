// ResponsivePicture.jsx
import React from 'react';
import MeetingInTable from "../../assets/meeting_in_table.png";
import MeetingInTablePhone from "../../assets/meeting_in_table_phone_tablet.png";
import MeetingInTableDesktop from "../../assets/meeting_in_table_desktop.png";

const MeetingImage = () => {
    return (
        <div className="w-full md:w-full lg:w-full xl:w-[67%] 2xl:w-[70%] flex items-center justify-center">
            {/* Mobile */}
            <img
                src={MeetingInTablePhone}
                alt="People in A Meeting"
                className='w-full md:hidden rounded-xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />

            {/* Medium */}
            <img
                src={MeetingInTablePhone}
                alt="People in A Meeting"
                className='hidden md:block lg:hidden w-full rounded-xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />

            {/* Large */}
            <img
                src={MeetingInTable}
                alt="People in A Meeting"
                className='hidden lg:block xl:hidden w-full rounded-xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />

            {/* XL */}
            <img
                src={MeetingInTable}
                alt="People in A Meeting"
                className='hidden xl:block 2xl:hidden w-full rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />

            {/* 2XL */}
            <img
                src={MeetingInTableDesktop}
                alt="People in A Meeting"
                className='hidden 2xl:block w-full rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]'
            />
        </div>
    );
};

export default MeetingImage;
