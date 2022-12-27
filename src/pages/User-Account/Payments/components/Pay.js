import React from 'react'
import "../style.scss"
const Pay = () => {
  return (
    <>
        <div className='container'>
      <h4>Payment Method</h4>
                           <div className="methods">
                            <div className="cardd">
                                <h6 className='p'>Card</h6>
                                <img  src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png'/>
                                <img src='https://assets.website-files.com/5ff73e5cf154d32b1b12a937/60c724be1baa332257d5fb73_main_logo.jpg'/>
                                <img className='masterCard' src='https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1979.png'/>
                                <br/>
                                <img className='payStack' src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Paystack.png'/>    
                                <img className='zapper' src='https://resources.mynewsdesk.com/image/upload/t_next_gen_logo_limit_x2/feoszcwzpdobhofafbyb.jpg'/>    
                            </div>
                            <div className="paypal"><h6 className='p'> Paypal</h6>
                            <img className='imgPay' src='https://www.hackerone.com/sites/default/files/inline-images/PayPal-Logo.png'/>
                            </div>
                            <div className="googleWallet">
                                
                                <h6 className='p'>GoogleWallet</h6>
                                <img className='goo' src='https://www.androidguys.com/wp-content/uploads/2015/09/Google-Wallet-banner.png'/>
                                </div>
                               
                            </div>
                            <div className='inputFlex'>
                             <input type="text" className="col-xs-3 form-control" placeholder="Enter Card Number" aria-label="Username" />
                              <input type="text" class="form-control" placeholder="Card Holder Name" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className='inputFlex'>
                             <input type="text" className="col-xs-3 form-control" placeholder="Add Gift Card or a VIP code" aria-label="Username" />
                              <input type="text" class="form-control" placeholder="CVC" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                              <div class="form-check checkB">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                            <label class="form-check-label" for="flexCheckIndeterminate">
                              Use this card
                            </label>
                          </div>
                          <button type="button" style={{backgroundColor:"rgba(154, 0, 192, 1)"}} className="btn btn-secondary buttonColor"><span className='colo'>PAY NOW</span></button>

    </div>
    </>
  )
}

export default Pay
