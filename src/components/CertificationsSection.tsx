import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  "AI Prompt Engineer Level 1",
  "Microsoft 365 Copilot",
  "Cyber Security Career Launchpad",
];

const achievements = [
  "ICPC Regional Participation",
  "Conference Contributions in AI & Cybersecurity",
];

const CertificationsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
              <Award size={20} className="text-primary" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="card-gradient border border-border rounded-lg px-5 py-4 text-sm text-secondary-foreground hover:border-primary/30 transition-colors">
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
              <Trophy size={20} className="text-primary" /> Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((ach) => (
                <div key={ach} className="card-gradient border border-border rounded-lg px-5 py-4 text-sm text-secondary-foreground hover:border-primary/30 transition-colors">
                  {ach}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
