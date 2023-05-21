import { Call, Facebook, Github, Google, Home, Instagram, Linkedin, Mail, Twitter } from "@icon";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

function Contact(props: {Icon: ReactElement, link: string}) {
  const {Icon, link} = props
  return (
    <a href={link} className="mr-6 text-neutral-600 dark:text-neutral-200">
    {Icon}
  </a>
  )
}

function FrameWork(props: {name: string, link: string}) {
  const {name, link} = props
  return (
    <p className="mb-4">
      <a href={link} className="text-neutral-600 dark:text-neutral-200">
        {name}
      </a >
    </p>
  )
}

function ContactMe(props: {name: string, link: string, Icon: ReactElement}) {
  const {name, link, Icon} = props
  return (
    <a href={link}>
      <div className="mb-4 flex items-center justify-center md:justify-start">

        {Icon}
        {name}
      </div>
  </a>
  )
}
export default function Footer() {
  const { t } = useTranslation('common')
  const ContactInfo = [
  {Icon: <Facebook/> , link: "http://www.facebook.com/raed.rdh1994"       },
  {Icon: <Google/>   , link: "mailto:raedrdhaounia@gmail.com"             },
  {Icon: <Twitter/>  , link: "https://twitter.com/raedrdhaounia"          },
  {Icon: <Instagram/>, link: "https://www.instagram.com/rdhaouniaraed/"   },
  {Icon: <Linkedin/> , link: "https://www.linkedin.com/in/raed-rdhaounia/"},
  {Icon: <Github/>   , link: "https://github.com/RaedRdhaounia/"          }
  ]
  const FrameWorkInfo = [
    {name: "NEXTJS"  , link: "https://nextjs.org/"           },
    {name: "TAILWIND", link: "https://tailwindui.com/"       },
    {name: "HEADLESS", link: "https://headlessui.com/react/" },
    {name: "NESTJS"  , link: "https://nestjs.com/"           }
  ]
  const ContactMeInfo = [
    {Icon: <Home/>, name: "Tunis Ariana Olympic City", link: "https://www.google.com/maps/place/My+home/@36.8388107,10.1940542,304m/data=!3m1!1e3!4m15!1m8!3m7!1s0x12fd34eb07a3b3d3:0x23c5f2a17f328a58!2sCit%C3%A9+Olympique,+Tunis!3b1!8m2!3d36.8366475!4d10.1948405!16s%2Fg%2F1td3_29z!3m5!1s0x12fd35d912ebdef1:0xa779fec8ee18e008!8m2!3d36.838461!4d10.194257!16s%2Fg%2F11nnqllmk9?hl=fr"},
    {Icon: <Mail/>, name: "raedrdhaounia@gmail.com"  , link: "mailto:raedrdhaounia@gmail.com"                                                                                                                                                                                                                                                                                               },
    {Icon: <Call/>, name: "+216 51 164 297"          , link: "tel:+21651164297"                                                                                                                                                                                                                                                                                                             }
  ]
  return (
<footer
  className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
  <div
    className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div className="mr-12 hidden lg:block">
      <span>{t('footer.introduction')}</span>
    </div>
    <div className="flex justify-center">
      {ContactInfo.map(
        (element, index) => {return  <Contact {...element} key={index} /> }
      )}
    </div>
  </div>

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-4 w-4">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          {t('footer.title')}
        </h6>
        <p>
          {t('footer.details')}
        </p>
      </div>
      <div className="mb-4 text-center items-center uppercase md:justify-start" >
        <h6
          className="mb-4 flex justify-center font-semibold uppercase ">
          FRAMEWORKS
        </h6>
        {FrameWorkInfo.map((element, index) => {
          return <FrameWork {...element} key={index} />
        })}
      </div>
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        {ContactMeInfo.map((element, index) => {
          return <ContactMe {...element} key={index} />
        })}
      </div>
    </div>
  </div>

  <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
    <span>© 2023 Copyright --  </span>
    <a
      className="font-semibold text-neutral-600 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Raed Rdhaounia</a>
  </div>
</footer>
  )
}