import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <FiMail />,
      name: "Email",
      url: "mailto:your.email@example.com",
      color: "bg-red-500",
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-600",
    },
    {
      icon: <FiGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "bg-gray-800",
    },
    {
      icon: <FiMapPin />,
      name: "Location",
      url: "https://maps.google.com",
      color: "bg-green-500",
    },
    {
      icon: <FiPhone />,
      name: "Phone",
      url: "tel:+1234567890",
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-indigo-900/10"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg text-cyan-400/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's create
            something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-3xl opacity-20 blur-lg"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      I'll get back to you soon. Thank you!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    ref={formRef}
                    className="space-y-6"
                  >
                    <div className="space-y-8">
                      {[
                        { name: "name", label: "Your Name", type: "text" },
                        {
                          name: "email",
                          label: "Email Address",
                          type: "email",
                        },
                        {
                          name: "message",
                          label: "Your Message",
                          type: "textarea",
                        },
                      ].map((field) => (
                        <div key={field.name} className="relative">
                          {field.type === "textarea" ? (
                            <>
                              <motion.textarea
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                onFocus={() => setActiveField(field.name)}
                                onBlur={() => setActiveField(null)}
                                className="w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 resize-none min-h-[150px]"
                                style={{
                                  borderColor:
                                    activeField === field.name
                                      ? "#22d3ee"
                                      : "#374151",
                                }}
                                required
                              />
                              <motion.label
                                htmlFor={field.name}
                                className={`absolute left-4 transition-all duration-300 ${
                                  formData[field.name] ||
                                  activeField === field.name
                                    ? "top-0 px-1 text-xs transform -translate-y-1/2 bg-gray-900"
                                    : "top-3 text-gray-400"
                                }`}
                                style={{
                                  color:
                                    activeField === field.name
                                      ? "#22d3ee"
                                      : "#9CA3AF",
                                }}
                              >
                                {field.label}
                              </motion.label>
                            </>
                          ) : (
                            <>
                              <motion.input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                onFocus={() => setActiveField(field.name)}
                                onBlur={() => setActiveField(null)}
                                className="w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2"
                                style={{
                                  borderColor:
                                    activeField === field.name
                                      ? "#22d3ee"
                                      : "#374151",
                                }}
                                required
                              />
                              <motion.label
                                htmlFor={field.name}
                                className={`absolute left-4 transition-all duration-300 ${
                                  formData[field.name] ||
                                  activeField === field.name
                                    ? "top-0 px-1 text-xs transform -translate-y-1/2 bg-gray-900"
                                    : "top-3 text-gray-400"
                                }`}
                                style={{
                                  color:
                                    activeField === field.name
                                      ? "#22d3ee"
                                      : "#9CA3AF",
                                }}
                              >
                                {field.label}
                              </motion.label>
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold hover:from-pink-400 hover:to-cyan-400 transition-all duration-500 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">Send Message</span>
                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                          transition: { duration: 1.5, repeat: Infinity },
                        }}
                      >
                        <FiSend className="group-hover:rotate-12 transition-transform" />
                      </motion.span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-pink-400/20 shadow-lg shadow-pink-400/10">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center text-white text-xl mr-4`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{link.name}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors">
                        {link.url.replace(/^mailto:|^https?:\/\//, "")}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Map (Placeholder) */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-400/20 shadow-lg shadow-cyan-400/10"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-400/10 to-pink-400/10 flex items-center justify-center relative">
                <div className="text-5xl">🌎</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-8 h-8 bg-red-500 rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 px-4 py-2 rounded-full text-sm">
                  Based in Digital World
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </section>
  );
};

export default Contact;
