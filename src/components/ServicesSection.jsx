import { ArrowRight, Video, MessageSquare, FileText, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "1:1 FREE 30-Minute Discovery Call",
    description: "Free strategy call for placements & DSA",
    price: "FREE",
    duration: "30 mins",
    icon: <Video className="h-5 w-5 text-primary" />,
    popular: false,
    link: "https://topmate.io/swapna_majji"
  },
  {
    title: "Quick Doubts regarding Placements/DSA/Dev",
    description: "Fast-track clarity on tech career doubts",
    price: "₹49",
    originalPrice: "₹59",
    duration: "Priority text response",
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    popular: true,
    link: "https://topmate.io/swapna_majji"
  },
  {
    title: "Resume review and Suggestions",
    description: "ATS-friendly tech resume review",
    price: "₹99",
    originalPrice: "₹119",
    duration: "60 mins",
    icon: <FileText className="h-5 w-5 text-primary" />,
    popular: false,
    link: "https://topmate.io/swapna_majji"
  },
  {
    title: "LinkedIn Growth & Personal Branding Session",
    description: "I'll guide you to build a strong LinkedIn presence",
    price: "₹149",
    originalPrice: "₹199",
    duration: "60 mins",
    icon: <UserPlus className="h-5 w-5 text-primary" />,
    popular: true,
    link: "https://topmate.io/swapna_majji"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work With <span className="text-primary">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto"
        >
          Whether you're a student looking to crack your dream job or a founder trying to find your voice, I'm here to help.
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.a 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}
              whileHover={{ y: -5, scale: 1.02 }}
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 block group bg-card transition-shadow hover:shadow-[0_10px_30px_rgba(var(--primary),0.15)]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  {service.icon}
                  <span>{service.duration}</span>
                </div>
                {service.popular && (
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {service.originalPrice}
                    </span>
                  )}
                </div>
                <div className="p-2 rounded-full bg-background border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
