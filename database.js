/**
 * HỆ THỐNG DỮ LIỆU NGHĨA TRANG NHÂN DÂN SỐ
 * Cấu trúc: 
 * - db_ls: Thông tin hiển thị danh sách (nhẹ, nhanh)
 * - db_qq: Thông tin quê quán (truy xuất theo ID)
 * - db_dc: Thông tin an nghỉ & tiểu sử (truy xuất theo ID)
 */

// Link ảnh hoa sen mặc định (Trang trọng)
const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=200&h=200&fit=crop"; 

// --- PHẦN 1: DANH TÍNH CỐT LÕI (Hiển thị ở trang chủ) ---
export const db_ls = [
    { id: "0001", name: "Võ Thị Sáu", type: "liệt sĩ", birth: "1933", death: "1952", img: "https://vcdn1-giaitri.vnecdn.net/2022/01/22/vothisau-1642848415-3893-1642848520.jpg", candles: 4500, flowers: 3200 },
    { id: "0002", name: "Nguyễn Văn Trỗi", type: "liệt sĩ", birth: "1940", death: "1964", img: "https://upload.wikimedia.org/wikipedia/vi/1/12/Nguyen_Van_Troi.jpg", candles: 3800, flowers: 2100 },
    { id: "0003", name: "Nguyễn Viết Xuân", type: "liệt sĩ", birth: "1933", death: "1964", img: "", candles: 1200, flowers: 850 },
    { id: "0004", name: "Phan Đình Giót", type: "liệt sĩ", birth: "1922", death: "1954", img: "", candles: 2900, flowers: 1500 },
    { id: "0005", name: "Bế Văn Đàn", type: "liệt sĩ", birth: "1931", death: "1953", img: "", candles: 2100, flowers: 1300 },
    { id: "0006", name: "Tô Vĩnh Diện", type: "liệt sĩ", birth: "1924", death: "1954", img: "", candles: 1800, flowers: 900 },
    { id: "0007", name: "Lý Tự Trọng", type: "liệt sĩ", birth: "1914", death: "1931", img: "", candles: 5000, flowers: 4000 },
    { id: "0008", name: "Đặng Thùy Trâm", type: "liệt sĩ", birth: "1942", death: "1970", img: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/44/14/66/44146602-0e9f-72f8-8547-195c808f062f/cover.jpg/400x400cc.jpg", candles: 6200, flowers: 5100 },
    { id: "0009", name: "Nguyễn Văn Thạc", type: "liệt sĩ", birth: "1952", death: "1972", img: "", candles: 3400, flowers: 2200 },
    { id: "0010", name: "Kim Đồng", type: "liệt sĩ", birth: "1929", death: "1943", img: "", candles: 4100, flowers: 3300 },
    { id: "0011", name: "Trần Can", type: "liệt sĩ", birth: "1931", death: "1954", img: "", candles: 950, flowers: 400 },
    { id: "0012", name: "Vừ A Dính", type: "liệt sĩ", birth: "1934", death: "1949", img: "", candles: 2700, flowers: 1800 },
    { id: "0013", name: "Lê Văn Tám", type: "dân thường", birth: "1932", death: "1945", img: "", candles: 8000, flowers: 4500 },
    { id: "0014", name: "Nguyễn Bá Ngọc", type: "liệt sĩ", birth: "1952", death: "1964", img: "", candles: 1500, flowers: 900 },
    { id: "0015", name: "La Văn Cầu", type: "liệt sĩ", birth: "1932", death: "Đang sống", img: "", candles: 2300, flowers: 1100 },
];

// TỰ ĐỘNG SINH DỮ LIỆU ĐẾN 200 NGƯỜI ĐỂ TEST
for (let i = 16; i <= 200; i++) {
    const id = i.toString().padStart(4, '0');
    db_ls.push({
        id: id,
        name: `Liệt sĩ mẫu số ${i}`,
        type: i % 10 === 0 ? "kiều bào" : (i % 7 === 0 ? "người nước ngoài" : "liệt sĩ"),
        birth: "19xx",
        death: "19xx",
        img: "", // Để trống để hiện hoa sen
        candles: Math.floor(Math.random() * 500),
        flowers: Math.floor(Math.random() * 300)
    });
}

// --- PHẦN 2: QUÊ QUÁN (db_qq) ---
export const db_qq = {
    "0001": { p: "Bà Rịa - Vũng Tàu", d: "Đất Đỏ", c: "Phước Long Thọ" },
    "0002": { p: "Quảng Nam", d: "Điện Bàn", c: "Thanh Quýt" },
    "0003": { p: "Hà Nam", d: "Phủ Lý", c: "Ngũ Lão" },
    "0004": { p: "Hà Tĩnh", d: "Cẩm Xuyên", c: "Cẩm Quan" },
    "0005": { p: "Cao Bằng", d: "Phục Hòa", c: "Quang Trung" },
    "0006": { p: "Thanh Hóa", d: "Nông Cống", c: "Tào Sơn" },
    "0007": { p: "Hà Tĩnh", d: "Thạch Hà", c: "Việt Xuyên" },
    "0008": { p: "Hà Nội", d: "Ba Đình", c: "Đội Cấn" },
    "0009": { p: "Hà Nội", d: "Từ Liêm", c: "Cổ Nhuế" },
    "0010": { p: "Cao Bằng", d: "Hà Quảng", c: "Trường Hà" },
};
// Loop tạo quê quán mẫu cho 200 người
for (let i = 11; i <= 200; i++) {
    db_qq[i.toString().padStart(4, '0')] = { p: "Địa phương mẫu", d: "Huyện", c: "Xã" };
}

// --- PHẦN 3: CHI TIẾT AN NGHỈ & TIỂU SỬ (db_dc) ---
export const db_dc = {
    "0001": { r: "Nghĩa trang Hàng Dương", ct: "Việt Nam", bio: "Nữ anh hùng huyền thoại vùng Đất Đỏ, hy sinh tại nhà tù Côn Đảo." },
    "0002": { r: "Nghĩa trang liệt sĩ TP.HCM", ct: "Việt Nam", bio: "Người thợ điện anh hùng với lời hô bất tử trên pháp trường Chí Hòa." },
    "0003": { r: "Nghĩa trang liệt sĩ xã Ngũ Lão", ct: "Việt Nam", bio: "Anh hùng với khẩu lệnh: 'Nhằm thẳng quân thù mà bắn!'" },
    "0004": { r: "Nghĩa trang liệt sĩ Điện Biên Phủ", ct: "Việt Nam", bio: "Anh hùng lấy thân mình lấp lỗ châu mai trong trận Him Lam." },
    "0005": { r: "Nghĩa trang liệt sĩ Điện Biên Phủ", ct: "Việt Nam", bio: "Anh hùng lấy thân mình làm giá súng cho đồng đội bắn máy bay." },
    "0006": { r: "Nghĩa trang liệt sĩ Điện Biên Phủ", ct: "Việt Nam", bio: "Anh hùng lấy thân mình chèn pháo, cứu khẩu pháo không bị lăn xuống vực." },
    "0007": { r: "Nghĩa trang liệt sĩ huyện Thạch Hà", ct: "Việt Nam", bio: "Người đoàn viên đầu tiên, hy sinh tại Sài Gòn khi mới 17 tuổi." },
    "0008": { r: "Nghĩa trang liệt sĩ Nhổn", ct: "Việt Nam", bio: "Nữ bác sĩ liệt sĩ, tác giả cuốn nhật ký nổi tiếng đầy lý tưởng cách mạng." },
    "0009": { r: "Nghĩa trang liệt sĩ Nhổn", ct: "Việt Nam", bio: "Liệt sĩ, tác giả 'Mãi mãi tuổi hai mươi', hy sinh tại Thành cổ Quảng Trị." },
    "0010": { r: "Khu di tích Kim Đồng, Cao Bằng", ct: "Việt Nam", bio: "Người đội trưởng đầu tiên của Đội Thiếu niên Tiền phong Hồ Chí Minh." },
};
// Loop tạo dữ liệu an nghỉ mẫu cho 200 người
for (let i = 11; i <= 200; i++) {
    db_dc[i.toString().padStart(4, '0')] = { r: "Nghĩa trang địa phương", ct: "Việt Nam", bio: "Thông tin đang được xác minh và cập nhật..." };
}
