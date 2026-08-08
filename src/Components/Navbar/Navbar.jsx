import React, { useEffect, useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ]
  {/*for toggle on and off*/ }
  const [isOpen, setIsOpen] = useState(false)
  {/*for section if checked or  unchecked */ }
  const [activeSection, setActiveSection] = useState("")
  {/*for scrolling*/ }
  const [isScrolled, setScroll] = useState(false)
  useEffect(() => {
    const handlescroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handlescroll)
    return () => window.removeEventListener("scroll", handlescroll)
  }, [])
  const handleMenuItemClick = (sectionId) => {
  setActiveSection(sectionId);
  setIsOpen(true);

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414 bg-opacity-40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className='text-white  py-5 flex justify-between items-center '>
        {/*logo*/}
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Arsalan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Muteeb</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mir</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        {/*desktop menu*/}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
              <button className='cursor-pointer' onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/Arsalanmuteebmir"
            target='_blank'
            rel='noopener noreferer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={35} />
          </a>
          <a href="https://www.linkedin.com/in/arsalanmuteebmir/"
            target='_blank'
            rel='noopener noreferer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={35} />
          </a>
        </div>
        {/*Mobile */}
        <div className="md:hidden">
          {
            isOpen ? (<FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)} />)
              : (<FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />)
          }

        </div>
      </div>
      {/*Menuitems for mobile */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5  bg-black/30 backdrop-blur-xl z-50 rounded-lg shadow-lg md:hidden">
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button className='cursor-pointer' onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a href="https://github.com/Arsalanmuteebmir"
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arsalanmuteebmir/"
                target='_blank'
                rel='noopener noreferer'
                className='text-gray-300 hover:text-white'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar