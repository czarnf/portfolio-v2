import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Oludamilare delivered beyond our expectations. His ability to translate complex requirements into elegant solutions is exceptional. The platform he built for Zinter has transformed our operations.",
    author: "Lars van der Berg",
    role: "CEO",
    company: "Zinter"
  },
  {
    quote: "Working with Damilare was a game-changer for our business. His understanding of both technical implementation and user experience meant we got a website that actually converts.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Artisan Collective"
  },
  {
    quote: "His attention to detail and commitment to clean, maintainable code sets him apart. Damilare doesn't just build features—he builds systems that scale.",
    author: "Marcus Johnson",
    role: "Tech Lead",
    company: "Bayside Consult"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--testimonial-bg))]"
      aria-label="Testimonials Section"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues who've experienced my approach to building software.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 relative"
              variants={cardVariants}
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
