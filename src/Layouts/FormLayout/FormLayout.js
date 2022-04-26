import React, { useState } from 'react'
import CommonButton from '../../Components/common-button/CommonButton';
import CommonInput from '../../Components/common-input/CommonInput'
import CommonTextArea from '../../Components/common-textarea/CommonTextArea'
import Spacer from '../../Components/spacer/Spacer';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import apiClient from "../../Services/http-common";


export default function FormLayout() {

    const [loading, setloading] = useState(false)
    const [renderSucessAlert, setrenderSucessAlert] = useState(false)
    const [renderErrorAlert, setrenderErrorAlert] = useState(false)

    const phoneRegExp = /^((\\[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object({
        fname: yup.string().required('First Name is a required field'),
        lname: yup.string().required('Last Name is a required field'),
        email: yup.string().email().required('Email is not valid'),
        contact_no: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        desc: yup.string().required('Message is a required field')
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    //const { conatctUsForm, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        setloading(true)
        try {
            const res = await apiClient.post("/contact-us/submit-req", data, {
                headers: {
                    "x-access-token": "token-value",
                },
            });

            console.log(res, 'responce');
            setrenderSucessAlert(true)
            setTimeout(() => {
                setrenderSucessAlert(false)
            }, 2000);

            setloading(false)

            methods.reset()
        } catch (err) {
            console.log(err);

            setrenderErrorAlert(true)
            setTimeout(() => {
                setrenderErrorAlert(false)
            }, 2000);

            setloading(false)
        }
    }


    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <CommonInput id={'fname'} lable={'First Name'} placeholder={'Jhon Carter'} isRequired={true} />

                    <CommonInput id={'lname'} lable={'Last Name'} placeholder={'Silva'} isRequired={true} />

                    <CommonInput id={'email'} lable={'Email'} placeholder={'Jhon@gmail.com'} isRequired={true} />

                    <CommonInput id={'contact_no'} lable={'Contact No'} placeholder={'971565791266'} isRequired={true} />

                    <CommonTextArea id={'desc'} lable={'What is your concern?'} placeholder={'Tell Us!'} isRequired={true} />

                    <Spacer />

                    {renderErrorAlert ?
                        <div className="px-4 py-3 leading-normal text-white bg-red-500 rounded-lg" role="alert">
                            <p>Some thing Went Wrong!</p>
                        </div>
                        : null
                    }

                    {renderSucessAlert ?
                        <div className="px-4 py-3 leading-normal text-white bg-green-500 rounded-lg" role="alert">
                            <p>Request Sent Sucessfully!</p>
                        </div>
                        :
                        null
                    }


                    <Spacer />

                    <CommonButton isLoading={loading} onClick={() => onSubmit} />
                </form>

            </FormProvider>

        </>


    )
}
