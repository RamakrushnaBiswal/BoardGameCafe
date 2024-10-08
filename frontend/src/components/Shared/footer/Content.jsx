import  { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/playcafe.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Content() {
  return (
    <div className="bg-black pt-10 h-full w-full flex flex-col justify-center items-center">
      <Nav />
      <Section2 />

            {/* Social Media Icons */}
          <div className="text-white mt-10 flex justify-center space-x-6">
          <a href="https://www.facebook.com/sipnplaynyc/" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/sipnplaynyc/?hl=en" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@sipnplaynycofficial?lang=en" aria-label="Tiktok" className="hover:text-gray-400">
            <FaTiktok size={24} />
          </a>
        </div>

    </div>
  );
}

const Section2 = () => {
  const [isWide, setIsWide] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 640);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isWide === null) return null;

  return (
    <>
      <div
        className={`flex ${
          isWide ? "justify-between items-end mt-20" : "flex-col items-center"
        } text-white`}
      >
        <h1
          className={`${
            isWide ? "text-[9vw] mr-8" : "text-[12vw] mt-10"
          } leading-[0.8]`}
        >
          BoardGame {!isWide && <br />}
        </h1>
        <h1
          className={`${
            isWide ? "text-[9vw]" : "text-[12vw] mt-4"
          } leading-[0.8]`}
        >
          Cafe
        </h1>
        <p className={isWide ? "" : "mt-8"}>©2024 by Sip & Play</p>
      </div>
    </>
  );
};

const Nav = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },

    {
      name: "Reservation",
      link: "/reservation",
    },
    {
      name: "BoardGame",
      link: "/boardgame",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  const socialLink = [
    { name: "Facebook", link: "https://www.facebook.com/sipnplaynyc/" },
    { name: "Instagram", link: "https://www.instagram.com/sipnplaynyc/?hl=en" },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@sipnplaynycofficial?lang=en",
    },
  ];
  const emailAddress = "sipnplaynyc@gmail.com";

  return (
    <div className="flex shrink-0 gap-4 mt-10 sm:gap-20 justify-between">
      <div className="mr-20 mt-4">
          <img
            className="w-36  bg-transparent p-0 rounded-3xl h-36"
            alt="logo"
            src={Logo}
          />
        </div>
      <div className="flex flex-col gap-2 text-gray-400">
        
        <h3 className="mb-2 uppercase text-white">About</h3>
        {navLinks.map((item, index) => (
          <a
            className="hover:text-white duration-300"
            key={index}
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Socials</h3>
        {socialLink.map((item, index) => (
          <a
            target="_blank"
            className="hover:text-white duration-300"
            key={index}
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Contact Us</h3>
        <a
          href={`mailto:${emailAddress}`}
          className="block mb-2 hover:underline"
        >
          {emailAddress}
        </a>
        <a href="tel:+17189711684" className="mb-2 hover:underline">
          718-971-1684
        </a>
      </div>
    </div>
  );
};
