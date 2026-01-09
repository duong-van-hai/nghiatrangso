/**
 * DATA TRUNG TÂM - NGHĨA TRANG NHÂN DÂN SỐ
 * Phân loại (type): 'liệt sĩ', 'dân thường', 'người nước ngoài', 'kiều bào'
 */

const memorialData = [
    {
        id: "LS-0001",
        type: "liệt sĩ",
        name: "Nguyễn Văn Trỗi",
        otherName: "",
        birth: "1940",
        death: "1964",
        homeTown: {
            province: "Quảng Nam",
            district: "Điện Bàn",
            commune: "Thanh Quýt"
        },
        deathPlace: "Khám Chí Hòa, Sài Gòn",
        unit: "Biệt động Sài Gòn",
        rank: "Chiến sĩ",
        restingPlace: {
            locationName: "Nghĩa trang liệt sĩ TP. Hồ Chí Minh",
            country: "Việt Nam",
            type: "Nghĩa trang liệt sĩ"
        },
        bio: "Anh hùng lực lượng vũ trang nhân dân, nổi tiếng với tinh thần bất khuất trước pháp trường.",
        image: "https://upload.wikimedia.org/wikipedia/vi/1/12/Nguyen_Van_Troi.jpg",
        candles: 15200,
        flowers: 8900
    },
    {
        id: "NN-0001",
        type: "người nước ngoài",
        name: "Erwin Borchers",
        otherName: "Chiến Sỹ",
        birth: "1906",
        death: "1989",
        homeTown: {
            province: "Berlin",
            district: "-",
            commune: "-"
        },
        deathPlace: "Đức (Mất sau khi về nước)",
        unit: "Đội quân Âu Phi - Việt Minh",
        rank: "Chiến sĩ quốc tế",
        restingPlace: {
            locationName: "Nghĩa trang Bất Bạt (Một phần tro cốt)",
            country: "Việt Nam",
            type: "Nghĩa trang"
        },
        bio: "Người Đức tham gia Việt Minh, được Hồ Chủ Tịch đặt tên Việt Nam là Chiến Sỹ.",
        image: "",
        candles: 850,
        flowers: 420
    },
    {
        id: "KB-0001",
        type: "kiều bào",
        name: "Phạm Ngọc Thảo",
        otherName: "Albert Thảo",
        birth: "1922",
        death: "1965",
        homeTown: {
            province: "Vĩnh Long",
            district: "-",
            commune: "-"
        },
        deathPlace: "Biên Hòa",
        unit: "Tình báo chiến lược",
        rank: "Đại tá",
        restingPlace: {
            locationName: "Nghĩa trang liệt sĩ TP. Hồ Chí Minh",
            country: "Việt Nam",
            type: "Nghĩa trang liệt sĩ"
        },
        bio: "Nhà tình báo xuất sắc, hoạt động trong lòng địch dưới danh nghĩa sĩ quan cao cấp chế độ cũ.",
        image: "",
        candles: 3200,
        flowers: 1100
    },
    {
        id: "DT-0001",
        type: "dân thường",
        name: "Lê Văn Tám",
        otherName: "Em bé đuốc sống",
        birth: "1932",
        death: "1945",
        homeTown: {
            province: "Gia Định",
            district: "-",
            commune: "-"
        },
        deathPlace: "Kho xăng Thị Nghè",
        unit: "Đội thiếu niên tự vệ",
        rank: "Đội viên",
        restingPlace: {
            locationName: "Tưởng niệm (Chưa rõ nơi an nghỉ cụ thể)",
            country: "Việt Nam",
            type: "Lăng đài"
        },
        bio: "Biểu tượng của tinh thần yêu nước quật khởi của thiếu nhi miền Nam.",
        image: "",
        candles: 9800,
        flowers: 5600
    },
    {
        id: "NN-0002",
        type: "người nước ngoài",
        name: "Yuri Gagarin",
        otherName: "",
        birth: "1934",
        death: "1968",
        homeTown: {
            province: "Smolensk",
            district: "-",
            commune: "-"
        },
        deathPlace: "Liên Xô",
        unit: "Hội Hữu nghị Xô - Việt (Chủ tịch đầu tiên)",
        rank: "Anh hùng lao động VN",
        restingPlace: {
            locationName: "Quảng trường Đỏ",
            country: "Nga",
            type: "Nghĩa trang"
        },
        bio: "Người đầu tiên bay vào vũ trụ, có đóng góp to lớn trong việc xây dựng tình hữu nghị Việt - Xô.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Kushnerev_Yuri_Gagarin.jpg",
        candles: 4500,
        flowers: 2100
    }
];

// Xuất dữ liệu để file index.html có thể dùng import
export default memorialData;
