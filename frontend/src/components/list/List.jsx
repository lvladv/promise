import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import {
  Typography,
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Button,
} from "@material-ui/core/";

const ButtonBlock = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "20px",
});

const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  width: "50%",
});

const DescriptionItem = styled(({ ...other }) => (
  <Typography component="h6" variant="body1" {...other} />
))({
  color: blueGrey[400],
});
const Description = styled(({ ...other }) => (
  <Typography component="p" variant="body1" {...other} />
))({
  flexGrow: 1,
});

const Title = styled(({ ...other }) => (
  <Typography component="h6" variant="body1" {...other} />
))({
  color: blueGrey[400],
});

const Item = styled(({ ...other }) => (
  <Typography component="p" variant="body1" {...other} />
))({
  color: blueGrey[400],
  "& span": {
    color: "#000",
  },
});

const useStyles = makeStyles({
  root: {
    paddingLeft: 15,
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px",
  },
  minWidth: {
    minWidth: 300,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const List = ({ list, newStatus, openChangesCard, putItemChanges }) => {
  const classes = useStyles();

  return list.map((item) => (
    <Box key={item.id} m={1} width="80%">
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.root}>
          <Title>{item.name}</Title>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            key={item.id}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Box width="50%" className={classes.minWidth}>
              <DescriptionItem>Подробности:</DescriptionItem>
              <Description>{`${item.description}`}</Description>
              <ButtonBlock>
                {item.status === "Y" ? null : (
                  <SmallButton onClick={() => newStatus(item)}>
                    Выполненно
                  </SmallButton>
                )}
              </ButtonBlock>
            </Box>

            <Box width="50%" className={classes.minWidth}>
              <DescriptionItem>Описание:</DescriptionItem>
              <Item>
                Статус:
                <span>
                  {item.status === "Y" ? "Выполненно" : " Не выполненно"}
                </span>
              </Item>
              <Item>
                Важность:
                <span>
                  {item.importance === "1"
                    ? " Не важно"
                    : item.importance === "2"
                    ? " Важно"
                    : " Очень важно"}
                </span>
              </Item>
              <Item>Категория:</Item>
              <Item>
                Дедлайн:
                <span>{item.deadline}</span>
              </Item>
              <Item>
                Дата создания: <span> {item.create_time} </span>
              </Item>
              <Item>
                Дата изменения: <span> {item.modify_time} </span>
              </Item>
              <ButtonBlock>
                <SmallButton
                  onClick={() => {
                    openChangesCard();
                    putItemChanges(item);
                  }}
                >
                  Редактировать
                </SmallButton>
              </ButtonBlock>
            </Box>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  ));
};

export default List;
