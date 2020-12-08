import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, selectAll } from "./wishlistSlice";
import "./Wishlist.scss";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";


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
  const [wishURL, setWishURL] = useState("");
  const [wishDescription, setWishDescription] = useState("");
  const [wishNameHasError, setWishNameHasError] = useState(true);
  const [wishPriceHasError, setWishPriceHasError] = useState(true);
  const [wishURLHasError, setWishURLHasError] = useState(true);
  const [wishDescriptionHasError, setWishDescriptionHasError] = useState(true);

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
    }
  };

  const editWish = () => {};

  return (
    <div>
      <div>
        {wishlist &&
          wishlist.map((wish, index) => {
            return (
              <div>
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItemLink href="#simple-list">
                    <ListItemText>
                      {wish.name} - {wish.price}€ -{" "}
                      <a href={wish.url}>Buy Here </a> - {wish.description}
                      <Link to={`/Wish/${wish.id}`}>
                        <Button className="btn-form" onClick={editWish}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                        </Button>
                      </Link>
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
export default Wishlist;
