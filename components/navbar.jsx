const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Featured</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Connect</a>
        </li>
        <li>
          <a href="#">Wallet</a>
        </li>
      </ul>
      <ul className="social-icon">
        <li>
          <img src="/twitter.png" alt="" />
        </li>
        <li>
          <img src="/m.png" alt="" />
        </li>
        <li>
          <img src="/discord.png" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
