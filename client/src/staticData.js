// banner slider
import slider2 from './img/sliderBanner/makeup1.webp';
import slider1 from './img/sliderBanner/makeup.webp';
import slider3 from './img/sliderBanner/chocolate.webp';
import slider4 from './img/sliderBanner/gadget.webp';
import banner1 from './img/sliderBanner/shoe collection.webp';
import banner2 from './img/sliderBanner/SPORTSWEAR.webp';

// categories
import health from './img/health.png';
import fashion from './img/fashion.png';
import groceries from './img/groceries.png';
import electronics from './img/electronics.png';
import sports from './img/sports.png';

// products
import drink4 from './img/products/drink (4).png';
import watch from './img/products/watche (1).png';
import watch2 from './img/products/watche (2).png';
import watch3 from './img/products/watche (3).png';

// package
import pack from './img/products/package (1).png';
import pack2 from './img/products/package (2).png';
import pack3 from './img/products/package (3).png';
import pack4 from './img/products/package (4).png';

// icons
import location from './img/location-org.png';
import email from './img/mail-org.png';
import clock from './img/clock-org.png';
import phone from './img/phone-org.png';

//blogs
import blog1 from './img/Blogs/blog (1)-1.webp';
import blog2 from './img/Blogs/blog (2).webp';

export const sliderData = [slider1, slider3, slider2, slider4]

export const bannerData = [
    {
        id: 1,
        img: banner1,
        href: "/store?category=fashion"
    },
    {
        id: 2,
        img: banner2,
        href: "/store?category=s&o"
    },
];

export const newsletterInputs = [
    {
        id: 1,
        type: "text",
        placeholder: "Enter your name",
        required: "true"
    },
    {
        id: 2,
        type: "email",
        placeholder: "Enter your email",
        required: "true"
    },
];

export const linkBar = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "Shop",
        href: "store",
    },
    {
        id: 3,
        name: "Blog",
        href: "blog",
    },
    {
        id: 4,
        name: "Our Story",
        href: "story",
    },
    {
        id: 5,
        name: "Contact Us",
        href: "contact",
    },
];

export const loginOptions = [
    {
        id: 1,
        name: "Login with Google",
        icon: ""
    },
    {
        id: 2,
        name: "Login with Apple",
        icon: ""
    },
    {
        id: 3,
        name: "Login with Facebook",
        icon: ""
    },
    {
        id: 4,
        name: "Login with Phone",
        icon: ""
    },
];

export const pastaPacks = [
    {
        id: 1,
        name: "Gift Package",
        image: pack,
        details: [],
        price: "5.99"
    },
    {
        id: 2,
        name: "Chocolate Package",
        image: pack2,
        details: [],
        price: "6.99"
    },
    {
        id: 3,
        name: "Snacks Package",
        image: pack3,
        details: [],
        price: "7.99"
    },
    {
        id: 4,
        name: "Coffee package",
        image: pack4,
        details: [],
        price: "8.99"
    },
];

export const productsData = [
    {
        id: 1,
        name: "Energy Drink",
        price: 10.99,
        tag: "Feel the energy inside",
        image: [drink4]
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 11.99,
        tag: "Look Smart, live smart",
        image: [watch]
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 13.99,
        tag: "Look Smart, live smart",
        image: [watch2]
    },
];

export const categories = [
    {
        id: 1,
        name: "Health & Beauty",
        href: "?category=h&b",
        img: health
    },
    {
        id: 2,
        name: "Fashion",
        href: "?category=fashion",
        img: fashion
    },
    {
        id: 4,
        name: "Groceries",
        href: "?category=groceries",
        img: groceries
    },
    {
        id: 5,
        name: "Electronics",
        href: "?category=electronics",
        img: electronics
    },
    {
        id: 6,
        name: "Sports & Outdoors",
        href: "?category=s&o",
        img: sports
    },
];

export const product = {
    name: "Smart Watch",
    price: 11.99,
    tag: "Look Smart, live smart",
    image: [watch, watch2, watch3]
}

export const importantLinks = [
    {
        id: 1,
        title: "Quick Links",
        links: [
            {
                id: 1,
                name: "Home",
                href: "/"
            },
            {
                id: 2,
                name: "Shop",
                href: "/store"
            },
            {
                id: 3,
                name: "Blog",
                href: "/blog"
            },
            {
                id: 4,
                name: "Our Story",
                href: "/story"
            },
            {
                id: 5,
                name: "Contact Us",
                href: "/contact"
            },
        ]
    },
    {
        id: 2,
        title: "Featured",
        links: [
            {
                id: 1,
                name: "Terms of Service",
                href: "/terms"
            },
            {
                id: 2,
                name: "Privacy Policy",
                href: "/policy"
            },
            {
                id: 3,
                name: "Support",
                href: ""
            },
            {
                id: 4,
                name: "Shipping & Returns",
                href: ""
            },
            {
                id: 5,
                name: "Careers",
                href: ""
            },
            {
                id: 6,
                name: "Our Story",
                href: "/story"
            },
        ]
    },
];

export const addressGroup = [
    {
        id: 1,
        title: "Store Address",
        info: "3 London Road, Essex, IG91 2GZ",
        icon: location
    },
    {
        id: 2,
        title: "Email Us",
        info: "pocobun@pocobun.co.uk",
        icon: email
    },
    {
        id: 3,
        title: "Phone Number",
        info: "++8801873228724",
        icon: phone
    },
    {
        id: 4,
        title: "Open Hours",
        info: "Sun - Friday: 10AM - 7PM",
        icon: clock
    },
];

export const blogs = [
    {
        id: 1,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog1
    },
    {
        id: 2,
        title: "Summer Blues",
        date: "22 July 2022",
        img: blog2
    },
    {
        id: 3,
        title: "Atlantic Pacific",
        date: "22 July 2022",
        img: blog1
    },
    {
        id: 4,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog2
    },
    {
        id: 5,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog1
    },
    {
        id: 6,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog2
    },
    {
        id: 7,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog1
    },
    {
        id: 8,
        title: "What i am loving RN",
        date: "22 July 2022",
        img: blog2
    },
];