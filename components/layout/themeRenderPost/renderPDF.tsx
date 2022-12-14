import React, { useCallback, useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf'
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { MdOutlineAttachFile } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';

type Props = {
  data: any;
}


const RenderPDF = ({ data }: Props) => {
  const [currentFile, setCurrentFile] = useState("")

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onSelectFile = useCallback((file: string) => {
    if (file) {
      setCurrentFile(file)
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])

  useEffect(() => {
    if (currentFile === "") {
      setCurrentFile(data[0].downloadUrl)
    }
  }, [])

  return (
    <div>
      <div className='flex items-center justify-between w-full mb-6'>
        <div className='text-3xl text-blue'>แบบฟอร์มสมาชิกแสตมป์ไทย</div>
        <div className='text-blue-dark'>10 กรกฎาคม 2565 09.00 น.</div>
      </div>
      <div
        className={`h-screen my-6 max-w-[900px] mx-auto`}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
          <Viewer
            fileUrl={currentFile}
            plugins={[defaultLayoutPluginInstance]}
            theme="dark"

          />
        </Worker>
      </div>

      <div className='border border-gray-light divide-y-[1px] divide-gray-light rounded-md bg-white drop-shadow-md'>
        {data.map((item: any, key: number) => (
          <div key={key} className={`flex items-center justify-between p-3 cursor-pointer ${currentFile == item.downloadUrl && "bg-[#efefef] text-red"}`} onClick={() => onSelectFile(item.downloadUrl)}>
            <div className='flex gap-3 items-center'>
              <div>
                <MdOutlineAttachFile size={25} color={"#9B9898"} />
              </div>
              <div className='hover:text-red transition-all'>{item.title}</div>
            </div>
          <div className='text-blue'>
            Download
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderPDF