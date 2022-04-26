import React from 'react'


import LeftLayout from '../../Layouts/LeftLayout/LeftLayout';
import RightLayout from '../../Layouts/RightLayout/RightLayout';

export default function Home() {
    return (
        <div className="grid  grid-cols-5 auto-cols-max">
            <LeftLayout />
            <RightLayout />
        </div>
    )
}
