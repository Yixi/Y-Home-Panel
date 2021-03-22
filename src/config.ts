import menuConfig from '../config/config'

export interface Config {
  name: string,
  url: string,
  image?: string,
}

const config: Config[] = menuConfig

export default config
