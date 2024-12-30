import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../utils/api';
import ReactPlayer from 'react-player';
import VideoInfo from './VideoInfo';
import Channelnfo from './Channelnfo';
import VideoCard from './../../components/VideoCard';
import Comments from './Comments';
import { PiUserCircleFill } from 'react-icons/pi';

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('v');
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api
      .get(`https://yt-api.p.rapidapi.com/comments?id=${id}`)
      .then((res) => setComments(res.data));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            light
            width={'100%'}
            height={'100%'}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video && (
          <div>
          <div className="p-4 rounded  shadow animate-pulse md:p-6">
                <div className="flex items-center justify-center h-8 mb-4  rounded bg-gray-700" />
          
               <div className='justify-between flex items-center'>
               <div className="flex items-center  mt-5 gap-3">
                  <PiUserCircleFill className="text-5xl text-gray-700" />
                  <div>
                    <div className="h-2.5  rounded-full bg-gray-700 w-[100px] " />
                    <div className="w-16 h-2  rounded-full bg-gray-700 my-3" />
                  </div>
                  <div className=' w-[100px] ml-6 h-10 rounded-full bg-gray-700' />
                </div>

                <div className='bg-gray-700 w-[120px] mt-4 rounded-full h-10' />
               </div>
                <div className="flex items-center justify-center h-[150px] mt-4  rounded bg-gray-700" />
              </div>
            
          </div>)}

        {video && (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
             <Channelnfo video={video} />
             <VideoInfo video={video} />
             <Comments data={comments} />
          </>
        )}
      </div>
      
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === 'video' && (
              <VideoCard key={item.videoId} video={item} isRow={true} /> //
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;