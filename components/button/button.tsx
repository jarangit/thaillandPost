import React from 'react'

type Props = {
  onAction?: () => void;
  disabled?: boolean;
  children: React.ReactNode,
  bgColor?: string;
  w?: string;
}

const Button = ({ onAction, disabled, children, bgColor, w }: Props) => {
  return (
    <button
      style={{
        backgroundColor: bgColor ?? '#D30D2B',
        width: w ?? "100px"
      }}
      className={` h-10 text-white rounded-md hover:bg-red-light`}
      onClick={onAction}
    >
      {children}
    </button>
  )
}

export default Button