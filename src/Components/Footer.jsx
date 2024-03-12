import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <section>
      <div className="w-full bg-slate-800  text-white">
        <h3 className="mx-2 pt-3 text-center text-2xl font-bold text-white md:text-3xl">
          You can contact me at
        </h3>
        <ul className=" mt-7 flex list-none items-center justify-around">
          <div className="mb-10 flex flex-col">
            <a
              href="https://www.facebook.com/profile.php?id=100005479397367"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mb-3 flex cursor-pointer text-2xl text-white hover:text-yellow-300">
                <FaFacebook size={30} />
                <p className="ml-3">Facebook</p>
              </li>
            </a>
            <a
              href="https://www.instagram.com/adriann.clau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" flex cursor-pointer text-2xl text-white hover:text-yellow-300">
                <FaInstagram size={30} />
                <p className="ml-3">Instagram</p>
              </li>
            </a>
          </div>
          <div className="mb-10 flex flex-col">
            <a
              href="https://www.linkedin.com/in/cocheci-claudiu-adrian-87aa452b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mb-3 flex cursor-pointer text-2xl text-white hover:text-yellow-300">
                <FaLinkedin size={30} />
                <p className="ml-3">Linkedin</p>
              </li>
            </a>
            <a
              href="https://github.com/ClaudiuuAdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flex cursor-pointer text-2xl text-white hover:text-yellow-300">
                <FaGithub size={30} />
                <p className="ml-3">GitHub</p>
              </li>
            </a>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
