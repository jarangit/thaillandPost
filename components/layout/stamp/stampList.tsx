import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLoading } from '../../../hooks/useLoading';
import StampListItem from './stampListItem';

type Props = {
  data: any;
}

const StampList = ({ data }: Props) => {
  const { showLoading, setShowLoading }: any = useLoading();
  const [itemLength, setItemLength] = useState({
    length: 10,
    hasMore: true,
    loading: false,
  })

  const onFetchData = () => {
    setItemLength({
      ...itemLength,
      loading: true,
    })
    setShowLoading(true)
    setTimeout(() => {
      if (itemLength.length < 40) {
        setItemLength({
          length: itemLength.length + 10,
          hasMore: true,
          loading: false,
        })
        setShowLoading(false)

      } else {
        setItemLength({
          ...itemLength,
          hasMore: false,
          loading: false,
        })
        setShowLoading(false)

      }

    }, 1000);
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={itemLength.length}
        next={onFetchData}
        hasMore={itemLength.hasMore}
        loader={""}
        inverse={false}
        style={{ overflowY: 'hidden' }}
      >
        <div className={`grid grid-cols-1  divide-y divide-gray-light`}>
          {data.slice(0, itemLength.length).map((item: any, key: any) => (
            <div key={key} className={`py-3`}>
              <StampListItem data={item} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default StampList