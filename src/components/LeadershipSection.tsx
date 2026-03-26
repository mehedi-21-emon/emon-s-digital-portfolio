import { motion } from "framer-motion";
import { Rocket, Flag, Calendar } from "lucide-react";

const items = [
  { icon: Rocket, title: "NASA Space Apps Volunteer", desc: "Volunteered at the NASA International Space Apps Challenge, supporting participants and ensuring event success." },
  { icon: Flag, title: "Campus Ambassador", desc: "Represented tech organizations on campus, promoting events and fostering student engagement in technology." },
  { icon: Calendar, title: "Event Organizer", desc: "Organized and coordinated multiple university-level tech events, workshops, and seminars." },
];

const LeadershipSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership & <span className="text-gradient">Volunteering</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
