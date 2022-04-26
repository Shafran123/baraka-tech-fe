import React from 'react'

export default function CommonButton(props) {

    let {onClick} =props

    return (

        <div>
            <button onClick={onClick} className='h-12 w-full rounded-md bg-[#24E8A1] font-semibold hover:bg-green-400'>Send Message</button>
        </div>
    )
}
