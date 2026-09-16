"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const FALLBACK_POSTS = [
  { id: "fallback-1", media_url: "/img/image-insta-1.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-2", media_url: "/img/image-insta-2.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-3", media_url: "/img/image-insta-3.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-4", media_url: "/img/image-insta-4.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-5", media_url: "/img/image-insta-5.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-6", media_url: "/img/image-insta-6.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
  { id: "fallback-7", media_url: "/img/image-insta-7.jpeg", permalink: "https://www.instagram.com/delambrebakery/" },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-40 mb-10 px-6">
      <h2 className="text-4xl text-rougecerise text-center mb-10">Suivez-nous sur Instagram</h2>
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="px-2">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
                alt={post.caption?.slice(0, 80) || "Post Instagram The Delambre Bakery"}
                className="w-full h-72 object-cover rounded-xl"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
