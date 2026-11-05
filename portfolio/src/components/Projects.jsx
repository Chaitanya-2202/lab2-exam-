function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500"
            alt="Portfolio project"
          />
          <h3>Portfolio Website</h3>
          <p>A personal website developed using HTML, CSS and React.</p>
        </div>

        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500"
            alt="Hospital project"
          />
          <h3>Hospital Management System</h3>
          <p>A web application to manage hospital information and appointments.</p>
        </div>

        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
            alt="Recipe project"
          />
          <h3>Recipe Application</h3>
          <p>A recipe application where users can explore and share recipes.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;