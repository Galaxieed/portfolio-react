import { Outlet } from "react-router-dom";
import WaveBackground from "./components/shared-components/animated-background/wave-background";
import Footer from "./components/shared-components/footer/footer";
import NavBar from "./components/shared-components/navbar/navbar";

export default function Root() {
    return (
        <main>
            <WaveBackground /> 
            <NavBar/>
                <Outlet/>
            <Footer/>
        </main>
    )
}