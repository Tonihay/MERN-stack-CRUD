import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student , setStudent] = useState ({ // react hook it updates the data in the text fields, we use student to call the value in the textField

    regNo : '',
    studentName: '',
    grade: '',
    section: ''
  });

  const createStudent = () => {
    axios.post('http://localhost:5000/students', student)
    .then( () => {
        window.location.reload(false)
    }) //on create let the data go to the server , /students is an entity of the backend from index.js 
  }

  return (
      <>
      <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event) => {
        setStudent({ ...student, regNo: event.target.value})
    }} />
    <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
        setStudent({ ...student, studentName: event.target.value})
    }} />
    <TextField id="outlined-basic" label="Grade" variant="outlined"  value={student.grade}  onChange={(event) => {
        setStudent({ ...student, grade: event.target.value})
    }} />
    <TextField id="outlined-basic" label="Section" variant="outlined"  value={student.section} onChange={(event) => {
        setStudent({ ...student, section: event.target.value})
    }} />
      <Button variant="contained" color="primary" onClick={createStudent}>
        Add
      </Button>
    </form>
    </>
  );
}
