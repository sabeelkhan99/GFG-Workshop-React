import Navbar from '../Navbar/Navbar';
import { Fragment } from 'react';

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <Navbar/>
          </header>
          <main>
              {props.children}
          </main>
          <footer></footer>
    </Fragment>
  )
}

export default Layout
