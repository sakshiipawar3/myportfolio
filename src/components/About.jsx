import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 text-white"
    >
      {/* Unique Animated Background for About Section */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 animate-gradient-x bg-[length:200%_200%] z-0 opacity-90"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-white inline-block">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mt-4">
          Hello! I'm <strong>Pawar Sakshi</strong>, a passionate front-end developer with a strong foundation in HTML, CSS, and JavaScript.
          I specialize in building responsive and engaging web applications using modern tools like <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I'm deeply interested in crafting seamless user interfaces, enhancing user experience, and keeping up with the latest front-end trends.
          I aim to contribute to a dynamic and collaborative web development team that values clean code and innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
