import React, { useMemo } from 'react'
import { mockAgencyList } from '../../constant/agencyList'
import Button from '../button/button'
import ButtonOutline from '../button/buttonOutline'
import AgencyItem from '../items/agencyItem'
import { useRouter } from 'next/router'
type Props = {}

const AgencyList = (props: Props) => {
  const { push } = useRouter()
  const styled = useMemo(() => ({
    root: `
    p-6 border border-gray-light rounded-2xl shadow-lg flex flex-col h-full bg-white
    `
  }), [])
  return (
    <div className={`${styled.root}`}>
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
          w="100%"
          onAction={() => push('/contents')}
        >
          View All
        </Button>
      </div>
    </div>
  )
}

export default AgencyList