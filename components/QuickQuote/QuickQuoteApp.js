import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Tabs, Tab} from 'material-ui/Tabs';

import QuickQuoteHeaderContainer from '../../containers/QuickQuoteContainer/QuickQuoteHeaderContainer'
import StockInfoPanelContainer from '../../containers/QuickQuoteContainer/StockInfoPanelContainer'
import MyFavoriteTableContainer from '../../containers/MyFavoriteContainer/MyFavoriteTableContainer'

const QuickQuoteApp = () => (
  <Tabs>
    <Tab label="股票報價" >
      <div>
        <StockInfoPanelContainer/>
        <QuickQuoteHeaderContainer/>
      </div>
    </Tab>
    <Tab label="我的最愛" >
      <div>
        <MyFavoriteTableContainer/>
      </div>
    </Tab>
  </Tabs>
);

export default QuickQuoteApp;
