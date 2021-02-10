import * as React from 'react'
import DropDown from 'rc-dropdown'
import {find} from 'lodash'
import 'rc-dropdown/assets/index.css'
import './index.scss'
import Icon from '../Icon'
import config, {Config} from '../../config'
import {useSetRecoilState} from 'recoil'
import {activeTabState} from '../../Recoil/atoms'

const Menu:React.FC<{onClick: (menu: Config) => void}> = (props) => {

  const onMenuClick = (menu: Config) => () => {
    props.onClick(menu)
  }

  return (
    <div className="Menu">
      {config.map((c, i) => (
        <div key={i} className="Menu-item" onClick={onMenuClick(c)}>{c.name}</div>
      ))}
    </div>
  )
}

const Titan: React.FC = () => {

  const setActiveTab = useSetRecoilState(activeTabState)

  const onMenuSelect = (menu: Config) => {
    setActiveTab((oldTab) => {
      if (!find(oldTab, {url: menu.url})) {
        return oldTab.concat({...menu})
      } else {
        return oldTab
      }
    })
  }

  return (
    <div className="Titan">
      <DropDown
        visible={true}
        trigger={['click']}
        overlay={
          <Menu onClick={onMenuSelect}/>
        }
        animation="slide-up"
      >
        <div className="Titan-menu"><Icon name="menu"/></div>
      </DropDown>
    </div>
  )
}

export default Titan
