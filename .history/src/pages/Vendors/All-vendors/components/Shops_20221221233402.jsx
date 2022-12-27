import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { shopData } from './shopData';

const Shops = () => {
  return (
    <div>
      <div className='row gy my-3 gap'>
        <div className='heading'> <h1>All Shops</h1> </div>
        {
          shopData.map((m, id) => {
            return (
              <div className='col-sm-6 col-md-4 col-lg-3 full ' >
                <div className="card border" style={{ width: "18rem" }} >
                  <img className="card-img-top " src={m.img} alt="Card image cap" />
                  <div className="card-body">
                    <div className='divs' >
                      <div className='name' style={{ backgroundColor: "white" }}>
                        <p style={{ backgroundColor: "white" }}>{m.name}</p>
                        <StarIcon style={{ backgroundColor: "white" }} />
                        <StarIcon style={{ backgroundColor: "white" }} />
                        <StarIcon style={{ backgroundColor: "white" }} />
                        <StarIcon style={{ backgroundColor: "white" }} />
                        <StarIcon style={{ backgroundColor: "white" }} />
                      </div>
                      <div className='address' style={{ backgroundColor: "white" }}>
                        <p style={{ backgroundColor: "white" }}><RoomOutlinedIcon style={{ backgroundColor: "white" }} />{m.address}</p>
                      </div>
                    </div>
                    <p className='phone'><LocalPhoneOutlinedIcon style={{ backgroundColor: "white" }} /> {m.phone}</p>
                    <FavoriteBorderOutlinedIcon style={{ backgroundColor: "white" }} />183 <VisibilityOutlinedIcon style={{ backgroundColor: "white" }} />183

                    <a href='#' className='visitShop'>Visit Shop <ArrowForwardIcon style={{ backgroundColor: "white" }} /></a>
                  </div>
                </div>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default Shops
