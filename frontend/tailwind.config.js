/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            colors: {
                ['ello-nav']: `rgb(51, 92, 110)`,
                ['ello-primary-turquoise']: '#5acccc',
                ['ello-primary-steal-blue']: '#335c6e',
                ['ello-primary-yellow']: '#fabd33',
                ['ello-accent-turquoise-light']: '#cffafa',
                ['ello-accent-turquoise-dark-1']: '#53c2c2',
                ['ello-accent-turquoise-dark-2']: '#28b8b8',
                ['ello-accent-orange-red']: '#f76434',
                ['ello-accent-orange-pastel']: '#ffe6dc',
                ['ello-accent-teal']: '#4aa088',
                ['ello-accent-yellow-dark']: '#faad00',
            },
        },
    },
    plugins: [],
};
