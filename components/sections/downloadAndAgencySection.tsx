import React from 'react'
import AgencyList from '../card/agencyList'
import DownloadTable from '../card/downloadTable'

type Props = {}

const DownloadAndAgencySection = (props: Props) => {
  return (
    <>
      <div className="myContainer p-6 grid grid-cols-3 gap-4 !mb-6 !pb-6">
        <div className={`col-span-3 md:col-span-2 `}>
          <DownloadTable />
        </div>
        <div className={`col-span-3 md:col-span-1 `}>
          <AgencyList />
        </div>
      </div>
    </>
  )
}

export default DownloadAndAgencySection