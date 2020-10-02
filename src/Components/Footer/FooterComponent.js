import React from 'react';
import {Container,Row,Col,Media} from 'react-bootstrap';
import './FooterComponent.css' 

const Footer =()=>{
    return(
        
        <div className="footer">
        <Container>
        <Row>
          <Col sm={3}>
          <Media>
            <img
                width={100}
                height={64}
                className="mr-3"
                src="assets/images/1.png"
                alt="Generic placeholder"
            />
                </Media>
                <hr className="footer-hr"/>
                <small>
                 <p className="footer-content">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
                </small>
          </Col>
          <Col sm={3}>
              <span className="footer-head">Links</span>
              <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
          </Col>
          <Col sm={3}>
          <span className="footer-head">Contacts</span>
          <p>
          <i class="fa fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i class="fa fa-envelope mr-3"></i> info@gmail.com</p>
        <p>
          <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
          </Col>
          
          <Col sm={3}>
          <span className="footer-head">Follow us</span>
          <div class="col-md-5 col-lg-4 ml-lg-0">


<div class="text-center text-md-right">
  <ul class="list-unstyled list-inline">
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fa fa-facebook-f"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fa fa-google"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fa fa-linkedin"></i>
      </a>
    </li>
  </ul>
</div>

</div>
          </Col>
        </Row>
   
      </Container>
      <div id="footer" class=" justify-content-center" >             
                <div class="col-auto">
                    <p id="copy" className="footer-content">© Copyright 2020 Bitpro Technologies</p>
                </div>
           </div>
      </div>
     
    );
}

export default Footer;