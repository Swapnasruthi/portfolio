import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Code2, Database, Layout, Terminal, Braces, BrainCircuit, PenTool, Video, Image, Bot, Workflow, Wrench
} from "lucide-react";

// Helper to get icon by name or category
const getSkillIcon = (name, category) => {
  if (name.includes("Writing") || name.includes("Strategy")) return <PenTool />;
  if (name.includes("Video") || name.includes("CapCut")) return <Video />;
  if (name.includes("Canva")) return <Image />;
  if (name.includes("Ai") || name.includes("Bot")) return <Bot />;
  if (name.includes("Automation")) return <Workflow />;
  
  switch(category) {
    case "frontend": return <Layout />;
    case "backend": return <Database />;
    case "languages": return <Code2 />;
    case "core": return <BrainCircuit />;
    case "tools": return <Wrench />;
    default: return <Terminal />;
  }
};

const skills = [
  // Content & AI
  { name: "Content Writing", category: "content" },
  { name: "Content Strategy", category: "content" },
  { name: "Video Editing", category: "content" },
  { name: "CapCut", category: "content" },
  { name: "Canva", category: "content" },
  { name: "Automations", category: "ai tools" },
  { name: "Ai Agents", category: "ai tools" },

  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

   // Languages
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "C", category: "languages" },

  //core concepts
  { name: "DSA", category: "core" },
  { name: "Design Patterns", category: "core" },
  { name: "OOPS", category: "core" },
  { name: "OS", category: "core" },
  { name: "DBMS", category: "core" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Compass", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["content", "ai tools", "languages", "core", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("content");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary"> Skills</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] transform scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105 transform border border-transparent hover:border-border"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Change key to activeCategory to remount and trigger animation on tab switch */}
        <motion.div 
          key={activeCategory}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              variants={item}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={key}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-colors duration-300 hover:bg-secondary/40 group shadow-sm hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] flex-1 min-h-[160px]"
            >
              <div className="p-4 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300 border border-border group-hover:border-primary/30 flex items-center justify-center">
                  <div className="[&>svg]:w-8 [&>svg]:h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {getSkillIcon(skill.name, skill.category)}
                  </div>
              </div>
              <h3 className="font-bold text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300"> 
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
