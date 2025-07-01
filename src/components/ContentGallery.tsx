"use client";

import { useState } from 'react';
import Image from 'next/image';

const videos = [
  {
    id: 1,
    thumbnail: "/images/gallery/video1.jpg",
    title: "Perfect Fade Technique",
    likes: "2.4K",
    comments: "128",
  },
  {
    id: 2,
    thumbnail: "/images/gallery/video2.jpg",
    title: "Beard Styling Tips",
    likes: "1.8K",
    comments: "95",
  },
  {
    id: 3,
    thumbnail: "/images/gallery/video3.jpg",
    title: "Classic Pompadour",
    likes: "3.2K",
    comments: "156",
  },
  {
    id: 4,
    thumbnail: "/images/gallery/video4.jpg",
    title: "Hot Towel Treatment",
    likes: "1.5K",
    comments: "82",
  },
];

export default function ContentGallery() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Behind the Scenes
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Watch our master barbers in action and discover the art of precision grooming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveVideo(video.id)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-display mb-2">{video.title}</h3>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {video.likes}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {video.comments}
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-md aspect-[9/16]">
              <button
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                <p className="text-white">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 