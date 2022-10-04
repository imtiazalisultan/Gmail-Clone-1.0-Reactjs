import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import  './css/sidebar.css';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

const Sidebar = () => {

  const dispatch= useDispatch();

  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon/>} className="compose__btn" onClick={()=>dispatch(openSendMessage())} >COMPOSE</Button>

      <Sidebaroptions Icon={InboxIcon} title="Inbox" number="5" isActive={true} />
      
      <Sidebaroptions Icon={StarRateIcon} title={"Starred"} number={500} />

      <Sidebaroptions Icon={WatchLaterIcon} title={"Snoozed"} number={500} />

      <Sidebaroptions Icon={LabelImportantIcon} title={"Important"} number={200} />

      <Sidebaroptions Icon={SendIcon} title={"Sent"} number={152} />

      <Sidebaroptions Icon={DraftsIcon} title={"Drafts"} number={422} />

      <Sidebaroptions Icon={LabelIcon} title={"Category"} number={52} />

      <Sidebaroptions Icon={DeleteIcon} title={"[Map]/Trash"} number={75} />

      <Sidebaroptions Icon={FindInPageIcon} title={"Documents"} number={85} />

      <Sidebaroptions Icon={ExpandMoreIcon} title={"More"} number={75} />
      <hr/>

      <h3 className='sidebarOptions__heading'>
        Meet
      </h3>
      <Sidebaroptions Icon={VideoCallIcon} title={"New meeting"} />

      <Sidebaroptions Icon={KeyboardIcon} title={"Join a meeting"} />


      
    </div>
  )
}

export default Sidebar
