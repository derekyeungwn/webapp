import { initialState } from '../constants/initialState';
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  CHANGE_PRICE,
  UPDATE_STOCK_INFO,
  ADD_MYFAVORITES_STOCK,
  DEL_MYFAVORITES_STOCK,
  REFRESH_STOCK_PRICE,
  UPDATE_MYFAVORITES_STOCK,
  OPEN_APPBAR,
  CHANGE_CONTENT,
  OPEN_LOGIN,
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes';
import {
  SERVER_URL,
} from '../constants/sysParam';

function saveMyFavoriteStock(newState){
  fetch(SERVER_URL+':8081/updateMyFavoritesStock', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'id=myFavoriteStock&loginName='+newState.currentLoginName+'&json='+JSON.stringify(newState.myFavoriteStock),
  })
}

function rootReducer(state, action) {
  switch (action.type) {

    //MainApp
    case OPEN_APPBAR:
      return Object.assign({}, state, {
        appBarOpen: !state.appBarOpen,
      })
    case OPEN_LOGIN:
      return Object.assign({}, state, {
          mainAppContent: 'LoginApp',
      })
    case CHANGE_CONTENT:
      return Object.assign({}, state, {
        mainAppContent: action.content,
      })
    case LOGIN:
      var request = require("sync-request");
      var response = request("GET", SERVER_URL+":8081/getMyFavoritesStock?loginName="+action.currentLoginName);
      var myFavoriteStock = JSON.parse(response.getBody());
      return Object.assign({}, state, {
        currentLoginName: action.currentLoginName,
        isLogin: true,
        myFavoriteStock: myFavoriteStock,
        mainAppContent: 'homepage',
      })
    case LOGOUT:
      return Object.assign({}, state, {
        currentLoginName: '',
        isLogin: false,
        myFavoriteStock: [],
        mainAppContent: 'homepage',
      })

    //QuickQuoteApp
    case CHANGE_PRICE:
      return Object.assign({}, state, {
        inputQuickQuote: action.text
      })
    case UPDATE_STOCK_INFO:
      return Object.assign({}, state, {
        stockInfo: action.stockInfo
      })
    case ADD_MYFAVORITES_STOCK:
      var newState = Object.assign({}, state, {
        myFavoriteStock: [
          ...state.myFavoriteStock,
            state.stockInfo
        ]
      })
      saveMyFavoriteStock(newState);
      return newState;
    case DEL_MYFAVORITES_STOCK:
      var newState = Object.assign({}, state, {
        myFavoriteStock: state.myFavoriteStock.filter((stockInfo)=>stockInfo.stockName!=state.stockInfo.stockName),
      })
      saveMyFavoriteStock(newState);
      return newState;
    case UPDATE_MYFAVORITES_STOCK:
      var newState = Object.assign({}, state, {
        myFavoriteStock: action.myFavoriteStock,
      })
      return newState;
    default:
      return state
  }
}

export default rootReducer;
