import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, FormControl } from "@material-ui/core";
import clsx from "clsx";
import { add, selectAll } from "./wishlistSlice";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
      width: "21em",
    },
  })
);

export function AddWish() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();

  const wishlist = useSelector(selectAll);
  const dispatch = useDispatch();

  const [wishName, setWishName] = useState("");
  const [wishPrice, setWishPrice] = useState("");
  const [wishURL, setWishURL] = useState("");
  const [wishDescription, setWishDescription] = useState("");
  const [wishNameHasError, setWishNameHasError] = useState(true);
  const [wishPriceHasError, setWishPriceHasError] = useState(true);
  const [wishURLHasError, setWishURLHasError] = useState(true);
  const [wishDescriptionHasError, setWishDescriptionHasError] = useState(true);

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

  const onSubmit = () => {
    if (
      !wishNameHasError &&
      !wishPriceHasError &&
      !wishURLHasError &&
      !wishDescriptionHasError
    ) {
      let payload = {
        id: wishlist.length + 1,
        name: wishName,
        price: wishPrice,
        url: wishURL,
        description: wishDescription,
      };

      dispatch(add(payload));
      setWishName("");
      setWishPrice("");
      setWishURL("");
      setWishDescription("");
      setWishNameHasError(false);
      setWishPriceHasError(false);
      setWishURLHasError(false);
      setWishDescriptionHasError(false);

      if (payload) handleClick();
    }
  };

  return (
    <div>
      <div className="left-btn-title">
        <div className="row-btn-prev-add-title">
          <Link to="/">
            <Button className="btn font-weight-bold button-previous">
              {" "}
              Previous
            </Button>
          </Link>
        </div>
      </div>
      <h2 class="addnew-title"> Add a new wish! </h2>
      <div className="input-container">
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
        <div className="form-mobile">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl>
              <TextField
                required
                id="filled-basic"
                type="text"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: 8 }}
                value={wishName}
                onChange={handleOnChangeName}
                label="Wish..."
                variant="filled"
                error={wishNameHasError}
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                style={{ margin: 8 }}
                InputLabelProps={{
                  shrink: true,
                }}
                id="filled-basic"
                value={wishPrice}
                onChange={handleOnChangePrice}
                variant="filled"
                error={wishPriceHasError}
                type="number"
                label="0.00 €"
                className={clsx(classes.margin, classes.textField)}
              ></TextField>
              <TextField
                required
                fullWidth
                style={{ margin: 8 }}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                id="filled-basic"
                type="text"
                value={wishURL}
                onChange={handleOnChangeURL}
                error={wishURLHasError}
                label="URL..."
                variant="filled"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                required
                fullWidth
                style={{ margin: 8 }}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                id="filled-basic"
                value={wishDescription}
                onChange={handleOnChangeDescription}
                type="text"
                label="Description..."
                variant="filled"
                error={wishDescriptionHasError}
                className={clsx(classes.margin, classes.textField)}
              ></TextField>

              <Button
                onClick={onSubmit}
                color="primary"
                className="btn font-weight-bold button-add-wish"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>{" "}
                Add
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWish;
