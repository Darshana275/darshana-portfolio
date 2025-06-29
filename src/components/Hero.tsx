import { Mail, Phone, Github, Linkedin, Download, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Technical Skills', id: 'skills' },
    { label: 'Activities & Interests', id: 'activities' },
    { label: 'Get In Touch', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Darshana Punna
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Tech Icons */}

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        {/* Floating Tech Icons */}
<div className="absolute top-20 left-0 w-full h-full pointer-events-none z-0">
  {/* Top Left Corner */}
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    alt="TypeScript" className="w-10 h-10 absolute top-6 left-6 opacity-70 dark:invert animate-float-slow delay-[100ms]" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    alt="MongoDB" className="w-10 h-10 absolute top-16 left-20 opacity-70 dark:invert animate-float-slow delay-[400ms]" />

  {/* Other Random Icons */}
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    alt="NodeJS" className="w-10 h-10 absolute top-16 right-20 opacity-70 dark:invert animate-float-slow delay-100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    alt="Express" className="w-10 h-10 absolute top-25 left-1/4 opacity-70 dark:invert animate-float-slow delay-300" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    alt="React" className="w-10 h-10 absolute top-24 right-1/3 opacity-70 dark:invert animate-float-slow delay-500" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    alt="Docker" className="w-10 h-10 absolute top-1/2 left-8 opacity-70 dark:invert animate-float-slow delay-700" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    alt="Git" className="w-10 h-10 absolute top-1/2 right-10 opacity-70 dark:invert animate-float-slow delay-200" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    alt="Python" className="w-10 h-10 absolute top-[55%] left-1/3 opacity-70 dark:invert animate-float-slow delay-[600ms]" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    alt="JS" className="w-10 h-10 absolute top-[60%] right-1/4 opacity-70 dark:invert animate-float-slow delay-[300ms]" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    alt="HTML" className="w-10 h-10 absolute bottom-32 left-16 opacity-70 dark:invert animate-float-slow delay-400" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    alt="CSS" className="w-10 h-10 absolute bottom-28 right-16 opacity-70 dark:invert animate-float-slow delay-[800ms]" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    alt="Flask" className="w-10 h-10 absolute bottom-[10%] right-[30%] opacity-70 dark:invert animate-float-slow delay-[900ms]" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    alt="VS Code" className="w-10 h-10 absolute bottom-[15%] left-[25%] opacity-70 dark:invert animate-float-slow delay-[1000ms]" />
</div>

        <div className="container mx-auto px-6 text-center text-gray-900 dark:text-white relative z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Darshana Punna
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ML Engineer & Full Stack Developer
            </p>
            <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions in Machine Learning and Web Development
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-700 dark:text-gray-300">
              <a href="tel:+919063792858" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                +91 9063792858
              </a>
              <a href="mailto:spunna2705@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                spunna2705@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://www.linkedin.com/in/darshanapunna/" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-gray-900 dark:text-white" />
              </a>
              <a href="https://github.com/Darshana275" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-gray-900 dark:text-white" />
              </a>
            </div>

            {/* Resume CTA */}
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/drive/folders/1WSBt2JvWbiVeKbBMkIMEGH-V9DIB8QLS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-4 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Scroll Indicator (can keep or remove) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 dark:border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-700 dark:bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
