import { Check } from 'lucide-react'
import React from 'react'

export function PricingFeatures({ text, color }) {
  return (
    <div className=' flex flex-row gap-3 items-center'>
        <Check color={color} />
        <p className=' font-semibold'>{text}</p>
    </div>
  )
}

export function PricingPrice({ price }) {
  return (
    <div className=' flex flex-row gap-3 items-center justify-center'>
      <span className=' font-bold text-3xl'>€</span>
      <p className=' font-bold text-6xl'>{price}</p>
    </div>
  )
}

export function PricingButton({text, onClick}) {
  return(
    <button onClick={onClick} className='w-full uppercase shadow py-3 border-2 border-dark-blue rounded-lg bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue transition-all duration-200'>
      <p className=' font-bold'>{text}</p>
    </button>
  )
}

export function PricingButtonPremium({text, onClick}) {
  return(
    <button onClick={onClick} className='w-full uppercase shadow py-3 border-2 border-white rounded-lg bg-white text-dark-blue hover:bg-transparent hover:text-white transition-all duration-200'>
      <p className=' font-bold'>{text}</p>
    </button>
  )
}
