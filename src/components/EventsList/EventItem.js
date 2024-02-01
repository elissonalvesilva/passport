import Image from "next/image"
import { TiLocation } from "react-icons/ti";
import { MdQrCodeScanner } from "react-icons/md";

import example from '@/assets/images/example.png'

export default function EventItem({ event, onClick }) {
  const options = { month: 'short', day: 'numeric' };
  const dateFormatter = new Intl.DateTimeFormat('pt-BR', options);

  const eventDate = dateFormatter.format(event.date);

  return (
    <>
      <div className='w-full h-28 flex bg-white rounded-xl mb-8 items-center'>
        <div className="flex-none w-24 h-full event--item__image shrink-0">
          <Image
            className="rounded-md w-full h-full object-cover"
            src={example}
            alt='example'
          />
        </div>
        <div className="flex flex-1 flex-col event--item__data px-3 grow">
          <h3 className='font-light item--data__type'>{event.type}</h3>
          <h3 className='text-md font-medium item--data__title text-typography-black overflow-hidden line-clamp-1'>{event.title}</h3>
          <h3 className='flex items-center item--data__location mb-2'>
            <TiLocation className="text-primary text-xl mr-1" />
            <span className="text-typography-gray text-xs">{event.location}</span>
          </h3>
          <div className='flex'>
            <span className="text-xs text-typography-gray mr-1">Data:</span>
            <span className="text-xs text-primary">{eventDate}</span>
          </div>
        </div>
        <button className="w-10 h-full flex items-center justify-center" onClick={onClick}>
          <p className="text-primary text-lg">
            <MdQrCodeScanner />
          </p>
        </button>
      </div>
    </>
  )
}