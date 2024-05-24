const axios = require('axios');

// Hàm để kiểm tra thông tin proxy
async function checkProxy(proxy) {
  try {
    // Gửi yêu cầu đến API của ipinfo.io
    const response = await axios.get(`https://ipinfo.io/${proxy}/json`);
    const data = response.data;

    // In ra thông tin về proxy
    console.log(`IP: ${data.ip}`);
    console.log(`Country: ${data.country}`);
    console.log(`Region: ${data.region}`);
    console.log(`City: ${data.city}`);
    console.log(`Org: ${data.org}`);
  } catch (error) {
    console.error('Error fetching proxy information:', error.message);
  }
}

// Proxy cần kiểm tra
const proxy = '104.243.210.333:5401'; // Thay đổi IP proxy cần kiểm tra
checkProxy(proxy);
