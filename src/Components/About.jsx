import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white bg-gray-700 text-3xl leading-normal py-20 px-5'>
        <h1>Почему нужно выбрать именно нас:</h1>
      <div className="flex justify-between items-center gap-10 p-5">
        <div className="">
            <h2>Только свежие цветы из Европы</h2>
            <h3>Привоз 4 раза в неделю</h3>
        </div>
        <div className="">
            <h2>Оформление букетов флористами</h2>
            <h3>Букеты собираются опытными флористами</h3>
        </div>
        <div className="">
            <h2>Цветы стоят более недели и не теряют свой вид</h2>
            <h3>Мы умеем заботиться о цветах и клиентах</h3>
        </div>
      </div>
    </div>
  )
}

export default About
