import { ReactElement } from "react"
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";
import { Background1, Background2 } from "@animation";

export default function RoutingComponent(props : {children : ReactElement}) {
  const { children } = props
  const { pathname } = useRouter()
  const { t } = useTranslation("routes")
  return (
    <div>
      <Background1/>
      <Background2/>
      <div className="border-lg border-blue-500">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center uppercase  font-bold tracking-tight text-gray-900">
           - - - {t(pathname.slice(1))} - - -
          </h1>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl ">
          {children}
        </div>
      </div>
    </div>
  )
}