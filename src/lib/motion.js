export const parentAnimation = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
    hidden: {
        y: 20,
        opacity: 0,
    },
};

export const childrenAnimation = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: 35,
        opacity: 0,
    },
};

export const headerNavAnimation = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: -35,
        opacity: 0,
    },
}

export const loadingScreenLogoAnimation = {
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
    },
    hidden: {
        scale: .5,
        y: -135,
        opacity: 0,
    },
    magic: {
        scale: 1,
    }
}