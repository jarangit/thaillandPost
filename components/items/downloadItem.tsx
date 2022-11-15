import React from 'react'
import ButtonOutline from '../button/buttonOutline';

type Props = {
  name:string;
  createdAt:string;
}

const DownloadItem = ({name, createdAt}: Props) => {
  return (
    <div className={`flex justify-between items-center py-3 border-b border-gray-light`}>
      <div className={`flex gap-3 flex-col`}>
        <div>{name}</div>
        <div className={`text-blue-dark`}>{createdAt}</div>
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

export default DownloadItem