import React from 'react'


import LeftLayout from '../../Layouts/LeftLayout/LeftLayout';
import RightLayout from '../../Layouts/RightLayout/RightLayout';

export default function Home() {
    return (
        <div className="flex md:grid  md:grid-cols-5 md:auto-cols-max">
            <LeftLayout />
            <RightLayout />
        </div>
    )
}
