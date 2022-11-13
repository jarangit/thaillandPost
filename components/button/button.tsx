import React from 'react'

type Props = {
  onAction?: () => void;
  disabled?: boolean;
  children: React.ReactNode,
  bgColor?: string;
}

const Button = ({ onAction, disabled, children, bgColor }: Props) => {
  return (
    <button
      style={{
        backgroundColor: bgColor ?? '#D30D2B',
      }}
      className={`w-24 h-12 text-white rounded-md hover:bg-red-light`}
      onClick={onAction}
    >
      {children}
    </button>
  )
}

export default Button