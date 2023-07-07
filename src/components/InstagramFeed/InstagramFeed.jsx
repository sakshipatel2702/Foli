import React, { useEffect, useState } from 'react';
import './InstagramFeed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace 'ACCESS_TOKEN' with your actual Instagram Basic Display API access token
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=permalink,caption,media_type,media_url&limit=4&access_token=IGQVJWV1lkLUFfV0FmZAi1CcnZAkdzczemxIX2FiMVFSaEVyWHJ6TkJSNUgwYXpkOFpNdDZAGZA2Q1NjEzcmhIZA1piRjZAIeHlLRXlLMXZABSFRBQW01Yk9fbjcyS09wYW4zT2ZAOWlRPSnlYN0JxeEtGNVdNdgZDZD`
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="instagram-feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            {post.media_type === 'VIDEO' ? (
              <video src={post.media_url} alt={post.caption} />
            ) : (
              <img src={post.media_url} alt={post.caption} />
            )}
            <div className="overlay">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
