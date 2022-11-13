import React from 'react'
import Footer from './footer';
import Menu from './menu';

type Props = {
  children: any;
}

const Layout = ({
  children
}: Props) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}

export default Layout