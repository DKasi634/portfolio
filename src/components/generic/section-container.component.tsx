import React from "react"

interface SectionContainerProps  extends React.HTMLAttributes<HTMLDivElement> {

}


const SectionContainer:React.FC<SectionContainerProps> = ({className="", children}) => {
  return (
    <section className={`${className} mx-auto w-[90svw] md:w-[86svw] lg:w-[82svw] py-6`} >{children}</section>
  )
}

export default SectionContainer