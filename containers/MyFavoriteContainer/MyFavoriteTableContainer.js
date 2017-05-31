import { connect } from 'react-redux';
import MyFavoriteTable from '../../components/MyFavorite/MyFavoriteTable';
import {
refreshStockPrice,
} from '../../actions';

const mapStateToProps = (state) => ({
  myFavoriteStock: state.myFavoriteStock,
});

const mapDispatchToProps = (dispatch) => ({
  refreshStockPrice: () => {
    dispatch(refreshStockPrice());
  },
});

const MyFavoriteTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyFavoriteTable);

export default MyFavoriteTableContainer
