import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import {useNavigate} from "react-router-dom"
import { openMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';

const EmailBody = ({name, email, subject, message, time}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMailMessage = ()=>{
    dispatch(openMessage({
      name,
      subject,
      message,
      email,
      time
    }))
    navigate("/mail")
  }

  return (
    <div className='emailBody' onClick={setMailMessage} >
        <div className='emailBody__left' >
            <CheckBoxOutlineBlankIcon/>
            <StarBorderIcon/>
            <LabelOutlinedIcon/>
            <h4>{name} </h4>
        </div>

        <div className='emailBody__middle' >

        <div className='emailBody__middle__msg' >
            <p><b>{subject+" - "}</b>{message}</p>
        </div>
        </div>

        <div className='emailBody__right' >
            <p>{time}</p>
        </div>
      
    </div>
  )
}

export default EmailBody
