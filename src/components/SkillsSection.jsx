import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-0 left-0 right-0 section-divider" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient-animated">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tools and technologies I work with every day.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-5 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-semibold",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105"
                  : "bg-card text-foreground/70 hover:text-foreground border border-border/50 hover:border-primary/30 hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {filteredSkills.map((skill, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: key * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 10px 30px -5px rgba(139, 92, 246, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                key={key}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 group min-h-[160px]"
              >
                <div className="p-4 rounded-2xl bg-secondary/50 mb-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 border border-border/30 group-hover:border-primary/20">
                  <div className="[&>svg]:w-7 [&>svg]:h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {getSkillIcon(skill.name, skill.category)}
                  </div>
                </div>
                <h3 className="font-bold text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300"> 
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
