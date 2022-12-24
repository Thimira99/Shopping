import { randomBytes } from 'crypto';

//extra Links
"https://i.ibb.co/WkTL2Tp/slide-2.webp"


const stock = [
    {
        id: 1,
        type: 'hats',
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
    },
    {
        id: 2,
        type: 'hats',
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
    },
    {
        id: 3,
        type: 'hats',
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
    },
    {
        id: 4,
        type: 'hats',
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25
    },
    {
        id: 5,
        type: 'hats',
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
    },
    {
        id: 6,
        type: 'hats',
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
    },
    {
        id: 7,
        type: 'hats',
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
    },
    {
        id: 8,
        type: 'hats',
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
    },
    {
        id: 9,
        type: 'hats',
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
    },
    {
        id: 10,
        type: 'sneakers',
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
    },
    {
        id: 11,
        type: 'sneakers',
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
    },
    {
        id: 12,
        type: 'sneakers',
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
    },
    {
        id: 13,
        type: 'sneakers',
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
    },
    {
        id: 14,
        type: 'sneakers',
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
    },
    {
        id: 15,
        type: 'sneakers',
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
    },
    {
        id: 16,
        type: 'sneakers',
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
    },
    {
        id: 17,
        type: 'sneakers',
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
    },
    {
        id: 18,
        type: 'jackets',
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
    },
    {
        id: 19,
        type: 'jackets',
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
    },
    {
        id: 20,
        type: 'jackets',
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
    },
    {
        id: 21,
        type: 'jackets',
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
    },
    {
        id: 22,
        type: 'jackets',
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
    },
    {
        id: 23,
        type: 'womens',
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
    },
    {
        id: 24,
        type: 'womens',
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
    },
    {
        id: 25,
        type: 'womens',
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
    },
    {
        id: 26,
        type: 'womens',
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
    },
    {
        id: 27,
        type: 'womens',
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
    },
    {
        id: 28,
        type: 'womens',
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
    },
    {
        id: 29,
        type: 'womens',
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
    },
    {
        id: 30,
        type: 'mens',
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
    },
    {
        id: 31,
        type: 'mens',
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
    },
    {
        id: 32,
        type: 'mens',
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
    },
    {
        id: 33,
        type: 'mens',
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
    },
    {
        id: 34,
        type: 'mens',
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
    },
    {
        id: 35,
        type: 'mens',
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
    }
]

export const save = ({ type, name, imageUrl, price }) => {
    const store = { id: randomBytes(16).toString('hex'), type, name, imageUrl, price };
    stock.push(store);
    return store;
}

export const getAll = () => {
    return [...stock.values()];
}

export const update = (id, { type, name, imageUrl, price }) => {
    // if (!stock.find(id)) {
    //     throw new Error(`Not Found for the id ${id}`)
    // }
    const store = { id, type, name, imageUrl, price };

    const objIndex = stock.findIndex((obj) => obj.id == store.id);
    stock[objIndex].type = store.type;
    stock[objIndex].name = store.name;
    stock[objIndex].imageUrl = store.imageUrl;
    stock[objIndex].price = store.price;

    return stock;
}

export const getById = (id) => {
    const store = stock.find((index) => index.id == id);
    return store;
}