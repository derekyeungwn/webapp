import { connect } from 'react-redux';
import React, { PropTypes } from 'react'
import StockInfoPanel from '../../components/QuickQuote/StockInfoPanel';
import {
  addMyfavoritesStock,
  delMyfavoritesStock,
} from '../../actions';

const mapStateToProps = (state) => ({
  stockInfo: state.stockInfo,
  myFavoriteStock: state.myFavoriteStock,
});

const mapDispatchToProps = (dispatch) => ({
  addMyfavouritesStock: (event, isInputChecked) => {
    if(isInputChecked){
      dispatch(addMyfavoritesStock());
    }else{
      dispatch(delMyfavoritesStock());
    }
  },
});

const StockInfoPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StockInfoPanel);

export default StockInfoPanelContainer
