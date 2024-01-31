import Image from "next/image"
import example from '@/assets/images/example.png'

export default function EventItem({ event }) {
  return (
    <>
      <div className='w-full h-5'>
        <div className="w-full h-36 flex justify-center align-middle">
          <Image
            src={example}
            alt='example'
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <h3 className='text-2xl font-bold'>{event.title}</h3>
        <p className='text-lg'>{event.description}</p>
      </div>
    </>
  )
}