import React, { ReactNode, FC } from 'react'

interface IProp {
  children?: ReactNode
}

const Mine: FC<IProp> = () => {
  return <div>Mine</div>
}

export default Mine
