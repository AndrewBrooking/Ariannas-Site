import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const current = {
    course: "Calculus II",
    labs: 2,
    students: 50
}

const data = [
    ["Fall 2020", "Calculus II Lab - 1 lab held", 50],
    ["Fall 2020", "Transition to Advanced Math - Grader", 40],
    ["Summer 2020", "Calculus I Lab - 1 lab held", 40],
    ["Spring 2020", "Calculus I Lab - 2 labs held", 50],
    ["Spring 2020", "Transition to Advanced Math - Grader", 32],
    ["Fall 2019", "Calculus I Lab - 2 labs held", 49]
];

const useStyles = makeStyles((theme) => ({
  card: {
    width: "60%",
    margin: "2rem auto 2rem auto",
    background: "#525848",
    color: "#F2ECC9"
  },
  table: {
      marginTop: "1rem"
  },
  head: {
      background: "#383c31",
  },
  rowOdd: {
    background: "#5b6150"
  },
  rowEven: {
    background: "#818971"
  },
  cell: {
    color: "#F2ECC9",
    borderWidth: 0,
    // borderColor: "#383c31"
  }
}));

function TeachingTab(props) {
  const { index, value } = props;
  const classes = useStyles();

  return (
    <div hidden={value !== index}>
      <Card elevation={4} className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            This Semester:
          </Typography>

          <Typography variant="body1" component="p">
            I am instructing {current.labs} labs for {current.course} with an average of {current.students} students.
          </Typography>
        </CardContent>
      </Card>

      <Card elevation={4} className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            Previous Semesters:
          </Typography>

          <TableContainer component={Paper} elevation={3} className={classes.table}>
              <Table>
                  <TableHead>
                      <TableRow className={classes.head}>
                          <TableCell align="left" className={classes.cell}>Semester</TableCell>
                          <TableCell align="left" className={classes.cell}>Course</TableCell>
                          <TableCell align="right" className={classes.cell}># of Students</TableCell>
                      </TableRow>
                  </TableHead>

                  <TableBody>
                      {data.map((row, i) => (
                          <TableRow key={i} className={i % 2 === 0 ? classes.rowEven: classes.rowOdd}>
                              <TableCell align="left" className={classes.cell}>{row[0]}</TableCell>
                              <TableCell align="left" className={classes.cell}>{row[1]}</TableCell>
                              <TableCell align="right" className={classes.cell}>{row[2]}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeachingTab;
