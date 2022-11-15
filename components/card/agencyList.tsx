import React from 'react'
import { mockAgencyList } from '../../constant/agencyList'
import Button from '../button/button'
import ButtonOutline from '../button/buttonOutline'
import AgencyItem from '../items/agencyItem'
type Props = {}

const AgencyList = (props: Props) => {
  return (
    <div className={`p-6 border border-gray-light rounded-2xl shadow-lg flex flex-col h-full`}>
      <div>
        <div className={`text-justify text-red`}>หน่วยงานที่เกี่ยวข้อง</div>
        <div className={`mb-3`}>
          {mockAgencyList.map((item, key) => (
            <React.Fragment key={key}>
              <AgencyItem title={item.text1} desc={item.text2} />
            </React.Fragment>
          ))}
        </div>
        <Button 
          w = "100%"
        >
          View All
        </Button>
      </div>
    </div>
  )
}

export default AgencyList