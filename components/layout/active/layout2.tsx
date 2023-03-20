import React from 'react'
import AgencyListTemplate2 from '../../template2/agencyList'
import BannerTemplate2 from '../../template2/banner'
import CalendalList from '../../template2/calendalList'
import GridContents from '../../template2/gridContents'

type Props = {}

const Layout2 = (props: Props) => {
  return (
    <>
      <BannerTemplate2 />
      <GridContents />
      <>
        <div className="myContainer p-6 grid grid-cols-3 gap-4 !mb-6 !pb-6">
          <div className={`col-span-3 md:col-span-1 `}>
            {/* <AgencyList /> */}
            <AgencyListTemplate2 />
          </div>
          <div className={`col-span-3 md:col-span-2 `}>
            <CalendalList/>
          </div>
        </div>
      </>
    </>
  )
}

export default Layout2