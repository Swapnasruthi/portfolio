import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Food Ordering App",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS", "Redux"],
    demoUrl: "https://food-ordeing-app.vercel.app/",
    githubUrl: "https://github.com/Swapnasruthi/Food_ordeing_App",
  },
  {
    id: 2,
    title: "DevTinder",
    description:
      "Interactive Platform for Developers.",
    image: "/projects/p2.png",
    tags: ["NodeJs","ReactJs","Express","Redux","Tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/Swapnasruthi/devTinder-frontend",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "Full-featured youtube clone with video streaming.",
    image: "/projects/p3.png",
    tags: ["React", "Tailwind", "vite", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Swapnasruthi/my_youtube",
  },
  {
    id: 4,
    title: "Desi Dost",
    description:
      "Hyper-Personalized, Regional AI Chatbot.",
    image: "/projects/p4.png",
    tags: ["React", "Tailwind", "GenKit", "Firebase"],
    demoUrl: "https://studio--bro-chat-xjfnq.us-central1.hosted.app/",
    githubUrl: "https://github.com/Swapnasruthi/Desi-Dost",
  },
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
      delay: i * 0.1,
    },
  }),
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-animated">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Links on hover */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-gray-900 text-xs font-semibold shadow-lg hover:bg-white transition-colors"
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-gray-900 text-xs font-semibold shadow-lg hover:bg-white transition-colors"
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/8 text-primary border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-1 text-left group-hover:text-primary transition-colors"> {project.title}</h3>
                <p className="text-sm text-muted-foreground text-left leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/Swapnasruthi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
