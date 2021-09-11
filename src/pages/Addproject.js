import React, { useEffect, useState } from "react";
import app from "../config/firebaseInit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Projects from "../components/Projects";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";

function AddProject() {
  const db = getFirestore();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [data, setData] = useState({
    title: "",
    question: "",
    desc: "",
    points: "",
    date: "",
  });
  const [fetch, setFetch] = useState([]);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "lms_projects"), data)
      .then((docRef) => {
        console.log("Project added", docRef.id);
      })
      .catch((error) => {
        console.error("Error occurred while adding project", error);
      });
  };

  const [open, setOpen] = React.useState(false);

  //Handling change for each input field
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const db = getFirestore();
    const data = [];
    try {
      const projects = await getDocs(collection(db, "lms_projects"));
      projects.forEach((doc) => {
        data.push(
          Object.assign(
            {
              id: doc.id,
            },
            doc.data()
          )
        );
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData().then((data) => setFetch(data));
  }, []);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Project
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              name="question"
              value={data.question}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Points"
              name="points"
              value={data.points}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Status"
              type="text"
              name="status"
              value="Assigned"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="date"
              name="date"
              value={data.date}
              onChange={handleChange}
              fullWidth
            />

            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Add
            </Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <Projects data={fetch} />
    </div>
  );
}

export default AddProject;
