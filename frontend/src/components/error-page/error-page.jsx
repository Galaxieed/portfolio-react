import { useRouteError } from "react-router-dom";
import style from './error-page.module.css';
import WaveBackground from "../shared-components/animated-background/wave-background";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className={`${style.errorpage}`}>
        <WaveBackground />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }