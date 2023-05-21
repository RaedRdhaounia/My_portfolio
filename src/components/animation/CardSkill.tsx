import Image from "next/image";
import MyPic from "../../assets/images/myPic.jpg"
import { Fragment, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { skillsDataType } from "src/types/dataTypes";


export default  function CardSkill(props : skillsDataType) {
    const {source} = props.skill
    const cardRef = useRef(null)
    const [open, setOpen] = useState(true)
    function handleClick() {
        setOpen(false)
        console.log("clicked", open);
        setTimeout(() => {
            setOpen(true)
        }, 2000)
    }
  return (
    <Transition
    ref={cardRef}
    as={Fragment}
    show={open}
    enter=" skew duration-[400ms]"
    enterFrom="opacity-0 rotate-[-120deg] scale-50"
    enterTo="opacity-100 rotate-0 scale-100"
    leave="skew duration-200 transition ease-in-out"
    leaveFrom="opacity-100 rotate-0 scale-100 "
    leaveTo="opacity-0 scale-95 "
  >
        <div className="row full-height justify-content-center">
            <div className=" text-center py-5 py-md-0 "onClick={handleClick}>
                      <input className="pricing" type="checkbox" id="pricing" name="pricing" />
                      <label >
                        <span className="block-diff ">
                          name
                          <span className="float-right ">
                          details
                          </span>
                        </span>

                      </label>
                    <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                            <div >
                                <div className="pricing-wrap">
                                    <div className="img-wrap img-2">
                                        <Image width={50} height={50} src={source} alt=""/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
            </div>
          </div>
  </Transition>


  )
}