const allProduct = [
    {
        name: 'Ash Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Ash.png',
        price: '250',
        salePrice: '250',
        discount: '0',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 1
    },
    {
        name: 'Brown Hardwood Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Hardwoods.png',
        price: '350',
        salePrice: '250',
        discount: '70',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 2
    },
    {
        name: 'Deluxe Mahagony Double Bed        ',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Mahogany.png',
        price: '200',
        salePrice: '250',
        discount: '40',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 3
    },
    {
        name: 'Supreme Oak Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Oak.png',
        price: '270',
        salePrice: '250',
        discount: '20',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 4
    },
    {
        name: 'Partex Coushoned Double Bed        ',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Partex.png',
        price: '400',
        salePrice: '250',
        discount: '67',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 5
    },
    {
        name: 'Vince Ottoman Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Beech.png',
        price: '359',
        salePrice: '250',
        discount: '70',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 6
    },
    {
        name: 'Cedar Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Cedar.png',
        price: '199',
        salePrice: '250',
        discount: '100',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 7
    },
    {
        name: 'Green Elm wood Double Bed',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Elm.png',
        price: '340',
        salePrice: '250',
        discount: '139',
        quantity: '1',
        type: 'Bed',
        categories: 'Bed',
        id: 8
    },
    {
        name: 'White Cozy Chair',
        description: 'A bed is a piece of furniture which is used as a place to sleep or relax.',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/White.png',
        price: '365',
        salePrice: '250',
        discount: '110',
        quantity: '1',
        type: 'Chair',
        categories: 'Chair',
        id: 9
    },
    {
        name: 'Antero Black Double Sofa        ',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Antero_2Seater.png',
        price: '240',
        salePrice: '250',
        discount: '10',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 10
    },
    {
        name: 'Castlery Double Sofa',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Castlery_2Seater.png',
        price: '289',
        salePrice: '250',
        discount: '0',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 11
    },
    {
        name: 'Tara Brown Single Sofa        ',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Tara.png',
        price: '230',
        salePrice: '250',
        discount: '60',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 12
    },
    {
        name: 'Aarya Yellow Single Sofa        ',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Aarya.png',
        price: '400',
        salePrice: '250',
        discount: '22',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 13
    },
    {
        name: 'Safari Ash Single Sofa       ',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Safari.png',
        price: '500',
        salePrice: '0',
        discount: '120',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 14
    },
    {
        name: 'Vester Bro Single Sofa',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Vesterbro.png',
        price: '699',
        salePrice: '250',
        discount: '160',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 15
    },
    {
        name: 'Aero Stylish Single Sofa',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Aero.png',
        price: '700',
        salePrice: '250',
        discount: '190',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 16
    },
    {
        name: 'Draped Single Sofa        ',
        description: 'a piece of furniture, also called a couch    ',
        img: 'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Draped.png',
        price: '899',
        salePrice: '250',
        discount: '60',
        quantity: '1',
        type: 'Sofa',
        categories: 'Sofa',
        id: 17
    },
]

export default allProduct;