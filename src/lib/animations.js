// Minimal Framer Motion animation variants

export const animations = {
    // Modern scale + fade animation (Apple-style)
    fadeInUp: {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: 0
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        viewport: { once: true, amount: 0.25 },
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoothness
            opacity: { duration: 0.7 },
            scale: { duration: 0.8 }
        }
    },

    // Fade in with scale
    scaleIn: {
        initial: { scale: 0.9, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.5, ease: "easeOut" }
    },

    // Slide from left (modern, professional - optimized for mobile)
    slideFromLeft: {
        initial: { opacity: 0, x: -30, scale: 0.98 },
        whileInView: { opacity: 1, x: 0, scale: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.7 }
        },
        style: { willChange: "transform, opacity" }
    },

    // Slide from right (modern, professional - optimized for mobile)
    slideFromRight: {
        initial: { opacity: 0, x: 30, scale: 0.98 },
        whileInView: { opacity: 1, x: 0, scale: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.7 }
        },
        style: { willChange: "transform, opacity" }
    },

    // Hero text reveal
    heroText: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    },

    // Hero text with delay
    heroTextDelayed: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
};
