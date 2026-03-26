import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/Mehedi.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(174, 72%, 52%) 1px, transparent 1px), linear-gradient(90deg, hsl(174, 72%, 52%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src={profilePhoto}
            alt="Mehedi Hasan Emon"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-lg shadow-primary/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Mehedi Hasan{" "}
          <span className="text-gradient">Emon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-3 font-mono"
        >
          Researcher · Data Scientist · Digital Marketer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base"
        >
          Passionate about AI, Data Science, and solving real-world problems through technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown size={18} />
          </a>
          <a
            href="/Mehedi_Hasan_Emon.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
