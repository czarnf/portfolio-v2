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
    quote: "Emmanuel's ability to translate complex technical requirements into clear, actionable roadmaps was instrumental to our platform transformation. His strategic oversight and stakeholder management skills exceeded our expectations.",
    author: "Lars van der Berg",
    role: "CEO",
    company: "Zinter"
  },
  {
    quote: "Working with Emmanuel transformed our approach to digital strategy. His understanding of both business objectives and technical implementation meant we received guidance that actually delivered measurable results.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Artisan Collective"
  },
  {
    quote: "His commitment to governance and structured delivery sets him apart. Emmanuel doesn't just manage projects—he builds frameworks that enable sustainable success and team alignment.",
    author: "Marcus Johnson",
    role: "Director",
    company: "Bayside Consult"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--testimonial-bg))]"
      aria-label="Testimonials Section"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">References</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Professional Endorsements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues who've experienced my approach to 
            delivering strategic IT initiatives.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border p-6 relative"
              variants={cardVariants}
            >
              <Quote className="w-8 h-8 text-accent/15 absolute top-5 right-5" />
              
              <p className="text-foreground text-sm leading-relaxed mb-5 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
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