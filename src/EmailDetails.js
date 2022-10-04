import React from 'react';
import './css/emailList.css'
import { Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectedMail} from "./features/mailSlice"

const EmailDetails = () => {

    const mail = useSelector(selectedMail);
   // console.log(mail);
    const navigate = useNavigate(); //useHistory is hook which is provided by React router DOM 

  return (
    <div className='email__details'>
      <h1>Email details</h1>
      <div className='emailList__settings' >
        <div className='emailList__settingLeft'>
            <IconButton>
                <ArrowBackIcon onClick={()=>navigate('/')} />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

      
        <div className='emailList_settingRight'>
            <p>1-50 of 10,222</p>
            <IconButton>
                < ChevronLeftIcon/>
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>
      
    </div>

    <div className='email__details_message'>
    <div className='email__details__header'>
        <div className='email_details_header_left'>
        <h4>{mail.subject}</h4>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
          
        </div>
        <div className='email_details_header_right'>
            <IconButton>
            <PrintIcon/>
            </IconButton>
            <IconButton>
              <LaunchIcon/>  
            </IconButton>
        </div>

    </div>
    <div className='email__details__middle_header'>
        <div className='email_details_middle_header_left'>
           
            <IconButton>
                <Avatar/>
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
        </div>

        <div className='email_details_middle_header_right'>
            <p>{mail.time}</p>

            <IconButton>
            <StarIcon/>
            </IconButton>

            <IconButton>
              <ReplyIcon/>
            </IconButton>

            <IconButton>
              <MoreVertIcon/> 
            </IconButton>
        </div>
       

    </div>
    <div className='email__details_body'>
            <p>{mail.message}</p>
    </div>
    </div>

    </div>
  )
}

export default EmailDetails
