import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    if (openNav === true) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };
  return (
    <nav>
      <div className="toggler" onClick={toggleNav}>
        <img src="/toggler.png" alt="" />
      </div>
      <ul className={openNav ? "menu open-menu" : "menu"}>
        <li>
          <a href="#banner">About</a>
        </li>
        <li>
          <a href="#feature">Featured</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
        <li>
          <a href="#connect">Wallet</a>
        </li>
      </ul>
      <ul className="social-icon">
        <li>
          <a href="https://twitter.com/nippleverse" target="_blank">
            <img src="/twitter.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://opensea.io/collection/nippleverse" target="_blank">
            <img src="/m.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/nippleverse" target="_blank">
            <img src="/discord.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
