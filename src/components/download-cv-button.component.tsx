
import { IoArrowDown } from 'react-icons/io5'
import BaseButton, { buttonType } from './base-button.component'

type BtnProps = {
    className?:string,
}

const DownloadCvButton = ({className=""}:BtnProps) => {

    const handleDownLoadCv = async () => {
        try {
            const response = await fetch("/CV.pdf");
            if(!response.ok){
                throw new Error("Failed to fetch the CV ")
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Create a hiddenLink to trigger the download
            const hiddenLink= document.createElement("a");
            hiddenLink.href = url; hiddenLink.download = "KASI_DANIEL_CV.pdf";
            document.body.appendChild(hiddenLink); hiddenLink.click();

            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(hiddenLink);

        } catch (error) {
            alert("Something went wrong. Failed to download the CV, Please try again later !")
        }
    }
  return (
    <BaseButton clickHandler={handleDownLoadCv} type={buttonType.dark} className={`${className} !py-[0.4rem] !px-4 !text-sm !font-normal`}>Download CV <IoArrowDown className="text-lg ml-2" /></BaseButton>
  )
}

export default DownloadCvButton