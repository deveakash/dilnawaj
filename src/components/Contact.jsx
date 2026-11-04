import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from "../data/portfolioData";

const Contact = () => {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    const form = formRef.current;

    const firstName = form.querySelector("#firstName")?.value || "";
    const lastName = form.querySelector("#lastName")?.value || "";
    const email = form.querySelector("#email")?.value || "";
    const message = form.querySelector("#message")?.value || "";

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    const isConfigured =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

    if (!isConfigured) {
      const mailtoLink =
        `mailto:${personalInfo.emails.primary}` +
        `?subject=Portfolio Contact from ${firstName} ${lastName}` +
        `&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
        )}`;

      window.open(mailtoLink, "_blank");

      setStatus("success");
      form.reset();

      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle =
    "w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#ff2a2a] focus:bg-[#151515]";

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0a0a0a] text-white py-24 md:py-32 px-5 md:px-10 overflow-hidden"
    >
      {/* Background Decoration */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff2a2a]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#ff2a2a]" />

            <span className="text-[#ff2a2a] text-xs font-semibold uppercase tracking-[0.25em]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05]">
            Let's Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-[#ff7777]">
              Together.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mt-7 leading-relaxed">
            Have an interesting project in mind or just want to connect? I'd
            love to hear from you. Let's create something meaningful together.
          </p>
        </motion.div>

        {/* Main Contact Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left Side - Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                Let's start a conversation
              </h3>

              <p className="text-gray-400 text-sm leading-7 max-w-md">
                Whether you have a project proposal, a question, or simply want
                to say hello, my inbox is always open.
              </p>
            </div>

            {/* Email */}

            <div className="group flex items-start gap-5 p-5 rounded-2xl border border-white/10 bg-[#111111] hover:border-[#ff2a2a]/50 transition-all duration-300 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff2a2a]/10 text-[#ff2a2a] shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Email Me
                </p>

                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="text-sm sm:text-base font-medium break-all hover:text-[#ff2a2a] transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </div>
            </div>

            {/* Availability */}

            <div className="flex items-start gap-5 p-5 rounded-2xl border border-white/10 bg-[#111111]">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 text-green-500 shrink-0">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Availability
                </p>

                <p className="text-sm sm:text-base font-medium">
                  Open for new opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}

            {/* Social Links */}

            <div className="mt-12">
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-5">
                Find Me On
              </p>

              <div className="flex flex-wrap gap-3">
                {(Array.isArray(socialLinks)
                  ? socialLinks
                  : Object.values(socialLinks || {})
                ).map((social, index) => {
                  const url =
                    typeof social === "string"
                      ? social
                      : social.url || social.href;

                  const name =
                    typeof social === "string"
                      ? `Social ${index + 1}`
                      : social.name ||
                        social.platform ||
                        social.title ||
                        `Social ${index + 1}`;

                  if (!url) return null;

                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full border border-white/10 text-sm text-gray-300 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:text-white transition-all duration-300"
                    >
                      {name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            <div className="mb-9">
              <h3 className="text-2xl font-semibold mb-3">Send me a message</h3>

              <p className="text-gray-500 text-sm">
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* Name Fields */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-gray-300 mb-3"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="John"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-gray-300 mb-3"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Doe"
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-3"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className={inputStyle}
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-3"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className={`${inputStyle} resize-none`}
                />
              </div>

              {/* Permission */}

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="permission"
                  name="permission"
                  className="mt-1 w-4 h-4 accent-[#ff2a2a] cursor-pointer"
                />

                <label
                  htmlFor="permission"
                  className="text-xs text-gray-400 leading-relaxed cursor-pointer"
                >
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`
                  w-full py-4 px-6 rounded-xl font-semibold text-sm
                  flex items-center justify-center gap-3
                  transition-all duration-300
                  ${
                    status === "sending"
                      ? "bg-gray-700 cursor-not-allowed opacity-70"
                      : status === "success"
                        ? "bg-green-600"
                        : status === "error"
                          ? "bg-red-800"
                          : "bg-[#ff2a2a] hover:bg-[#e51f1f] hover:shadow-[0_0_30px_rgba(255,42,42,0.25)]"
                  }
                `}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending Message...
                  </>
                ) : status === "success" ? (
                  "Message Sent Successfully ✓"
                ) : status === "error" ? (
                  "Failed — Please Try Again"
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                I typically respond within 24–48 hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed & Built with passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
