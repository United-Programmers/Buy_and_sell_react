import React from "react"
import { BsFacebook } from "react-icons/bs"
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
              
                      <h6 className="text-uppercase fw-bold">Products</h6>
                      <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                       // style="width: 60px; background-color: #7c4dff; height: 2px"
                      />

                      <p>
                       <a href="#!" className="text-white">MDBootstrap</a>
                      </p>

                      <p>
                        <a href="#!" className="text-white">MDWordPress</a>
                      </p>

                      <p>
                        <a href="#!" className="text-white">BrandFlow</a>
                      </p>

                      <p>
                       <a href="#!" className="text-white">Bootstrap Angular</a>
                      </p>
                    </div>
                  
                    
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                          <h6 class="text-uppercase fw-bold">Useful links</h6>
                          <hr
                          class="mb-4 mt-0 d-inline-block mx-auto"
                          // style="width: 60px; background-color: #7c4dff; height: 2px"
                          />
                          <p>
                            <a href="#!" className="text-white">Your Account</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Become an Affiliate</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Shipping Rates</a>
                          </p>
                          <p>
                            <a href="#!" className="text-white">Help</a>
                          </p>
                        </div>
                
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        // style="width: 60px; background-color: #7c4dff; height: 2px"
                        />
                        <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                      </div>  
                </div>

                <div className="d-flex justify-content-between">

                <div className="me-5">
                <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href="" className="text-white me-4">
                    <BsFacebook size={30} />
                  </a>
                  <a href="" className="text-white me-4">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="" class="text-white me-4">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i class="fab fa-github"></i>
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
