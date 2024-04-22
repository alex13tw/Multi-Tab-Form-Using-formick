import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';


const First = () => {  
    const { submittedData , setSubmittedData } = useContext(userContext)
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        fname: Yup.string().required("First Name is required"),
        lname: Yup.string().required("Last Name is required")
    });

    const initialValues = {  
        fname: submittedData ? submittedData.fname : '',
        lname: submittedData ? submittedData.lname : '' 
    };


const onSubmit = (values) => {
    console.log("The values:", values);
    setSubmittedData(values);
    navigate('/second');

};
     
    console.log("the ",next);
        
    return ( 
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >  
            <Form> 
                <div>  
                    <h1 className='pt-5 mt-5'>Full Name</h1>
                    <div className="row justify-content-center">
                        <div className="col-5 p-3">
                            <Field type="text" name="fname" className='form-control' placeholder='First Name' />
                            <ErrorMessage name="fname" component="div" className="error" />
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-5 p-3">
                            <Field type="text" name="lname" className='form-control' placeholder='Last Name' />
                            <ErrorMessage name="lname" component="div" className="error" />
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-5 p-3"> 
                        
                                    <button type="submit"   className='btn btn-success'> Next </button>
                                
                        </div>
                    </div>
                </div>  
            </Form>           
        </Formik>
    );
}

export default First;



