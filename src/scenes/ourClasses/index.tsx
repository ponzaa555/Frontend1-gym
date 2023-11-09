import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { ClassType } from "react";
import Class  from "./Class";

const classes:Array<ClassType> =[
    {
        name: "Weight Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit odio dolor ab ad hic modi repellat vel architecto id.",
        image:image1,
    },
    {
        name: "Yoga Classes",
        image:image2,
    },
    {
        name: "Ab Core Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit odio dolor ab ad hic modi repellat vel architecto id.",
        image:image3,
    },
    {
        name: "Adventure Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit odio dolor ab ad hic modi repellat vel architecto id.",
        image:image4,
    },
    {
        name: "FitnessTraining Classes",
        image:image5,
    },
    {
        name: "Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit odio dolor ab ad hic modi repellat vel architecto id.",
        image:image6,
    },
];

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className=" bg-primary-100 w-full py-40"
    >
        {/* HEADER */}
    <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div 
                className="w-5/6 mx-auto"
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{duration: 0.5}}
                variants={{
                            hidden:{opacity: 0, x: -50},
                            visible:{opacity:1,x:0}
                            }}>
                <div className=" md:w-3/5">
                    <HText>OUR CLASSES</HText>
                </div>
            {/* DESCRIPTION */}
                <div className="py-5 ">
                    <p>
                        Fringilla a sed at suspendisse ut enim volutpat. 
                        Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. 
                        Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                    </p>
                </div>
            </motion.div>
            {/* PHOTO */}
            <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType,index) => (
                        <Class
                        key ={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}/>
                    ))}
                </ul>

            </div>
    </motion.div>
       
    </section>
  )
}
export default OurClasses