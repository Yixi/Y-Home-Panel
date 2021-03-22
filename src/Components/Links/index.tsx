import * as React from 'react'
import config, {Config} from '../../config'
import './index.scss'


const Link: React.FC<{ config: Config }> = (props) => {
  return (
    <div className="Links-item">
      <span className="Links-item-img" style={{backgroundImage: `url(${props.config.image})`}} />
      <a href={props.config.url} target='_blank'>{props.config.name}</a>
    </div>
  )
}

const Links: React.FC = () => {
  return (
    <div className="Links-wrapper">
      <div className='Links'>
        {config.map((c, i) => <Link config={c} key={i}/>)}
      </div>
    </div>
  )
}

export default Links
