import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsfpp8a', 'template_mqg2oio',  e.target, 'user_x1AiJG9KwmVpjRtV7xAcU')
    .then((result) => {
      console.log(result.text);
      alert("🎉You have Successfully Subscribed🎉");
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-5 pt-5">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Contact</label>
      <input type="number" name="number" />
      <label>Course</label>
        <select name="message">
          <option value="c" name="message">C</option>
        </select>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs ;
