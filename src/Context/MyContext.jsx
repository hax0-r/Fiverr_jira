import { createContext, useEffect, useState } from 'react';

export const SlidebarContext = createContext(null);

export const SlidebarProvider = ({ children }) => {
    const [slidebarOpen, setSlidebarOpen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSlidebarOpen(false);
            } else {
                setSlidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const value = {
        slidebarOpen,
        setSlidebarOpen
    }

    return (
        <SlidebarContext.Provider value={value}>
            {children}
        </SlidebarContext.Provider>
    );
};
