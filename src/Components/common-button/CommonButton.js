import React from 'react'

export default function CommonButton(props) {

    let { isLoading, onClick } = props

    return (

        <div>
            <button disabled={isLoading} onClick={onClick} className='h-12 w-full rounded-md bg-[#24E8A1] font-semibold hover:bg-green-400'>
                {isLoading ?
                    <span>
                        Loading
                    </span>

                    :
                    <span >
                        Send Message
                    </span>
                }

            </button>
        </div>
    )
}
