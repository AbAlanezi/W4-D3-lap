import React from 'react'
import axios from 'axios'

function Post() {
    const [nam , setName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmailName] = React.useState("")
    const [phone , setPhoneName] = React.useState("")
const api = "https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api"

const PostData = ()=>{
    if(phone.length >=10 &&lastName.length>=3  ){
        
        axios.post(api,{
            nam,
            famileName:   lastName,
            email,
            phoneNumber: phone
        }).then(res=>{
            console.log(res);
            
        })
        axios.get(api)
    }else{
        alert("Please inter correct information")
    }

}
  return (
    <div className='feldinput'>
        <input className='plac' placeholder='Name' onChange={e =>{setName(e.target.value)}}></input><br />
        <input className='plac' placeholder=' Last Name' onChange={e =>{setLastName(e.target.value)}}></input><br />
        <input className='plac' placeholder=' Email' onChange={e =>{setEmailName(e.target.value)}}></input><br />
        <input className='plac' placeholder=' phone' onChange={e =>{setPhoneName(e.target.value)}}></input><br />
        <button className='button' onClick={PostData}>logIn</button>
    </div>
  )
}

export default Post