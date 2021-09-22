/* eslint-disable no-unused-vars */
import { Card, Col, Row } from '@themesberg/react-bootstrap';
import moment from 'moment';
import { useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { eventsSelector, fetchEventsAsync } from '../features/events/eventsSlice';



const Events = () => {
 const { events, loading, hasErrors } = useSelector(eventsSelector)
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchEventsAsync());
 }, [dispatch])
  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <Row>
        <Col xs={12} xl={6}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Header>
              <h5 className="mb-0">Upcoming Events</h5>
            </Card.Header>
            <Card.Body>
              {loading ? (
                <div className="events-loader">
                  <MoonLoader loading={loading} size={50} />
                </div>
              ) : (
                <>
                  {events
                    ?.filter((event) => !event.completed)
                    .map((event) => (
                      <div
                        key={event.id}
                        className="align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4 row"
                      >
                        <div className="col-auto mb-3 mb-sm-0 col">
                          <div className="calendar d-flex">
                            <span className="calendar-month">
                              {moment(event.date).format('MMM')}
                            </span>
                            <span className="calendar-day">
                              {moment(event.date).format('D')}
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <a className="card-link" href={`/dashboard/edit/event/${event.id}`}>
                            <h5>{event.title}</h5>
                          </a>
                          <span>
                            Organized by{' '}
                            <a className="text-700 card-link" href="/">
                              Outbox EDU
                            </a>
                          </span>
                          <div className="small fw-bold mt-1">
                            Time: {moment(event.date).format('h:mm a')}
                          </div>
                          <span className="small fw-bold">
                            Place: {event.location}
                          </span>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Header>
                  <h5 className="mb-0">Past Events</h5>
                </Card.Header>
                <Card.Body>
                  {loading ? (
                    <div className="events-loader">
                      <MoonLoader loading={loading} size={50} />
                    </div>
                  ) : (
                    <>
                      {events
                        ?.filter((event) => event.completed)
                        .map((event) => (
                          <div
                            key={event.id}
                            className="align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4 row"
                          >
                            <div className="col-auto mb-3 mb-sm-0 col">
                              <div className="calendar d-flex">
                                <span className="calendar-month">
                                  {moment(event.date).format('MMM')}
                                </span>
                                <span className="calendar-day">
                                  {moment(event.date).format('D')}
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <a className="card-link" href="/calendar">
                                <h5>{event.title}</h5>
                              </a>
                              <span>
                                Organized by{' '}
                                <a className="text-700 card-link" href="/">
                                  Outbox EDU
                                </a>
                              </span>
                              <div className="small fw-bold mt-1">
                                Time: {moment(event.date).format('h:mm a')}
                              </div>
                              <span className="small fw-bold">
                                Place: {event.location}
                              </span>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12}>{/* {} */}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};


export default Events
