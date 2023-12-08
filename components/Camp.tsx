import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

type campProps={
  title: string;
  location: string;
  icon: string ;
  backgroundImage: string ;
  peoplejn: string
}

const Campsite =({title,location,icon,backgroundImage,peoplejn}:campProps)=>{

  return(
    <div className={` h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat 
    lg:rounded-r-5xl 2xl:rounded-5xl`}>

      <div className=" flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className=" flexCenter gap-4">
          <div className=" rounded-full bg-green-50 p-4">
              <Image src={icon} width={24} height={24} alt="map-icon"/>
          </div>
          <div className=" flex flex-col gap-1">
              <h4 className=" bold-16 text-white ">{title}</h4>
              <p className=" regular-14 text-white">{location}</p>
          </div>
        </div>

        <div className=" flexCenter gap-6">
            <span className=" flex -space-x-4 overflow-hidden">
                { PEOPLE_URL.map(url=>(
                  <Image
                  className=" inline-block h-10 w-10"
                  src={url}
                  key={url}
                  alt=" people-icon "
                  width={52}
                  height={52}
                  />
                ))

                }
            </span>
            <p className=" bold-16 lg:bold-20 text-white"> {peoplejn} </p>

        </div>

      </div>
      
    </div>
  )
}

export const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 xl:mb-20 lg:py-20'>
       <div className=' hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
        overflow-x-auto lg:h-[400px] xl:h-[640px]'>
          <Campsite
          title='Putuk Truno Camp'
          location='Prigen,Parsuruan'
          backgroundImage= ' bg-bg-img-1'
          peoplejn =' 50+ joined '
          icon ='/folded-map.svg'
          />
          <Campsite
          title='Mountain view Camp'
          location='Somewhere in the wilderness'
          backgroundImage= ' bg-bg-img-2'
          peoplejn =' 50+ joined '
          icon ='/folded-map.svg'
          />
       </div>

       <div className=" flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className=" bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[735px]
         xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl
         ">
          <h1 className=" regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <span className=" font-bold ">Feeling lost</span> and not knowing the way?
          </h1>
          <p className=" regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers
            when visiting a new climbing location, the 
            possibility of getting lost is very large. 
            That's why we are here for those of you who 
            want to start an adventure.
          </p>
          <Image src={'/quote.svg'} alt="quote-icon" 
          width={186} height={217} className="camp-quote"/>

        </div>

       </div>
    </section>
  )
}
