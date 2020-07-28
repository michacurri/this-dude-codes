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
          Hard-working, honest, motivated and experienced. Now in my
          mid-thirties, with career highlights in B2B sales; client management;
          entrepreneurship; business operations; and retail operations, I am
          adding Front-End Web-Development to my quiver.
        </p>
        <p>
          I recently graduated Juno College's (formerly HackerYou) WebDev
          Bootcamp (Cohort 27, Spring 2020), and will be attending their
          Full-Stack Masterclass in the Fall of 2020, learning back-end
          foundational concepts. Basically, I am serious about this field and am
          pushing my limits to be as good as I can be.
        </p>
        <p>
          I am currently seeking a full-time Junior Developer role in the
          Toronto area; if I seem like the kind of person you want to meet for
          coffee over a zoom-chat, lets get in touch.
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
              href="./about/currieMichael_resume.pdf"
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
