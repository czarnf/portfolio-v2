const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">About Me</h2>
        <div className="space-y-6">
          <p className="text-secondary text-lg">
            With over 5 years of experience in digital design and development, I specialize in creating user-centered solutions that combine aesthetic appeal with functional excellence.
          </p>
          <p className="text-secondary text-lg">
            My approach integrates strategic thinking with creative execution, ensuring that every project not only looks great but also delivers meaningful results for clients and users alike.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Full Stack Development",
                "IT Project Management",
                "System Architecture",
                "API Development",
                "Database Design",
                "Security Implementation",
                "Performance Optimization",
                "Cloud Infrastructure"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-secondary text-sm hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;