
/*
|----------------------------------------------------------------
| JS Basic
|----------------------------------------------------------------
*/

const a = (x) => {

  const b = (y) => {
    return x + y
  }

  return b
}

const c = a(1) //function b
const kq = c(2) // number 3

const kq2 = a(1)(2) // number 3



const a = (x) => (y) => {
  return x + y
}


/*
|----------------------------------------------------------------
| function "connect"
|----------------------------------------------------------------
*/

const connect = (state, dispatch) => (Component) => {

  const Wrapped = (prop) => {
    return <> ... </>
  }

  return Wrapped
}


/** Don't do this */
const connect = (state, dispatch) => (Component) => (prop) => {
  return <> ... </>
}
