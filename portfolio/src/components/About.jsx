function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Hello, I'm <span>Chaitanya</span></h1>
        <h2>Frontend Developer</h2>
        <p>
          I am a Computer Science Engineering student passionate about
          web development, programming and creating attractive websites.
        </p>
        <a href="#contact" className="btn">Contact Me</a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
        alt="Profile"
      />
    </section>
  );
}

export default About;