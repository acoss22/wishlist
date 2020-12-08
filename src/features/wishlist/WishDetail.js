import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add, deleteWish, selectAll } from "./wishlistSlice";
import { Button, TextField, FormControl } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Wishlist.scss";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

function ImgMediaCard() {
  const classes = useStyles();
}

function ListItemLink(props) {
  return React.createElement(
    ListItem,
    Object.assign({ button: true, component: "a" }, props)
  );
}

function WishDetail() {
  const { wishId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const wishlistAux = useSelector(selectAll).filter((s) => s.id == wishId);

  const wish = wishlistAux.length != 0 ? wishlistAux[0] : null;

  const [wishName, setWishName] = useState(wish ? wish.name : "");
  const [wishPrice, setWishPrice] = useState(wish ? wish.price : "");
  const [wishURL, setWishURL] = useState(wish ? wish.url : "");
  const [wishDescription, setWishDescription] = useState(
    wish ? wish.description : ""
  );
  const [editWish, setEditWish] = useState(false);
  const [wishNameHasError, setWishNameHasError] = useState(false);
  const [wishPriceHasError, setWishPriceHasError] = useState(false);
  const [wishURLHasError, setWishURLHasError] = useState(false);
  const [wishDescriptionHasError, setWishDescriptionHasError] = useState(false);

  const onSubmit = () => {
    if (
      !wishNameHasError &&
      !wishPriceHasError &&
      !wishURLHasError &&
      !wishDescriptionHasError
    ) {
      let payload = {
        id: wishId,
        name: wishName,
        price: wishPrice,
        url: wishURL,
        description: wishDescription,
      };

      const deletePayload = {
        id: wishId,
      };
      console.log("Delete payload: " + JSON.stringify(deletePayload));
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
  };

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

  const handleDelete = (id) => {
    const payload = {
      id: id,
    };
    dispatch(deleteWish(payload));
  };

  return (
    <div>
      {wish ? (
        <div className="input-container">
          {editWish ? (
            <form className={classes.root} noValidate autoComplete="off">
              <FormControl>
                <TextField
                  required
                  id="filled-basic"
                  type="text"
                  value={wishName}
                  onChange={handleOnChangeName}
                  label="Wish"
                  variant="filled"
                  error={wishNameHasError}
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  required
                  id="filled-basic"
                  value={wishPrice}
                  onChange={handleOnChangePrice}
                  variant="filled"
                  error={wishPriceHasError}
                  type="number"
                  label="Price"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  required
                  id="filled-basic"
                  type="text"
                  value={wishURL}
                  onChange={handleOnChangeURL}
                  error={wishURLHasError}
                  label="URL"
                  variant="filled"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  required
                  id="filled-basic"
                  value={wishDescription}
                  onChange={handleOnChangeDescription}
                  type="text"
                  label="Description"
                  variant="filled"
                  error={wishDescriptionHasError}
                  className={clsx(classes.margin, classes.textField)}
                />
              </FormControl>
            </form>
          ) : (
            <form className={classes.root} noValidate autoComplete="off">
              <FormControl>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <span>{wishName}</span>
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <span>{wishPrice}€</span>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <span>{wishURL}</span>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <span>{wishDescription}</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {!editWish && (
                    <CardActions className="left-btn">
                      <button
                        onClick={enableEdit}
                        color="primary"
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(wishId)}
                        color="primary"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </CardActions>
                  )}
                </Card>
              </FormControl>
            </form>
          )}

          {editWish ? (
            <Button
              onClick={onSubmit}
              color="primary"
              className="button-add-wish"
            >
              Save Changes
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          <span>This wish has been deleted!</span>
          <Link to="/">
            <Button className="btn font-weight-bold button-previous prev">
             
              Previous
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default WishDetail;
