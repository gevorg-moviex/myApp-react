import { data } from "autoprefixer"

const dataImage = [
    {
        id: 1,
        title: "Web ծրագրավորում",
        imageUrl: "../src/assets/Logos/webDev.png",
        content: "6 ամիս"
    },
    {
        id: 2,
        title: "UI/UX դիզայն",
        imageUrl: "../src/assets/Logos/ui-ux.png",
        content: "2 ամիս"
    },
    {
        id: 3,
        title: "SMM",
        imageUrl: "../src/assets/Logos/smm.png",
        content: "2 ամիս"
    },
    {
        id: 4,
        title: "Project Management",
        imageUrl: "../src/assets/Logos/pm.webp",
        content: "2 ամիս"
    },
    {
        id: 5,
        title: "Գրաֆիկ դիզայն",
        imageUrl: "../src/assets/Logos/graphic-design.png",
        content: "2 ամիս"
    },
    {
        id: 6,
        title: "Համակարգչային գրագիտություն",
        imageUrl: "../src/assets/Logos/3d-illustration-computer-keyboard-and-mouse-object-png.png",
        content: "2 ամիս"
    },
]

export default function Services(){
    return (
        <div className="flex justify-center py-10 mt-16 pb-16">
            <div  className="flex flex-col justify-center items-center gap-9">
                <h1 className="text-4xl pb-4">Our Services</h1>
                <div className="grid grid-cols-3 gap-10 gap-x-24"> 
                    {dataImage.map((item) => (
                        <div key={item.id} className="flex flex-col items-center border-2 border-solid border-[#D2D2D2] px-16 py-6 rounded-2xl gap-5 cursor-pointer transition-all duration-500 hover:-translate-y-4">
                            <h1 className="text-sm tracking-wide cursor-pointer">{item.title}</h1>
                            <div className="flex flex-col gap-3 text-[12.8px] text-color1 tracking-[1px] text-center">
                                <img src={item.imageUrl} alt="" className="w-[200px] h-[200px]" />
                            </div>
                            <span className="text-[13px] tracking-[1px]">{item.content}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
