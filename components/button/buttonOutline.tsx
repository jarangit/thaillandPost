import React from 'react'

type Props = {
  onAction?: () => void;
  disabled?: boolean;
  children: React.ReactNode,
  outlineColor?: string;
}

const ButtonOutline = ({ onAction, disabled, children, outlineColor }: Props) => {
  return (
    <button
      style={{
        border: outlineColor ? `2px solid ${outlineColor}`:'1px solid #D30D2B',
        color: outlineColor ?? '#000'
      }}
      className={`px-3 h-[25px] text-sm rounded-lg`}
      onClick={onAction}
    >
      {children}
    </button>
  )
}

export default ButtonOutline