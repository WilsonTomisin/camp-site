import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import '../styles/navlink.css'
import { Button } from "./Button"
import React from 'react' ;

export const Navbar = () => {
  // const [ isopen, setisopen] = React.useState(false)


  
  
  return (
    <nav  className=' flexBetween padding-container max-container py-5 relative z-20'>
        <Link href={'/'}>
          <Image src={'/hilink-logo.svg'} alt="logo" width={74} height={29}/>
        </Link>
        <ul className=" hidden lg:flex gap-12">
          {NAV_LINKS.map(link =>(
            <Link className=" cursor-pointer regular-16 text-gray-50 flexCenter  " href={link.href} key={link.key}>
              <span className="nav-link pb-1.5 font-medium hover:text-black transition-all duration-1000 ease-in-out ">{link.label}</span>
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button 
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
            />
        </div>

        {/* //hamburger menu */}
        <div  className=" flex lg:hidden">
            <Image src={'/menu.svg'} alt='menu-icon' height={27} width={27}/>
          

          
        </div>
    </nav>
  )
}
