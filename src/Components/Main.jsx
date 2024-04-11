import React from 'react'
import bgImage from '../img/bg.jpg'

const Main = () => {
  return (
    <div className="flex items-center h-screen relative flex-col p-auto">
        <img src={bgImage} alt="bgImage" className='absolute w-screen h-screen z-[-1]'/>
        <div className="mt-[40vh] px-40 text-white text-4xl">
            Спасибо Господь, что я такой охуенный <br/>
            Как же вам повезло жить со мной в одно время
        </div>
        <button className='mt-10 text-white w-[150px] h-[50px] 
        bg-gray-900 rounded-full hover:bg-gray-800 active:bg-gray-900 '>Заказать</button>
    </div>
  )
}

export default Main
