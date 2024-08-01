import { useEffect, useState } from 'react';
import Scramble from 'react-scramble';
import { useInView } from 'react-intersection-observer'
const TitleAnimation = ({text}) => {
    const [animate, setAnimate] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);
    return (
        <div ref={ref}>
            <Scramble
                key={animate}
                autoStart={animate}
                text={text}
                steps={[
                    {
                        roll: 10,
                        action: '+',
                        type: 'all',
                    },
                    {
                        action: '-',
                        type: 'forward',
                    },
                ]}
            />
        </div>
    );
};

export default TitleAnimation;