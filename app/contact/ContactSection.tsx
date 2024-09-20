import ContactCard from "@/components/ui/contact/card/ContactCard";
import ContactForm from "@/components/ui/contact/form/ContactForm";
import React from "react";

export default function ContactSection() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col rounded-lg items-center justify-center  bg-secondary/40 backdrop-blur-md p-8 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Keep in touch
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            JC CARD CONTACT
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <ContactCard/>
          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
