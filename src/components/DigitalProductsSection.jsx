import { Download, Star, Sparkles, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Interview Experiences",
    description: "Interview Experiences(Amaazon, Microsoft, TCS, Zoho, Cold DM templates, Resume Templates,..) + Hiring Windows + lot more",
    image: "/interview_experiences.png",
    price: "₹49",
    originalPrice: "₹99",
    discount: "50% OFF",
    rating: 4.8,
    reviews: 120,
    link: "https://topmate.io/swapna_majji/2050033?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Offcampus Strategy",
    description: "I placed through Offcampus",
    image: "/offcampus.png",
    price: "₹49",
    originalPrice: "₹99",
    discount: "50% OFF",
    rating: 4.9,
    reviews: 85,
    link: "https://topmate.io/swapna_majji/2050053?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Resources (Worth 899/-)",
    description: "Resources related to DSA, Development and Core Sub",
    image: "/dsa.jpg",
    price: "₹89",
    originalPrice: "₹899",
    discount: "90% OFF",
    rating: 5.0,
    reviews: 200,
    link: "https://topmate.io/swapna_majji/2050022?utm_source=public_profile&utm_campaign=swapna_majji",
    isBestSeller: true
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted-foreground/20 text-muted-foreground/20"
          }`}
        />
      ))}
    </div>
    <span className="text-xs text-muted-foreground font-medium">
      {rating} ({reviews}+)
    </span>
  </div>
);

export const DigitalProductsSection = () => {
  return (
    <section id="resources" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Curated for placement season
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Digital <span className="text-primary">Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            High-impact guides and roadmaps I wish someone handed me at 2 AM during placement season.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 transition-all duration-500"
              style={{
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)",
              }}
            >
              {/* Best Seller ribbon */}
              {product.isBestSeller && (
                <div className="absolute top-4 left-0 z-20">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-r-full shadow-lg">
                    <Zap className="h-3.5 w-3.5 fill-white" />
                    Best Seller
                  </div>
                </div>
              )}

              {/* Discount badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {product.discount}
                </span>
              </div>

              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-background font-semibold text-sm shadow-xl hover:shadow-2xl transition-shadow"
                    >
                      <Download className="h-4 w-4" /> Preview
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow gap-3">
                {/* Title */}
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 text-left leading-snug">
                  {product.title}
                </h3>

                {/* Rating */}
                <StarRating rating={product.rating} reviews={product.reviews} />

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow text-left">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="border-t border-border/50 my-1" />

                {/* Price + CTA row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Get <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
