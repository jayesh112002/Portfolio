import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formsubmit.co/jayeshmundhra830@gmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" name="name" required placeholder="Name"></input>
            <label>Email</label>
            <input type="email" name="email" required placeholder="Email"></input>
            <label>Subject</label>
            <input type="text" name="subject" required placeholder="Subject"></input>
            <label>Message</label>
            <textarea rows="6" name="msg" required placeholder="Type Your Message Here"/>
            <button className="btn" type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Form
