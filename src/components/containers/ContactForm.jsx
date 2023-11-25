import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { settings } from "../../settings/settings";

const ContactForm = () => {
  const currentForm = useRef();

  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        settings.emailjs_serviceid,
        settings.emailjs_templateid,
        currentForm.current,
        settings.emailjs_publickey
      )
      .then(
        (result) => {
          if (result.status === 200 && result.text) {
            setServerError(false);
            setServerSuccess("Email successfully sent!");
          }
        },
        (error) => {
          setServerSuccess(false);
          setServerError("Something went wrong while sending the message!");
        }
      );
  };

  return (
    <form
      ref={currentForm}
      className="card -mt-1.5  space-y-4 p-4 md:p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <>
            {errors.name.type === "required" && (
              <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
                Name is required!
              </div>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          id="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email && (
          <>
            {errors.email.type === "required" && (
              <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
                Email is required!
              </div>
            )}
            {errors.email.type === "pattern" && (
              <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
                Invalid email address!
              </div>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message..."
          cols="1"
          rows="5"
          id="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <>
            {errors.message.type === "required" && (
              <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
                Message is required!
              </div>
            )}
          </>
        )}
      </div>
      {!serverSuccess && serverError && (
        <div className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500 rounded">
          {serverError}
        </div>
      )}
      {!serverError && serverSuccess && (
        <div className="bg-green-500 bg-opacity-5 text-center text-sm text-green-500">
          {serverSuccess}
        </div>
      )}
      <button type="submit" className="btn">
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
