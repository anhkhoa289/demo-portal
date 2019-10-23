const withRouter = (Component) => {
  const Wrapped = (prop) => {
    const url = 'some source' // reactive source
    return (
      <Component {...prop} url={url} />
    )
  }
  return Wrapped
}

export default withRouter
