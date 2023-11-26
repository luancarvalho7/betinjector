import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();


    useEffect(() => {

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });


        }, 200)


    }, [pathname]);

    return null;
};

