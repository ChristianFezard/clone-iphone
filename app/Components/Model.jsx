import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import ModelView from './ModelView'

const Model = () => {

  const [size, setSize] = useState('small')
  const [model, setModel] = useState({
    title: 'iphone 15 pro in Natural Titanium',
    color: ['#8f8a81', '#ffe7b9', '#6f6c64']
  })

  useGSAP(() => {
    gsap.to('#heading', {y: 0, opacity: 1})
  })
    
  return (
    <section className='common-padding'>
        <div className="screen-max-width">
            <h1 id='heading' className='section-heading'>Jetez un coup d'oeil.</h1>
            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelView />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model