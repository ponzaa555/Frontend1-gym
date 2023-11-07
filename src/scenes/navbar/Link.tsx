import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};
// กำหนด type Props และ type กับ interface เหมือนกัน
// จะไปดู type จาก props
// href เหมือน ID
// setSelectedPage เป็น function
// AnchorLink
const Link = ({page,selectedPage,setSelectedPage,}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage// replace คือแทนที่ช่องว่าง เพราะ page เป็น type string as SelectedPage เปลี่ยน type เป็น enu
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500": ""} 
      transition duration-500 hover:text-primary-300`} // ? คือ ถ้าตรงกรณี ก็ ทำอันแรก ถ้าไม่ทำอันหลัง "" คือ set เป็นเหมือน defualt
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link