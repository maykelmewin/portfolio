/*
 * Static content for the portfolio.
 * Edit the values here; logic lives in js/app.js and js/animation.js.
 *
 * NOTE: desc[N] is paired with sounds/N+1.mp3 by index.
 * Keep desc and the popup audio files in the same order.
 */
var PORTFOLIO_DATA = {

    link: {
        li        : 'https://www.linkedin.com/in/michael-merin/',
        github    : 'https://www.github.com/maykelmewin/',
        messenger : 'https://m.me/maykelmewin',
        figma     : 'https://www.figma.com/design/Rki4DLFlw70sHLa1lexVdV/Porfolio---Merin?node-id=103-3&t=cQGG043DwCkIS3hx-0',
    },

    xp: [
        {
            year: {no: 1, unit : 'year'},
            title: 'front-end dev (UI/UX)',
            company: 'MKTA Philipines',
            description: 'Global US-based attractions company. Built a B2B e-commerce platform using Next.js, React, Python, and Tailwind.',
            datespan: 'FEB 2026 - PRESENT',
            link: 'https://universalstatues-us.com/',
            isActive: true
        },
        {
            year: {no: 4, unit : 'years'},
            title: 'front-end dev',
            company: 'investa Inc.',
            description: 'FinTech company behind Investagrams, a browser-based investing social platform. Built with Angular, ASP.NET, C#, and SCSS.',
            datespan: 'JUN 2021 - AUG 2025',
            link: 'https://www.investagrams.com/',
            isActive: false
        },
        {
            year: {no: 1, unit : 'year'},
            title: 'full stack developer',
            company: 'bitcapp blockchain technology',
            description: 'Crypto e-commerce P2P platform. Built and maintained web applications using Vue.js, Node.js, Quasar, and MongoDB.',
            datespan: 'FEB 2021 - JUN 2021',
            link: null,
            isActive: false
        },
        {
            year: {no: 3, unit : 'years'},
            title: 'layout designer',
            company: 'amana waterpark',
            description: 'Waterpark and leisure company. Created marketing and visual designs using Adobe Photoshop and Illustrator.',
            datespan: 'MAR 2017 - AUG 2020',
            link: 'https://www.facebook.com/amanawaterparkph/',
            isActive: false
        },
    ],

    desc: [
        {
            desc: 'he.',
            popupContent: "Being a man has taught me patience, responsibility, and resilience. These qualities help me face challenges, adapt easily, and pay attention to every detail.",
        },
        {
            desc: 'Filipino.',
            popupContent: 'The way we work reflects who we are. I carry my Filipino culture as a strength not a barrier — and believe that “Bawat detalye, mahalaga.”',
        },
        {
            desc: 'proficient in English.',
            popupContent: "Two are better than one—and even more with a team. Without communication, it’s like a chat where no one replies. I make sure to connect clearly with everyone, and using English at work comes naturally.",
        },
        {
            desc: 'two decade into existence.',
            popupContent: "I’ve been in the industry for almost a decade, building strong expertise along the way. Learning and adapting to new technologies comes easily to me.",
        },
        {
            desc: 'obsessed with art and codes.',
            popupContent: "I’m not perfect, but I’m a perfectionist. I notice every detail in design and understand how much effort goes into creating it. And I handle every inch of it well.",
        },
        {
            desc: 'highly interested in turning outstanding design into website.',
            popupContent: "I started as a Layout Artist, so I understand how challenging it is to execute someone else’s vision. I know what to consider, and clear communication is always the key.",
        },
    ],

    expertise: [
        {
            skills: 'Technologies & Tools',
            info: 'Proficient in essential technologies and highly adaptable to new skill demands.'
        },
        {
            skills: 'Responsive Design',
            info: 'Build a fully responsive cross-device/cross-browser and pixel-perfect HTML prototype based on the visual mock-up.'
        },
        {
            skills: 'API & Frameworks',
            info: 'Effectively manage, integrate, and modify APIs and Implement the desired front-end frameworks and libraries.'
        },
    ],

    techSkill: [
    {
        text: 'HTML / CSS / SCSS',
        percent: 100,
    },
    {
        text: 'JavaScript / TypeScript',
        percent: 95,
    },
    {
        text: 'React / Next.js',
        percent: 90,
    },
    {
        text: 'Angular / Vue',
        percent: 85,
    },
    {
        text: 'Tailwind / UI',
        percent: 90,
    },
    {
        text: 'API / Data Fetching',
        percent: 90,
    },
    {
        text: 'GSAP / Three.js',
        percent: 70,
    },
    {
        text: 'SEO / Testing / Git',
        percent: 80,
    },
    {
        text: 'AI Tools / MCP',
        percent: 85,
    },
],

    /*
     * textTouch is used on coarse-pointer devices, text on precise ones.
     * GuideService resolves both down to a single `text` property.
     */
    guide: [
        {
            classLocation: '.fold-first .hero-content',
            text: 'Scroll',
            visible: true
        },
        {
            classLocation: '.fold-first-content',
            text: 'Select',
            visible: true
        },
        {
            classLocation: '.second-first .box.techskill',
            text: 'Hover',
            textTouch: 'Tap',
            visible: true
        },
        {
            classLocation: '.second-first .box .cryptocontainer',
            text: 'Press',
            visible: true
        },
        { 
            classLocation: '.second-first .box .responsive-design-box',
            text: 'Drag',
            textTouch: 'Hold',
            visible: true
        },
        {
            classLocation: '.fold-threeJS-floor',
            text: 'Type',
            visible: true
        },
        {
            classLocation: '.fold-third',
            text: 'Toggle',
            visible: true
        },
        {
            classLocation: '.infocard',
            text: 'Connect',
            visible: true
        },
    ],
};
