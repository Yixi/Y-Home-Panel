import * as React from 'react'

const Icon:React.FC<{name?: string}> = (props) => {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`} />
    </svg>
  )
}

export default Icon
