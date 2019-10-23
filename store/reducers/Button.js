const initialState = {
  'set-admin': true,
  'payment': false,
  'submit': true,
  'out-of-gas': true,
  'random': true,
  'alert': true,
  'buy-gas': true,
  'call-support': false,
  'cà-khịa': false,
  'show-balance': false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ROLE':
      return {
        ...action.buttons
      }
    default:
      return state
  }
}
