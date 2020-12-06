import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  deleteWish,
  selectAll
} from './wishlistSlice';
import styles from './Counter.module.css';

export function Wishlist() {
  const wishlist = useSelector(selectAll);
  const dispatch = useDispatch();

  const [wishName, setWishName] = useState("");
  const [wishPrice, setWishPrice] = useState("");

  const onSubmit = () => {
    let payload = {
      id: wishlist.length + 1,
      name: wishName,
      price: wishPrice,
    }

    dispatch(add(payload))
    setWishName("");
    setWishPrice("");
  };

  const cacete = (id) => {
    const payload = {
      id: id
    }
    dispatch(deleteWish(payload));
  };

  const editWish = () => {
    
  };

  return (
    <div>
      <div className={styles.row}>
        <input type="text" value={wishName} onChange={e => setWishName(e.target.value)} placeholder="Wish name"></input>
        <input type="text" value={wishPrice} onChange={e => setWishPrice(e.target.value)} placeholder="Wish price"></input>
        <button onClick={onSubmit}>Add</button>
      </div>
      <div>
      {wishlist && wishlist.map((wish, index) => {
          return (
            <div
              >#{index} | {wish.name} - {wish.price}
              <button onClick={editWish}>Edit</button>
              <button onClick={() =>  cacete(wish.id)}>Delete</button>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
