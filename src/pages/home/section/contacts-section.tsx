import GenericInput from "../../../components/generic/generic-input.component";
import { useEffect, useState } from "react";
import GenericTextarea from "../../../components/generic/generic-textarea.component";
import BaseButton from "../../../components/base-button.component";
import { IoMdSend } from "react-icons/io";
import { contacts } from "../../../constants/data";
import ContactCard from "../../../components/contact-card.component";
import emailjs from "@emailjs/browser"; // Import EmailJS library
import { LuLoader } from "react-icons/lu";
import { Toast } from "../../../globals/styles";
import { BiLogoWhatsapp } from "react-icons/bi";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // Track loading state
  const [submitMessage, setSubmitMessage] = useState<{type:"error"|"success", message:string}|null>(null)

  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
  const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY

  useEffect(()=>{
    if(submitMessage){
      const timer = setTimeout(()=>{
        setSubmitMessage(null)
      }, 3000);
      return ()=> clearTimeout(timer);
    }
  }, [submitMessage]);

  // Handle input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, message: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    if(submitMessage || loading){ return }
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitMessage({message:"Please fill out all form fields ", type:"error"})
        setLoading(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID, // Replace with your EmailJS service ID
        TEMPLATE_ID, // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY // Replace with your EmailJS user ID
      );

      // Show success message
      setSubmitMessage({message:"Message sent successfully!", type:"success"});
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Error sending message:", error, "\n With public key : ", PUBLIC_KEY);
      setSubmitMessage({message:"Failed to send message. Please try again later", type:"error"});
    } finally {
      setLoading(false); // Reset loading state
    }
  };



  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 items-start">
          {/* Left Column: Contact References */}
          <div className="flex flex-col items-center flex-wrap justify-start gap-4">
            {contacts.map((contact, index) => (
              <a
                href={contact.contact}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
                key={index}
              >
                <ContactCard className="w-full" contactItem={contact} />
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-md shadow-sm shadow-dark-transparent p-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-dark text-center w-full capitalize">
              Send Me a Message
            </h3>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name and Email (Horizontal Alignment) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <GenericInput
                  type="text"
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleNameChange}
                  
                />

                {/* Email Field */}
                <GenericInput
                  type="email"
                  name="email"
                  label="Your Email address"
                  value={formData.email}
                  onChange={handleEmailChange}
                  
                />
              </div>

              {/* Message Field */}
              <GenericTextarea
                name="message"
                rows={5}
                label="Your Message"
                value={formData.message}
                onChange={handleMessageChange}
              />

              {/* Submit Button */}
              <BaseButton className={`${loading ? "!cursor-not-allowed !opacity-80":""}`}
                submitType="submit" // Disable button while loading
              >
                {loading ? <>Send Message <LuLoader className="text-lg ml-2 animate-spin"/></> : <>Send Message <IoMdSend className="text-lg ml-2"/></>}
              </BaseButton>

              {/* Success Message */}
              { submitMessage &&
                <Toast className={`w-full fixed -bottom-[1rem] left-0 right-0  px-8 py-3 bg-transparent flex items-center justify-center`}>
                   <p className={` ${submitMessage.type === "success" ? "bg-green-500":"bg-red-500"} text-light text-xs w-full max-w-[20rem] text-center mx-auto  px-8 py-3 rounded-md`}>{submitMessage.message}</p> 
                   </Toast>
              }
              {/* <p className={`bg-green-500 text-light text-xs text-center mt-4 -translate-y-[5rem] fixed -bottom-[1rem] left-1/2 -translate-x-1/2 px-8 py-3 rounded-md`}>Something</p> */}
            </form>
          </div>
        </div>
      </div>
      <a href="https://wa.me/243975623008" target="_blank" rel="noopener noreferrer" className="fixed right-[3rem] bottom-[3rem] p-3 rounded-full bg-blue-secondary border border-dark-transparent shadow-lg hover:-translate-y-1">
        <BiLogoWhatsapp className="text-4xl text-light"/>
      </a>
    </section>
  );
};

export default ContactSection;