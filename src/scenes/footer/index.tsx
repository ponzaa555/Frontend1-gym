import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
        <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className=" mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id delectus, 
                    inventore soluta atque aliquid fugit quidem officiis quos et, quia molestiae eaque, 
                    temporibus placeat ipsa suscipit! Ab, omnis itaque.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className=" basis-1/4 mt-16 md:mt-0">
                <h4 className=" font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p>Et gravida id et etiam</p>
                <p className="my-5">Ullamcorper vivamus</p>
            </div>
            <div className="basis-1/4 mt-16 md:mt-0">
                <h4 className=" font-bold">Contact Us</h4>
                <p className=" my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p className="">(333)425-6825</p>
            </div>
        </div>
    </footer>
  )
}
export default Footer