import { Link } from "react-router-dom"
import Logo from '../images/logo-white.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo obcaecati, sint maiores corporis fuga amet sed ipsa error eligendi
            quibusdam temporibus dolores quis praesentium quisquam reiciendis.
          </p>
          <div className="footer_socials">
            <a href="https://linkedind.com/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin/>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
              <FaFacebook/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter/>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram/>
            </a>
          </div>
        </article>
        <article>
          <h4>Permalink</h4>
          <Link to="/about">About</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/t">Blog</Link>
          <Link to="/">Case Studies</Link>
          <Link to="/">Events</Link>
          <Link to="/">Comunities</Link>
          <Link to="/">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/about">About</Link>
          <Link to="/">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 Ashenafi & Joy &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer