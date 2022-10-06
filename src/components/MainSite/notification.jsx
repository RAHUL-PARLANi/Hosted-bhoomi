import React from 'react'

const Notification = (props) => {
const noti =document.getElementById('Notidication')
setTimeout(() => {
    noti.style.display='none'    
}, 1000);
  return (
    <div id='Notidication' style={{'display':'block'}}>
        {props.message}ss
    </div>
  )
}

export default Notification