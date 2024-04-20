import React from 'react'
import flower1 from '../img/flower1.jpg'
import flower2 from '../img/flower2.jpg'
import flower3 from '../img/flower3.jpg'
import Card from './Card'

const Market = () => {
    return (
    <section className="py-5 px-4">
        <div className="container">
            <div className="arrivals_header"></div>
                <h2 className="inline-block relative font-black text-5xl leading-tight tracking-wide">Товары</h2>
            <div className="flex justify-between gap-[30px]">
            <Card title="Цветы" img={flower1}/>
            <Card title="Цветы" img={flower2}/>
            <Card title="Цветы" img={flower3}/>
            </div>
        </div>
    </section> );
}

export default Market
