import { Brain, Briefcase, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Visibility &gt; Applications. Story &gt; Status.
            </h3>

            <p className="text-muted-foreground">
              <strong>For students:</strong> I spent months getting rejected while everyone posted "Placed 🎉". 
              Then one LinkedIn post changed everything — a company found me, not my resume. 
              Now I share the DSA roadmaps, interview strategies, and mental health reality checks I wish someone handed me.
            </p>

            <p className="text-muted-foreground">
              <strong>For founders:</strong> I know what it's like to have something worth saying but no idea how to say it. 
              I ghostwrite posts that sound like you, not a marketing bot. No corporate fluff. Just clarity that converts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#services" className="cosmic-button">
                Get Mentored
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
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
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="gradient-border p-6 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Content Creation</h4>
                  <p className="text-muted-foreground">
                    Generated 250K+ impressions and built a powerful personal brand sharing unfiltered reality and life lessons.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="gradient-border p-6 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Solved 700+ data structures and algorithms problems. Using my experience to mentor students on DSA and interviews.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="gradient-border p-6 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ghostwriting</h4>
                  <p className="text-muted-foreground">
                    Helping founders find their voice and convert clarity into impact with no corporate fluff.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
