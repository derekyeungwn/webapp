import { connect } from 'react-redux';
import QuickQuoteHeader from '../../components/QuickQuote/QuickQuoteHeader';
import {
  changePrice,
  getQuote,
} from '../../actions';

const mapStateToProps = (state) => ({
  inputQuickQuote: state.inputQuickQuote,
});

const mapDispatchToProps = (dispatch) => ({
  onChangePrice: (input) => {
    dispatch(changePrice(input))
    dispatch(getQuote());
    dispatch(changePrice(""));
  },
});

const QuickQuoteHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuickQuoteHeader);

export default QuickQuoteHeaderContainer
