import React from "react";
import Card from "@material-ui/core/Card";
import Box from '@material-ui/core/Box';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 280,
    padding: 20,
  },
 
});

const List = ({ list }) => {
  const classes = useStyles();
  return list.map((item) => (
    <Box  p={1} m={1}  >
      <Card className={classes.root} key={list.id} >
        <h1>{item.name}</h1>
        <span className={item.status === "yes" ? "yes" : "no"}>
          {item.description}
        </span>
      </Card>
    </Box>
  ));
};

export default List;

{
  /* <input type="checkbox" onClick={() => props.onCheck(list.id)} /> */
}
{
  /* 
      <a href="###" onClick={() => props.toCompleted(list.id)}>
        выполненно
      </a> */
}
