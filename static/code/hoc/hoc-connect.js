const mapStateToProps = (state /*, ownProps*/) => ({ counter: state.counter })

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
