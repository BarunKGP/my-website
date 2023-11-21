import Image from "next/image";
import {icons} from 'lucide-react';

// export const SchoolIcon = (width, height) => {
//     return (
//         <Image src="/icons/graduation-cap-solid.svg" 
//         width={width}
//         height={height}
//         alt="work icon"/>
//     );
// } 


const Icon = ({name, color, size}) => {
// icons.Map((item) => console.log(item.name))
    const LucideIcon = icons[name];
    return <LucideIcon color={color} size={size} />
};

export default Icon;