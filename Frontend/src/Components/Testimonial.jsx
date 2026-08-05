import React, { useRef, useState, useEffect } from 'react';
import { testimonialStyles } from '../assets/dummyStyles';
import { Star } from 'lucide-react';

const Testimonial = () => {
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      rating: 5,
      text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Patient",
      rating: 5,
      text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
    {
      id: 3,
      name: "Dr. Robert Martinez",
      role: "Pediatrician",
      rating: 4,
      text: "This platform has streamlined our clinic operations significantly. Patient management is much more organized.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 4,
      name: "Emily Williams",
      role: "Patient",
      rating: 5,
      text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
    {
      id: 5,
      name: "Dr. Amanda Lee",
      role: "Dermatologist",
      rating: 5,
      text: "Excellent platform for managing appointments. Automated reminders reduce no-shows dramatically.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Patient",
      rating: 5,
      text: "The wait time has reduced significantly since using this platform. Very convenient and user-friendly!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
  ];

  const leftTestimonials = testimonials.filter((t) => t.type === "doctor");
  const rightTestimonials = testimonials.filter((t) => t.type === "patient");

  useEffect(() => {
    const scrollLeft = scrollRefLeft.current;
    const scrollRight = scrollRefRight.current;
    if (!scrollLeft || !scrollRight) return;

    let scrollSpeed = 0.5; 
    let rafId;

    const smoothScroll = () => {
      if (!isPaused) {
        scrollLeft.scrollTop += scrollSpeed;
        scrollRight.scrollTop -= scrollSpeed;

        if (scrollLeft.scrollTop >= scrollLeft.scrollHeight / 2) {
          scrollLeft.scrollTop = 0;
        }
        if (scrollRight.scrollTop <= 0) {
          scrollRight.scrollTop = scrollRight.scrollHeight / 2;
        }
      }
      rafId = requestAnimationFrame(smoothScroll);
    };

    rafId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < rating
            ? testimonialStyles.activeStar
            : testimonialStyles.inactiveStar
        }
      >
        <Star className={testimonialStyles.star} />
      </span>
    ));

  const TestimonialCard = ({ testimonial, direction }) => (
    <div
      className={`${testimonialStyles.testimonialCard} ${
        direction === "left"
          ? testimonialStyles.leftCardBorder
          : testimonialStyles.rightCardBorder
      }`}
    >
      <div className={testimonialStyles.cardContent}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={testimonialStyles.avatar}
        />
        <div className={testimonialStyles.textContainer}>
          <div className={testimonialStyles.nameRoleContainer}>
            <div>
              <h4
                className={`${testimonialStyles.name} ${
                  direction === "left"
                    ? testimonialStyles.leftName
                    : testimonialStyles.rightName
                }`}
              >
                {testimonial.name}
              </h4>
              <p className={testimonialStyles.role}>{testimonial.role}</p>
            </div>
            <div className={testimonialStyles.starsContainer}>
              {renderStars(testimonial.rating)}
            </div>
          </div>

          <p className={testimonialStyles.quote}>"{testimonial.text}"</p>

          <div className={testimonialStyles.mobileStarsContainer}>
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className={testimonialStyles.headerContainer || "text-center mb-10 max-w-2xl mx-auto px-4"}>
        <h2 className={testimonialStyles.mainTitle || "text-4xl font-bold text-teal-700 mb-3"}>
          Voices of Trust
        </h2>
        <p className={testimonialStyles.mainSubtitle || "text-gray-500 text-sm md:text-base"}>
          Real stories from doctors and patients sharing their positive experiences with our healthcare platform.
        </p>
      </div>

      <div className={testimonialStyles.container || "w-full overflow-hidden max-w-6xl mx-auto px-4"}>
        <div className={testimonialStyles.gridContainer || "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          
          {/* LEFT COLUMN (Medical Professionals) - Added blue border */}
          <div className={`${testimonialStyles.columnContainer} border-[3px] border-blue-100 rounded-2xl overflow-hidden`}>
            {/* Added blue background and text color to header */}
            <div className={`${testimonialStyles.columnHeader} bg-blue-100 text-blue-700 py-3 text-center font-bold text-lg`}>
              👨‍⚕️ Medical Professionals
            </div>
            <div 
              ref={scrollRefLeft} 
              className={testimonialStyles.scrollContainer}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...leftTestimonials, ...leftTestimonials].map((t, i) => (
                <TestimonialCard
                  key={`L-${i}`}
                  testimonial={t}
                  direction="left"
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (Patients) - Added green border */}
          <div
            className={`${testimonialStyles.columnContainer} ${testimonialStyles.rightColumnBorder} border-[3px] border-green-100 rounded-2xl overflow-hidden`}
          >
            {/* Added green background and text color to header */}
            <div
              className={`${testimonialStyles.columnHeader} ${testimonialStyles.rightColumnHeader} bg-green-100 text-green-700 py-3 text-center font-bold text-lg`}
            >
              🧑‍⚕️ Patients
            </div>

            <div 
              ref={scrollRefRight} 
              className={testimonialStyles.scrollContainer}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...rightTestimonials, ...rightTestimonials].map((t, i) => (
                <TestimonialCard
                  key={`R-${i}`}
                  testimonial={t}
                  direction="right"
                />
              ))}
            </div>
          </div>
        </div>

        <style>{testimonialStyles.animationStyles}</style>
      </div>
    </section>
  );
};

export default Testimonial;