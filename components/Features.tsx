import { FEATURES } from "@/constants"
import Image from "next/image"
import { type } from "os"

type FeatureType ={
  header : string ;
  subText : string ;
  icon : string ;
  variant : string
}

const FeatureItem = ({header,subText,icon,variant}: FeatureType)=>{

  return(
    <li className=" flex w-full flex-1 flex-col items-start">
      <div className=" bg-green-50 rounded-full p-4 lg:p-7">
        <Image src={icon} alt="icon" width={24} height={24}/>
      </div>
      <h1 className=" bold-20 mt-5 lg:bold-32 capitalize">
        {header}
      </h1>
      <p className=" regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {subText}
      </p>
    </li>

  )
}


export const Features = () => {
   
  
    return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="  max-container padding-container relative w-full flex justify-end">
          <div className=" flex flex-1 lg:min-h-[900px]">
            <Image src={'/phone.png'} alt="phone" width={440} height={1000} className="feature-phone"/>
          </div>

          <div className=" z-20 flex w-full flex-col lg:w-[60%]">
            <div className=" relative">
              <Image
               src={'/camp.svg'}
               alt="camp-icon"
               width={50}
               height={50}
               className=" absolute top-[-28px] left-[-5px] w-10 lg:w-[50px] "
               />
              <h1 className=" bold-40 lg:bold-64"> Our Features </h1>
            </div>
            <ul className=" mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map(feature=>(
                <FeatureItem
                header={feature.title}
                subText={feature.description}
                icon={feature.icon}
                variant={feature.variant}/>
              ))}
            </ul>
          </div>

        </div>
        
    </section>
  )
}

