import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Post {
  id: string;
  url: string;
}

// Using the actual post URLs from LinkedIn
const posts: Post[] = [
  { 
    id: '1', 
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7300141433020153856'
  },
  { 
    id: '2',
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7299397020883333120'
  },
  {
    id: '3',
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7298672608411058176'
  }
];

export default function PostsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextPost = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  useEffect(() => {
    const timer = setInterval(nextPost, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden relative rounded-lg shadow-md bg-white">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={() => setIsAnimating(false)}
        >
          {posts.map((post) => (
            <div key={post.id} className="w-full flex-shrink-0 min-h-[500px]">
              <iframe
                src={post.url}
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Post"
                className="w-full"
                onLoad={() => setIsAnimating(false)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevPost}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      
      <button 
        onClick={nextPost}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}