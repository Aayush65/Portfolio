import { useContext } from 'react';
import { Navbar, Hero, About, Tech } from './components';
import { context } from './App';

const MainSite = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`relative z-0 ${isLight ? "bg-primary-light" : "bg-primary-dark"}`}>
            <div className={`relative ${isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"} bg-cover bg-no-repeat bg-center`} >
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${isLight ? "to-primary-light" : "to-primary-dark"}`}></div>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Tech />
            {/* <Works /> */}
        </div>
    )
}

export default MainSite;