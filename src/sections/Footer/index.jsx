const Footer = () => (
  <footer>
    <p className="text-center text-base font-medium">
      &copy; Copyright {new Date().getFullYear()}{" "}
      <a
        href=""
        className="transition-all duration-400 hover:text-sky-500"
        target="_blank"
      >
        kama 
      </a>
    </p>
  </footer>
);

export default Footer;
