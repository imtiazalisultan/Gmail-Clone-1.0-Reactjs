import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './css/emailList.css'

const EmailType = () => {
  return (
    <div className='emailType' >
            <div className='emailType__option emailType__option--active'>
                <InboxIcon/>
                <p>Primary</p>
            </div>
            <div className='emailType__option'>
                <PeopleIcon/>
                <p>Social</p>
            </div>
            <div className='emailType__option'>
                <LocalOfferIcon/>
                <p>Promotions</p>
            </div>
            
    </div>
  )
}

export default EmailType
