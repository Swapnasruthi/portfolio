import { ArrowRight, Video, MessageSquare, FileText, UserPlus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "1:1 FREE 30-Minute Discovery Call",
    description: "Free strategy call for placements & DSA — no strings attached",
    price: "FREE",
    duration: "30 mins",
    icon: <Video className="h-5 w-5" />,
    popular: false,
    link: "https://topmate.io/swapna_majji",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    title: "Quick Doubts regarding Placements/DSA/Dev",
    description: "Fast-track clarity on tech career doubts via priority text",
    price: "₹49",
    originalPrice: "₹59",
    duration: "Priority text response",
    icon: <MessageSquare className="h-5 w-5" />,
    popular: true,
    link: "https://topmate.io/swapna_majji",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
  },
  {
    title: "Resume Review and Suggestions",
    description: "ATS-friendly tech resume review with actionable feedback",
    price: "₹99",
    originalPrice: "₹119",
    duration: "60 mins",
    icon: <FileText className="h-5 w-5" />,
    popular: false,
    link: "https://topmate.io/swapna_majji",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    title: "LinkedIn Growth & Personal Branding Session",
    description: "Build a strong LinkedIn presence that attracts opportunities",
    price: "₹149",
    originalPrice: "₹199",
    duration: "60 mins",
    icon: <UserPlus className="h-5 w-5" />,
    popular: true,
    link: "https://topmate.io/swapna_majji",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-4 relative">
      {/* Section divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Book a session
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work With <span className="text-gradient-animated">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Whether you're a student looking to crack your dream job or a founder trying to find your voice, I'm here to help.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service, index) => (
            <motion.a 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 block rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${service.iconBg} ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{service.duration}</span>
                  </div>
                  {service.popular && (
                    <span className="bg-primary/15 text-primary text-[11px] px-3 py-1 rounded-full font-semibold border border-primary/20">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-left">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 text-left leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {service.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="p-2.5 rounded-full bg-card border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
