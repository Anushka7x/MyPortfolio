import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mldlgvwe");

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-periwinkle dark:bg-gray-900 font-poppins relative">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Have a question, proposal, or just want to say hi? Feel free to drop a message below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="200">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)]">Email</h4>
            <p className="text-gray-700 dark:text-gray-300">anushkaaddubeyy@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)]">Phone</h4>
            <p className="text-gray-700 dark:text-gray-300">+91-7999172774</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)]">Follow</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/anushka-dubey-19a80a226/" className="text-[rgb(29,136,254)] hover:text-[rgb(20,115,230)]">LinkedIn</a>
              <a href="https://github.com/Anushka7x" className="text-[rgb(29,136,254)] hover:text-[rgb(20,115,230)]">Github</a>
            </div>
          </div>
        </div>

        {/* Formspree Form */}
        {state.succeeded ? (
          <div className="text-green-600 text-xl font-medium">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(29,136,254)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(29,136,254)]"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(29,136,254)]"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[rgb(29,136,254)] text-white px-6 py-2 rounded-md hover:bg-[rgb(20,115,230)] transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
