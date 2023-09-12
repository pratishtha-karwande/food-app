
import { useState, } from 'react'
import React from 'react'
import './Contact.css'
import { Link , useNavigate} from 'react-router-dom';

 const ContactUs = () => {

  const[data,setdata] = useState( {name:"",email:"",phone:"",message:""} );
     const navigate= useNavigate();
  const handleChange = (e) =>{
   
    console.log(e.target.value);
  
    const name=e.target.name;
    
    setdata({...data, [name]: e.target.value})
  }
  const handleSubmit =() =>{ 
    console.log(data);
    if(data.name && data.email && data.phone  )
    {
        alert(`Hi ${ data.name}..., We got your response we will get back to you soon.`);
        navigate("/");

    }else{
        alert('Please fill all the details')
    }

    
  }


  return (
    <div className='contact-form'>
  
<h1>Contact <span>Here</span></h1>
<input type="text" name="name" id="" onChange={handleChange} value={data.name}placeholder='Enter name' />
<input type="email" name="email" id="" onChange={handleChange}  value={data.email}placeholder='example@gmail.com'/>
<input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='+91' />
<textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='type here...'/>

<button onClick={handleSubmit}>send</button>

</div>
  );
}
export default ContactUs;




      