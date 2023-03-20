import React from 'react'
import ActivityList from '../../components/template3/activityList'
import Banner from '../../components/template3/banner'
import CardList from '../../components/template3/cardList'
import NewsList from '../../components/template3/newsList'
import ProductList from '../../components/template3/productList'

type Props = {
  data: any
}

const Layout3Page = ({ data }: Props) => {
  return (
    <div>
      <Banner />
      <div className='myContainer !-mt-[250px]'>
        <div className=''>
          <CardList />
        </div>
        <div className='grid grid-cols-3 gap-6 mt-6'>
          <div className='col-span-3 lg:col-span-1'>
            <NewsList />
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <ProductList />
          </div>
        </div>
        <ActivityList />
      </div>
    </div>
  )
}

export default Layout3Page