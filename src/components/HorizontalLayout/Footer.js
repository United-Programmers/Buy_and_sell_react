import React from "react"
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {

  
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
              <section>
                
                
                  <div className="row mt-3">
                  
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">            
                      <h6 className="text-uppercase fw-bold">Logo</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          // style="width: 60px; background-color: #7c4dff; height: 2px" 
                        />

                        <p>
                          Here you can use rows and columns to organize your footer
                          content. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                    </div>
                  
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
                      <h6 className="text-uppercase fw-bold">Customer Care</h6>
                      <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                       // style="width: 60px; background-color: #7c4dff; height: 2px"
                      />

                      <p>
                       <a href="#!" className="text-white">Help center</a>
                      </p>

                      <p>
                        <a href="#!" className="text-white">How to buy</a>
                      </p>

                      <p>
                        <a href="#!" className="text-white">Track your order</a>
                      </p>

                      <p>
                       <a href="#!" className="text-white">Return & refund</a>
                      </p>
                    </div>
                  
                    
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                          <h6 class="text-uppercase fw-bold">Register As</h6>
                          <hr
                          class="mb-4 mt-0 d-inline-block mx-auto"
                          // style="width: 60px; background-color: #7c4dff; height: 2px"
                          />
                          <p>
                            <a href="#!" className="text-white">Buyer</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Seller</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Driver</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Help</a>
                          </p>
                        </div>
                
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                        <h6 className="text-uppercase fw-bold">Contact Us</h6>
                        <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        // style="width: 60px; background-color: #7c4dff; height: 2px"
                        />
                        <p><i className="fas fa-home mr-3"></i> South Africa, johannesburg</p>
                        <p><i className="fas fa-envelope mr-3"></i> unitedprogrammers772@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 27 68 027 5001</p>
                        <p><i className="fas fa-print mr-3"></i> + 27 68 027 5001</p>
                      </div>  
                </div>

                <div className="d-flex justify-content-between">

                <div className="me-5">
                <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href="" className="text-white me-4">
                    <BsFacebook size={25} />
                  </a>
                  <a href="" className="text-white me-4">
                    <FaTwitter size={25} />
                  </a>
                  <a href="" class="text-white me-4">
                    <AiFillInstagram size={25} />
                  </a>
                  <a href="" className="text-white me-4">
                    <AiFillLinkedin size={25} />
                  </a>
                  <a href="" className="text-white me-4">
                    <AiOutlineGithub size={25} />
                  </a>
                </div>

                </div>

              </section>             
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
