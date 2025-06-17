import { ReactElement, useState, useEffect } from 'react';

type Testimonial = {
    id: number;
    name: string;
    position: string;
    location: string;
    rating: number;
    content: string;
    image: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }): ReactElement => {
    const renderStars = (rating: number): ReactElement[] => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg
                    key={`full-${i}`}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg
                    key="half"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <defs>
                        <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#D1D5DB" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#half-star)"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>
            );
        }

        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <svg
                    key={`empty-${i}`}
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div className="flex flex-col items-center p-8 space-y-6 rounded-lg bg-white shadow-lg">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
            <p className="text-gray-600 italic text-center">"{testimonial.content}"</p>
            <div className="flex">{renderStars(testimonial.rating)}</div>
            <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.location}
                </p>
            </div>
        </div>
    );
};

const TestimonialCarousel = (): ReactElement => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Marketing Director",
            location: "New York, USA",
            rating: 5,
            content:
                "The team delivered exceptional results that exceeded our expectations. Their attention to detail and creative approach made all the difference.",
            image: "https://randomuser.me/api/portraits/women/43.jpg",
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "CTO",
            location: "San Francisco, USA",
            rating: 4.5,
            content:
                "Reliable and professional service. They understood our technical requirements perfectly and implemented them flawlessly.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Emma Wilson",
            position: "Product Manager",
            location: "London, UK",
            rating: 4,
            content:
                "We've worked with many vendors, but this team stands out for their communication and ability to deliver on time.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            id: 4,
            name: "David Kim",
            position: "CEO",
            location: "Seoul, South Korea",
            rating: 5,
            content:
                "Transformative experience working with this team. They helped us scale our operations internationally with ease.",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 5,
            name: "Lisa Rodriguez",
            position: "UX Designer",
            location: "Barcelona, Spain",
            rating: 4.5,
            content:
                "The design solutions provided were both beautiful and functional. They really understood our users' needs.",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        {
            id: 6,
            name: "James Wilson",
            position: "Operations Manager",
            location: "Toronto, Canada",
            rating: 5,
            content:
                "Efficient and effective service that streamlined our business processes significantly.",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
        },
    ];

    // Group testimonials into sets of 3 for carousel slides
    const groupedTestimonials: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        groupedTestimonials.push(testimonials.slice(i, i + 3));
    }

    // Auto-scroll every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === groupedTestimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [groupedTestimonials.length]);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from businesses that have transformed their operations with our solutions
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {groupedTestimonials[currentIndex]?.map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {groupedTestimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;