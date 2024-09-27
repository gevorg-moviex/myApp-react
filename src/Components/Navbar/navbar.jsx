export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-56 py-7">
            <div>
                <h1 className="text-2xl tracking-[2px] font-bold cursor-pointer text-[rgb(200,200,200)] animate-fadeIn">AraratIT</h1>
            </div>
            <nav className="text-[rgb(200,200,200)] font-normal">
                <ul className="flex gap-14">
                    <li>
                        <a href="" className="hover:text-white hover:border-b border-solid border-[rgb(200,200,200)] pb-1 animate-fadeIn">About</a>
                    </li> 
                    <li>
                        <a href="" className="hover:text-white hover:border-b border-solid border-[rgb(200,200,200)] pb-1 animate-fadeIn">Services</a>
                    </li>
                    <li>
                        <a href="" className="hover:text-white hover:border-b border-solid border-[rgb(200,200,200)] pb-1 animate-fadeIn">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
