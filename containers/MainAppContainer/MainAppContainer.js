import { connect } from 'react-redux';
import mainApp from '../../components/MainApp/MainApp';
import {
  openAppBar,
  changeContent,
  openLogin,
  login,
  logout,
  refreshStockPrice,
} from '../../actions';

const mapStateToProps = (state) => ({
  appBarOpen: state.appBarOpen,
  mainAppContent: state.mainAppContent,
  isLogin: state.isLogin,
  loginOpen: state.loginOpen,
  currentLoginName: state.currentLoginName,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnLeftIconButtonTouchTap: () => {
    dispatch(openAppBar());
  },
  handleMenuOnLeftIconButtonTouchTap: () => {
    dispatch(openAppBar());
    dispatch(changeContent('homepage'));
  },
  handleLoginButtononTouchTap: () => {
    dispatch(openLogin());
  },
  handleLogoutButtononTouchTap: () => {
    dispatch(logout());
  },
  handleSelectFace: (event, index) => {
    dispatch(openLogin());
    dispatch(login(index));
    dispatch(refreshStockPrice());
  },
  handleMenuItemTouchTap: (event, value) => {
    dispatch(openAppBar());
    dispatch(changeContent(value));
  },
});

const MainAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(mainApp);

export default MainAppContainer
