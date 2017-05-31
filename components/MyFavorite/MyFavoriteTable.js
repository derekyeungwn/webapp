import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './MyFavoriteTable.css';

const MyFavoriteTable = ({
  myFavoriteStock,
  refreshStockPrice,
}) => (
  <div>
    <div><FlatButton label="refresh" onTouchTap={refreshStockPrice}/></div>
    <div>
      <Table selectable={true}
        style={{
      }}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableHeaderColumn><h2>Stock Name</h2></TableHeaderColumn>
            <TableHeaderColumn><h2>Price</h2></TableHeaderColumn>
          </TableRow>
          {myFavoriteStock.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn><h3>{row.stockName}</h3></TableRowColumn>
              <TableRowColumn><h3>{row.closePrice} {
                (row.priceUpOrDown === "up")?
                  <span id="upPrice">+{row.priceChange} (+{Number(Math.round(row.priceChange/row.closePrice*100+'e2')+'e-2')}%)</span> :
                  (row.priceUpOrDown === "down")?
                  <span id="downPrice">-{row.priceChange} (-{Number(Math.round(row.priceChange/row.closePrice*100+'e2')+'e-2')}%)</span>:''
              }</h3></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default MyFavoriteTable;
