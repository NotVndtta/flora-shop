import React from 'react'


const Footer = () => {
  return (
    <section className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black'>
        <div className="footer-content space-y-4">
            <p> Цветы на Античном </p>
        </div>
        <div className="footer-content">
            <h4>О нас</h4>
            <li><a href='#'> Support</a></li>
            <li><a href='#'> Cooperation</a></li>
        </div>
        <div className="footer-content">
            <h4>Действия</h4>
            <li><a href='#'> Pricing</a></li>
            <li><a href='#'> Add order</a></li>
        </div>
        <div className="footer-content">
            <h4>Помощь</h4>
            <li><a href='#'> Privacy</a></li>
            <li><a href='#'> FAQs</a></li>
        </div>
    </section>
  )
}

export default Footer
