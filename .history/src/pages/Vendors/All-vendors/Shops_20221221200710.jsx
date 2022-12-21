import React from 'react'
import "./style2.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { shopData } from './shopData';

const Shops = () => {
  return (
    <>
      <div className='whole'>
        <div className='gap'></div>
        <div className='container'>

          <div className='row gy my-3 gap '>
            <div className='heading'>
              <h1>All Shops</h1>
            </div>
            {
              shopData.map((m, id) => {
                return (
                  <>
                    <div className='col-sm-6 col-md-4 col-lg-3 full ' >
                      <div className="card border" style={{ width: "18rem" }} >
                        <img className="card-img-top " src={m.img} alt="Card image cap" />
                        <div className="card-body">
                          {/* <div className='display'>
                <h5 className="card-title" style={{backgroundColor:"aliceblue"}}>{m.name} </h5>
                <StarBorderPurple500SharpIcon className='star' style={{backgroundColor:"aliceblue"}}/>
                </div> */}
                          <div className='divs' >
                            <div className='name' style={{ backgroundColor: "aliceblue" }}>
                              <p style={{ backgroundColor: "aliceblue" }}>{m.name}</p>
                              <StarIcon style={{ backgroundColor: "aliceblue" }} />
                              <StarIcon style={{ backgroundColor: "aliceblue" }} />
                              <StarIcon style={{ backgroundColor: "aliceblue" }} />
                              <StarIcon style={{ backgroundColor: "aliceblue" }} />
                              <StarIcon style={{ backgroundColor: "aliceblue" }} />
                            </div>
                            <div className='address' style={{ backgroundColor: "aliceblue" }}>
                              <p style={{ backgroundColor: "aliceblue" }}><RoomOutlinedIcon style={{ backgroundColor: "aliceblue" }} />{m.address}</p>
                            </div>
                          </div>
                          <p className='phone'><LocalPhoneOutlinedIcon style={{ backgroundColor: "aliceblue" }} /> {m.phone}</p>
                          <FavoriteBorderOutlinedIcon style={{ backgroundColor: "aliceblue" }} />183 <VisibilityOutlinedIcon style={{ backgroundColor: "aliceblue" }} />183

                          <a href='#' className='visitShop'>Visit Shop <ArrowForwardIcon style={{ backgroundColor: "aliceblue" }} /></a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

          </div>
        </div>
      </div>
    </>
  )
}

export default Shops
