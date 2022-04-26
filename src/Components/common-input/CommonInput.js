import React, { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form';

export default function CommonInput(props) {

    let {id, formData, lable , placeholder , isRequired , conatctUsForm , formState} = props

  
    const {register , formState:{errors}} = useFormContext();


    useEffect(() => {
        console.log( id ,props , 'formData' , conatctUsForm );
    }, [])

    return (

        <div className='text-sm mb-4' >
            <div>
                {lable} {isRequired ? <span className='text-red-500'>*</span> : null}
            </div>
            <input className='h-[42px] border-2 rounded-md w-full mt-2 target:outline-none pl-2' {...register(id)} placeholder={placeholder} />
            <div className='pt-2'>
            {errors[id] && <span className='text-red-500 pt-2'>{errors[id]?.message}</span>}
            </div>

        </div>
    )
}