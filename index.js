const { google } = require('googleapis');
const youtube = google.youtube('v3');
const apiKey = 'AIzaSyCYeV9YIghVEBhtLffV8_ToEInp4_Ac5M8';

async function searchAndTrendingVideos(query, regionCode, languageCode, videoCategoryId, maxResults = 50) {

  // Tìm kiếm video theo từ khóa
  const searchResponse = await youtube.search.list({
    key: apiKey,
    part: 'snippet',
    q: query,
    maxResults: maxResults,
    regionCode: regionCode,
    relevanceLanguage: languageCode
  });

  console.log(`Search results for query: "${query}"`);
  for (const item of searchResponse.data.items) {
    const videoId = item.id.videoId;
    const title = item.snippet.title;
    const description = item.snippet.description;
    const channelTitle = item.snippet.channelTitle;
    const channelId = item.snippet.channelId;
    const publishTime = item.snippet.publishTime;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    console.log(`Title: ${title}`);
    console.log(`Channel: ${channelTitle}`);
    console.log(`Description: ${description}`);
    console.log(`Publish Time: ${publishTime}`);
    console.log(`URL: ${videoUrl}`);

    // Lấy thông tin chi tiết về kênh
    const channelResponse = await youtube.channels.list({
      key: apiKey,
      part: 'snippet,statistics',
      id: channelId
    });

    for (const channel of channelResponse.data.items) {
      const subscriberCount = channel.statistics.subscriberCount || 'N/A';
      const videoCount = channel.statistics.videoCount || 'N/A';
      const viewCount = channel.statistics.viewCount || 'N/A';

      console.log(`Channel ID: ${channelId}`);
      console.log(`Subscribers: ${subscriberCount}`);
      console.log(`Total Videos: ${videoCount}`);
      console.log(`Total Views: ${viewCount}`);
      console.log('---');
    }
  }

  // Lấy danh sách các video thịnh hành theo loại
  const trendingResponse = await youtube.videos.list({
    key: apiKey,
    part: 'snippet,statistics',
    chart: 'mostPopular',
    regionCode: regionCode,
    hl: languageCode,
    videoCategoryId: videoCategoryId,
    maxResults: maxResults
  });

  console.log(`\nTrending videos in category: "${videoCategoryId}" in region: "${regionCode}" with language: "${languageCode}"`);
  for (const item of trendingResponse.data.items) {
    const videoId = item.id;
    const title = item.snippet.title;
    const description = item.snippet.description;
    const channelTitle = item.snippet.channelTitle;
    const channelId = item.snippet.channelId;
    const publishTime = item.snippet.publishedAt;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    console.log(`Title: ${title}`);
    console.log(`Channel: ${channelTitle}`);
    // console.log(`Description: ${description}`);
    console.log(`Publish Time: ${publishTime}`);
    console.log(`URL: ${videoUrl}`);

    // Lấy thông tin chi tiết về kênh
    const channelResponse = await youtube.channels.list({
      key: apiKey,
      part: 'snippet,statistics',
      id: channelId
    });

    for (const channel of channelResponse.data.items) {
      const subscriberCount = channel.statistics.subscriberCount || 'N/A';
      const videoCount = channel.statistics.videoCount || 'N/A';
      const viewCount = channel.statistics.viewCount || 'N/A';

      console.log(`Channel ID: ${channelId}`);
      console.log(`Subscribers: ${subscriberCount}`);
      console.log(`Total Videos: ${videoCount}`);
      console.log(`Total Views: ${viewCount}`);
      console.log('---');
    }
  }
}
async function getExploreVideos(regionCode, languageCode, videoCategoryId, maxResults = 10) {

  // Lấy danh sách các video từ danh mục Âm nhạc
  const exploreResponse = await youtube.videos.list({
    key: apiKey,
    part: 'snippet,statistics',
    chart: 'mostPopular',
    regionCode: regionCode,
    hl: languageCode,
    videoCategoryId: videoCategoryId,
    maxResults: maxResults
  });

  console.log(`\nExplore videos in category: "${videoCategoryId}" in region: "${regionCode}" with language: "${languageCode}"`);
  for (const item of exploreResponse.data.items) {
    const videoId = item.id;
    const title = item.snippet.title;
    const description = item.snippet.description;
    const channelTitle = item.snippet.channelTitle;
    const channelId = item.snippet.channelId;
    const publishTime = item.snippet.publishedAt;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    console.log(`Title: ${title}`);
    console.log(`Channel: ${channelTitle}`);
    // console.log(`Description: ${description}`);
    console.log(`Publish Time: ${publishTime}`);
    console.log(`URL: ${videoUrl}`);

    // Lấy thông tin chi tiết về kênh
    const channelResponse = await youtube.channels.list({
      key: apiKey,
      part: 'snippet,statistics',
      id: channelId
    });

    for (const channel of channelResponse.data.items) {
      const subscriberCount = channel.statistics.subscriberCount || 'N/A';
      const videoCount = channel.statistics.videoCount || 'N/A';
      const viewCount = channel.statistics.viewCount || 'N/A';

      console.log(`Channel ID: ${channelId}`);
      console.log(`Subscribers: ${subscriberCount}`);
      console.log(`Total Videos: ${videoCount}`);
      console.log(`Total Views: ${viewCount}`);
      console.log('---');
    }
  }
}

async function main() {
  const query = 'yoga';
  const regionCode = 'US';
  const languageCode = 'en';
  const videoCategoryId = '10'; // Category ID for Music

  // Tìm kiếm video theo từ khóa
  // await searchVideos(query, regionCode, languageCode);

  // Lấy các video từ danh mục Âm nhạc trong tab Khám phá
  await getExploreVideos(regionCode, languageCode, videoCategoryId);
}
// Thực thi hàm main
main();
