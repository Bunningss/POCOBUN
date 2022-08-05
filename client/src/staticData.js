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
import soda from './img/products/Soda.webp';
import watch from './img/products/watche - 1.webp';
import watch2 from './img/products/watche - 2.webp';
import watch3 from './img/products/watche - 3.webp';
import beer from './img/products/beer.webp';
import beer2 from './img/products/beer - 2.webp';
import heeled_shoe from './img/products/heeled_shoe.webp';
import red_high_heel from './img/products/red_high_heel.webp';
import leather_shoe from './img/products/leather_shoe.webp';
import sneaker_shoes from './img/products/sneakers_shoes.webp';
import sports_kit from './img/products/sports_kit.webp';

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

export const packages = [
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
        name: "Energy Soda",
        price: "10.99",
        tag: "Feel the energy inside",
        image: [soda],
        features: []
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "11.99",
        tag: "Look Smart, live smart",
        image: [watch],
        features: []
    },
    {
        id: 3,
        name: "Smart Watch",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [watch2],
        features: []
    },
    {
        id: 4,
        name: "Snicker Shoe",
        price: "10.99",
        tag: "Comfort comes with style",
        image: [sneaker_shoes],
        features: []
    },
    {
        id: 5,
        name: "Beer",
        price: "11.99",
        tag: "excellent beverage",
        image: [beer],
        features: []
    },
    {
        id: 6,
        name: "Beer Soda",
        price: "13.99",
        tag: "Excellent Beverage",
        image: [beer2],
        features: []
    },
    {
        id: 7,
        name: "High Heel",
        price: "13.99",
        tag: "Look Stunning",
        image: [red_high_heel],
        features: []
    },
    {
        id: 8,
        name: "Leather Shoe",
        price: "13.99",
        tag: "Smart look with comfort",
        image: [leather_shoe],
        features: []
    },
    {
        id: 9,
        name: "Heeled Shoe",
        price: "13.99",
        tag: "For the ambitious",
        image: [heeled_shoe],
        features: []
    },
    {
        id: 10,
        name: "Sports Kit",
        price: "13.99",
        tag: "Play the game",
        image: [sports_kit],
        features: []
    },
    {
        id: 11,
        name: "Smart Watch",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [watch3],
        features: []
    },
];

