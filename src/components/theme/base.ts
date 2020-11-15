import { Theme } from '@material-ui/core'

import black from './black'
import purple from './purple'
import orange from './orange'
import red from './red'

export type ThemeTypes = {
  [key: string]: Theme
}
const themes: ThemeTypes = {
  black,
  purple,
  orange,
  red,
}

export default function getTheme(theme: string): Theme {
  return themes[theme]
}
