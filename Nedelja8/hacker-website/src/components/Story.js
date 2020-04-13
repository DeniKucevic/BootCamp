import React, { useState, useEffect } from "react";
import { getStory, storyUrl } from "../services/hackerNews";
import mapTimeString from "../utils/mapTimeString";
import "../components/story.css";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((dunja) => dunja && setStory(dunja)); // Lazy eval
  }, []);

  return (
    <div className="one_story">
      <a href={story.url} target="_blank">
        <h3 className="item" id="naslov">
          {story.title}
        </h3>
      </a>
      <p className="item">Creator: {story.by}</p>
      <p className="item">Score: {story.score}</p>
      <p className="item">{mapTimeString(story.time)}</p>
    </div>
  );
};
