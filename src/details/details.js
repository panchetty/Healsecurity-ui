import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchDetailsTopicPage = (league, uuid) => {
  const [topic, setTopic] = useState([]);
  const [title, setTitle] = useState([]);

  

  const fetchTopics = async () => {
    await axios
      .get("/api/details")
      .then((res) => {
        setTitle(res.data.details.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchSpecificTopic = async () => {
    await axios
      .get(`/api/details/${id}`)
      .then((res) => {
        setTopic(res.data.details.topics.topic1);
      })
      .catch((err) => {
        console.log(err);
    });
  };

fetchTopics();
fetchSpecificTopic();

  return { topic, title };
};

export default fetchDetailsTopicPage;