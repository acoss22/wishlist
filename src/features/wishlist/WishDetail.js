import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { add, deleteWish, selectAll } from "./wishlistSlice";
import { Button, TextField, FormControl } from "@material-ui/core";
import "./Wishlist.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'react-router-dom';

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

function WishDetail(){
    const { wishId } = useParams()
    const classes = useStyles();
    const wish = useSelector(selectAll).filter(s => s.id == wishId)[0];
    const dispatch = useDispatch();

    const [wishName, setWishName] = useState(wish.name);
    const [wishPrice, setWishPrice] = useState(wish.price);
    const [wishURL, setWishURL] = useState(wish.url);
    const [wishDescription, setWishDescription] = useState(wish.description);
    const [editWish, setEditWish] = useState(false);
    const [wishNameHasError, setWishNameHasError] = useState(false);
    const [wishPriceHasError, setWishPriceHasError] = useState(false);
    const [wishURLHasError, setWishURLHasError] = useState(false);
    const [wishDescriptionHasError, setWishDescriptionHasError] = useState(false);

    const onSubmit = () => {
      if (!wishNameHasError && !wishPriceHasError && !wishURLHasError && !wishDescriptionHasError) {
        let payload = {
          id: wishId,
          name: wishName,
          price: wishPrice,
          url: wishURL,
          description: wishDescription
        }
  
        const deletePayload = {
          id: wishId,
        };
        dispatch(deleteWish(deletePayload));
        dispatch(add(payload));
        setWishNameHasError(false);
        setWishPriceHasError(false);
        setWishURLHasError(false);
        setWishDescriptionHasError(false);
        setEditWish(false);
      }
    };

    const enableEdit = () => {
      setEditWish(true);
    }

  const handleOnChangeName = (e) => {
    setWishName(e.target.value);
    setWishNameHasError(!e.target.value || 0 === e.target.value.length);
  };

  const handleOnChangePrice = (e) => {
    setWishPrice(e.target.value);
    setWishPriceHasError(!e.target.value || 0 === e.target.value.length);
  };

  const handleOnChangeURL = (e) => {
    setWishURL(e.target.value);
    setWishURLHasError(!e.target.value || 0 === e.target.value.length);
  };

  const handleOnChangeDescription = (e) => {
    setWishDescription(e.target.value);
    setWishDescriptionHasError(!e.target.value || 0 === e.target.value.length);
  };

    return (
        <div>
          <div className="input-container">
            <form className={classes.root} noValidate autoComplete="off">
              <FormControl>
                {!editWish ? (
                  <span>{wishName}</span>
                ) : (
                  <TextField
                    required id="filled-basic" type="text"
                    value={wishName} onChange={handleOnChangeName}
                    label="Wish"
                    variant="filled" error={wishNameHasError}
                    className={clsx(classes.margin, classes.textField)}
                  />
                )
              }

                {!editWish ? (
                  <span>{wishPrice}</span>
                ) : (
                  <TextField
                    required id="filled-basic" value={wishPrice}
                    onChange={handleOnChangePrice} variant="filled"
                    error={wishPriceHasError} type="number"
                    label="Price" className={clsx(classes.margin, classes.textField)}
                  />
                )
              }

                {!editWish ? (
                  <span>{wishURL}</span>
                ) : (
                  <TextField
                    required id="filled-basic" type="text"
                    value={wishURL} onChange={handleOnChangeURL}
                    error={wishURLHasError} label="URL"
                    variant="filled" className={clsx(classes.margin, classes.textField)}
                  />
                )
              }

                {!editWish ? (
                  <span>{wishDescription}</span>
                ) : (
                  <TextField
                    required id="filled-basic" value={wishDescription}
                    onChange={handleOnChangeDescription} type="text"
                    label="Description"
                    variant="filled" error={wishDescriptionHasError}
                    className={clsx(classes.margin, classes.textField)}
                  />
                )
              }
                
                {editWish ? (
                <Button onClick={onSubmit} color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </Button>
                ) : (
                  <Button onClick={enableEdit} color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </Button>
                )
                }
              </FormControl>
            </form>
          </div>
        </div>
      );
}

export default WishDetail;