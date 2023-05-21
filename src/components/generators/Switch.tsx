import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'


export function SwitcherTheme () {
  const [enabled, setEnabled] = useState(false)
  const {theme, setTheme} = useTheme()
  function handleTheme() {
    setEnabled(!enabled)
    theme === "dark" ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={handleTheme}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[28px] w-[74px] shrink-0 pb-2 cursor-pointer rounded-full  border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-10 bg-gray-700' : 'translate-x-0, bg-white'}
            pointer-events-none inline-block h-[28px] w-[34px] transform rounded-full shadow-lg ring-0 transition duration-500 ease-in-out`}
        >
            {<LightBulbIcon
                color={!enabled ? "white": "black"}
              className={`${!enabled ? 'bg-gray-700' : ' bg-white'} pointer-events-none inline-block h-[28px] w-[34px] bg-red transform rounded-full red shadow-lg ring-0 transition duration-200 ease-in-out`}
          />}
            </span>
      </Switch>
    </div>
  )
}

export function SwitcherLanguage () {
  const [enabled, setEnabled] = useState(false)
  const { lang } = useTranslation();
  console.log("lang", lang)
  function handleLanguage() {
    lang === "en" ? setLanguage("fr") : setLanguage("en")
    setEnabled(!enabled)
  }
  return (
    <div className="py-16 pl-5">
      <Switch
        checked={enabled}
        onChange={handleLanguage}
        aria-placeholder='hello'
        className={`${!enabled ? 'bg-green-500' : 'bg-purple-500'}
          relative inline-flex h-[28px] w-[74px] shrink-0 pb-2 cursor-pointer rounded-full  border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[28px]  bg-white w-[34px] transform rounded-full shadow-lg ring-0 transition duration-500 ease-in-out dark:text-black`}
        >
            {enabled? "fr": "en"}
            </span>
            
      </Switch>
    </div>
  )
}

