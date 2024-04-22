import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';

const Third = () => {

    const{submittedData3, setSubmittedData3}=useContext(userContext)
    const [next, setNext] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });
        
    const initialValues = {       
        username: submittedData3 ? submittedData3.username: '',
        password: submittedData3 ? submittedData3.password: ''
    };

    const onSubmit = (values) => {
        console.log("Form values:", values);
        setSubmittedData3(values);
        navigate('/submit');
    };

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
      <Form>
      <h1 className='pt-5 mt-5'>Login Info</h1>
        <div className="row justify-content-center">
            <div className="col-5 p-3">
                <Field type="text" name="username" className='form-control' placeholder='Username' />

                <ErrorMessage component="div" name='username'/>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-5 p-3">
                <Field type="password"  name='password' className='form-control' placeholder='Password' />
                
                <ErrorMessage component="div" name='password' />
            </div>
        </div>

        <div className="row justify-content-center">
         <div className="col-5">
         <Link to="/second">
            <button type="submit" className=' me-3 btn btn-success'> Previous </button>
        </Link>
            <button type="submit" className='btn btn-success'> Submit </button>
             
         </div>
            
        </div>
      </Form>
    </Formik>
  )
}

export default Third



