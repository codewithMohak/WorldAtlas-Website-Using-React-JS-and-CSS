import React from 'react'
import footerContact from '../../api/footerApi.json'
import {IoCallSharp} from 'react-icons/io5'
import {MdPlace} from 'react-icons/md'
import {TbMailPlus} from 'react-icons/tb'
import {NavLink} from 'react-router-dom'
const Footers= () => {
  const footerIcons={
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  }
  return (
    <footer className='footer-section'>
      <div className="container grid grid-three-cols">
          {
            footerContact.map((curData, index)=>{
                const {icon, title,details} =curData;
                return(
                  <div className="footer-contact" key={index}>
                    <div className="icon">{footerIcons[icon]}</div>
                    <div className="footer-contact-text">
                      <p>{title}</p>
                      <p>{details}</p>
                    </div>
                  </div>
                )
            })
          }
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="/" >
                  AgarwalTechnical
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="/"
                    // target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/codewithMohak/WorldAtlas-Website-Using-React-JS-and-CSS/tree/main"
                    // target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers