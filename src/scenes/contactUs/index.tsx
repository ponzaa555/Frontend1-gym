import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import { useForm } from "react-hook-form";




type Props = {
    setSelectedPage:(value:SelectedPage) =>void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const{
        register,
        trigger,
        formState:{ errors},
    } = useForm();

    const onSubmit = async(e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            console.log("IN")
            e.preventDefault();
        }
    };

  return (
    <section className=" w-full py-24 pb-32 mx-auto" id="contactus">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className=" w-5/6 mx-auto">
            {/* HEADER */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
        >
                <HText>
                    <span className=" text-primary-500">JOIN NOW </span>
                    <span>TO GET IN SHAPE</span>
                </HText>            
            {/* DESCRIPTION */}
                <p className= "my-5 md:w-3/5">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus.
                Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
        </motion.div>
            {/* FROM AND PICTURE */}
            <div className="mt-10  justify-between gap-8 md:flex ">
              <motion.div 
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
                }}>
                    <form 
                     target="_blank"  //{/* target=_blank กด submit จะไปหน้าใหม่ */}
                     onSubmit={onSubmit}
                     method="POST"
                     action="https://formsubmit.co/3596c6f965c044b4df4ffb453ffcca71"
                     > 
                        {/* NAME */}
                        <input type="text" 
                            className=" placeholder:text-white  bg-primary-300 rounded-md py-3 px-5 w-full" 
                            placeholder="NAME" 
                            {...register("name",{
                                required:true,
                                maxLength:100,
                            })}/>
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char"}
                                </p>
                            )}
                        {/* EMAIL */}
                        <input type="text" 
                            placeholder="EMAIL"
                            className=" placeholder:text-white  bg-primary-300 rounded-md py-3 px-5 my-5 w-full "
                            {...register("email",{
                                required:true,
                                pattern:/^[A-Z-0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}/>
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required." }
                                    {errors.email.type === "pattern"  && "invalid email address."}
                                </p>
                            )}
                        {/* MESSAGE */}
                        <textarea  
                        className="mb-5 w-full rounded-lg bg-primary-300
                        px-5 py-3 placeholder-white" 
                        placeholder="MESSAGE" 
                        {...register("message",{
                            required:true,
                            maxLength:2000,
                        })}
                        rows={4}
                        cols={50}/>
                        {errors.message &&(
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char"}
                            </p>
                        )}

                        {/* SUBMIT BUTTON */}
                        <button className="py-3 my-5 bg-secondary-500 rounded-xl  px-20  hover:text-white hover:duration-700 ">
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16  basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                    
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                        <img src={ContactUsPageGraphic} alt=""  className="w-full"/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  );
};
export default ContactUs
