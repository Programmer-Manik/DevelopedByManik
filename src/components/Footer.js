const Footer = () => {
  return (
    <div className="footer">
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container"></div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0  fw-bold">Feel free to connect with me on</p>
          </div>
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://github.com/Programmer-Manik" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a href="https://x.com/ManikHossainDev" target="_blank">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082862521278" target="_blank">
              <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/devmanik/" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
