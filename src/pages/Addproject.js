import { useEffect, useState } from "react";
import { Button, Dropdown, ButtonGroup } from "@themesberg/react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Projects from "../components/Projects";
import { getProjects } from "../service/AddProjectService";
import AddProjectModal from "../components/AddProjectModal";

function AddProject() {
  const [fetch, setFetch] = useState([]);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getProjects().then(data => setFetch(data))
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2"
          onClick={handleClickOpen}
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Project
          </Dropdown.Toggle>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>
    <div>
      <AddProjectModal show={open} handleClose={handleClose} />
      <Projects data={fetch} />
      </div>
      </>
  );
}

export default AddProject;
