import React from 'react'
import Navbar from './NavBarAdmin'
import ShowFeedbacks from './showfeedbacks'
import ShowOrderssmall from './showordersmall'
import ShowServiceRequests from './showservicerequests'

const AdminHomepage = () => {
  return (
    <>
      <Navbar/>
      <div className='homepage-div'>
       <div className='Title-homepage'>Welcome to Admin Panel!</div>
       <div className='Description-homepage'>
       <div className='Sub-heading'><iframe  className='data-visuliser' src="https://charts.mongodb.com/charts-bhoomi-electonics-bstet/embed/dashboards?id=b37370ee-fe78-40ca-96b0-e048d53133c5&theme=light&autoRefresh=true&maxDataAge=1800&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed"></iframe></div>
       <div style={{display:'flex',height:'1000px', 'flexDirection':'column','backgroundColor':'whitesmoke'}}>      
       <ShowOrderssmall/>
       <ShowServiceRequests/>
       <ShowFeedbacks/>
       </div>
  
       </div>
      </div>
    </>
  )
}

export default AdminHomepage
