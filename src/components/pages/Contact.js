import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

const ContactForm = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
      const input = event.target.value.replace(/[^\d]/g, '').substring(0, 10); // Remove non-digits and limit to 10 characters
      const formattedInput = input.replace(/(\d{3})?(\d{1,3})?(\d{1,4})?/, (match, p1, p2, p3) => {
        let parts = [];
        if (p1) {
          parts.push(p1);
        }
        if (p2) {
          parts.push(p2);
        }
        if (p3) {
          parts.push(p3);
        }
        return parts.join('-');
      }); // Insert dashes at appropriate positions
      setPhone(formattedInput);
    };
  

  const styles = {
    input: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '8px',
      width: '100%',
    },
 
    textarea: {
        width: "100%",
        height: '150px',
        
    },
    contactMe: {
      textAlign: 'center',
      margin: "30px",
      padding: "15px"
    },
    button: {
      display: 'block',
      margin: "0 auto",
      marginTop: "40px",
      padding: "10px",
      borderRadius: "15px"
    }
  };

  return (
<div className =  'background'>

    <container className="container" >
      
      <div className = 'm-5 p-3 customCard' >
    
      <form action="https://formsubmit.co/patrickmorris532@gmail.com" method="POST" id="my-form">
        <input type="hidden" name="_subject" value="New Inquirer"></input>
        
        <h1>Contact Me</h1>
    
        <div className="row m-auto">
          <div className="col-md-4 col-sm-12">

            <div className='row m-4'>
              <label htmlFor="name"></label>
              <input placeholder="Name" className="text-box" style = {styles.placeholder} type="text" id="name" name="name" required></input>
            </div>

            <div className="row m-4">
              <label htmlFor="email"></label>
              <input placeholder='Email' className="text-box" type="email" id="email" name="email" required></input>
            </div>

            <div className="row m-4">
              <label htmlFor="phone"></label>
              <input placeholder="Phone Number"  className="text-box" type="tel" id="phone" name="phone" value = {phone} onChange = {handlePhoneChange} required></input>
            </div>
          </div>

          <div className="col-md-7 col-sm-12 m-auto center">
            <label htmlFor="message"></label>
            <textarea placeholder="Please leave me a message!" id="message" name="message" required></textarea>
          </div>
        </div>
        <div >
        <button style= {styles.button} type="submit"> Send Email</button>
        </div>
      </form>
      </div>
      
    </container>
    </div>

  )
}

export default ContactForm

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',

//   });
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('00:00');

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data: ', formData);
//     // You would add the logic to send the form data to your backend here
//   };

//   return (
//     <Container className="my-5">
//     <Form onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group as={Col} controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formMessage">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows="3"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//       </Row>
//       <Row className="justify-content-center">
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Row>
//     </Form>
//   </Container>
//   );
// };

// export default ContactForm;


