import { motion } from "framer-motion";
import { Brain, Target, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & NLP", desc: "Deep expertise in machine learning and natural language processing" },
  { icon: Target, label: "Problem Solver", desc: "Research-driven approach to tackling complex challenges" },
  { icon: Lightbulb, label: "Innovator", desc: "Bridging technology with real-world business solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a recent BSc graduate in Computer Science & Engineering with a deep passion for
              Artificial Intelligence, Natural Language Processing, Data Analytics, and Prompt Engineering.
              My academic journey has equipped me with strong technical fundamentals and a research-driven mindset.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex, real-world problems through data-driven insights and innovative
              technology solutions. Whether it's building explainable AI systems, crafting impactful digital
              marketing strategies, or leading community initiatives—I bring dedication, curiosity, and a
              commitment to continuous learning.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="card-gradient border border-border rounded-lg p-5 flex items-start gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
