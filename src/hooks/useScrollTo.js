import { useLenis } from 'lenis/react';

export function useScrollTo() {
    const lenis = useLenis();

    return (ref, options = {}) => {
        if (ref?.current && lenis) {
            lenis.scrollTo(ref.current, { offset: 0, ...options });
        }
    };
}
