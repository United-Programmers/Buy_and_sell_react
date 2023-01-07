import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Col, Collapse } from 'reactstrap'

const Filter__one = () => {

    const [accordion, setAccordion] = useState(true)
    const [accordion_2, setAccordion_2] = useState(false)
    const [accordion_3, setAccordion_3] = useState(true)
    const [accordion_4, setAccordion_4] = useState(true)
    const [accordion_5, setAccordion_5] = useState(false)
    const [accordion_6, setAccordion_6] = useState(false)

    const AccordionHandle = () => setAccordion(!accordion)
    const AccordionHandle_2 = () => setAccordion_2(!accordion_2)
    const AccordionHandle_3 = () => setAccordion_3(!accordion_3)
    const AccordionHandle_4 = () => setAccordion_4(!accordion_4)
    const AccordionHandle_5 = () => setAccordion_5(!accordion_5)
    const AccordionHandle_6 = () => setAccordion_6(!accordion_6)


    return (
        <div className='Accordion__container'>
            <CardBody>
                <div className="accordion accordion-flush" id="accordionFlushExample">


                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle_3} style={{ cursor: "pointer" }}>
                                FILTER BY CATEGORIES
                            </button>
                        </h2>

                        <Collapse isOpen={accordion_3} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> Sport (50) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Fashion (30) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> School (25) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Electronics (15) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Kitchens (10) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Health & Beauty (10) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Groceries (10) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Baby toys (10) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> Music & Sound (10) </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle} style={{ cursor: "pointer" }}>
                                FILTER BY PRICE
                            </button>
                        </h2>

                        <Collapse isOpen={accordion} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> R 100 to R200 (50) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> R 200 to R250 (30) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> R 300 to R500 (25) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> R 500 to R1000 (15) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> R 1000 to R1500 (10) </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle_2} style={{ cursor: "pointer" }}>
                                FILTER BY STOCKS
                            </button>
                        </h2>

                        <Collapse isOpen={accordion_2} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> In Stocks (50) </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle_5} style={{ cursor: "pointer" }}>
                                FILTER BY DISCOUNT
                            </button>
                        </h2>

                        <Collapse isOpen={accordion_5} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> (50) In Discount </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>



                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle_4} style={{ cursor: "pointer" }}>
                                TOP RATED PRODUCTS
                            </button>
                        </h2>

                        <Collapse isOpen={accordion_4} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> 5 Stars (20) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> 4 Stars (65) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> 3 Stars (45) </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckDefault"> 2 & 1 Stars (75) </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header " id="headingFlushOne">
                            <button className="accordion-button fw-medium text-custom-primary" type="button" onClick={AccordionHandle_6} style={{ cursor: "pointer" }}>
                                FILTER BY CITY
                            </button>
                        </h2>

                        <Collapse isOpen={accordion_6} className="accordion-collapse">
                            <div className="accordion-body">
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> Johannesburg </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> Pretoria </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> Durban </label>
                                </div>
                            </div>
                        </Collapse>
                    </div>




                </div>
            </CardBody>
        </div>
    )
}

export default Filter__one