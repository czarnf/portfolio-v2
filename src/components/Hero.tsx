const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 animate-fadeIn">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Creative Developer & Designer
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-2xl">
            I craft beautiful and functional digital experiences, combining design and development to create impactful solutions.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;