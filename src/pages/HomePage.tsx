import React from 'react'


const HomePage = () => {
  return (
    <div>
      <p className='m-4 p-4 border-2 text-xl text-center'>HomePage</p>
      <img className='w-full' src="https://img.zanado.com/media/custom/banners/File-1502679592.jpg" alt="" />
      <h1 className='text-xl p-4 decoration-solid underline-offset-2 '>Fashion & Beauty</h1>
      <div className='flex m-4'>
        <div className='p-2'><img src="https://images-prod.anothermag.com/640/0-32-1035-690/azure/another-prod/430/3/433200.jpg" alt="" /><p className='font-bold'>Ferrari’s Fashion Line Races Into the Future</p></div>
        <div className='p-2'><img src="https://images-prod.anothermag.com/640/0-0-1272-848/azure/another-prod/430/3/433121.jpg" alt="" /><p className='font-bold'>Exclusive: Watch Blackpink’s Jennie Bring Chanel to Seoul</p></div>
        <div className='p-2'><img src="https://images-prod.anothermag.com/640/140-0-1908-1272/azure/another-prod/430/3/433108.jpeg" alt="" /><p className='font-bold'>Hot on the Heels: Inside Christian Louboutin’s S/S23 Collection</p></div>
      </div>
    </div>
  )
}

export default HomePage