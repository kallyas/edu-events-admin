import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { eventsSelector, fetchEventsAsync } from '../features/events/eventsSlice';
import { Footer, NavBar, FullCalendarComp } from '../components'
import { IconCalendarEvent, IconPlus, IconCalendarStats } from '@tabler/icons'
import { Link } from 'react-router-dom';

const EventCalendar = () => {
    const dispatch = useDispatch();
    const { events, loading } = useSelector(eventsSelector);
    const [previewDate, setPreviewDate] = React.useState('');


    React.useEffect(() => {
        dispatch(fetchEventsAsync());
    }, [dispatch]);

    //filter events by dates
    const filteredEvents = events.filter(event => {
        const eventDate = moment(event.date).format('YYYY-MM-DD');
        return eventDate === previewDate || previewDate === '';
    });

    const pendingEvents = filteredEvents.filter(event => !event.completed);
    const completedEvents = filteredEvents.filter(event => event.completed);

    return (
        <>
            <div className="page">
                <NavBar />
                <div className="page-wrapper">
                    <div className="container-xl">
                        {/* <!-- Page title --> */}
                        <div className="page-header d-print-none">
                            <div className="row align-items-center">
                                <div className="col">
                                    {/* <!-- Page pre-title --> */}
                                    <h2 className="page-title">Events Calendar</h2>
                                </div>
                                {/* <!-- Page title actions --> */}
                                <div className="col-auto ms-auto d-print-none">
                                    <div className="btn-list">
                                        <a
                                            href="/#"
                                            className="btn btn-primary d-none d-sm-inline-block"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                        >
                                            <IconPlus />
                                            Create new Event
                                        </a>
                                        <a
                                            href="/#"
                                            className="btn btn-primary d-sm-none btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                            aria-label="Create new report"
                                        >
                                            <IconPlus />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="row row-deck row-cards">

                                {/* colo */}
                                <div className="col-12">
                                    <div className="row row-cards">
                                        <div className="col-sm-4 events-col-main">
                                            <div className="card card-sm">
                                                <div className="card-body events-col">
                                                    <div className="row">
                                                        <div className="col-auto events-col-2 ">
                                                            <span className="bg-blue text-white avatar position-sticky">
                                                                <IconCalendarEvent />
                                                            </span>
                                                        </div>
                                                        <div className="col">
                                                            <div className="col events-col-2 padding-left-right padding-top position-sticky" style={{ background: "white"}}>
                                                                <div className="font-weight-medium">Events</div>
                                                                <div className="text-muted">{`${pendingEvents?.length} Upcoming Events`}</div>
                                                                <div className="text-muted">{`${completedEvents?.length} Past Events`}</div>
                                                                <div className="dropdown-divider"></div>
                                                            </div>
                                                            <div className="col events-col-1">
                                                                <div className="events-list">
                                                                    {filteredEvents?.map(event => (
                                                                        <div className={event.completed ? 'event-item event-past' : 'event-item'} key={event.id}>
                                                                            <div className="event-item-date">
                                                                                <span className="event-item-month">{moment(event.date).format('MMM')}</span>
                                                                                <span className="event-item-day">{moment(event.date).format('DD')}</span>
                                                                            </div>
                                                                            <div className="event-item-content">
                                                                                <Link to={`/events/${event.id}`}>
                                                                                    <div className="event-item-title">{event.title}</div>
                                                                                </Link>
                                                                                <div className="event-item-organizer">{`Organized by Outbox EDU`}</div>
                                                                                <div className="event-item-time">{`Time: ${event.time}`}</div>
                                                                                <div className="event-item-time">{`Completed: ${event.completed}`}</div>
                                                                                <div className="event-item-location">{`Place: ${event.location}`}</div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card card-sm">
                                                <div className="card-body calendar-row1">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <span className="bg-green text-white avatar">
                                                                <IconCalendarStats />
                                                            </span>
                                                        </div>
                                                        <div className="col">
                                                            <div className="font-weight-medium">Calendar</div>
                                                            <div className="text-muted">32 Events</div>
                                                            <div className="dropdown-divider"></div>
                                                            {/* <GeneralCalendar events={events} /> */}
                                                            <FullCalendarComp events={events} setPreviewDate={setPreviewDate} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default EventCalendar