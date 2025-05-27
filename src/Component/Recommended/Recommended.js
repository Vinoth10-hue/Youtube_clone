import React from "react";
import "./Recommended.css";
import { useState } from "react";
import { API_KEY, value_conveter } from "../../data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const realated_video = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=205&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(realated_video)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side_video_list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid_info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_conveter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
