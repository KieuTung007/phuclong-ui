import images from '~/assets/images';

const listDrink = [
    {
        name: 'Trà Vải Tươi Dầm',
        img: images.tea_vtd,
        price: '60.000 đ',
        fresh: true,
    },
    {
        name: 'Caramen chảy',
        img: images.cf_caramenchay,
        price: '49.091 đ',
        fresh: true,
    },
    {
        name: 'Capuchino - Vietnamo',
        img: images.cf_capuchin,
        price: '44.192 đ',
        fresh: true,
    },
    {
        name: 'Latte Latte',
        img: images.latte_2,
        price: '44.182 đ',
        fresh: true,
    },
    {
        name: 'Ngọc Viễn Đông',
        img: images.milk_nvd,
        price: '44.182 đ',
        fresh: true,
    },
    {
        name: 'Phin Bọt Biển',
        img: images.cf_phinbotbien,
        price: '44.182 đ',
        fresh: true,
    },
    {
        name: 'Phin Sữa Đá - Năng Lượng',
        img: images.cf_phinsuada,
        price: '34.363 đ',
        fresh: true,
    },
    {
        name: 'Phin Đen Đá',
        img: images.cf_phindenda,
        price: '34.363 đ',
        fresh: true,
    },
    {
        name: 'Sữa Chua Phúc Bồn Tử Đác Cam',
        img: images.milk_pbt,
        price: '68.727 đ',
        description: 'Berry Berry Yogurt',
    },
    {
        name: 'Sữa Chua Xoài Đác Thơm',
        img: images.milk_xoailac,
        price: '68.727 đ',
        description: 'Tropical Yogurt',
    },
    {
        name: 'Trà Lài Đác Thơm',
        img: images.tea_lai,
        price: '49.091 đ',
        description: 'Forest Jasmine Tea',
    },
    {
        name: 'Hồng Trà Đác Cam',
        img: images.tea_ht,
        price: '68.728 đ',
        description: 'Forest Black Tea',
    },
    {
        name: 'Trà Nhãn - Sen',
        img: images.tea_nhan,
        price: '49.091 đ',
        description: 'Longan Tea (Lotus)',
    },
    {
        name: 'Trà Nhãn - Lài',
        img: images.tea_nhan,
        price: '49.091 đ',
        description: 'Longan Tea (Jasmine)',
    },
    {
        name: 'Trà Vải - Lài',
        img: images.tea_nhan,
        price: '49.091 đ',
        description: 'Lychee Tea (Jasmine)',
    },
    {
        name: 'Trà Thảo Mộc',
        img: images.tea_tm,
        price: '49.091 đ',
        description: 'Lucky Tea',
    },
    {
        name: 'Trà Vải - Sen',
        img: images.tea_nhan,
        price: '49.091 đ',
        description: 'Lychee Tea (Lotus)',
    },
    {
        name: 'Trà Đào Phúc Long',
        img: images.tea_dpl,
        price: '49.091 đ',
        description: 'Phuc Long Peach Tea',
    },
    {
        name: 'Hồng Trà Sữa',
        img: images.milk_hongsua,
        price: '44.182 đ',
        description: 'Phuc Long Black Milk Tea',
    },
];

const listSnack = [
    {
        name: 'Mận Dẻo Gừng',
        img: images.snack_mandeogung,
        price: '45.163 đ',
        description: 'Khối lượng tịnh: 100 g',
        fresh: true,
    },
    {
        name: 'Gừng Nướng Mật Ong',
        img: images.snack_gungNuong,
        price: '56.945 đ',
        description: 'Khối lượng tịnh: 50 g',
        fresh: true,
    },
    {
        name: 'Nho Khô Úc - Hộp',
        img: images.snack_hnk_uc,
        price: '38.291 đ',
        description: 'Khối lượng tịnh: 100 g',
        fresh: true,
    },
    {
        name: 'Nho Khô Úc - Gói',
        img: images.snack_gnk_uc,
        price: '18.655 đ',
        description: 'Khối lượng tịnh: 40 g',
        fresh: true,
    },
    {
        name: 'Trái Cây Tươi Sấy Dẻo',
        img: images.snack_traicaysay,
        price: '31.418 đ',
        description: 'Khối lượng tịnh: 50 g',
        fresh: true,
    },
    {
        name: 'Xoài Sấy Dẻo',
        img: images.snack_xoaisay,
        price: '31.418 đ',
        description: 'Khối lượng tịnh: 50 g',
        fresh: true,
    },
    {
        name: 'Thơm Sấy Dẻo',
        img: images.snack_thomsay,
        price: '31.418 đ',
        description: 'Khối lượng tịnh: 50 g',
        fresh: true,
    },
    {
        name: 'Đu Đủ Sấy Dẻo',
        img: images.snack_dudu,
        price: '31.418 đ',
        description: 'Khối lượng tịnh: 50 g',
        fresh: true,
    },
    {
        name: 'Hạt Điều Rang Củi (Vỏ Lụa) - Lon',
        img: images.snack_lhd_rangCui,
        price: '76.582 đ',
        description: 'Khối lượng tịnh: 130 g',
        fresh: true,
    },
    {
        name: 'Hạt Điều Rang Củi (Vỏ Lụa) - Gói',
        img: images.snack_ghd_rangCui,
        price: '26.509 đ',
        description: 'Khối lượng tịnh: 40 g',
        fresh: true,
    },
    {
        name: 'Hạt Điều Rang Củi Tỏi Ớt - Lon',
        img: images.snack_lhd_rangToi,
        price: '73.637 đ',
        description: 'Khối lượng tịnh: 130 g',
        fresh: true,
    },
    {
        name: 'Hạt Điều Rang Củi (Vỏ Lụa) - Gói',
        img: images.snack_ghd_rangToi,
        price: '25.527 đ',
        description: 'Khối lượng tịnh: 130 g',
        fresh: true,
    },
];

const listBakery = [
    {
        name: 'Bánh Mì Phúc Long (M)',
        img: images.bakery_banhmy,
        price: '35.000 đ',
    },
    {
        name: 'Green Tea Choco Cake',
        img: images.bakery_green,
        price: '34.363 đ',
    },
    {
        name: 'Passion Panna Cotta',
        img: images.bakery_passion,
        price: '34.363 đ',
    },
    {
        name: 'Tiramisu Mini',
        img: images.bakery_tiramisu,
        price: '34.363 đ',
    },
    {
        name: 'Butter Chocolate Croissant 30g',
        img: images.bakery_butter,
        price: '22.000 đ',
    },
    {
        name: 'Pure Butter Croissant 30g',
        img: images.bakery_pure,
        price: '19.637 đ',
    },
];

export { listDrink, listSnack, listBakery };
