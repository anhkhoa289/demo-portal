const HOCWrapper = (Component, title) => {
  const Wrapper = (props) =>
    <>
      <Header title={title}/>
      ...
      
      <Component {...props} />
      
      ...
      <Footer />
    </>
  return Wrapper
}
