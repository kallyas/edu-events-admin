/* eslint-disable no-unused-vars */

import { Card, Col, Row } from '@themesberg/react-bootstrap';

const Events = () => {
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
              <div className="align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4 row">
                <div className="col-auto mb-3 mb-sm-0 col">
                  <div className="calendar d-flex">
                    <span class="calendar-month">Sep</span>
                    <span class="calendar-day">4</span>
                  </div>
                </div>
                <div class="col">
                  <a class="card-link" href="/calendar">
                    <h5>Newmarket Nights</h5>
                  </a>
                  <span>
                    Organized by{' '}
                    <a class="text-700 card-link" href="/">
                      Outbox EDU
                    </a>
                  </span>
                  <div class="small fw-bold mt-1">Time: 20:00 PM</div>
                  <span class="small fw-bold">Place: Soliz House</span>
                </div>
              </div>
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
                  <div className="align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4 row">
                    <div className="col-auto mb-3 mb-sm-0 col">
                      <div className="calendar d-flex">
                        <span class="calendar-month">Sep</span>
                        <span class="calendar-day">4</span>
                      </div>
                    </div>
                    <div class="col">
                      <a class="card-link" href="/calendar">
                        <h5>Newmarket Nights</h5>
                      </a>
                      <span>
                        Organized by{' '}
                        <a class="text-700 card-link" href="/">
                          Outbox EDU
                        </a>
                      </span>
                      <div class="small fw-bold mt-1">Time: 20:00 PM</div>
                      <span class="small fw-bold">Place: Soliz House</span>
                    </div>
                  </div>
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

export default Events;
