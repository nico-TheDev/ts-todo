module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryBrightBlue: "hsl(220, 98%, 61%)",
                veryLightGrayLT: "hsl(0, 0%, 98%)",
                veryLightGrayBlueLT: "hsl(236, 33%, 92%)",
                lightGrayishBlueLT: " hsl(233, 11%, 84%)",
                darkGrayishBlueLT: "hsl(236, 9%, 61%)",
                veryDarkGrayishBlueLT: "hsl(235, 19%, 35%)",
                veryDarkBlueDT: "hsl(235, 21%, 11%)",
                veryDarkDesaBlueDT: "hsl(235, 24%, 19%)",
                lightGrayBlueDT: "hsl(234, 39%, 85%)",
                lightGrayBlueHoverDT: "hsl(236, 33%, 92%)",
                darkGrayishBlueDT: "hsl(234, 11%, 52%)",
                veryDarkGrayishBlueDT: "hsl(233, 14%, 35%)",
            },
            backgroundImage: (theme) => ({
                checkBg:
                    "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
            }),
            fontFamily: {
                main: ["Josefin Sans", "serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
