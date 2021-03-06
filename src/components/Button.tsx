import React, { ReactNode } from 'react'
import classNames from 'classnames'

type ButtonProps = {
  id?: string
  className?: string
  children: ReactNode

  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ id, className, children, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      className={classNames(
        className,
        'flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
