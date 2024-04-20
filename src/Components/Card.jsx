import React from 'react'
import arrowImg from '../img/arrow.svg'

const Card = ({title, img}) => {
    return ( 
    <div className='relative cursor-pointer'>
        <a href="#!" className='absolute z-1 left-0 top-0'></a>
			<img
				className='mb-8 rounded-[20px] animate-opacity w-[5 0vh] h-[70vh]'
				src={img}
				alt="Category ..."
			/>
        <div className='flex justify-between gap-[10px] items-center'>
				<div className='font-medium'>
					<div className='mb-[7px] font-medium text-4xl leading-normal tracking-tighter'>
						{title}
					</div>
					<div className='text-2xl leading-[2] tracking-[-0,04em] text-gray-500'>Explore Now!</div>
				</div>
				<div className='relative'>
					<img src={arrowImg} alt="Open" />
				</div>
			</div>
            </div>
    )
}

export default Card
