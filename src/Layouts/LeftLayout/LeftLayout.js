import React from 'react'
import CommonButton from '../../Components/common-button/CommonButton'
import CommonInput from '../../Components/common-input/CommonInput'
import CommonTextArea from '../../Components/common-textarea/CommonTextArea'
import Heading from '../../Components/heading/Heading'
import Spacer from '../../Components/spacer/Spacer'
import SubHeading from '../../Components/sub-heading/SubHeading'
import FormLayout from '../FormLayout/FormLayout'

export default function LeftLayout() {
    return (

        <div className="flex justify-center flex-col w-full p-10  h-screen col-span-2">

            <Heading heading={'Contact Us'} />

            <SubHeading subHeading={'Submit Your Inquiry Detials Our Reresentative Will Contact \n  You Shortly!'} />
      
            <Spacer />

            <FormLayout />

        </div>
    )
}
