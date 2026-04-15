import { Download } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Interview Experiences",
    description: "Interview Experiences(Amaazon,..) + Hiring Windows + lot more",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
    price: "₹49",
    originalPrice: "₹99",
    link: "https://topmate.io/swapna_majji/2050033?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Offcampus Strategy",
    description: "I placed through Offcampus",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    price: "₹49",
    originalPrice: "₹99",
    link: "https://topmate.io/swapna_majji/2050053?utm_source=public_profile&utm_campaign=swapna_majji"
  },
  {
    title: "Resources (Worth 999/-)",
    description: "Resources related to DSA, Development and Core Sub",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&q=80",
    price: "₹89",
    originalPrice: "₹199",
    link: "https://topmate.io/swapna_majji/2050022?utm_source=public_profile&utm_campaign=swapna_majji",
    isBestSeller: true
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex-1 pr-2">
                    {product.title}
                  </h3>
                  <div className="flex flex-col items-end shrink-0 gap-1">
                     {product.isBestSeller && (
                        <span className="bg-[#ccff00] text-black text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider mb-1">
                          Best Seller
                        </span>
                     )}
                     <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through text-xs font-medium">{product.originalPrice}</span>
                        <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-bold">
                          {product.price}
                        </span>
                     </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow pt-2">
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
