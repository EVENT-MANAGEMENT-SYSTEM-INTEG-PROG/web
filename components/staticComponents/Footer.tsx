import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="footer bg-gray-200 text-white h-1/3 border-t-1 border-solid border-gray-900 pb-20 flex-row flex"
        style={{
          background: "#000508",
        }}
      >
        <div className="leftPart flex-col flex w-2/5">
          <div className="ml-32">
            <img
              src="/Gold.png"
              alt="Image Logo"
              className="mt-12 w-20 object-contain"
            />
            <h1 className="mt-6">EVENT WISE</h1>
            <div className="flex items-center justify-start mt-8">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaDiscord size={32} />
              </a>
              <a
                href="https://www.reddit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaReddit size={32} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={32} />
              </a>
            </div>
            <h1 className="text-gray-500 text-sm mt-6">
              &copy; 2024 Event Wise. All rights reserved.
            </h1>
          </div>
        </div>

        <div className="midPart flex-row flex w-1/3 space-x-20 ">
          <div className="flex-col flex mt-12 ml-36">
            <h1 className="font-normal  mb-2">EVENTWISE</h1>
            <div className="font-thin space-y-2">
              <h2>Grants</h2>
              <h2>EventWise cop</h2>
              <h2>Media Kit</h2>
              <h2>Careers</h2>
              <h2>Disclamer</h2>
            </div>
          </div>
          <div className="flex-col flex mt-12">
            <h1 className="font-normal  mb-2">GET CONNECTED</h1>
            <div className="font-thin space-y-2">
              <h2>Ecosystem</h2>
              <h2>Blog</h2>
              <h2>Newsletter</h2>
            </div>
          </div>
        </div>
        <div className="rightPart w-3/12 space-x-20  flex flex-col items-start">
          <div className="mt-12 ml-32 flex items-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGlobe size={24} className="mr-2" />
              <h1 className="ml-2">EN</h1>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;