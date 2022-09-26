// import React, { useState } from 'react';
// import { Formik , Form } from 'formik';
// import { TextField } from './TextField';
// import * as Yup from 'yup';
// import axios from 'axios';
// import Loading from './Loading';
// import Swal from "sweetalert2";  
// // import { useNavigate } from 'react-router-dom';

//  const Createbill = () => {  
//    const [loading , setLoading] = useState(false);
// //    const navigate = useNavigate();
//   const validate = Yup.object({
   
    
//     email: Yup.string()
//       .email('Email is invalid')
//       .required('Email is required'),
//       phone: Yup.string()
//       .max(10, 'Must be 10 characters ')
//       .required('phone number is required is required'),
//       name: Yup.string()
//       .max(50, 'Must be 15 characters or less')
//       .required('Required'),
//     address: Yup.string()
//       .max(50, 'Must be 20 characters or less')
//       .required('Required'),
//     // password: Yup.string()
//     //   .min(6, 'Password must be at least 6 charaters')
//     //   .required('Password is required'),
   
//   }) 


// //   async (values) =>
//   return (
//     <Formik
//       initialValues={{
       
//         email: '',
//         phone : '', 
//         name : '',
//         address : '' , 
      
//       }}
//       validationSchema={validate}
//       onSubmit={ async (values) => {  
//         setLoading(true);
//           const a= await axios.post('https://react-project-821db-default-rtdb.firebaseio.com/reactproject.json' , values);
//         console.log(values) ; 
//         console.log("a is : " , a);
//         setLoading(false);
//         Swal.fire({
//       position: "top-center",
//       icon: "success",
//       title: "successfully  bill created ",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     // navigate('/table')


//       }}
//     >
//       {formik => (
//         <div style={{ marginTop: "40px"}}>
//           <h1 style={{ textAlign: "center"   }} className="my-4 font-weight-bold .display-4"> Create Bill </h1>
          
//           { loading && <Loading/> }
//            <Form> 
//              <TextField label="phone" name="phone" type="number"/>  
//              <TextField label="Email" name="email" type="email"/>
//               <TextField label="Address" name="address" type="text"/>
//             <TextField label="Name" name="name" type="name"/>
//             {/* <TextField label="password" name="password" type="password"/> */}
//             <button style={{ width: "500px" , marginLeft : "290px"}} className="btn btn-dark mt-3" type="submit"> create invoice  </button>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   )
// } 

// export default Createbill;
