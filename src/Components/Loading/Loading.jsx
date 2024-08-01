import { useEffect } from 'react';
import { Slab } from 'react-loading-indicators';

const Loading = ({ setLoading }) => {
    useEffect(() => {
        const delay = 2000; // 2 seconds delay

        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <div className="flex justify-center items-center h-screen">
            <Slab color="#0D9488" size="medium" text="Loading..." textColor="#0D9488" />
        </div>
    );
};

export default Loading;
