import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const floatingBadges = [
  { text: "700+ DSA", x: "5%", y: "20%", delay: 0.8 },
  { text: "250K+ Impressions", x: "65%", y: "15%", delay: 1.0 },
  { text: "Off-Campus Placed", x: "70%", y: "70%", delay: 1.2 },
  { text: "Content Creator", x: "10%", y: "65%", delay: 1.4 },
];

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 50 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -30, 20, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, -10, 0],
            y: [0, 20, -15, 30, 0],
            scale: [1, 0.95, 1.1, 1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[120px]"
        />
      </div>

      {/* Floating badges - hidden on mobile */}
      <div className="hidden lg:block">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, duration: 0.6, type: "spring" }}
            className="absolute animate-badge-float"
            style={{ left: badge.x, top: badge.y, animationDelay: `${i * 0.5}s` }}
          >
            <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-lg text-sm font-medium text-foreground/80">
              <span className="text-primary mr-1">✦</span> {badge.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Content Creator • Mentor • Ghostwriter
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="text-gradient-animated">
              Swapna Majji
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Helping students crack their interviews, and helping founders find
            their voice. I build a personal brand that outlasts any job title.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-6 flex gap-4 justify-center flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="group px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-shadow flex items-center gap-2"
            >
              Work With Me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#resources"
              className="px-8 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
            >
              View Resources
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="pt-10 flex items-center justify-center gap-8 md:gap-12 flex-wrap"
          >
            {[
              { value: "700+", label: "Problems Solved" },
              { value: "250K+", label: "Impressions" },
              { value: "50+", label: "Students Mentored" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm text-muted-foreground mb-2 block">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};
