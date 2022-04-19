import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import locationIcone from "../../../images/footer-icons/location.png";
import mailIcon from "../../../images/footer-icons/mail.png";
import phoneIcone from "../../../images/footer-icons/phone.png";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer ">
      <Container>
        <Row className="mt-4">
          <Col sm={12} lg={4} className="footer-about mt-4">
            <h5>About us</h5>
            <p>
              The Brides editorial team has experienced every aspect of the
              wedding first hand, from being shower planners and party goers to
              wedding attendees for family and friends. Some of us have even
              walked down the aisle ourselves, or are in the midst of planning!
            </p>
          </Col>
          <Col sm={12} lg={4} className="mt-4 contact">
            <h5>Contact Us</h5>
            <p>
              
              <img src={locationIcone} alt="" /> 40 Park Ave, Brooklyn, New York
            </p>
            <p> <img src={phoneIcone} alt="" /> 1-800-111-2222</p>
            <p> <img src={phoneIcone} alt="" />1-800-111-3333</p>
            <p>
              <img src={mailIcon} alt="" /> contact@example.com
            </p>
          </Col>
          <Col sm={12} lg={4} className="mt-4">
            <h5>Quick Links</h5>
            <div className="links">
              <Link className="link" to="/blogs">
                Blogs
              </Link>
              <Link className="link" to="/services">
                Services
              </Link>
              <Link className="link" to="/signup">
                Contact
              </Link>
            </div>
          </Col>
          <Col sm={12} lg={12}>
            <p className="text-center copyright fw-bold my-5">
              <small>
                {new Date().getFullYear()} &copy;Relish.Designed by Eshrat Jahan
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;