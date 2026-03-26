import { motion } from "framer-motion";
import { Code, Database, Cpu, Megaphone, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["C", "C++", "Python"],
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    icon: Cpu,
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "BERT", "TF-IDF"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    skills: ["SEO", "Meta Ads", "Google Ads", "B2B Lead Gen"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Microsoft Office", "Data Visualization", "Git"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Teamwork", "Strategic Planning", "Community Mgmt"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
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

export default SkillsSection;
