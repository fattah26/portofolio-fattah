"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // State untuk form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Konfigurasi EmailJS
    const serviceId = 'service_czg26ks';
    const templateId = 'template_i38i78m';
    const publicKey = '3gWzNuAqGrTcyCRNj';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Fattah..'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset form setelah pengiriman berhasil
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        alert('Pesan berhasil dikirim!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Gagal mengirim pesan!');
      });
  };

  return (
    <section className="flex">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="mt-4 lg:w-1/2 lg:text-left">
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-secondary font-bold">
              "Let’s Talk"
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-text md:text-lg md:mt-6">
              "Do you have an idea or need help? Contact me, I'd love to hear about your project and provide assistance."
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <h1 className="text-xl sm:text-4xl lg:text-2xl text-neutral-800 dark:text-secondary font-bold">
              "Email"
            </h1>
            <p className="text-sm font-medium mt-2 text-neutral-600 dark:text-text lg:text-lg ">
              "fattaharif26@gmail.com"
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 lg:w-1/2">
          <div className="w-full space-y-5 flex flex-col">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-sm block w-full p-2 border border-stroke rounded shadow-sm focus:outline-none placeholder:text-xs"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm block w-full p-2 border border-stroke rounded shadow-sm focus:outline-none placeholder:text-xs"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-sm block w-full p-2 border border-stroke rounded shadow-sm focus:outline-none placeholder:text-xs"
                required
              />
            </div>

            <button
              type="submit"
              className="block w-full p-2 font-bold rounded shadow-sm focus:outline-none placeholder:text-xs
              bg-dark text-secondary hover:bg-opacity-80
              dark:bg-secondary dark:text-dark dark:hover:bg-opacity-80"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
