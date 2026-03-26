import { motion } from "framer-motion";
import { Shield, Bug, Link2 } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Malware Detection Framework",
    tag: "Explainable AI",
    description: "Developed an explainable AI-based framework for malware detection, leveraging interpretable models to enhance transparency in cybersecurity threat analysis.",
    techs: ["Python", "XAI", "Scikit-learn"],
  },
  {
    icon: Bug,
    title: "Cyber Attack Classification",
    tag: "Machine Learning",
    description: "Built a machine learning pipeline to classify various cyber attack types with high accuracy using feature engineering and ensemble methods.",
    techs: ["Python", "ML", "Pandas"],
  },
  {
    icon: Link2,
    title: "URL Detection System",
    tag: "Ongoing Research",
    description: "Designing a machine learning model to detect malicious URLs by analyzing lexical features, host-based attributes, and content patterns.",
    techs: ["NLP", "Deep Learning", "TF-IDF"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects & <span className="text-gradient">Research</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:glow-border group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <project.icon size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-primary/30 text-primary">
                  {project.tag}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
