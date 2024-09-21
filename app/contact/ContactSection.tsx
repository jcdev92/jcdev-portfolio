import ShineBorder from "@/components/magicui/shine-border";
import ContactCard from "@/components/ui/contact/card/ContactCard";
import ContactForm from "@/components/ui/contact/form/ContactForm";
import React from "react";

export default function ContactSection() {
  return (
    <section className="lg:h-screen flex items-center justify-center">
      <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2}>
      <div className="flex flex-col rounded-lg items-center justify-center bg-secondary/40 backdrop-blur-md p-6 md:p-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Keep in touch
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            CARD CONTACT
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {`It's nice to hear from you. Please fill out this form or shoot us an
            email.`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <ContactCard />
          <div className="p-4 py-6 rounded-lg bg-secondary md:p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
      </ShineBorder>
    </section>
  );
}
