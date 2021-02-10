import {atom, RecoilState} from 'recoil'
import {Config} from '../config'

export const activeTabState: RecoilState<Config[]> = atom({
  key: 'activeTabState',
  default: []
})
