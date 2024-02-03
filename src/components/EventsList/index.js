"use client";

import EventItem from './EventItem';

export default function Events({ eventsData = [], handleGenerateQRCode = () => {}}) {

  if (!eventsData || eventsData.length === 0) {
    return (
      <div className='h-80 flex flex-col events justify-center items-center pb-10'>
        <p className='text-typography-gray text-sm'>Não há eventos para serem exibidos</p>
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-col events items-center pb-10'>
        {
          eventsData?.map((event, index) => (
          <EventItem key={index} event={event} onClick={handleGenerateQRCode} />
        ))
        }
      </div>
    </>
  )
}  