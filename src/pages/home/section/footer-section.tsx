import SectionContainer from "../../../components/generic/section-container.component"
import { contacts } from "../../../constants/data"


const Footer = () => {
    return (
        <footer className="w-full py-4 mt-8 bg-dark
        ">
            <SectionContainer className="grid grid-cols-1 md:flex items-center justify-center">
                {
                    contacts.map((contact, index) =>(
                        <a key={index} href={contact.contact} className="flex flex-col items-center justify-center w-full md:w-fit px-6 py-2 gap-1 hover:*:!text-light hover:scale-[1.03]">
                            <span className="text-4xl text-gray">{contact.icon}</span>
                            <span className="text-xs font-semibold text-light">{contact.name}</span>
                        </a>
                    ))
                }
            </SectionContainer>
            <p className="text-xs text-light/90 font-light w-full text-center py-4 border-t border-gray-transparent"> &copy; {new Date().getFullYear()} Kasi Daniel</p>
        </footer>
    )
}

export default Footer