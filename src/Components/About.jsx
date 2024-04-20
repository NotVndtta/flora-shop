import React from 'react'
import water from '../img/water.png'
import flower from '../img/flower.png'
import time from '../img/time.png'
const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white bg-gray-700 text-2xl leading-normal py-20 px-5'>
        <h1>Почему нужно выбрать именно нас:</h1>
      <div className="flex justify-between items-center gap-10 p-5">
        <div className="">
            <img src={water} alt="water" className='mx-auto'/>
            <h2>Только свежие цветы из Европы</h2>
            <h3>Привоз 4 раза в неделю</h3>
        </div>
        <div className="">
            <img src={flower} alt="flower" className='mx-auto'/>
            <h2>Оформление букетов флористами</h2>
            <h3>Букеты собираются опытными флористами</h3>
        </div>
        <div className="">
            <img src={time} alt="time" className='mx-auto'/>
            <h2>Цветы стоят более недели и не теряют свой вид</h2>
            <h3>Мы умеем заботиться о цветах и клиентах</h3>
        </div>
      </div>
    </div>
  )
}

export default About
