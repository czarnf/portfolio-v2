

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const validData = result.data;
      const { error } = await supabase
        .from("contact_submissions")
        .insert([{ name: validData.name, email: validData.email, message: validData.message }]);

      if (error) throw error;

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
                { icon: Mail, href: "mailto:your@email.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-accent transition-colors duration-200 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/90"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                required
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/90"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                maxLength={5000}
                required
                rows={4}
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/90"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
