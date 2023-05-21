import React, { useCallback } from 'react'
import { ButtonNavigate, ButtonNavigateMobile } from "./utilities/ButtonNavigate"
import { UserInfo, UserInfoMobile } from './utilities/UserInfo'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { smb } from '@type/ComponentsTypes'
import useTranslation from 'next-translate/useTranslation'

export default function NavBar() {
  const {t, lang} = useTranslation("routes")
  const navigation = useCallback((_symbol : smb) => {
    const navigationInfo = new Map ([
      ["introduction" ,{ name: 'introduction', href: '/'          }],
      ["experience"   ,{ name: 'experience'  , href: '/experience'}],
      ["project"      ,{ name: 'projects'    , href: '/projects'  }],
      ["skills"       ,{ name: 'skills'      , href: '/skills'    }],
      ["contact"      ,{ name: 'contact'     , href: '/contact'   }],
    ])
    const name = navigationInfo.get(_symbol)?.name
    const href = lang === "fr" ? "/fr" + navigationInfo.get(_symbol)?.href :  navigationInfo.get(_symbol)?.href
    return {name: name && t(name), href}
  },[lang])
  const user = {
    name: 'Raed Rdhaounia',
    email: 'raedrdhaounia@gmail.com',
  }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-purple-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <ButtonNavigate item={navigation(smb.introduction)} />
                        <ButtonNavigate item={navigation(smb.experience)}   />
                        <ButtonNavigate item={navigation(smb.project)}      />
                        <ButtonNavigate item={navigation(smb.skills)}       />
                        <ButtonNavigate item={navigation(smb.contact)}      />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                  <UserInfo user={user} />
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <ButtonNavigateMobile item={navigation(smb.introduction)} />
                  <ButtonNavigateMobile item={navigation(smb.experience)}   />
                  <ButtonNavigateMobile item={navigation(smb.project)}      />
                  <ButtonNavigateMobile item={navigation(smb.skills)}       />
                  <ButtonNavigateMobile item={navigation(smb.contact)}      />
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <UserInfoMobile user={user} />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}