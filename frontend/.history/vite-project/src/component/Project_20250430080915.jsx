// src/components/ProjectCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  { image: '/assets/renovation.jpg' },
  { image: '/projects/project2.jpg' },
  { image: '/projects/project3.jpg' },
];

export default function Project() {
  return (
    <div className="w-full px-4 py-10 bg-white">
      <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-6">
        Discover our exceptional construction projects and success stories
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition">
          Explore All Projects →
        </button>
      </div>
    </div>
  );
}

