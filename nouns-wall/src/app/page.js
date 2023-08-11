import Image from 'next/image'
import './globals.css'
import Input from './components/Inputs/Input'
import Gallary from './components/Imagegallay/gallary'
import Formmodel from './components/form'

export default function Home() {
  return (
   <>
    <div className='container mx-auto w-3/5 my-12'>
      {/* <Formmodel/> */}
      <Input/>
      <Gallary/>  
    </div>
   </>
  )
}
