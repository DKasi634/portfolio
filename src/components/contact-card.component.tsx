
import { ContactItem } from "../types"
import { FaAngleRight } from "react-icons/fa"

type ContactCardProps = {
    className?: string,
    contactItem: ContactItem,
}

const ContactCard = ({ contactItem, className = "" }: ContactCardProps) => {
    return (
        <div className={`${className} flex items-center justify-between gap-4 px-6 py-4 rounded-lg bg-light shadow-sm border-dark-variant border shadow-dark-variant hover:shadow-md cursor-pointer`}>
            <div className="flex items-center justify-start gap-4">
                <span className="text-3xl text-blue">{contactItem.icon}</span>
                <span className="text-xs  text-dark/80 font-bold">{contactItem.name}</span>
            </div>
            <span className="text-xl text-blue"> <FaAngleRight/> </span>
            {/* <p className="w-full text-center text-sm text-dark">{contactItem.contact}</p> */}
        </div>
    )
}

export default ContactCard