import { useEffect, useContext } from 'react';
import { context } from '../App';

const LinkedinBadge = () => {
    const { isLight } = useContext(context);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [isLight]);

    return (
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="aayush65" data-version="v1"></div>
              
    );
}

export default LinkedinBadge;