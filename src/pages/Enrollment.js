import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCheck,
  // faCog,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  // Dropdown,
} from "@themesberg/react-bootstrap";
import EnrollmentTable from "../components/EnrollmentTable";
import exportToCSV from "../utils/ExportToCSV";
import {
  enrollmentSelector,
  getEnrollmentAsync,
  searchEnrollmentAsync,
} from "../features/enrollment/enrollmentSlice";

const Enrollment = ({ users }) => {
  const [searchTerm] = useState("");
  const { data } = useSelector(enrollmentSelector)
  const dispatch = useDispatch();

  const onChangeSearchTerm = (e) => {
    dispatch(searchEnrollmentAsync(e.target.value));
  };
  useEffect(() => {
    dispatch(getEnrollmentAsync());
  }, [dispatch]);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>enrolment</Breadcrumb.Item>
          </Breadcrumb>
          <h4>enrolled users</h4>
          <p className="mb-0">Users who enrolled for classes.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            {/* <Button variant="outline-primary" size="sm">
              Share
            </Button> */}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => exportToCSV(data, "enrollment-list")}
            >
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search"
                defaultValue={searchTerm}
                onChange={onChangeSearchTerm}
              />
            </InputGroup>
          </Col>
          {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 p-0"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">
                  Show
                </Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
        </Row>
      </div>
      <EnrollmentTable />
    </>
  );
};

export default Enrollment;
