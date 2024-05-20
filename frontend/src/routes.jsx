import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from './components/error-page/error-page'
import HomeSection from './components/aboutme/aboutme'
import Projects from './components/projects/projects';
import Certificates from './components/certificate/certificate';
import ContactMe from './components/contactme/contactme';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomeSection />
            },{
                path: '/projects',
                element: <Projects />
            },{
                path: '/certificates',
                element: <Certificates />
            },{
                path: '/contact',
                element: <ContactMe />
            }
        ]
    },
])

export default routes;