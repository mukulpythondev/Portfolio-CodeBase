import React, { useState } from 'react';

const ContactUsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Update the state to indicate that the form is submitted
  };

  return (
    <section id='contact' className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 hover:text-green-500 ">
          Contact Me
        </h2>
        {isSubmitted ? (
          <p className="text-green-500 mb-4">
            Your message has been sent successfully.
          </p>
        ) : (
          <p className="text-gray-700 mb-4">
            
          </p>
        )}
        <div className="mb-4">
          <p className="text-lime-600">
            Have questions or need assistance? I am here to help.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-full md:text-center mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p>Email: mukulgenious123@gmail.com</p>
            <p>Phone: +91 8882894356</p>
            <p>Address: Krishna Colony, Ghaziabad, India</p>
          </div>
          <div className="md:w-full">
            <h3 className="text-xl font-semibold mb-2">Send Me a Message</h3>
            {/* Contact Form Goes Here */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border text-black border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border text-black border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 text-black border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message/feedback"
                  rows="4"
                  className="w-full text-black p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 hover:scale-95 w-full md:w-auto"
                >
                  {isSubmitted ? 'Message Sent' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
