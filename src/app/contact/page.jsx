"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [alert, setAlert] = useState(null);
  const handleSubmit = (values, { resetForm }) => {
    const serviceId = "service_czg26ks";
    const templateId = "template_i38i78m";
    const publicKey = "3gWzNuAqGrTcyCRNj";

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
      to_name: "Fattah Arif..",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        resetForm();
        setAlert({ type: "success", message: "Pesan berhasil dikirim!" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setAlert({ type: "error", message: "Gagal mengirim pesan!" });
      });

    setTimeout(() => setAlert(null), 8000);
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    message: Yup.string().required("Please enter your message"),
  });

  return (
    <section className="flex">
      {/* ALERT */}
      <AnimatePresence>
        {alert && (
          <motion.div
            key="alert"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-50 w-[90%] max-w-sm"
          >
            <Alert severity={alert.type}>{alert.message}</Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="mt-4 lg:w-1/2 lg:text-left">
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-secondary font-bold">
              Let’s Talk
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-text md:text-lg md:mt-6">
              Do you have an idea or need help? Contact me, I'd love to hear
              about your project and provide assistance.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <h1 className="text-xl sm:text-4xl lg:text-2xl text-neutral-800 dark:text-secondary font-bold">
              Email
            </h1>
            <p className="text-sm font-medium mt-2 text-neutral-600 dark:text-text lg:text-lg ">
              fattaharif26@gmail.com
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <h1 className="text-xl sm:text-4xl lg:text-2xl text-neutral-800 dark:text-secondary font-bold">
              Location
            </h1>
            <p className="text-sm font-medium mt-2 text-neutral-600 dark:text-text lg:text-lg ">
              Semarang, Indonesia
            </p>
          </div>
        </div>

        {/* FORM */}
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={ContactSchema}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-full space-y-5 flex flex-col lg:w-1/2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1 block"
                >
                  Your Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={`text-sm block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:outline-none placeholder:text-xs
                    ${
                      errors.name && touched.name
                        ? "border-red-500"
                        : "border-stroke focus:ring-primary/20"
                    }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1 block"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`text-sm block w-full p-3 border rounded-lg shadow-sm focus:outline-none placeholder:text-xs
                    ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-stroke focus:ring-primary/20"
                    }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1 block"
                >
                  Subject (Optional)
                </label>
                <Field
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  className="text-sm block w-full p-3 border border-stroke rounded-lg shadow-sm focus:outline-none placeholder:text-xs"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1 block"
                >
                  Your Message
                </label>
                <Field
                  name="message"
                  as="textarea"
                  rows="4"
                  placeholder="Message"
                  className={`text-sm block w-full p-3 border rounded-lg shadow-sm focus:outline-none placeholder:text-xs
                    ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "border-stroke focus:ring-primary/20"
                    }`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                className="block w-full p-3 font-bold rounded-lg shadow-sm focus:outline-none placeholder:text-xs
                bg-primary text-dark dark:text-secondary hover:bg-opacity-80
                  dark:hover:bg-opacity-80"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
