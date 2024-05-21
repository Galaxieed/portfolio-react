import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/shared-components/footer/footer";
import { Container, Grid } from "@mui/material";
import WaveBackground from "./components/shared-components/animated-background/wave-background";
import NavBarY from "./components/shared-components/navbar-vertical/navbarY";
import Header from "./components/shared-components/header/header";
import SideProfile from "./components/shared-components/side-profile/side-profile";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Root() {
    const location = useLocation();

    return (
        <main>
            <WaveBackground />
            <Container maxWidth={"xl"}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs md={12}>
                        <Header />
                    </Grid>
                    <Grid item xs md={3}>
                        <SideProfile />
                    </Grid>
                    <Grid item xs md={8}>
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={300}>
                                <Outlet />
                            </CSSTransition>
                        </TransitionGroup>
                    </Grid>
                    <Grid item xs md={1}>
                        <NavBarY />
                    </Grid>
                    <Grid item xs md={12}>
                        <Footer/>
                    </Grid>
                </Grid>
                
                
                    
                
            </Container>
        </main>
    )
}