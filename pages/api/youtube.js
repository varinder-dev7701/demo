export default async (req, res) => {
    var key=process.env.YOUTUBE_KEY
    var response=await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key=' + key)
    var json=response.json()
    const { subscriberCount, viewCount, videoCount } = json.items[0].statistics
    return res.status(200).json({
        subscriberCount,
        viewCount,
        videoCount
    })
  }