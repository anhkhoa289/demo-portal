import Header from './Header'
import Footer from './Footer'


export default (Component, title) => {
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
