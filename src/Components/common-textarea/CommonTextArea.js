import React from 'react'
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function CommonTextArea(props) {

    const {register , formState:{errors}} = useFormContext();

    let {id, lable, placeholder, isRequired } = props

    return (
        <div className='text-sm'>
            <div>
                {lable} {isRequired ? <span className='text-red-500'>*</span> : null}
            </div>
            <textarea className='h-[72px] border-2 rounded-md w-full mt-2 target:outline-none pl-2 pt-2' {...register(id, { required: true })} placeholder={placeholder} />
            <div className='pt-2'>
            {errors[id] && <span className='text-red-500 pt-2'>{errors[id]?.message}</span>}
            </div>
        </div>
    )
}


CommonTextArea.propTypes = {
    lable: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
};