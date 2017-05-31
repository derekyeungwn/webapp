export const initialState = {
  //MainApp
  appBarOpen: false,
  mainAppContent: 'homepage',
  isLogin: false,
  currentLoginName: '',

  //QuickQuoteApp
  inputQuickQuote: '',
  stockInfo: {
      closePrice: '',
      stockName: '',
      priceChange: '',
      priceUpOrDown: '',
      priceHigh: '',
      priceLow: '',
      priceOpen: '',
      pricePrevClose: '',
  },
  myFavoriteStock: [],
}
