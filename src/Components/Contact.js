import React, { useState } from "react";
// import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [sucessMessage, setSucessMessage] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_b2mcada', e.target, 'user_vdWQCtsFTx9fUjeAIYNF6')
      .then((result) => {
          console.log(result.text);
          // setSucessMessage(true);
          toast.info(`Message Received ${name}! Will reply you soon!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          // alert("Message Received! Will reply soon!");
      }, (error) => {
          console.log(error.text);
          toast.error(`Opps! Some error occured ${name}, please try again:)`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          // setErrorMessage(true);
          // alert("Opps! Some error occured, please try again:)");
      });
      // e.target.reset();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    // window.open(
    //   `mailto:${contactEmail}?subject=${encodeURIComponent(
    //     subject
    //   )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
    //     email
    //   )}): ${encodeURIComponent(message)}`
    // );
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    {/* <Alert show={sucessMessage} key="sucess" variant="sucess">
      <p>Message Received! Will reply soon!</p>
    </Alert>
    <Alert show={errorMessage} key="error" variant="danger">
      <p>Opps! Some error occured, please try again:)</p>
    </Alert> */}
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button /*onClick={submitForm}*/ type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
    </>
  );
};

export default Contact;
