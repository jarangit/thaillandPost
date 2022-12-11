/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { RenderPost, RenderVideo, RenderPDF } from '../../components/layout/themeRenderPost';
import { mockDataContentLists } from '../../constant/contentList';

type Props = {}

const postDetailPage = (props: Props) => {
  const [dataContent, setDataContent] = useState<any>()
  const { query, isReady } = useRouter();

  const getData = useCallback((id: any) => {
    const found = mockDataContentLists.find((item: any) => item.id == id)
    if (found) {
      setDataContent(found)
    }
  }, [])

  useEffect(() => {
    if (query && query.id) {
      getData(query.id)
    }
  }, [getData, query])

  return (
    <div>
      <div className='myContainer !py-10'>
        {dataContent?.type === "POST" && <RenderPost data={dataContent?.data} />}
        {dataContent?.type === "VIDEO" && <RenderVideo data={dataContent?.data} />}
        {dataContent?.type === "PDF" && <RenderPDF data={dataContent?.data} />}
      </div>
    </div>
  )
}

export default postDetailPage