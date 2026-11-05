function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Java"];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skill-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;