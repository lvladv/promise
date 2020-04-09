import React from "react";
import Box from "@material-ui/core/Box";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    paddingLeft: 15,
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
  },
  color: {
    color: blueGrey[400],
    paddingTop: 10,
    paddingBottom: 10,
  },
  minWidth: {
    minWidth: 300,

  }
});

const List = ({ list }) => {
  const classes = useStyles();

  return list.map((item) => (
    <Box key={item.id} m={2} width="80%">
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.root}>
          <Typography variant="h5" className={classes.color}>
            {item.name}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Box width="50%" className={classes.minWidth}>
              <Typography variant="h6" className={classes.color}>
                Подробности: 
              </Typography>
              <Typography component="p" variant="body1">
                {item.description}
              </Typography>
            </Box>

            <Box width="50%" className={classes.minWidth}>
            <Typography variant="h6" className={classes.color}>
                Описание:
              </Typography>

              <Typography component="p" variant="body1" className={classes.color}>
                Статус:
              </Typography>

              <Typography component="p" variant="body1" className={classes.color}>
                Важность:
              </Typography>

              <Typography component="p" variant="body1" className={classes.color}>
                Категория:
              </Typography>
              
              <Typography component="p" variant="body1" className={classes.color}>
                Дедлайн:
              </Typography>
            </Box>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  ));
};

export default List;

/* <input type="checkbox" onClick={() => props.onCheck(list.id)} /> */

/* 
      <a href="###" onClick={() => props.toCompleted(list.id)}>
        выполненно
      </a> */
