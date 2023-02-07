import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Effect() {
    const [data, setData] = React.useState<any[]>([])
    const navigate = useNavigate()
    React.useEffect(() => {
    axios.get('https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api').then(res=>{
        setData(res.data)
        console.log(res.data)
    })

    }, [])
    const deletItem=(id: any)=>{
        console.log(id)
        axios.delete(`https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api/${id}`).then(res=>{
            setData(data.filter((del)=> del.id !=id))
        })
    }
  return (
    <div>
        
        <h1>Read</h1>
      {data.map((item: any)=> {
        return <div>
 
             <ul>
                <li>{item.id}</li>
                <li>{item.famileName}</li>
                <li>{item.email}</li>
                <li>{item.phoneNumber}</li>
             </ul>
             <button onClick={()=>{deletItem(item.id)}}>Delet</button>
        </div>
      })}
    </div>
  )
}

export default Effect
