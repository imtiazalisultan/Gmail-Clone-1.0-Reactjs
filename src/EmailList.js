
import React, { useEffect, useState } from 'react';
import './css/emailList.css';
import EmailBody from './EmailBody';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';
import { db } from './fireBase';

const EmailList = () => {

  const [emails, setEmails] = useState([]);

  useEffect(()=>{

    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{    //onSnapShot method does when the new email is HIT it will captured by this method...& it will return the snapshot
          setEmails(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
          })))  
    })
  },[]);
 // console.log(emails);

  return (
    <div className='emailList'>
      <EmailListSetting/>
      <EmailType/>

     {
      emails.map(({id, data})=>{
         return <EmailBody key={id}  name={data.fromName} email={data.from} subject={data.subject}  message={data.message}  time={new Date(data.timestamp ?.seconds*1000).toLocaleTimeString()} />
      })
     }

      
      
    </div>
  )
}

export default EmailList
