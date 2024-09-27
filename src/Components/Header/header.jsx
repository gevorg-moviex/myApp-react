import Navbar from "../Navbar/navbar";
import bgHeader from '/src/assets/header-bg.jpg';

export default function Header() {
    return (
        <header className="min-h-screen" style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${bgHeader})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat"
        }}>
            <Navbar />
            <div className="w-full flex justify-center relative top-52">
                <div className="w-[500px] flex flex-col justify-center gap-7 items-center text-center text-[rgb(200,200,200)]">
                    <h1 className="text-9xl font-bold tracking-[10px] border-b-2 border-solid pb-2 border-[rgb(200,200,200)] animate-fadeIn">AraratIT</h1>
                    <h2 className="font-normal text-2xl animate-fadeIn">Pioneering IT innovation with top-tier web, mobile app development, and IT solutions.</h2>
                    <button className="py-3 px-7 bg-[#D2D2D2] text-[#313131] rounded-full tracking-[4px] shadow-shadow1 transition-all duration-300 hover:bg-slate-200 animate-fadeIn">GET STARTED</button>
                </div>
            </div>
        </header>
    );
}
