import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Facebook, Send, CheckCircle } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:emonmehedihasan021@gmail.com", text: "emonmehedihasan021@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mehedihasanemon-cse/", text: "LinkedIn Profile" },
  { icon: Github, label: "GitHub", href: "https://github.com/mehedihasanemon", text: "GitHub Profile" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/mehedihasan.emon.12914", text: "Facebook Profile" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/emonmehedihasan021@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("idle");
      }
    } catch {
      // Fallback to mailto
      const mailtoLink = `mailto:emonmehedihasan021@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
      window.location.href = mailtoLink;
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, research collaborations, or opportunities. Feel free to reach out!
            </motion.p>
            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors"
                  >
                    <s.icon size={18} />
                  </motion.div>
                  <span className="text-sm">{s.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {["name", "email", "message"].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              >
                {field === "message" ? (
                  <textarea
                    placeholder="Your Message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(174_72%_52%/0.1)] transition-all duration-300 text-sm resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "email" ? "Your Email" : "Your Name"}
                    required
                    maxLength={field === "email" ? 255 : 100}
                    value={form[field as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(174_72%_52%/0.1)] transition-all duration-300 text-sm"
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all disabled:opacity-70"
            >
              {status === "sent" ? (
                <>
                  Message Sent!
                  <CheckCircle size={16} />
                </>
              ) : status === "sending" ? (
                <>
                  Sending...
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <Send size={16} />
                  </motion.div>
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
