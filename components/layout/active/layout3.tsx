import React from 'react'
import ActivityList from '../../template3/activityList'
import CardList from '../../template3/cardList'
import NewsList from '../../template3/newsList'
import ProductList from '../../template3/productList'
import Banner from '../banner'

type Props = {}

const Layout3 = (props: Props) => {
  return (
    <>
      <div>
        <Banner data={undefined} />
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
    </>
  )
}

export default Layout3