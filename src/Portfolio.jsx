import React, { useState, useEffect } from "react";
import Pic from "./assets/pic.jpg";
import Resume from "./assets/Resume.pdf";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Server,
  Database,
  Settings,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "Express.js", "Python"],
    Databases: ["MySQL", "MongoDB", "SQL"],
    Tools: ["Git", "GitHub", "Firebase", "VS Code", "Figma", "Canva"],
    Other: ["C", "C++", "Java", "Cloud Computing", "AI Basics", "NLP"],
  };

  const projects = [
    {
      title: "AI-Powered Skill & Placement Tracker",
      subtitle: "AI-SIMULATE",
      description:
        "AI-based web application helping students improve employability with resume analysis and skill recommendations. Includes dashboard for placement officers.",
      tech: ["React", "AI", "Firebase"],
      role: "Full Stack Developer",
      github: "https://github.com/Pardeep-Kumar-Singh/AI_SIMULATE",
      live: "https://github.com/Pardeep-Kumar-Singh/AI_SIMULATE",
    },
    {
      title: "AgriNexus",
      subtitle: "Crop Disease Detection",
      description:
        "Image-based plant disease detection system providing preventive advice for farmers. Award-winning hackathon project.",
      tech: ["Python", "Machine Learning", "React"],
      role: "Lead Developer",
      github: "#",
      live: "#",
    },
    {
      title: "Tandoori Flame",
      subtitle: "Restaurant Website",
      description:
        "Responsive restaurant website that improved online presence and user engagement with modern UI/UX.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      role: "Frontend Developer",
      github: "https://github.com/Pardeep-Kumar-Singh/restaurant",
      live: "https://pardeep-kumar-singh.github.io/restaurant/",
    },
    {
      title: "Student Registration System",
      subtitle: "Python ERP",
      description:
        "Multi-user registration system with fast and efficient data handling for educational institutions.",
      tech: ["Python", "MySQL", "Flask"],
      role: "Backend Developer",
      github: "https://github.com/Pardeep-Kumar-Singh/SRF",
      live: "https://github.com/Pardeep-Kumar-Singh/SRF",
    },
  ];

  const experience = [
    {
      title: "Web Developer",
      company: "WebUnitech",
      location: "Sonipat",
      period: "2023 - 2024",
      points: [
        "Built dynamic user interfaces with React.js",
        "Integrated RESTful APIs for seamless data flow",
        "Worked with Firebase for real-time database solutions",
      ],
    },
    {
      title: "Cloud Engineer",
      company: "Edunet Foundation (AICTE)",
      location: "Remote",
      period: "2024",
      points: [
        "Hands-on experience with IBM Cloud & SkillsBuild",
        "Worked on AI, NLP, and data analytics projects",
        "Completed cloud computing certifications",
      ],
    },
  ];

  const achievements = [
    { title: "2nd Position", event: "CodeXccelerate Hackathon", icon: "🥈" },
    {
      title: "3rd Position",
      event: "Vigyanoday Innovation Showcase",
      icon: "🥉",
    },
    { title: "National Participant", event: "Multiple Hackathons", icon: "🏆" },
  ];

  const certifications = [
    "Generative AI",
    "Cloud Computing",
    "HTML, CSS, and Javascript for Web Developers",
    "NOCN Level 5 International Diploma ",
    "Responsive Web Design",
    "JavaScript Programming",
    "Cyber Security Essentials",
    "Introduction to Linux",
    "WordPress Essential Training",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "achievements",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-cyan-400">
              Pardeep Kumar Singh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Achievements",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Achievements",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pardeep Kumar Singh
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
              Web Developer | React & AI Enthusiast
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-4">
              Computer Science Engineer
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            I design and build scalable, user-centric web applications that turn
            ideas into impactful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <a href={Resume} download target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                I am an innovative and results-driven Computer Science
                Engineering student with hands-on experience in building
                high-performance web applications. I specialize in React.js,
                JavaScript, and modern UI frameworks, with growing expertise in
                AI and cloud technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I enjoy solving real-world problems through clean, scalable code
                and intuitive user experiences. I am a fast learner,
                collaborative team player, and continuously strive for
                excellence in every project I take on.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Hackathons
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Tech Stack
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={Pic}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-800 p-6 rounded-lg hover:border-cyan-400 border-2 border-transparent transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category === "Frontend" && (
                    <Code className="text-cyan-400" size={24} />
                  )}
                  {category === "Backend" && (
                    <Server className="text-cyan-400" size={24} />
                  )}
                  {category === "Databases" && (
                    <Database className="text-cyan-400" size={24} />
                  )}
                  {category === "Tools" && (
                    <Settings className="text-cyan-400" size={24} />
                  )}
                  {category === "Other" && (
                    <ChevronRight className="text-cyan-400" size={24} />
                  )}
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-900 text-cyan-400 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-cyan-400"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    Role: {project.role}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-400"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <ChevronRight
                        className="text-cyan-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-cyan-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold">
                  B.Tech - Computer Science Engineering
                </h4>
                <p className="text-sm text-gray-400">Current</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold">Diploma in Computer Engineering</h4>
                <p className="text-sm text-cyan-400">IT & Data Science</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold">Python Developer Training</h4>
                <p className="text-sm text-gray-400">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Achievements & <span className="text-cyan-400">Certifications</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center hover:border-cyan-400 border-2 border-transparent transition-all"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.event}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gray-800 rounded-lg border border-cyan-400 flex items-center gap-2"
                >
                  <Award className="text-cyan-400" size={20} />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="text-cyan-400" size={20} />
                  sspardeepsingh921@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="text-cyan-400" size={20} />
                  +91 7357287394
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-cyan-400" size={20} />
                  Sonipat, Haryana, India
                </div>
                <a
                  href="https://github.com/Pardeep-Kumar-Singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="text-cyan-400" size={20} />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/pardeep-kumar-singh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="text-cyan-400" size={20} />
                  Linkedln Profile
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none text-sm resize-none"
                ></textarea>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Message functionality coming soon!");
                  }}
                  className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© 2025 Pardeep Kumar Singh. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
