import React from 'react'

const ContactForm = () => {
  return (
    <form>
    <div className="-mx-2 md:items-center md:flex">
      <div className="flex-1 px-2">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          First Name
        </label>
        <input
          type="text"
          placeholder="John "
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="flex-1 px-2 mt-4 md:mt-0">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Doe"
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>

    <div className="mt-4">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Email address
      </label>
      <input
        type="email"
        placeholder="johndoe@example.com"
        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>

    <div className="w-full mt-4">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Message
      </label>
      <textarea
        className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Message"
      ></textarea>
    </div>

    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
      Send message
    </button>
  </form>  )
}

export default ContactForm