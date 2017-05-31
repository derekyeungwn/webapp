import fetch from 'isomorphic-fetch'
import {
  SERVER_URL,
} from '../constants/sysParam';

//MainApp
export const openAppBar = () => {
  return {
    type: 'OPEN_APPBAR'
  }
}
export const changeContent = (content) => {
  return {
    type: 'CHANGE_CONTENT',
    content: content,
  }
}
export const openLogin = () => {
  return {
    type: 'OPEN_LOGIN'
  }
}
export const login = (currentLoginName) => {
  return {
    type: 'LOGIN',
    currentLoginName: currentLoginName,
  }
}
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

//QuickQuoteApp
export const changePrice = (text) => {
  return {
    type: 'CHANGE_PRICE',
    text: text
  }
}
export const updateStockInfo = (stockInfo) => {
  return {
    type: 'UPDATE_STOCK_INFO',
    stockInfo: stockInfo
  }
}
export const addMyfavoritesStock = () => {
  return {
    type: 'ADD_MYFAVORITES_STOCK',
  }
}
export const delMyfavoritesStock = () => {
  return {
    type: 'DEL_MYFAVORITES_STOCK',
  }
}
export const updateMyfavoritesStock = (myFavoriteStock) => {
  return {
    type: 'UPDATE_MYFAVORITES_STOCK',
    myFavoriteStock: myFavoriteStock,
  }
}
export function refreshStockPrice() {
  return function (dispatch, getState) {
    fetch(SERVER_URL+':8081/getQuotes', {
      method: 'POST',
      headers: {
		      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
	    },
      body: 'json='+JSON.stringify(getState().myFavoriteStock),
    })
    .then(response => response.json())
    .then(json =>
      dispatch(updateMyfavoritesStock(json))
    )
  }
}
export function getQuote() {
  return function (dispatch, getState) {
    //dispatch(requestPosts(subreddit))
    return fetch(SERVER_URL+`:8081/getQuote?name=`+getState().inputQuickQuote)
      .then(response => response.json())
      .then(json =>
        //alert(json.closePrice)
        dispatch(updateStockInfo(json))
      )
  }
}
