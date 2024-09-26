export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-32 py-7">
            <div>
                My img
            </div>
            <nav className="text-[rgb(200,200,200)] font-normal">
                <ul className="flex gap-14">
                    <li>
                        <a href="" className="hover:text-white">About</a>
                    </li> 
                    <li>
                        <a href="" className="hover:text-white">Services</a>
                    </li>
                    <li>
                        <a href="" className="hover:text-white">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
