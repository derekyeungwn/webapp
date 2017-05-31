import React, {Component} from 'react';
import { PropTypes } from 'react'
import {List, makeSelectable} from 'material-ui/List';

let SelectableList = makeSelectable(List);
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    render() {
      return (
        <ComposedComponent
          onChange={this.props.onRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}
SelectableList = wrapState(SelectableList);

export default SelectableList;
