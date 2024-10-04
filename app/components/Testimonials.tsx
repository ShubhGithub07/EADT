import { Star, Twitter, Linkedin } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Autism Prediction Tool provided us with invaluable insights into our child's behavior. It helped us understand the signs of autism better and guided us toward the right resources for support.",
    author: "Jane Doe",
    position: "Marketing Director",
    company: "Tech Innovators Inc.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    social: { icon: Twitter, link: "#" },
  },
  {
    quote:
      "As a parent, I was overwhelmed with information. This tool simplified the process and gave us clarity on our child's needs, making it easier to seek help and connect with professionals.",
    author: "John Smith",
    position: "Social Media Manager",
    company: "Global Marketing Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    social: { icon: Linkedin, link: "#" },
  },
  {
    quote:
      "Using the Autism Prediction Tool was a game-changer for our family. It not only highlighted key areas of concern but also empowered us to take proactive steps in our child's development.",
    author: "Emily Johnson",
    position: "CEO",
    company: "StartUp Ventures",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    social: { icon: Twitter, link: "#" },
  },
  {
    quote:
      "The Autism Prediction Tool provided us with invaluable insights into our child's behavior. It helped us understand the signs of autism better and guided us toward the right resources for support.",
    author: "Michael Brown",
    position: "Content Strategist",
    company: "Creative Minds Agency",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    social: { icon: Linkedin, link: "#" },
  },
  {
    quote:
      "As a parent, I was overwhelmed with information. This tool simplified the process and gave us clarity on our child's needs, making it easier to seek help and connect with professionals.",
    author: "Sarah Lee",
    position: "Digital Marketing Lead",
    company: "E-commerce Giants",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    social: { icon: Twitter, link: "#" },
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by parents worldwide
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover how our users have found clarity and support through the
            Autism Insight Tool, transforming their understanding and approach
            to autism.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <a
                  href={testimonial.social.link}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <testimonial.social.icon className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
