
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import GitHubButton from 'react-github-btn';

const Footer =  (props) => {
  const currentYear = moment().get("year");
  const showSettings = props.showSettings;

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  }

  return (
    <div>
      { showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button className="theme-settings-close" variant="close" size="sm" aria-label="Close" onClick={() => { toggleSettings(false) }} />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="m-0 mb-1 fs-7">Made with <span role="img" aria-label="gratitude">💙</span></p>
              <GitHubButton href="https://github.com/kallyas/edu-events-admin" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
            </div>
          </Card.Body>
        </Card>
      ) : (
          <Card className="theme-settings theme-settings-expand" onClick={() => { toggleSettings(true) }}>
            <Card.Body className="p-3 py-2">
              <span className="fw-bold h6"><FontAwesomeIcon icon={faCogs} className="me-1 fs-7" /> Settings</span>
            </Card.Body>
          </Card>
        )}
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © {`${currentYear} `}
              <Card.Link href="https://github.com/outboxafrica" target="_blank" className="text-blue text-decoration-none fw-normal">
                outbox EDU
            </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer 