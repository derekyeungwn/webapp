//react
import React, {Component} from 'react';
import { PropTypes } from 'react'
import ReactDOM from 'react-dom';

//material-ui
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import SelectableList from '../util/SelectableList';

const LoginSelection = ({
  handleSelectFace,
}) => (
  <div>
    <SelectableList onRequestChange={handleSelectFace}>
      <ListItem
        value={'Derek'}
        primaryText="Derek"
        leftAvatar={<Avatar src="Derek.png" />}
      />
      <ListItem
        value={'Norman'}
        primaryText="Norman"
        leftAvatar={<Avatar src="Norman.png" />}
      />
      <ListItem
        value={'Holly'}
        primaryText="Holly"
        leftAvatar={<Avatar src="Holly.png" />}
      />
      <ListItem
        value={'KamJai'}
        primaryText="KamJai"
        leftAvatar={<Avatar src="KamJai.png" />}
      />
    </SelectableList>
  </div>
);

export default LoginSelection;
