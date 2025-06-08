import React from 'react'

const HeaderSection = () => {
  return (
    <header className='w-screen h-auto bg-transparent flex justify-center gap-10 md:gap-20 items-center pt-5'>
        <div>
            <img className='w-28 h-20 md:w-32 md:h-32' src=".\assets\React-JS-IMG.png" alt="" />
        </div>
        <div>
            <h1 className=' text-[#f7f8ff] text-2xl md:text-5xl'> The React Practice Quiz</h1>
        </div>
    </header>
  )
}

export default HeaderSection
