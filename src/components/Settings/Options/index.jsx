import Select from "react-select"
import i18next from "i18next"
import { useTranslation } from 'react-i18next'
import { useSettings } from "../../../contexts/settingsContext"

import OptionsContainer from "./style"
import {
  controlStyles,
  optionStyles,
  valueStyles,
  menuStyles
} from '../../SelectInput/style'

export function Options() {
  const { t } = useTranslation()
  const {
    temperatureOptions,
    defaultTemperatureUnity,
    setDefaultTemperatureUnity,
    languageOptions,
    defaultLanguage,
    setDefaultLanguage
  } = useSettings()
  
  function configureDefaultTemperature(e) {
    setDefaultTemperatureUnity(e)
    localStorage.setItem('defaultTemperatureUnity', e.value)
  }
  
  function configureDefaultLanguage(e) {
    setDefaultLanguage(e)
    i18next.changeLanguage(e.value)
    localStorage.setItem('defaultLanguage', e.value)
  }

  return (
    <OptionsContainer>
      <p>{t('Select default temperature unity')}:</p>
      <Select value={defaultTemperatureUnity} options={temperatureOptions}
            isSearchable={false} onChange={e => configureDefaultTemperature(e)}
            aria-label={t('Select default temperature unity')}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles,
            }}
        />
        
      <p>{t('Select default language')}:</p>
      <Select value={defaultLanguage} options={languageOptions}
            isSearchable={false} onChange={e => configureDefaultLanguage(e)}
            aria-label={t('Select default language')}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles,
            }}
        />
    </OptionsContainer>
  )
}