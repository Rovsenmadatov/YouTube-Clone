import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import { VideoContext } from '../context/videoContext'
import ErrorDisplay from '../components/ErrorDisplay'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'

const Feed = () => {
 const {videos,error,isLoading} =  useContext(VideoContext)
  return (
    <div className='flex'>
      <SideBar/>

      <div className='videos'>
        {isLoading
        ? <Loader/> 
        : error 
        ? <ErrorDisplay error={error}/> 
        : videos?.map((item)=> item.type === "video" && <VideoCard key={item.videoId} video={item} />)}
      </div>
    </div>
  )
}

export default Feed
