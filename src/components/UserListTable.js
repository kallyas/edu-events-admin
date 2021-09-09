/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes"

    const UserListTable = ({ items }) => {
    const TableRow = (props) => {
      const { id, name, email, occupation } = props;
  
      return (
        <tr>
          <td>
            <Card.Link as={Link} className="fw-normal"
              to={"#"}
            >
              {"#"}
            </Card.Link>
          </td>
          <td>
            <span className="fw-normal">
              {name}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {email}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {occupation}
            </span>
          </td>
          <td>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"#"} >
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
                <th className="border-bottom">Name</th>
                <th className="border-bottom">Email</th>
                <th className="border-bottom">Occupation</th>
                <th className="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((t, i) => <TableRow key={`transaction-${i}`} {...t} />)}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>
                  Previous
                </Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                  Next
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{items.length}</b> out of <b>{items.length}</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  export default UserListTable