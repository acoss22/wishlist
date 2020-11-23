import { ADD_WISHITEM } from "../Constants/action-types";
import { UPDATE_WISHITEM } from "../Constants/action-types";
import { SELECT_WISHITEM } from "../Constants/action-types";
import { DELETE_WISHITEM } from "../Constants/action-types";

import { OPEN_FORM } from "../Constants/action-types";
import { CLOSE_FORM } from "../Constants/action-types";
import { OPEN_EDIT_FORM } from "../Constants/action-types";
import { CLOSE_EDIT_FORM } from "../Constants/action-types";
const initialState = {
  //Read
  wishes: [
    {
      title: "React Redux Tutorial for Beginners",
      id: 0,
      date: "July 20, 2014"
    },
    {
      title: "Redux e React: cos'è Redux e come usarlo con React",
      id: 1,
      date: "Jan 7, 2014"
    }
  ],
  uiState: {
    //Create
    openFormDialog: false,
    //Update
    openEditDialog: false,
    articleToEdit: {},
    //Delete
    checked: []
  }
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //-----------------CREAT----------------------------

    case ADD_WISHITEM:
      console.log("Add new Article" + JSON.stringify(action));
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };

    case OPEN_FORM:
      console.log("Open Add Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: true
        }
      };

    case CLOSE_FORM:
      console.log("Close Add Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: false
        }
      };
    //----------------UPDATE-------------------
    case UPDATE_WISHITEM:
      console.log("Save updated article" + JSON.stringify(action));

      return {
        ...state,
        articles: state.articles.map(article => {
          if (article.id !== action.payload.id) {
            return article;
          } else {
            return { ...article, title: action.payload.title };
          }
        })
      };

    case OPEN_EDIT_FORM:
      console.log("Open Edit Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: true,
          articleToEdit: action.payload
        }
      };

    case CLOSE_EDIT_FORM:
      console.log("Close Edit Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: false
        }
      };

    //-----------------DELETE-------------
    case SELECT_WISHITEM:
      console.log("@@@@Select article" + JSON.stringify(action));
      const currentIndex = state.uiState.checked.indexOf(action.payload);
      if (currentIndex === -1) {
        state.uiState.checked.push(action.payload);
      } else {
        state.uiState.checked.splice(currentIndex, 1);
      }
      return state;

    case DELETE_WISHITEM:
      // for (var article in state.articles) {
      for (var check in state.uiState.checked) {
        //remove article
        var article = state.articles[check];
        state.articles.splice(check, 1);

        //Remove Index
        var index = state.uiState.checked.indexOf(check);
        if (index > -1) {
          state.uiState.checked.splice(index, 1);
        }
      }
      state.uiState.checked = [];
      return state;

    default:
      return state;
  }
};
export default rootReducer;
