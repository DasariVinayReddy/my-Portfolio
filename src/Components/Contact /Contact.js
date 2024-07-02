import React, { useState, useEffect } from "react";
import Hands from "./../../asstes/portfolio/hands.png";
import "./contact.css";

const Contact = () => {
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error, setError] = useState("");

  // for alerts message after submit button hits
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    formSubmitted: false, // Track if form submission was successful
    error: null, // Track error message if email sending fails
  });

  useEffect(() => {
    let timeout;

    if (alertMessage) {
      timeout = setTimeout(() => {
        setAlertMessage("");
      }, 5000); // 5000ms = 5 seconds
    }

    return () => clearTimeout(timeout);
  }, [alertMessage]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs before submitting
    if (!validateInputs()) {
      return;
    }

    const { name, phone, email, subject, message } = formData;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_HOST}/api/sendmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, subject, message }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Email sent!", responseData);
        setAlertMessage("Email sent successfully!");
        setAlertType("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
          formSubmitted: true,
        });
        console.log("Email sent!", responseData);
        setFormData((prevState) => ({ ...prevState, formSubmitted: true }));
      } else {
        console.log("Email not sent. Status:", response.status);
        setAlertMessage("Failed to send email. Please try again later.");
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("An error occurred while sending the email.");
      setAlertType("error");
    }
    setFormData("");
  };

  // Validation function
  const validateInputs = () => {
    const { name, phone, email, subject, message } = formData;

    // Check if name is defined before accessing its properties
    if (name) {
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/g.test(name);
      const hasNumbers = /\d/g.test(name);

      if (hasSymbols) {
        setError("Name should not contain symbols");
        return false;
      } else if (hasNumbers) {
        setError("Name should not contain numbers");
        return false;
      } else {
        setError("");
      }
    } else {
      setError("Name is required");
      return false;
    }

    // Check if phone is defined before accessing its length
    if (phone && phone.length < 10) {
      setError1("Phone number should be at least 10 numbers");
      return false;
    } else {
      setError1("");
    }

    // Check if email is defined before accessing its properties
    if (email) {
      if (email.length > 50) {
        setError2("Email should not exceed 50 characters");
        return false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setError2("Invalid email format");
          return false;
        } else {
          setError2("");
        }
      }
    } else {
      setError2("Email is required");
      return false;
    }

    // Check if subject is defined before accessing its length
    if (subject && subject.length > 50) {
      setError3("Subject should not exceed 50 characters");
      return false;
    } else {
      setError3("");
    }

    // Check if message is defined before accessing its length
    if (message && message.length > 200) {
      setError4("Message should not exceed 200 characters");
      return false;
    } else {
      setError4("");
    }

    return true; // All validations passed
  };

  // name validation

  //Phone Number validation
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="portfolio" id="Contact">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="-mx-4 flex  flex-wrap">
          <div className="w-full px-4">
            <div className=" mb-12 text-center mx-auto max-w-[510px] item-center lg:mb-20 ">
              <h2 className="text-5xl portfolio-text">Contact With Me</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center items-center">
        <div className=" portfolio-card w-[432px] h-[680px] rounded-3xl mr-[38px] p-6 mb-10">
          <div className="rectangle-3-2 w-[383px] h-[228px] rounded-3xl bg-gray-300 mt-4 ">
            <img
              src={Hands}
              alt=""
              className="rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            />
          </div>
          <div className="flex  text-2xl mt-10 font-bold text-[233,237,245] mb-4 ml-2">
            Dasari Vinay Reddy
          </div>
          <p className="text-gray-500 mb-10 ml-2">Software Engineer</p>
          <p className="text-gray-700 mb-8 ml-2">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <p className="text-container mb-3 ml-2">
            Phone : +91 7799262831
            <span className="underline"></span>
          </p>
          <p className="text-container ml-2">
            Email : rvinay968@gmail.com
            <span className="underline"></span>
          </p>
        </div>
        <div className="portfolio-card w-[762px] h-[680px] rounded-3xl">
          <div className="isolate  px-6  ">
            {alertMessage && (
              <div
                className={`p-4 mt-2 mb-4 text-sm rounded-lg ${
                  alertType === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {alertMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className=" mx-auto py-10 max-w-xl ">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Your Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        error ? "ring-red-600" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        error ? "focus:ring-red-600" : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-600">{error}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone Number"
                      autoComplete="family-name"
                      value={formData?.phone}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        error ? "ring-red-600" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        error ? "focus:ring-red-600" : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                    {error1 && (
                      <p className="mt-2 text-sm text-red-600">{error1}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter  Email Address"
                      autoComplete="email"
                      value={formData?.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        error ? "ring-red-600" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        error ? "focus:ring-red-600" : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                    {error2 && (
                      <p className="mt-2 text-sm text-red-600">{error2}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter Subject"
                      autoComplete="subject"
                      value={formData?.subject}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        error ? "ring-red-600" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        error ? "focus:ring-red-600" : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                    {error3 && (
                      <p className="mt-2 text-sm text-red-600">{error3}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter message here"
                      rows={4}
                      value={formData?.message}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        error ? "ring-red-600" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        error ? "focus:ring-red-600" : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                      defaultValue={""}
                    />
                    {error4 && (
                      <p className="mt-2 text-sm text-red-600">{error4}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full talk rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