export const sectionData = [
    {
        id: 1,
        name: "Beer Soda",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [beer2]
    },
    {
        id: 2,
        name: "Beer",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [beer]
    },
    {
        id: 3,
        name: "Snicker Shoe",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [sneaker_shoes]
    },
    {
        id: 4,
        name: "Smart Watch",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [watch3]
    },
    {
        id: 5,
        name: "Energy Soda",
        price: "13.99",
        tag: "Look Smart, live smart",
        image: [soda]
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
    image: [watch, watch2, watch3],
    feature: [],
    details: [
        {
            id: 1,
            header: "Smart Watch details",
            content: [
                {
                    id: 1,
                    title: "Whats in the box",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur repellat maxime voluptates dolore voluptatem, perferendis facilis quia error vel, similique eveniet expedita asperiores officia veniam, iure qui quam tenetur aspernatur aliquam incidunt sunt. Minima assumenda, saepe enim reiciendis aliquam odio nostrum voluptatem dicta, dolor cumque earum accusantium eos officiis nam asperiores optio pariatur dolorem ducimus! Dolorem earum, libero cupiditate quibusdam ea impedit hic architecto. Soluta modi optio quidem delectus dignissimos dolor consectetur qui, veritatis cum distinctio eaque iste assumenda eveniet reiciendis nulla excepturi repellat molestias nisi minima doloremque incidunt sapiente officia odit? Tempore ipsa quam, quis rerum voluptate inventore est dolor expedita eaque neque ab doloribus voluptatem qui hic non culpa nemo sed fugiat dolores perspiciatis? Dignissimos recusandae dolores minima corporis in, dolorum unde vero maxime facilis quis architecto sunt placeat ipsa! Beatae nihil iusto, fuga, blanditiis ducimus cum ut atque, harum hic delectus incidunt voluptatibus nam? Dicta vel perferendis quam numquam. Fugit, odit quo. Aspernatur, assumenda ex optio facere rem delectus voluptas totam id dolorem sequi soluta obcaecati est culpa voluptatibus maxime ut quaerat in aliquid consequuntur reprehenderit error. Laudantium assumenda nostrum aspernatur, sed, totam cupiditate natus, dolore doloribus vero laboriosam quam animi deleniti amet. Similique esse laudantium quo suscipit dicta voluptatum. Rem magnam nostrum aspernatur, laborum vitae consectetur iure nulla sit eius porro praesentium illum excepturi ad recusandae, nam dolorem. Enim corrupti harum libero possimus velit laudantium dolorem ab rem dolor unde quaerat error ipsa illum nihil dolorum distinctio ducimus quisquam quam eius, quae fugit maiores perferendis aliquid. Asperiores, repellat ab aperiam commodi illum placeat dicta eos recusandae maxime esse facere necessitatibus molestias, magnam repudiandae, veniam harum similique nulla. Perferendis illum atque at eos fugiat molestiae in minima blanditiis velit eius. Hic corrupti autem fugit nam? Quaerat veniam officia maiores error nostrum quos magnam veritatis accusamus eius?"
                },
                {
                    id: 2,
                    title: "Specifications",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur repellat maxime voluptates dolore voluptatem, perferendis facilis quia error vel, similique eveniet expedita asperiores officia veniam, iure qui quam tenetur aspernatur aliquam incidunt sunt. Minima assumenda, saepe enim reiciendis aliquam odio nostrum voluptatem dicta, dolor cumque earum accusantium eos officiis nam asperiores optio pariatur dolorem ducimus! Dolorem earum, libero cupiditate quibusdam ea impedit hic architecto. Soluta modi optio quidem delectus dignissimos dolor consectetur qui, veritatis cum distinctio eaque iste assumenda eveniet reiciendis nulla excepturi repellat molestias nisi minima doloremque incidunt sapiente officia odit? Tempore ipsa quam, quis rerum voluptate inventore est dolor expedita eaque neque ab doloribus voluptatem qui hic non culpa nemo sed fugiat dolores perspiciatis? Dignissimos recusandae dolores minima corporis in, dolorum unde vero maxime facilis quis architecto sunt placeat ipsa! Beatae nihil iusto, fuga, blanditiis ducimus cum ut atque, harum hic delectus incidunt voluptatibus nam? Dicta vel perferendis quam numquam. Fugit, odit quo. Aspernatur, assumenda ex optio facere rem delectus voluptas totam id dolorem sequi soluta obcaecati est culpa voluptatibus maxime ut quaerat in aliquid consequuntur reprehenderit error. Laudantium assumenda nostrum aspernatur, sed, totam cupiditate natus, dolore doloribus vero laboriosam quam animi deleniti amet. Similique esse laudantium quo suscipit dicta voluptatum. Rem magnam nostrum aspernatur, laborum vitae consectetur iure nulla sit eius porro praesentium illum excepturi ad recusandae, nam dolorem. Enim corrupti harum libero possimus velit laudantium dolorem ab rem dolor unde quaerat error ipsa illum nihil dolorum distinctio ducimus quisquam quam eius, quae fugit maiores perferendis aliquid. Asperiores, repellat ab aperiam commodi illum placeat dicta eos recusandae maxime esse facere necessitatibus molestias, magnam repudiandae, veniam harum similique nulla. Perferendis illum atque at eos fugiat molestiae in minima blanditiis velit eius. Hic corrupti autem fugit nam? Quaerat veniam officia maiores error nostrum quos magnam veritatis accusamus eius?"
                }
            ] 
        },
        {
            id: 2,
            header: "FAQ",
            content: [
                {
                    id: 1,
                    title: "why should i buy?",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur repellat maxime voluptates dolore voluptatem, perferendis facilis quia error vel, similique eveniet expedita asperiores officia veniam, iure qui quam tenetur aspernatur aliquam incidunt sunt. Minima assumenda, saepe enim reiciendis aliquam odio nostrum voluptatem dicta, dolor cumque earum accusantium eos officiis nam asperiores optio pariatur dolorem ducimus! Dolorem earum, libero cupiditate quibusdam ea impedit hic architecto. Soluta modi optio quidem delectus dignissimos dolor consectetur qui, veritatis cum distinctio eaque iste assumenda eveniet reiciendis nulla excepturi repellat molestias nisi minima doloremque incidunt sapiente officia odit? Tempore ipsa quam, quis rerum voluptate inventore est dolor expedita eaque neque ab doloribus voluptatem qui hic non culpa nemo sed fugiat dolores perspiciatis? Dignissimos recusandae dolores minima corporis in, dolorum unde vero maxime facilis quis architecto sunt placeat ipsa! Beatae nihil iusto, fuga, blanditiis ducimus cum ut atque, harum hic delectus incidunt voluptatibus nam? Dicta vel perferendis quam numquam. Fugit, odit quo. Aspernatur, assumenda ex optio facere rem delectus voluptas totam id dolorem sequi soluta obcaecati est culpa voluptatibus maxime ut quaerat in aliquid consequuntur reprehenderit error. Laudantium assumenda nostrum aspernatur, sed, totam cupiditate natus, dolore doloribus vero laboriosam quam animi deleniti amet. Similique esse laudantium quo suscipit dicta voluptatum. Rem magnam nostrum aspernatur, laborum vitae consectetur iure nulla sit eius porro praesentium illum excepturi ad recusandae, nam dolorem. Enim corrupti harum libero possimus velit laudantium dolorem ab rem dolor unde quaerat error ipsa illum nihil dolorum distinctio ducimus quisquam quam eius, quae fugit maiores perferendis aliquid. Asperiores, repellat ab aperiam commodi illum placeat dicta eos recusandae maxime esse facere necessitatibus molestias, magnam repudiandae, veniam harum similique nulla. Perferendis illum atque at eos fugiat molestiae in minima blanditiis velit eius. Hic corrupti autem fugit nam? Quaerat veniam officia maiores error nostrum quos magnam veritatis accusamus eius?"
                },
                {
                    id: 2,
                    title: "Specifications",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur repellat maxime voluptates dolore voluptatem, perferendis facilis quia error vel, similique eveniet expedita asperiores officia veniam, iure qui quam tenetur aspernatur aliquam incidunt sunt. Minima assumenda, saepe enim reiciendis aliquam odio nostrum voluptatem dicta, dolor cumque earum accusantium eos officiis nam asperiores optio pariatur dolorem ducimus! Dolorem earum, libero cupiditate quibusdam ea impedit hic architecto. Soluta modi optio quidem delectus dignissimos dolor consectetur qui, veritatis cum distinctio eaque iste assumenda eveniet reiciendis nulla excepturi repellat molestias nisi minima doloremque incidunt sapiente officia odit? Tempore ipsa quam, quis rerum voluptate inventore est dolor expedita eaque neque ab doloribus voluptatem qui hic non culpa nemo sed fugiat dolores perspiciatis? Dignissimos recusandae dolores minima corporis in, dolorum unde vero maxime facilis quis architecto sunt placeat ipsa! Beatae nihil iusto, fuga, blanditiis ducimus cum ut atque, harum hic delectus incidunt voluptatibus nam? Dicta vel perferendis quam numquam. Fugit, odit quo. Aspernatur, assumenda ex optio facere rem delectus voluptas totam id dolorem sequi soluta obcaecati est culpa voluptatibus maxime ut quaerat in aliquid consequuntur reprehenderit error. Laudantium assumenda nostrum aspernatur, sed, totam cupiditate natus, dolore doloribus vero laboriosam quam animi deleniti amet. Similique esse laudantium quo suscipit dicta voluptatum. Rem magnam nostrum aspernatur, laborum vitae consectetur iure nulla sit eius porro praesentium illum excepturi ad recusandae, nam dolorem. Enim corrupti harum libero possimus velit laudantium dolorem ab rem dolor unde quaerat error ipsa illum nihil dolorum distinctio ducimus quisquam quam eius, quae fugit maiores perferendis aliquid. Asperiores, repellat ab aperiam commodi illum placeat dicta eos recusandae maxime esse facere necessitatibus molestias, magnam repudiandae, veniam harum similique nulla. Perferendis illum atque at eos fugiat molestiae in minima blanditiis velit eius. Hic corrupti autem fugit nam? Quaerat veniam officia maiores error nostrum quos magnam veritatis accusamus eius?"
                }
            ]
        },
        {
            id: 3,
            header: "Rating",
            content: [
                {
                    rating: 4.6
                }
            ]
        }
    ]
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
        title: "Atlantic - Pacific",
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