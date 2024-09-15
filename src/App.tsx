import React, { useState, useRef, useEffect } from 'react';
import { HamburgerMenuIcon, Cross1Icon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as HTMLElement).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Hardik Kolge</div>
            <div className="hidden md:flex space-x-4">
              <button onClick={() => scrollToSection(aboutRef)} className="text-gray-600 hover:text-gray-800">About</button>
              <button onClick={() => scrollToSection(skillsRef)} className="text-gray-600 hover:text-gray-800">Skills</button>
              <button onClick={() => scrollToSection(projectsRef)} className="text-gray-600 hover:text-gray-800">Projects</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-gray-600 hover:text-gray-800">Contact</button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <button onClick={() => scrollToSection(aboutRef)} className="block py-2 text-gray-600 hover:text-gray-800 w-full text-left">About</button>
              <button onClick={() => scrollToSection(skillsRef)} className="block py-2 text-gray-600 hover:text-gray-800 w-full text-left">Skills</button>
              <button onClick={() => scrollToSection(projectsRef)} className="block py-2 text-gray-600 hover:text-gray-800 w-full text-left">Projects</button>
              <button onClick={() => scrollToSection(contactRef)} className="block py-2 text-gray-600 hover:text-gray-800 w-full text-left">Contact</button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section id="hero" className="relative h-screen">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240731_155742_684-8iH83aRv2vLfsBS93Muhb2px7sFmu7.jpg"
            alt="Hardik Kolge in a scenic landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hardik Kolge</h1>
              <p className="text-xl md:text-2xl text-gray-200">Full Stack Web Developer</p>
            </div>
          </div>
        </section>

        <section ref={aboutRef} id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              I'm a passionate full stack web developer with expertise in both frontend and backend technologies. 
              I love creating responsive, user-friendly websites and robust server-side applications. 
              With a keen eye for design and a strong foundation in programming, I strive to deliver 
              high-quality, scalable web solutions.
            </p>
          </div>
        </section>

        <section ref={skillsRef} id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Git', 'RESTful APIs', 'GraphQL', 'Responsive Design'].map((skill) => (
                <div key={skill} className="bg-white rounded-lg shadow-md p-4 text-center">
                  <p className="text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={projectsRef} id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Chat Application', description: 'MERN stack chat app featuring real-time messaging and a dynamic interface. Built with MongoDB, Express, React, and Node.js for seamless communication.' },
                { title: 'Chess', description: 'Java-based chess game with a sleek interface and intelligent AI. Experience strategic gameplay and smooth graphics crafted in Java.' },
              ].map((project, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/ZUXXSU" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <GitHubLogoIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/hardik-kolge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <LinkedInLogoIcon className="w-6 h-6" />
              </a>
              <a href="mailto:hardik.kolge.it@gmail.com" className="text-gray-600 hover:text-gray-800">
                <EnvelopeClosedIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Hardik Kolge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;