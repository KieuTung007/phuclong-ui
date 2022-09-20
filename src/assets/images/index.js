const images = {
    logo: require('~/assets/images/logo/logo.png'),
    logo1: require('~/assets/images/logo/logo_1.png'),
    logo2: require('~/assets/images/logo/logo_2.png'),
    //page home
    slide1: require('~/assets/images/home/slide_1.png'),
    slide2: require('~/assets/images/home/slide_2.jpg'),
    home_background: require('~/assets/images/home/image_home.png'),
    image_home1: require('~/assets/images/home/image_home1.jpg'),
    image_home2: require('~/assets/images/home/image_home2.jpg'),
    // footer
    image_footer: require('~/assets/images/image_footer.png'),

    // coffee
    image_coffee: require('~/assets/images/coffee/coffee_background.jpg'),
    coffee_row1: require('~/assets/images/coffee/coffee-row1.jpg'),
    coffee_row2: require('~/assets/images/coffee/coffee-row2.jpg'),
    coffee_row3: require('~/assets/images/coffee/coffee-row3.jpg'),
    coffee2_row1: require('~/assets/images/coffee/coffee2-row1.jpg'),
    coffee2_row2: require('~/assets/images/coffee/coffee2-row2.jpg'),
    coffee2_row3: require('~/assets/images/coffee/coffee2-row3.jpg'),
    coffee2_row4: require('~/assets/images/coffee/coffee2-row4.jpeg'),
    coffee3_row1: require('~/assets/images/coffee/coffee3-row1.jpg'),
    coffee3_row2: require('~/assets/images/coffee/coffee3-row2.jpg'),
    coffee3_row3: require('~/assets/images/coffee/coffee3-row3.jpg'),
    coffee4_row1: require('~/assets/images/coffee/coffee4-row1.png'),
    coffee4_row2: require('~/assets/images/coffee/coffee4-row2.png'),
    coffee4_row3: require('~/assets/images/coffee/coffee4-row3.png'),
    coffee4_row4: require('~/assets/images/coffee/coffee4-row4.png'),
    coffee4_row5: require('~/assets/images/coffee/coffee4-row5.png'),
    coffee4_row6: require('~/assets/images/coffee/coffee4-row6.png'),
    coffee4_row7: require('~/assets/images/coffee/coffee4-row7.png'),

    // Tea
    image_tea: require('~/assets/images/tea/tea_slide.jpg'),
    tea_row1: require('~/assets/images/tea/tea-row1.jpg'),
    tea_row2: require('~/assets/images/tea/tea-row2.jpg'),
    tea_row3: require('~/assets/images/tea/tea-row3.jpg'),
    tea2_row1: require('~/assets/images/tea/tea2-row1.jpg'),
    tea2_row2: require('~/assets/images/tea/tea2-row2.jpg'),
    tea2_row3: require('~/assets/images/tea/tea2-row3.jpg'),
    tea2_row4: require('~/assets/images/tea/tea2-row4.jpg'),
    tea2_row5: require('~/assets/images/tea/tea2-row5.jpg'),
    tea2_row6: require('~/assets/images/tea/tea2-row6.jpg'),
    tea2_row7: require('~/assets/images/tea/tea2-row7.jpg'),

    // Drinks
    background_drink: require('~/assets/images/drink/background_drink.png'),
    cf_capuchin: require('~/assets/images/drink/cf-capuchino.png'),
    cf_capuchinDX: require('~/assets/images/drink/cf-capuchinodaxay.png'),
    cf_caramenchay: require('~/assets/images/drink/cf-caramenchay.png'),
    cf_phinbotbien: require('~/assets/images/drink/cf-phinbotbien.png'),
    cf_phindenda: require('~/assets/images/drink/cf-phindenda.png'),
    cf_phinsuada: require('~/assets/images/drink/cf-phinsuada.png'),
    latte_traxanh: require('~/assets/images/drink/latte-traxanh.png'),
    latte_2: require('~/assets/images/drink/latte.png'),
    milk_hongsua: require('~/assets/images/drink/milk-hongsua.png'),
    milk_socola: require('~/assets/images/drink/milk-socola.png'),
    milk_traxanhdaxay: require('~/assets/images/drink/milk-traxanhdaxay.png'),
    milk_xoailac: require('~/assets/images/drink/milk-xoailac.png'),
    milk_nvd: require('~/assets/images/drink/ngoc-vien-dong.png'),
    milk_pbt: require('~/assets/images/drink/milk-phucbontu.png'),
    tea_dpl: require('~/assets/images/drink/tea-daophuclong.png'),
    tea_de: require('~/assets/images/drink/tea-dauep.png'),
    tea_hh: require('~/assets/images/drink/tea-hoahong.png'),
    tea_ht: require('~/assets/images/drink/tea-hongtra.png'),
    tea_lai: require('~/assets/images/drink/tea-lai.png'),
    tea_nhan: require('~/assets/images/drink/tea-nhan.png'),
    tea_old: require('~/assets/images/drink/tea-olongdau.png'),
    tea_te: require('~/assets/images/drink/tea-taoep.png'),
    tea_tm: require('~/assets/images/drink/tea-thaomoc.png'),
    tea_vtd: require('~/assets/images/drink/tea-vaituoidam.png'),

    // Snacks
    snack_dudu: require('~/assets/images/snacks/dudusay.png'),
    snack_ghd_rangCui: require('~/assets/images/snacks/goi-hatdieurangcui.png'),
    snack_ghd_rangToi: require('~/assets/images/snacks/goi-hatdieurangtoi.png'),
    snack_gnk_uc: require('~/assets/images/snacks/goi-nhokhoUc.jpg'),
    snack_gungNuong: require('~/assets/images/snacks/gungnuongmatong.jpg'),
    snack_hnk_uc: require('~/assets/images/snacks/hop-nhokhoUc.jpg'),
    snack_lhd_rangCui: require('~/assets/images/snacks/lon-hatdieurangcui.png'),
    snack_lhd_rangToi: require('~/assets/images/snacks/lon-hatdieurangtoi.png'),
    snack_mandeogung: require('~/assets/images/snacks/mandeogung.jpg'),
    snack_thomsay: require('~/assets/images/snacks/thomsay.png'),
    snack_traicaysay: require('~/assets/images/snacks/traicaysaydeo.png'),
    snack_xoaisay: require('~/assets/images/snacks/xoaisay.png'),

    // Bakery
    bakery_banhmy: require('~/assets/images/bakery/banhmyPL.png'),
    bakery_butter: require('~/assets/images/bakery/Butter-Chocolate.jpg'),
    bakery_green: require('~/assets/images/bakery/Green-tea.png'),
    bakery_passion: require('~/assets/images/bakery/Passion.png'),
    bakery_pure: require('~/assets/images/bakery/Pure-Butter.jpg'),
    bakery_tiramisu: require('~/assets/images/bakery/Tiramisu.png'),

    image_logo: require('~/assets/images/image-logo.png'),
    background_image: require('~/assets/images/background-image.png'),
    deliveryImage: require('~/assets/images/delivery.png'),
    noImage: require('~/assets/images/no_Image.png'),
};

export default images;
