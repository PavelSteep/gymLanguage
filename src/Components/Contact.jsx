import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h2>CONTACT US</h2>
      <form action="">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Type your E-Mail" />
        <textarea placeholder="write Here..."></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;