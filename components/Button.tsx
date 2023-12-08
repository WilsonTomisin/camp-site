import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit' ;
    title : string ;
    icon?: string ;
    variant: string ;
}

export const Button = ({title,variant,icon,type}: ButtonProps) => {
  return (
    <button type={type} className={` ${variant} flexCenter rounded-full gap-3`}>
        <span>{icon && <Image src={icon} alt={title} width={24} height={24}/>}</span>
        <span className=" bold-16">{title}</span>
    </button>
  )
}
