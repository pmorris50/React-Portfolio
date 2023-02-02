import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    time: '',

  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data: ', formData);
    // You would add the logic to send the form data to your backend here
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className ='mt-2'>
            <Form.Group controlId="formDate">
              <Form.Label>Date:</Form.Label>
              <DatePicker
                onChange={date => setSelectedDate(date)}
                value={selectedDate}
              />
            </Form.Group>
            </div>
              <div className ='mt-2'>
            <Form.Group controlId="formTime">
              <Form.Label>Time:</Form.Label>
              <TimePicker disableClock = {true}
                onChange={time => setSelectedTime(time)}
                value={selectedTime}
              />
            </Form.Group>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;



// const Form = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     subject: '',
//     message: '',
//     date: '',
//     time: ''
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="subject">Subject:</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="time">Time:</label>
//         <input
//           type="time"
//           id="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;