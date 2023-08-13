/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./public/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                'brown': {
                    100: '#ECE0D1',
                    300: '#DBC1AC',
                    600: '#967259',
                    900: '#634832',
                }
            },
            boxShadow: {
                'normal': '0px 1px 10px 0px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                '4xl': '2rem'
            },
            fontFamily: {
                'Dana': 'Dana',
                'DanaMedium': 'Dana Medium',
                'DanaDemiBold': 'Dana DemiBold',
                'MorabbaLight': 'Morabba Light',
                'MorabbaMedium': 'Morabba Medium',
                'MorabbaBold': 'Morabba Bold',
            },
            letterSpacing: {
                tighter: '-0.081em',
                tight: '-0.6px',
            },
            spacing: {
                '4.5': '1.125rem',
                '18': '4.5rem',
                '25': '6.25rem',
                '35': '8.75rem',
                '45': '11.25rem',
                '50': '12.5rem',
                '30': '7.5rem',
                '74': '18.5rem',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    lg: '0.625rem'
                }
            },
            backgroundImage: {
                'home-mobile': 'url(../images/headerBgMobile.webp)',
                'home-desktop': 'url(../images/headerBgDesktop.webp)',
                'new-product': 'url(../images/body-bg.png)',
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        }
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *')
            addVariant('child-hover', '& > *:hover')
        }
    ],
}