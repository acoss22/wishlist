import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, deleteWish, selectAll } from "./wishlistSlice";
import styles from "./Counter.module.css";
import { Button, TextField } from "@material-ui/core";
import "./Wishlist.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

function ListItemLink(props) {
  return React.createElement(
    ListItem,
    Object.assign({ button: true, component: "a" }, props)
  );
}
export function Wishlist() {
  const classes = useStyles();

  const wishlist = useSelector(selectAll);
  const dispatch = useDispatch();

  const [wishName, setWishName] = useState("");
  const [wishPrice, setWishPrice] = useState("");

  const onSubmit = () => {
    let payload = {
      id: wishlist.length + 1,
      name: wishName,
      price: wishPrice,
    };

    dispatch(add(payload));
    setWishName("");
    setWishPrice("");
  };

  const handleDelete = (id) => {
    const payload = {
      id: id,
    };
    dispatch(deleteWish(payload));
  };

  const editWish = () => {};

  return (
    <div>
      <div className="input-container">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            type="text"
            value={wishName}
            onChange={(e) => setWishName(e.target.value)}
            label="Wish Name"
            variant="filled"
            className={clsx(classes.margin, classes.textField)}
          />
          <TextField
            id="filled-basic"
            value={wishPrice}
            onChange={(e) => setWishPrice(e.target.value)}
            type="number"
            label="Wish price"
            variant="filled"
            className={clsx(classes.margin, classes.textField)}
          ></TextField>
          <Button onClick={onSubmit} color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
          </Button>
        </form>
      </div>
      <div>
        {wishlist &&
          wishlist.map((wish, index) => {
            return (
              <div>
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItemLink href="#simple-list">
                    <ListItemText>
                      {wish.name} - {wish.price}{" "}
                      <button onClick={editWish}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          width="18px"
                          height="18px"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                      </button>
                      <button onClick={() => handleDelete(wish.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          width="18px"
                          height="18px"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </button>
                    </ListItemText>
                  </ListItemLink>
                </List>
              </div>
            );
          })}
      </div>
    </div>
  );
}
