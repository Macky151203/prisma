'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'


function Deletebtn({pid}) {
    const router=useRouter()
    const[dele,setdele]=useState('Deletepost')
    const del=async()=>{
        setdele('deleting...')
        const response=await fetch(`/api/post/${pid}`,{
            method:'DELETE'
        })
        router.refresh()
        
    }
  return (
    <button onClick={del} className='bg-red-600 rounded-md p-1 m-1'>{dele}</button>
  )
}

export default Deletebtn