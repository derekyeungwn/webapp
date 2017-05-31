import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './StockInfoPanel.css';

const StockInfoPanel = ({
  stockInfo,
  addMyfavouritesStock,
  myFavoriteStock,
}) => {
  const constructStockPriceChange = () => {
    return (stockInfo.priceUpOrDown === "up")?
      <span id="upPrice">+{stockInfo.priceChange} (+{Number(Math.round(stockInfo.priceChange/stockInfo.closePrice*100+'e2')+'e-2')}%)</span> :
      (stockInfo.priceUpOrDown === "down")?
      <span id="downPrice">-{stockInfo.priceChange} (-{Number(Math.round(stockInfo.priceChange/stockInfo.closePrice*100+'e2')+'e-2')}%)</span>:'';
  }
  return (
    <div>
      <div id="stockInfoHeader">
        <h2>
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label={stockInfo.stockName}
            labelPosition="right"
            onCheck={addMyfavouritesStock}
            checked={myFavoriteStock.find((value)=>value.stockName===stockInfo.stockName)===undefined?false:true}
          />
        </h2>
        <h2>{stockInfo.closePrice} {constructStockPriceChange()}</h2>
      </div>
      <div>
        <Table selectable={false}
        style={{
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          borderWidth: '1px',
        }}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={{backgroundColor: '#CCF1F7'}}><h3>最高價</h3></TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}><h4>{stockInfo.priceHigh}</h4></TableRowColumn>
              <TableRowColumn style={{backgroundColor: '#CCF1F7'}}><h3>開市價</h3></TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}><h4>{stockInfo.priceOpen}</h4></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{backgroundColor: '#CCF1F7'}}><h3>最低價</h3></TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}><h4>{stockInfo.priceLow}</h4></TableRowColumn>
              <TableRowColumn style={{backgroundColor: '#CCF1F7'}}><h3>前收市價</h3></TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}><h4>{stockInfo.pricePrevClose}</h4></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default StockInfoPanel;
