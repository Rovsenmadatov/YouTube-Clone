import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    'x-rapidapi-key': '234febdd07mshffdc42291ef28cdp122600jsn222ca6144bb7',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  },
});

export default api;