import React from 'react'

function TotalProductsList() {

  const currTime = new Date().toJSON().slice(14, 19 );

  const listOfProducts = {
    isLoading:'false',
    data:[
      {
        pic: 'pichere',
        name: 'Macbook Pro',
        dateAssign: '2023-05-15',
        dateExpect: '2023-05-18',
        time: currTime,
        type: 'Business place',
        deliverAddress: '21 Dorls street Berea Johanesburg',
        status:'delivered',
        action: '.......',
        id: '1',
      },
      {
        pic: 'pichere',
        name: 'Macbook Pro',
        dateAssign: '2023-05-15',
        dateExpect: '2023-05-18',
        time: currTime,
        type: 'Business place',
        deliverAddress: '21 Dorls street Berea Johanesburg',
        status:'delivered',
        action: '.......',
        id: '2',
      },
      {
        pic: 'pichere',
        name: 'Macbook Pro',
        dateAssign: '2023-05-15',
        dateExpect: '2023-05-18',
        time: currTime,
        type: 'Business place',
        deliverAddress: '21 Dorls street Berea Johanesburg',
        status:'delivered',
        action: '.......',
        id: '3',
      }
    ]
  }



  return (
    <>
      <div className='tot-produts-contanier'>
        <h5 className='tot-products-head'>Total Products</h5>
        <div className='table-grid'>
          <div className='headers'>
            <h6>Pic</h6>
            <h6>Product name</h6>
            <h6>Assigned Date</h6>
            <h6>Expected Date</h6>
            <h6>Time</h6>
            <h6>Type</h6>
            <h6>Deliver address</h6>
            <h6>Status</h6>
            <h6>Action</h6>
          </div>
          <div className='product-1'>
            {
              listOfProducts.isLoading === 'false' ?
                listOfProducts.data.map((data) => {
                  return (
                    <div key={data.id} className='product-info'>
                      <p>{data.pic}</p>
                      <p>{data.name}</p>
                      <p>{data.dateAssign}</p>
                      <p>{data.dateExpect}</p>
                      <p>{data.time}</p>
                      <p>{data.type}</p>
                      <p>{data.deliverAddress}</p>
                      <p>{data.status}</p>
                      <p>{data.action}</p>
                    </div>
                  )
                  
                })
              :
              <div>Hello you don do rubbish</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TotalProductsList
