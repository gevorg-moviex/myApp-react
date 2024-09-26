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

        <div className="w-full flex justify-center relative top-48">
            <div className="w-80 flex flex-col justify-center gap-7 items-center text-center text-[rgb(200,200,200)]">
                <h1 className="text-8xl -tracking-tighter">FRIEND</h1>
                <h1 className="font-normal text-lg">Pioneering IT innovation with top-tier web, mobile app development, and IT solutions.</h1>
                <button>GET STARTED</button>
            </div>
        </div>
            
        </header>
    )
};
