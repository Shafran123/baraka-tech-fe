import React from 'react'

export default function SubHeading(props) {

    let { subHeading } = props

    return (

        <div className='text-sm  text-gray-500' >
            {subHeading}
        </div>
    )
}
