import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_conveter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channel, setChannel] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch video details
  const fetchVideoData = async () => {
    const videoDetail = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(videoDetail);
      const data = await res.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error("Failed to fetch video data", error);
    }
  };

  // Fetch channel details and comments
  const fetchOtherData = async (channelId) => {
    try {
      const channelData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
      const res = await fetch(channelData);
      const data = await res.json();
      setChannel(data.items[0]);

      const commentsData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
      const commentsRes = await fetch(commentsData);
      const commentsJson = await commentsRes.json();
      setComments(commentsJson.items || []);
    } catch (error) {
      console.error("Failed to fetch channel or comments data", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchOtherData(apiData.snippet.channelId);
    }
  }, [apiData]);

  if (!apiData) {
    return <div className="play_video">Loading video...</div>;
  }

  return (
    <div className="play_video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>

      <h3>{apiData.snippet?.title || "No title available"}</h3>

      <div className="play_video_info">
        <p>
          {value_conveter(apiData.statistics?.viewCount || 0)} Views &bull;{" "}
          {moment(apiData.snippet?.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="like" />
            {value_conveter(apiData.statistics?.likeCount || 0)}
          </span>
          <span>
            <img src={dislike} alt="dislike" />
          </span>
          <span>
            <img src={share} alt="share" />
            Share
          </span>
          <span>
            <img src={save} alt="save" />
            Save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img
          src={channel?.snippet?.thumbnails?.default?.url || ""}
          alt="publisher"
        />
        <div>
          <p>{apiData.snippet?.channelTitle || "Name"}</p>
          <span>
            {channel
              ? value_conveter(channel.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="video_discrption">
        <p>
          {apiData.snippet?.description?.slice(0, 250) ||
            "No description available."}
        </p>
        <hr />
        <h4>
          {value_conveter(apiData.statistics?.commentCount || 0)} Comments
        </h4>

        {comments.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="command">
              <img src={comment.authorProfileImageUrl || user_profile} alt="user" />
              <div>
                <h3>
                  {comment.authorDisplayName}{" "}
                  <span>{moment(comment.publishedAt).fromNow()}</span>
                </h3>
                <p>{comment.textDisplay}</p>
                <div className="command_action">
                  <img src={like} alt="like" />
                  <span>{comment.likeCount}</span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
