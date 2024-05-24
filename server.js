const axios = require('axios');

async function searchTikTok(keyword, count = 10) {
    const url = `https://www.tiktok.com/api/search/general/full/?WebIdLastTime=1711521278&aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Linux%20x86_64&browser_version=5.0%20%28X11%3B%20Linux%20x86_64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F123.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7350927797462353416&device_platform=web_pc&device_type=web_h264&focus_state=false&from_page=search&history_len=4&is_fullscreen=false&is_page_visible=true&keyword=Trend%20Bi%E1%BA%BFn%20H%C3%ACnh%20T%E1%BB%91t%20Nghi%E1%BB%87p&odinId=7350927689337570311&offset=42&os=linux&priority_region=&referer=&region=VN&screen_height=1080&screen_width=1920&search_id=202405230659519E0DB6F44DA66800EE4B&search_source=default_search_keyword&tz_name=Asia%2FSaigon&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=en`;
    const headers = {
        'Cookie': 'ak_bmsc=0B5887A35B4E9A988249521E76A4B8B7~000000000000000000000000000000~YAAQdL4vF78QzaOPAQAArYwkpBeHa/erucJXcTtKvWV12ZLT/+X6hyudlKls8+ny3efxMm8MALgQP+E+s12c5x6jb3OetZ7utEVeBhtbyaEfQEzv9mJlYK+4CUZhzA38FW7FfRHORXIFqX4/O6k0DomvURH75hqOpYnkDvgIAX47clodFTrt37NGiSNxI/DAEnZuTf1J4kBLXUKeif7WKTCGekoAWFEfhDxoeCeDt/Ibo3VLnK081N9Fw6aEcexVcfu7ahdj2aBRYxGdtv6ng//fDuiTo836kBzn/LcsQ+p2JMO6uXlZtLEKVBEgqtGtPwnct23vjGFxDAUbN1Sjx7FMr6WLs9SUJqFcY5CN9NFb8SxxFU11lr1WyU3O; msToken=S5_GtjbBNLJt5g8a4gZsPLqTvfH9mBFJmNwhrQgZ0ieTXXl_0YmJfq5hH17sQ0Cgj-Q1eXKixyB9PyAmY4qqIMxvqfT2sVEXZFZkBzQIsKE8Ze9N1z0PfFGzTNbFUM3RCDC4KmrKLeeiiKQ=; tt_chain_token=+GkzJBGJQ6UVnL/HLB3t0w==; tt_csrf_token=SVnX7Ujg-aF-ab3HysoPTeiB2PATSkDOGhKA; ttwid=1%7ChfoZB979zUMwfC-TbyfsLDPvEWTUFosr6EEGSO5d0Kg%7C1716445809%7C6eac3be49808562f6916ded3fbddc118b985ad6818b18fed567b492b0b975d12',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        'host': 'www.tiktok.com'
    };
    const date = new Date();
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    const params = {
        WebIdLastTime: unixTimestamp,
        aid: '1988',
        app_language: 'en',
        app_name: 'tiktok_web',
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Linux%20x86_64',
        browser_version: '5.0%20%28X11%3B%20Linux%20x86_64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F123.0.0.0%20Safari%2F537.36',
        channel: 'tiktok_web',
        cookie_enabled: true,
        device_id: '7350927797462353416',
        device_platform: 'web_pc',
        device_type: 'web_h264',
        focus_state: true,
        from_page: 'search',
        history_len: 4,
        is_fullscreen: false,
        is_page_visible: true,
        keyword: 'Trend%20%C3%A2m%20nh%E1%BA%A1c',
        odinId: '7350927689337570311',
        offset: 0,
        os: 'linux',
        priority_region: '',
        referer: '',
        region: 'VN',
        screen_height: 1980,
        screen_width: 1920,
        search_source: 'default_search_keyword',
        tz_name: 'Asia%2FSaigon',
        web_search_code:'%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D',
        webcast_language: 'en'
    };
    try {
        const response = await axios.get(url, { headers });
        const data = response.data;
        console.log("🚀 ~ searchTikTok ~ data:", data)

        // data.data.forEach(item => {
        //     console.log(`Title: ${item.desc}`);
        //     console.log(`URL: https://www.tiktok.com/@${item.author.uniqueId}/video/${item.id}`);
        //     console.log("\n");
        // });
    } catch (error) {
        console.error(`Failed to retrieve data: ${error}`);
    }
}

// Sử dụng hàm để tìm kiếm
searchTikTok("yoga", 5);
