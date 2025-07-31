import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
    children,
    className = '',
    animation = { from: { y: 10, opacity: 0 }, to: { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' } },
    scrollTriggerOptions = null,
}) => {
    const ref = useRef();
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated.current) return;

        const inner = el.querySelector('.animated-content-inner') || el;
        const toOptions = scrollTriggerOptions
            ? { ...animation.to, scrollTrigger: { trigger: inner, ...scrollTriggerOptions }}
            : animation.to;

        gsap.fromTo(inner, animation.from, toOptions);
        hasAnimated.current = true;
    }, []); // Empty dependency array to only run once

    return (
        <div ref={ref} className={`animated-content ${className}`}>
            <div className="animated-content-inner">{children}</div>
        </div>
    );
};

export default AnimatedContent;
