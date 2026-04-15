import { Download, ExternalLink, FileDown } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "DSA Mastery Roadmap",
    description: "The exact roadmap I used to solve 700+ problems and crack my dream role.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    price: "Free",
    link: "https://topmate.io/swapna_majji"
  },
  {
    title: "Interview Prep Strategies",
    description: "Unfiltered reality checks and strategies for acing technical and behavioral rounds.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    price: "Free",
    link: "https://topmate.io/swapna_majji"
  }
];

export const DigitalProductsSection = () => {
  return (
    <section id="resources" className="py-24 px-4 relative bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Digital <span className="text-primary">Resources</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto"
        >
          High-impact guides and roadmaps I wish someone handed me at 2 AM during placement season.
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } } }}
              whileHover={{ y: -5 }}
              key={index} 
              className="gradient-border group overflow-hidden flex flex-col bg-card hover:shadow-[0_10px_30px_rgba(var(--primary),0.15)] transition-shadow"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" /> Get Access
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                    {product.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
