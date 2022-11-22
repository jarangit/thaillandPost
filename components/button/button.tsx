import React from 'react'

type Props = {
  onAction?: () => void;
  disabled?: boolean;
  children: React.ReactNode,
  bgColor?: string;
  w?: string;
  h?: string
}

const Button = ({ onAction, disabled, children, bgColor, w, h }: Props) => {
  return (
    <button
      style={{
        backgroundColor: bgColor ?? '#D30D2B',
        width: w ?? "100px",
        height: h ?? "40px"
      }}
      className={`text-sm md:h-10 text-white rounded-lg hover:bg-red-light px-3 flex justify-center items-center`}
      onClick={onAction}
    >
      {children}
    </button>
  )
}

export default Button