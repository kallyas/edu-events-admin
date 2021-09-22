import { useEffect, useState } from "react";
import { Button, Dropdown, ButtonGroup } from "@themesberg/react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";
import { useDispatch } from "react-redux";
import { fetchProjectsAsync } from "../features/projects/projectSlice";

function AddProject() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()


  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    dispatch(fetchProjectsAsync())
  }, [dispatch]);

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
      <Projects />
      </div>
      </>
  );
}

export default AddProject;
