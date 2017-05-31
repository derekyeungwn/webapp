import { connect } from 'react-redux';
import LoginSelection from '../../components/LoginApp/LoginSelection';
import {
  login,
  refreshStockPrice,
} from '../../actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectFace: (event, index) => {
    dispatch(login(index));
    //dispatch(refreshStockPrice());
  },
});

const LoginSelectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginSelection);

export default LoginSelectionContainer
