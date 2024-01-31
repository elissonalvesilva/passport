import EventItem from './EventItem';

export default function Events({ eventsData = [] }) {
  return (
    <>
      <div className='flex flex-col'>
        {
          eventsData?.map((event, index) => (
          <EventItem key={index} event={event} />
        ))
        }
      </div>
    </>
  )
}  