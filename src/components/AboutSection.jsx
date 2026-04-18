import { Brain, Briefcase, User, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "700+", label: "DSA Problems", icon: <Brain className="h-4 w-4" /> },
  { value: "300K+", label: "Impressions", icon: <TrendingUp className="h-4 w-4" /> },
  { value: "50+", label: "Students Mentored", icon: <User className="h-4 w-4" /> },
];

const cards = [
  {
    icon: <User className="h-6 w-6 text-primary" />,
    title: "Content Creation",
    description: "Generated 300K+ impressions and built a powerful personal brand sharing unfiltered reality and life lessons.",
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Problem Solving",
    description: "Solved 700+ data structures and algorithms problems. Using my experience to mentor students on DSA and interviews.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Ghostwriting",
    description: "Helping founders find their voice and convert clarity into impact with no corporate fluff.",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient-animated">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The story behind the content, the code, and the hustle.
          </p>
        </motion.div>

        {/* Top section: Image + Bio side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow ring behind image */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="/favicon.jpg"
                  alt="Swapna Majji"
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Decorative floating elements around image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 p-2.5 rounded-xl bg-card border border-border/50 shadow-lg"
              >
                <span className="text-lg">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 p-2.5 rounded-xl bg-card border border-border/50 shadow-lg"
              >
                <span className="text-lg">✍️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-5 p-2.5 rounded-xl bg-card border border-border/50 shadow-lg"
              >
                <span className="text-lg">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Visibility &gt; Applications.
              <br />
              <span className="text-primary">Story &gt; Status.</span>
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For students:</strong> I spent months getting rejected while everyone posted "Placed 🎉". 
                Then one LinkedIn post changed everything — a company found me, not my resume. 
                Now I share the DSA roadmaps, interview strategies, and mental health reality checks I wish someone handed me.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For founders:</strong> I know what it's like to have something worth saying but no idea how to say it. 
                I ghostwrite posts that sound like you, not a marketing bot. No corporate fluff. Just clarity that converts.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                  <div className="text-xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#services" className="cosmic-button text-center">
                Get Mentored
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300 font-semibold text-center"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: What I do cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.15)" }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  {card.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-1">{card.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
