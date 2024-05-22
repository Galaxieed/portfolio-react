import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/shared-components/footer/footer";
import { Container, Grid } from "@mui/material";
import WaveBackground from "./components/shared-components/animated-background/wave-background";
import NavBarY from "./components/shared-components/navbar-vertical/navbarY";
import Header from "./components/shared-components/header/header";
import SideProfile from "./components/shared-components/side-profile/side-profile";
import { useEffect, useState } from 'react';

export default function Root() {
    const location = useLocation();
    const [animationClass, setAnimationClass] = useState('upward-fade-enter');

    useEffect(() => {
        // Add the entering animation class
        setAnimationClass('upward-fade-enter');

        // Clean up by removing the class after animation ends
        const timer = setTimeout(() => {
            setAnimationClass('');
        }, 500); // Match the duration of the CSS animation

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <main>
            <WaveBackground />
            <Container maxWidth="xl">
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <SideProfile />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className={animationClass}>
                            <Outlet />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <NavBarY />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}
