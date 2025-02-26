import React from "react";
import "./About.css";
import { FaPaintBrush, FaUniversity, FaPalette} from "react-icons/fa"; 
import profilePic from "../Asset/liam2.jpeg"; // Ensure this image exists in the correct folder

const About = () => {
  return (
    <section  className="about-container" id="About">
      {/* Left Side - Image */}
      <div className="about-image">
        <img src={profilePic} alt="Liam - Oil Painting Artist" />
      </div>

      {/* Right Side - About Content */}
      <div className="about-content">
        <h2>About Liam</h2>
        <p>
          <FaPaintBrush className="icon" /> I am a dedicated <strong>student artist</strong> immersed in the 
          <strong> rich, textural world of oil painting</strong>. Currently pursuing my <strong>BFA in Studio Art</strong> 
          with a <strong>Painting emphasis</strong> at the <strong>University of Nebraska–Lincoln</strong>,  
          I channel my academic exploration into <strong>evocative, emotion-driven works on canvas</strong>.
        </p>

        <p>
          <FaUniversity className="icon" /> My coursework and mentorship have <strong>deepened my understanding</strong> of 
          oil’s <strong>versatility</strong>, from <strong>Renaissance glazing</strong> to 
          <strong> contemporary impasto techniques</strong>. With a <strong>passion for detail</strong>, I explore how 
          <strong> light, shadow, and texture</strong> interact in my compositions.
        </p>

        <p>
          <FaPalette className="icon" /> Today, I thrive in the <strong>interplay of color and emotion</strong>, using each 
          brushstroke to invite viewers into <strong>quiet introspection or bold connection</strong>. 
          My works aim to <strong>provoke thought, spark emotions, and tell stories</strong> that transcend language.
        </p>

        <p>
          Beyond my studio practice, I participate in <strong>art exhibitions, workshops, and collaborations</strong>, 
          continuously expanding my <strong>artistic vision and technical expertise</strong>. Every painting is a journey, 
          and I invite you to <strong>explore my world of art.</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
