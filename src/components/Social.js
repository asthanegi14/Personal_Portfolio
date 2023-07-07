import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
    return (
        <div className='social-bx'>
            <ul>
                <li className='lis'>
                    <a href="https://www.linkedin.com/in/astha-negi-771b22216/" className='la'>
                        <>
                            LinkedIn <FaLinkedin size={30} /></>
                    </a>
                </li>
                <li className='lis'>
                    <a href="https://github.com/asthanegi14" className='la'>
                        <>
                            GitHub <FaGithub size={30} /></>
                    </a>
                </li>
                <li className='lis'>
                    <a href="mailto: asthanegi539@gmail.com" className='la'>
                        <>
                            GMail <HiOutlineMail size={30} /></>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social