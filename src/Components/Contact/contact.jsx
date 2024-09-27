export default function ContactComponent(){
    return (
        <div className="flex justify-center"> 
            <div>
                <div className="py-[120px] px-[75px] flex flex-col gap-8 bg-red-300">
                    <h1 className="text-2xl">Կոնտակտներ</h1>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-solid fa-phone"></i>
                        <a href="">+374 (93)- 67 - 69 - 66</a>
                    </div>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-brands fa-instagram"></i>
                        <a href="">ararat_itcenter</a>
                    </div>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-brands fa-facebook-f"></i>
                        <a href="">Ararat IT Center</a>
                    </div>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <a href="">Ararat IT Center</a>
                    </div>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-regular fa-envelope"></i>
                        <a href="">info@aitschool.am</a>
                    </div>
                    <div className="flex gap-1 justify-left items-center text-[15px]">
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="">Ք․ Արարատ, Խանջյան 52/2</a>
                    </div>
                </div>

                <div>
                    <h1>Կապ մեզ հետ</h1>
                </div>
            </div>
        </div>
    )
}