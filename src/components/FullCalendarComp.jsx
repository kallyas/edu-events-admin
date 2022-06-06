import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

const FullCalendarComp = ({ events, setPreviewDate }) => {
  const handleDateClick = (arg) => {
    setPreviewDate(arg.dateStr);
  }
  const handleEventClick = (arg) => {
    console.log(arg.event.id);
  }
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
      }}
      events={events}
      eventClick={handleEventClick}
      nowIndicator='true'
    />
  )
}

export default FullCalendarComp