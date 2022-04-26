import React from 'react'

export default function Heading(props) {

    let {heading} = props

    return (
        <div className='text-[32px] font-bold' >
             {heading}
        </div>
    )
}
