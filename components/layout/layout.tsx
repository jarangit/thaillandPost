import React, { useContext, useEffect } from 'react'
import Footer from './footer';
import Menu from './menu';
import Loading from '../items/loading';
import { AppContext } from '../../context/appState';

type Props = {
  children: any;
}

const Layout = ({
  children
}: Props) => {
  const { showLoading, setShowLoading, setUseLocation }: any = useContext(AppContext)

  useEffect(() => {
    setShowLoading(true)
    setTimeout(() => {
      setShowLoading(false)
    }, 1000);
  }, [setUseLocation])
  return (
    <div>
      <Menu />
      {children}
      <Footer />

      {/* modal zone */}
      <Loading />
    </div>
  )
}

export default Layout