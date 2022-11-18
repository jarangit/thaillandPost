import React, { useMemo } from 'react'
import ButtonOutline from '../button/buttonOutline';

type Props = {
  title: string;
  desc: string;
}

const AgencyItem = ({ title, desc }: Props) => {

  const styled = useMemo(() => ({
    root: `
    flex items-center justify-between border-b py-3 border-gray-light 
    `
  }), [])
  return (
    <div className={`${styled.root}`}>
      <div className={`flex gap-3 flex-col`}>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
      <div>
        <ButtonOutline
          outlineColor='#D30D2B'
        >
          View
        </ButtonOutline>
      </div>
    </div>
  )
}

export default AgencyItem