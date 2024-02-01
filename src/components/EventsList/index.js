"use client";

import EventItem from './EventItem';

export default function Events({ eventsData = [] }) {

  const onClick = () => {
    console.log('click');
  }

  return (
    <>
      <div className='flex flex-col events items-center pb-10'>
        {
          eventsData?.map((event, index) => (
          <EventItem key={index} event={event} onClick={onClick} />
        ))
        }
      </div>
    </>
  )
}  