import React from "react";

const About = () => {
  return (
    <main className="mainAbout">
      <section className="innerWrapper">
        <h2>
          thisDude is <span>Michael Currie</span>
        </h2>
        <p>Passionate about adventure, good design, and tacos.</p>
        <p>
          Hard-working, honest, motivated and experienced. With career
          highlights in B2B sales; client management; entrepreneurship; business
          operations; and retail operations, I am adding Web-Development to my
          quiver.
        </p>
        <p>
          A recent graduate of Juno College's Bootcamp (Cohort 27, Spring 2020),
          and Full-Stack Masterclass, I have gained the fundamentals of front
          and back-end development concepts using the latest web technologies.
        </p>
        <div className="contactContainer">
          <div className="contactSocialBox">
            <h5>Social</h5>
            <a
              href="https://www.linkedin.com/in/mkcurrie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
          </div>
          <div className="contactResumeBox">
            <h5>Resume</h5>
            <a
              href="../static/assets/resume/currieMichael_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find my Resume Here
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
