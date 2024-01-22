import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <form className="w-full max-w-md mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block p-3 text-2xl font-bold text-gray-700" htmlFor="name">
              Name
            </label>
            <input className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none rounded-full focus:shadow-outline " id="name" type="text" placeholder="Your Name"/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block p-3 text-2xl font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
          </div>
        </div> 

        <div className="w-full px-3 mb-6">
            <label className="block mb-2 p-3 text-2xl font-bold text-gray-700" htmlFor="subject">
              Subject
            </label>
            <input className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none rounded-full focus:shadow-outline " id="subject" type="text" placeholder="Subject"/>
          </div>

        <div className="w-full px-3 mb-6">
          <label className="block mb-2 text-2xl font-bold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea className="w-full h-48 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
        </div>
        <div className="w-full px-3 mb-6">
          <button className="w-48 h-12 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Contact;