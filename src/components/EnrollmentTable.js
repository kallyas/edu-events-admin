/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { enrollmentSelector } from "../features/enrollment/enrollmentSlice";
import PagePagination from "../utils/PagePagination";

const EnrollmentTable = () => {
  const { loading, error, data } = useSelector(enrollmentSelector);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const TableRow = (props) => {
    const {
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      education,
      employment,
      experience,
      track,
      country,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} className="fw-normal" to={"#"}>
            {"#"}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{`${firstName}  ${lastName}`}</span>
        </td>
        <td>
          <span className="fw-normal">{gender}</span>
        </td>
        <td>
          <span className="fw-normal">{phoneNumber}</span>
        </td>
        <td>
          <span className="fw-normal">{email}</span>
        </td>
        <td>
          <span className="fw-normal">{education}</span>
        </td>
        <td>
          <span className="fw-normal">{employment}</span>
        </td>
        <td>
          <span className="fw-normal">{experience}</span>
        </td>
        <td>
          <span className="fw-normal">{track}</span>
        </td>
        <td>
          <span className="fw-normal">{country}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={"#"}>
                  <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Full Names</th>
              <th className="border-bottom">Gender</th>
              <th className="border-bottom">Phone Number</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Education</th>
              <th className="border-bottom">Employment</th>
              <th className="border-bottom">Experience</th>
              <th className="border-bottom">Track</th>
              <th className="border-bottom">Country</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((t, i) => (
              <TableRow key={`transaction-${i}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <PagePagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} />
          <small className="fw-bold">
            Showing <b>{currentItems.length}</b> out of <b>{data.length}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default EnrollmentTable;
