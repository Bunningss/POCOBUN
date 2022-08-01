//BANNERS
import summerSale from './img/summer sale.png';
import bigSale from './img/big sale.png';
import beautyProduct from './img/beauty product.png';
import sportswear from './img/SPORTSWEAR.png';
import makeup from './img/makeup.png';
// cats
import health from './img/health.png';
import fashion from './img/fashion.png';
import groceries from './img/groceries.png';
import electronics from './img/electronics.png';
import sports from './img/sports.png';
//PRODUCTS
import drink from './img/products/drink (1).png';
import drink2 from './img/products/drink (2).png';
import drink3 from './img/products/drink (3).png';
import drink4 from './img/products/drink (4).png';
import flipflop from './img/products/flip flop (1).png';
import flipflop2 from './img/products/flip flop (2).png';
import flipflop3 from './img/products/flip flop (3).png';
import flipflop4 from './img/products/flip flop (4).png';
import snicker from './img/products/snicker (1).png';
import snicker2 from './img/products/snicker (2).png';
import watch from './img/products/watche (1).png';
import watch2 from './img/products/watche (2).png';
import watch3 from './img/products/watche (3).png';
//PACKAGE
import pack from './img/products/package (1).png';
import pack2 from './img/products/package (2).png';
import pack3 from './img/products/package (3).png';
import pack4 from './img/products/package (4).png';

export const sliderData = [
    {
        id: 1,
        img: makeup,
    },
    {
        id: 2,
        img: summerSale
    },
    {
        id: 3,
        img: beautyProduct
    },
];

export const bannerData = [
    {
        id: 1,
        img: bigSale
    },
    {
        id: 2,
        img: sportswear
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
        name: "Our Story",
        href: "story",
    },
    {
        id: 4,
        name: "Blog",
        href: "blog",
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
        image: [drink4, drink2, drink3, drink]
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 11.99,
        tag: "Look Smart, live smart",
        image: [watch, watch2, watch3]
    },
    {
        id: 3,
        name: "Snickers",
        price: 12.99,
        tag: "elegant lifestyle",
        image: [snicker2, snicker]
    },
    {
        id: 4,
        name: "Flip Flop",
        price: 13.99,
        tag: "feel comfortable with style",
        image: [flipflop, flipflop2, flipflop3, flipflop4]
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 13.99,
        tag: "Look Smart, live smart",
        image: [watch2, watch2, watch]
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