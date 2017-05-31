import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Keyboard from 'react-material-ui-keyboard';
import NumberInput from 'material-ui-number-input';
import { numericKeyboard } from 'react-material-ui-keyboard/layouts';
import './QuickCodeHeader.css';

const QuickQuoteHeader = ({
  onChangePrice,
  inputQuickQuote,
}) => (
  <div id="content">
    <Keyboard
        textField={
          <TextField
            value={inputQuickQuote}
            fullWidth={true}
            floatingLabelText="Stock Code"
          />
        }
        automatic
        onInput={onChangePrice}
        layouts={[numericKeyboard]}
        keyboardKeyHeight={50}
        keyboardKeyWidth={100}
        keyboardKeySymbolSize={30}
    />
  </div>
);

export default QuickQuoteHeader;
