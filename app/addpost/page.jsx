'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Addpost() {
    const router=useRouter()
    const[title,settitle]=useState('')
    const[content,setcontent]=useState('')
    const[dat,setdat]=useState([])
    const handlesubmit=async(event)=>{
        event.preventDefault()
        console.log('inside handle')
        const response=await fetch('/api/addpost',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({title,content})
        })
       // console.log(response.json())
       router.refresh();
        const data=await response.json();
        
        console.log(data.data.title)
    }
  return (
    <>
    <div className='text-center text-2xl'>Addpost here</div>
    <form className=' flex gap-3 mt-12 flex-col  justify-center items-center' onSubmit={handlesubmit}>
        <div>
            <label>Title-</label>
            <input className='p-2 rounded-sm text-black bg-gray-200' type='text' value={title} onChange={(e)=>settitle(e.target.value)} required />
        </div>
        <div>
            <label>Content-</label>
            <input className='p-2 rounded-sm text-black bg-gray-200' type='text' value={content} onChange={(e)=>setcontent(e.target.value)} required />
        </div>
        <button  className='bg-green-600 p-2 rounded-md ' type='submit'>Submit!</button>
    </form>
    
    </>
  )
}

export default Addpost