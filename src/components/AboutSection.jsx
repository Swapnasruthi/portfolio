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
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold leading-tight">
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
            <div className="grid grid-cols-3 gap-4 pt-4">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 gap-5"
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
      </div>
    </section>
  );
};
