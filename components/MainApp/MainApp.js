//react
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

//material-ui
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import QuickQuoteApp from '../QuickQuote/QuickQuoteApp';
import MyFavoriteApp from '../MyFavorite/MyFavoriteApp';
import LoginApp from '../LoginApp/LoginApp';
import './MainApp.css';

const mainApp = ({
  handleOnLeftIconButtonTouchTap,
  handleMenuOnLeftIconButtonTouchTap,
  handleLoginButtononTouchTap,
  handleLogoutButtononTouchTap,
  handleMenuItemTouchTap,
  appBarOpen,
  mainAppContent,
  isLogin,
  currentLoginName,
}) => {
    var content = <div><img id='cover' src='kam2.png'/></div>;
    if (mainAppContent === "homepge2") content = <div><img id='cover' src='kam2.png'/></div>;
    if (mainAppContent === "QuickQuoteApp") content = <div><QuickQuoteApp/></div>;
    if (mainAppContent === "LoginApp") content = <div><LoginApp/></div>;

    var loginButton = <FlatButton label="LOGIN" onTouchTap={handleLoginButtononTouchTap}/>;
    if (isLogin) loginButton = <FlatButton label="LOGOUT" onTouchTap={handleLogoutButtononTouchTap}/>;

    var avatarImage = currentLoginName + ".png";
    if (currentLoginName === "") avatarImage = "Person.png";

  return(
    <div>
      <div>
        <AppBar title='金仔 App' onLeftIconButtonTouchTap={handleOnLeftIconButtonTouchTap}
          iconElementRight={loginButton} zDepth={0}/>
      </div>
      <Drawer docked={false} open={appBarOpen} onRequestChange={handleOnLeftIconButtonTouchTap}>
        <AppBar title="" iconElementLeft={<IconButton><ActionHome/></IconButton>}
          onLeftIconButtonTouchTap={handleMenuOnLeftIconButtonTouchTap} zDepth={0}/>
        <Menu onChange={handleMenuItemTouchTap}>
          <List>
            <ListItem
              primaryText={currentLoginName}
              leftAvatar={<Avatar src={avatarImage} />}
              disabled={true}
            />
          </List>
          <MenuItem value='QuickQuoteApp'>股票報價</MenuItem>
        </Menu>
      </Drawer>
      {content}
    </div>
  );
}

export default mainApp;
