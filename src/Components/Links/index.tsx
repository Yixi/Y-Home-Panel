import * as React from 'react'
import * as Parse from 'parse'
import './index.scss'
import {useEffect, useState} from 'react'

type Link = {
  name: string,
  url: string,
  image: string
}

const Link: React.FC<{ config: Parse.Object<Link> }> = (props) => {
  return (
    <div className="Links-item">
      <span className="Links-item-img" style={{backgroundImage: `url(${props.config.get('image')})`}}/>
      <a href={props.config.get('url')} target='_blank'>{props.config.get('name')}</a>
    </div>
  )
}

const Links: React.FC = () => {
  const [links, setLinks] = useState<Parse.Object<Link>[]>([])

  useEffect(() => {
    const query = new Parse.Query<Parse.Object<Link>>('HomeLinks')
    query.find().then((result) => {
      setLinks(result)
    })
  }, [])


  return (
    <div className="Links-wrapper">
      <div className='Links'>
        {links.map(l => (<Link config={l} key={l.id}/>))}
      </div>
    </div>
  )
}

export default Links
