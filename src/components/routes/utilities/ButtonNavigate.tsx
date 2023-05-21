import { useRouter } from "next/router"
import { Disclosure } from '@headlessui/react'
import { buttonNavigationPropsType } from "@type/ComponentsTypes";

function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
  }

export function ButtonNavigate(props : buttonNavigationPropsType) {
  const {item} = props
  const { pathname } = useRouter();
  const current = pathname.slice(1) === item.name
  return (
    <a
    href={item.href}
    className={classNames(
      current
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'rounded-md px-3 py-2 text-sm font-medium'
    )}
    aria-current={current ? 'page' : undefined}
  >
    {item.name}
  </a>
  )
}

export function ButtonNavigateMobile(props : buttonNavigationPropsType) {
    const {item} = props
    const { pathname } = useRouter();
    const current = pathname.slice(1) === item.name
    return(
        <Disclosure.Button
                      as="a"
                      href={item.href}
                      className={classNames(
                        current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={current ? 'page' : undefined}
                    >
                      {item.name}
        </Disclosure.Button>
    )
}
