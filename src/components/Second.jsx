import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { userContext } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';



const Second = () => {

    const {submittedData2, setSubmittedData2 }=useContext(userContext)
    const navigate = useNavigate();

            

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        address: Yup.string().required("Address is required"),
        number: Yup.string().required("Phone Number is required")
    });

    const initialValues = {
        email: submittedData2 ? submittedData2.email: '',
        address: submittedData2 ? submittedData2.address: '',
        number:submittedData2 ? submittedData2.number:''
    };

    const onSubmit = (values) => {
        console.log("Form values:", values);
        setSubmittedData2(values);
        navigate('/third');
    };
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <h1 className='pt-5 mt-5'>User Details</h1>
                <div className="row justify-content-center">
                    <div className="col-5 p-3">
                        <Field type="email" name="email" className='form-control' placeholder='Email' />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-5 p-3">
                        <Field type="text" name="address" className='form-control' placeholder='Address' />
                        <ErrorMessage name="address" component="div" className="error" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-5 p-3">
                        <Field type="number" name='number' className='form-control' placeholder='Phone Number' />
                        <ErrorMessage name='number' component="div" className="error" />
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-5">
                    <Link to="/">
                            <button type="submit" className=' me-3 btn btn-success'> Previous </button>
                    </Link>

                  
            
                      <button type="submit" className='btn btn-success'> Next </button>
                          

                           


                    </div>
                </div>

             
            </Form>
        </Formik>
    );
}

export default Second;
