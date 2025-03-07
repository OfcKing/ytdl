const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');

async function ytdl_han(url) {
  try {
    const info = await fetch(`https://www.youtube.com/get_video_info?video_id=${url}`);
    const infoText = await info.text();

    const videoInfo = new URLSearchParams(infoText);
    if (videoInfo.get('status') !== 'ok') throw new Error('Failed to retrieve video info');

    const playerResponse = JSON.parse(videoInfo.get('player_response'));
    const videoDetails = playerResponse.videoDetails;

    const videoFormat = playerResponse.streamingData.formats.find(format => format.mimeType.includes('video/mp4'));
    const videoUrl = videoFormat.url;
    const videoPath = `./${videoDetails.videoId}.mp4`;

    const videoStream = fs.createWriteStream(videoPath);
    const response = await fetch(videoUrl);
    response.body.pipe(videoStream);

    await new Promise((resolve, reject) => {
      videoStream.on('finish', resolve);
      videoStream.on('error', reject);
    });

    console.log(`Downloaded: ${videoPath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

module.exports = { ytdl }
