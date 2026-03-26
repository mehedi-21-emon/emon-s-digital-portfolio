import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    company: "Innova Arc",
    description: "Performed data analysis using Python, built visualizations, and automated reporting pipelines to drive business decisions.",
  },
  {
    role: "Digital Marketing Executive",
    company: "Cyber Bit Byte",
    description: "Led digital marketing campaigns, optimized SEO strategies, and boosted audience engagement through targeted content.",
  },
  {
    role: "Outreach Navigator",
    company: "BASIS Student Forum",
    description: "Managed community engagement, coordinated outreach initiatives, and fostered collaboration among student tech communities.",
  },
  {
    role: "Local Lead Assistant",
    company: "NASA Space Apps Challenge",
    description: "Assisted in organizing the local hackathon, coordinated teams, and ensured smooth execution of the event.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="hidden md:flex shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary z-10">
                    <Briefcase size={16} />
                  </div>
                </div>
                <div className="card-gradient border border-border rounded-xl p-6 flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
