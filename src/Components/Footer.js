import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-4 bg-blue-950">
      <h2 className="font-bold text-2xl mt-5 mb-4">EpicEats</h2>
      <div className="flex mb-4">
        <Link to='/' className="mx-2 text-white hover:text-blue-500">Home</Link>
        <Link to='/about' className="mx-2 text-white hover:text-blue-500">About</Link>
        <Link to='/contact' className="mx-2 text-white hover:text-blue-500">Contact</Link>
        <Link to='https://www.linkedin.com/in/rajputakash18/' className="mx-2 text-white hover:text-blue-800">Linkedin</Link>
      </div>
      <p className="text-sm text-gray-100">© {new Date().getFullYear()} Free To Use😊</p>
    </footer>
  )
}

export default Footer;