import React from 'react'
import ReactLogo from '../../Assets/svg/background.svg';

export default function RightLayout() {
    return (
        <div className="hidden md:flex h-screen col-span-3">

            <img className='object-cover w-full' src={ReactLogo} alt="React Logo" />

        </div>
    )
}
