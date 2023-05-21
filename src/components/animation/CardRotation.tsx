import { Fragment, ReactElement, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import { useTimeoutFn } from 'react-use'

export default function CardRotation(props : {children : ReactElement, time: number}) {
  const {children, time} = props
  let [isShowing, setIsShowing] = useState(false)
  useTimeoutFn(() => setIsShowing(true), time)
  const cardRef = useRef(null)
  return ( 
    <div className="w-full bg-transparent">
    <Transition
      ref={cardRef}
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div>
        {children}
      </div>
    </Transition>
  </div>
  )
}
