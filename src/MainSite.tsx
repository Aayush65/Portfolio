import { useContext } from 'react';
import { Navbar, Hero } from './components';
import { context } from './App';

const MainSite = () => {
    const { isLight } = useContext(context);

    return (
        <div className="relative z-0 bg-primary">
            <div className={`${ isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark" } bg-cover bg-no-repeat bg-center`}>
                <Navbar />
                <Hero />
            </div>
            {/* <About />
            <Tech />
            <Works />
            <div className="relative z-0">
                <Contact />
            </div> */}
        </div>
    )
}

export default MainSite;