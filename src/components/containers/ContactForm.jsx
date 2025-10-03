import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjkarqpy");

  if (state.succeeded) {
    return (
      <div className="card -mt-1.5 space-y-4 p-4 md:p-5">
        <div className="bg-green-500 bg-opacity-5 text-center text-sm text-green-500 rounded">
          Email successfully sent! Thanks for your message.
        </div>
      </div>
    );
  }

  return (
    <form
      className="card -mt-1.5 space-y-4 p-4 md:p-5"
      onSubmit={handleSubmit}
    >
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          id="name"
          name="name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded"
        />
      </div>
      
      <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          id="email"
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded"
        />
      </div>
      
      <div className="inputbox">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message..."
          cols="1"
          rows="5"
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded"
        />
      </div>

      {state.errors && state.errors.length > 0 && (
        <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
          Something went wrong while sending the message!
        </div>
      )}

      <button type="submit" disabled={state.submitting} className="btn">
        <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
};

export default ContactForm;
