import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Bangladesh University",
    detail: "Focused on AI, Machine Learning, and Data Science research.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science Background",
    detail: "Strong foundation in mathematics, physics, and analytical reasoning.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 flex items-start gap-5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{edu.degree}</h3>
                <p className="text-primary font-mono text-sm mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
