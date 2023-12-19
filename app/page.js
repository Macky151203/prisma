
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import Deletebtn from './components/deletebtn'


const getpost= async()=>{
  const posts=await prisma.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{name:true},
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts=await getpost()
  return (
    <>
      <div className='text-center text-2xl'>Main Feed</div>
      <div className='text-center'><Link className='text-2xl' href='/addpost'>Add post</Link></div>
     
      <div className='flex flex-col gap-2 justify-center items-center m-2 mt-16 '>
      {
        posts.map((post)=>{
          return(
            
            <div className='border-2 p-2 ' key={post.id}>
            <div>author name-{post.author.name}</div>
            <div>title-{post.title}</div>
            <div>content-{post.content}</div>
            <Deletebtn pid={post.id} />
            </div>
          
          )
        })
      }
      </div>
    </>
  )
}
