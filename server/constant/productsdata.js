 const products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/81UkS4-eQZL._AC_SX695_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/81UkS4-eQZL._AC_SX695_.jpg',
        title: {
            shortTitle: 'Skechers',
            longTitle: 'Mens Go Walk Max 54601'
        }, 
        price: {
            mrp: 1000,
            cost: 625,
            discount: '47%'
        },
        description: 'Có được sự thoải mái và đệm tối đa khi đi bộ thể thao với Skechers GOwalk Max. Thân giày bằng vải lưới với thiết kế đế có đệm, hỗ trợ. Được thiết kế bằng công nghệ và vật liệu Skechers Performance dành riêng cho hoạt động đi bộ thể thao. Đế lót giày công nghệ Goga Max với lớp đệm có độ đàn hồi cao.',
        discount: 'Extra 10% Off', 
        tagline: '' 
    },
    { 
        id: 'product2',
        url: 'https://m.media-amazon.com/images/I/81HAvVMzgXL._AC_SY741_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/81HAvVMzgXL._AC_SY741_.jpg',
        title: {
            shortTitle: 'Van Heusen Mens Wrinkle Free Long Sleeve Button Down Shirt',
            longTitle: '200+ bought in past month'
        },
        price: {
            mrp: 1599,
            cost: 899,
            discount: '40%'
        },
        description: 'Không ủi: lớp hoàn thiện chống nhăn không cần ủi thêm Chăm sóc dễ dàng: Có thể giặt bằng máy để bạn có thể mặc trực tiếp từ máy sấy Có một túi vá duy nhất trên ngực',
        discount: 'From 5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/71-R0cG4+gL._AC_SY300_SX300_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71-R0cG4+gL._AC_SY300_SX300_.jpg', 
        title: {
            shortTitle: 'Laptop MSI Prestige 16 AI Evo: Intel Ultra 7-155H,',
            longTitle: 'Màn hình OLED 16" UHD+, 32GB DDR5, SSD NVMe 2TB, HDMI, Đầu đọc thẻ SD, Win 11 Pro: Stellar Grey B1MG-020US'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'Hiệu suất I-Powered: Khai thác khả năng của bộ xử lý Intel Core Ultra 7 mới nhất để dễ dàng quản lý các tác vụ đòi hỏi khắt khe. Mở rộng năng suất của bạn với hiệu suất mạnh mẽ và đáng tin cậy nhất khi đang di chuyển.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/71OznGGxhcL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71OznGGxhcL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: {
            shortTitle: 'SAMSUNG Galaxy A35 5G A Series Cell Phone',
            longTitle: '128GB Unlocked Android Smartphone',
        }, 
        price: {
            mrp: 399,
            cost: 299,
            discount: '42%'
        },
        description: 'MÀN HÌNH A SERIES GALAXY SÁNG NHẤT CỦA CHÚNG TÔI: Nhờ có Vision Booster, màn hình sẽ điều chỉnh liền mạch theo môi trường xung quanh để bạn có thể tận hưởng khả năng phát trực tuyến, chơi game hoặc duyệt web không bị gián đoạn¹ ngay cả vào buổi chiều nắng nhất.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://m.media-amazon.com/images/I/51pJtVmROVL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51pJtVmROVL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
        title: {
            shortTitle: 'Bộ bàn chải đánh răng điện ',
            longTitle: 'Bàn chải đánh răng du lịch điện hẹn giờ 6 tốc độ thông minh dành cho nam giới)'
        }, 
        price: {
            mrp: 19,
            cost: 10,
            discount: '40%'
        },
        description: '',
        discount: 'From â‚¹499', 
        tagline: 'Kubra, Nova & more' 
    },
    {
        id: 'product6',
        url: 'https://m.media-amazon.com/images/I/81SkKZjDDyL._AC_SY741_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/81SkKZjDDyL._AC_SY741_.jpg', 
        title: {
            shortTitle: 'Đồng hồ đeo tay nam ',
            longTitle: 'của Amazon Essentials'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From â‚¹499', 
        tagline: 'Kubra, Nova & more' 
    }
]
const products1 = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/81UkS4-eQZL._AC_SX695_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/81UkS4-eQZL._AC_SX695_.jpg',
        title: {
            shortTitle: 'Skechers',
            longTitle: 'Mens Go Walk Max 54601'
        }, 
        price: {
            mrp: 1000,
            cost: 625,
            discount: '47%'
        },
        description: 'Có được sự thoải mái và đệm tối đa khi đi bộ thể thao với Skechers GOwalk Max. Thân giày bằng vải lưới với thiết kế đế có đệm, hỗ trợ. Được thiết kế bằng công nghệ và vật liệu Skechers Performance dành riêng cho hoạt động đi bộ thể thao. Đế lót giày công nghệ Goga Max với lớp đệm có độ đàn hồi cao.',
        discount: 'Extra 10% Off', 
        tagline: '' 
    }
]
module.exports = products;