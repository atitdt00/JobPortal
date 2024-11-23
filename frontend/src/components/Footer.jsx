import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/job-logo.jpg" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Street Townplanning-10, kirtipur, kathmandu, Nepal</li>
            <li>jobportal@gmail.com</li>
            <li>+97 4587684254</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            <li to={"/"}>
              <Link>Download Apps</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Career</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Job Alert</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Cover Letter</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Resume</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Blogs</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Tools</Link>
            </li>
            <li to={"/jobs"}>
              <Link>World Template</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bfooter">
        <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved
        </div>
        <div className="rule-section">
        <ul>
          <li>
            <Link><span>Terms & Conditions</span></Link>
          </li>
          <li>
            <Link><span>Privacy & Policy</span></Link>
          </li>
          <li>
            <Link><span>Affiliate Program</span></Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
