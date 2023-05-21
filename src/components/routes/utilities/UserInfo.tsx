import { Fragment } from "react"
import Image from 'next/image';
import { SwitcherLanguage, SwitcherTheme } from "@generator"
import { userInfoPropsType } from "@type/ComponentsTypes"
import { Menu } from "@headlessui/react"
import MyPic from "../../../assets/images/myPic.jpg"

export function UserInfoMobile(props: userInfoPropsType) {
  const {user} = props
  return (
    <Fragment >
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <Image width={56} height={56} className="rounded-full" src={MyPic} alt="picture profile" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-none text-white">
            {user.name}
          </div>
          <div className="text-sm font-medium leading-none text-gray-400">
            {user.email}
          </div>
        </div>
      </div>
      <div className="flex items-center px-5 flex-shrink-0">
        <SwitcherTheme/>
        <SwitcherLanguage/>
      </div>
    </Fragment>
  )
}

export function UserInfo(props: userInfoPropsType) {
  return (
    <div className="ml-4 flex items-center md:ml-2">
      <SwitcherTheme/>
      <SwitcherLanguage/>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">
              Open user menu
            </span>
            <Image width={56} height={56} className="rounded-full" src={MyPic} alt="profile picture" />
          </Menu.Button>
        </div>
      </Menu>
    </div>
  )
}
