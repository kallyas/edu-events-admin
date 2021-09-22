/* eslint-disable import/no-anonymous-default-export */

/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faChartLine, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown, ButtonGroup } from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  AnalyticsWidgetPhone,
  AcquisitionWidget,
} from "../components/Widgets";
import { PageVisitsTable } from "../components/Tables";
import { trafficShares, totalOrders } from "../data/charts";
import { AnalyticsWidget } from "../components/AnalyticsWidget";
import { eventsSelector, fetchEventsAsync } from "../features/events/eventsSlice";
import { usersSelector } from "../features/users/usersSlice";
import { fetchProjectsAsync } from "../features/projects/projectSlice";
import { fetchUsersAsync } from "../features/users/usersSlice";

const Dashboard = () => {
  const { events, loading, hasErrors } = useSelector(eventsSelector);
  const { users } = useSelector(usersSelector)
  const dispatch = useDispatch();
  const total = events.length;

  useEffect(() => {
    dispatch(fetchEventsAsync())
    dispatch(fetchUsersAsync())
    dispatch(fetchProjectsAsync)
  }, [dispatch]);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Event
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <Link to={"dashboard/events/new"}>
                <FontAwesomeIcon icon={faTasks} className="me-2" /> New Event
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            Share
          </Button>
          <Button variant="outline-primary" size="sm">
            Export
          </Button>
        </ButtonGroup>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Users"
            title={`${users.length}`}
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Events"
            title={`${events.length}`}
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faChartLine}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Events Funnel" data={trafficShares} />
        </Col>
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <AnalyticsWidget title="Analytics" value={total} percentage="1" />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <AnalyticsWidgetPhone title="Analytics" value={total} percentage={1} />
        </Col>
      </Row>

      {/* <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>

                <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col>

                <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </>
  );
};

export default Dashboard;
