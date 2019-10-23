import React from 'react'


const DisabledButton = ({buttonStates, type, ...prop}) => {
  const disabled = buttonStates[type]
  return (
    <button disabled={disabled} {...prop}></button>
  )
}


const mapStateToProps = state => {
  return {
    buttonStates: state.Button
  };
}

export default connect(mapStateToProps, null)(DisabledButton)


/** Example store */
const store = {
  Button: {
    'buy-gas': true,
    'call-support': true,
    'payment': false,
    '...': true,
  }
}
