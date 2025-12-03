'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Instagram, Code, TrendingUp, Rocket, ExternalLink } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Building fast, scalable, and beautiful websites with Next.js and modern technologies"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Digital Strategy",
      description: "Creating digital experiences that get found, get clicked, and get results."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Full Digital Marketing",
      description: "Complete digital presence optimization from web development to search visibility"
    }
  ];

  const projects = [
    {
      title: "Booked & Brewed Coffee Shop",
      description: "Modern website design for a cozy coffee shop experience",
      images: [
        "/project-2-hero.png",
        "/project-2-services.png",
        "/project-2-about.png"
      ],
      instagramLink: "https://www.instagram.com/p/DRODG48iTvA/",
      layout: "triple"
    },
    {
      title: "Auto Detailing Website",
      description: "Professional website design for automotive detailing services",
      images: [
        "/project-3-hero.png",
        "/project-3-services.png",
        "/project-3-contact.png"
      ],
      instagramLink: "https://www.instagram.com/p/DRQCsiwEn-M/",
      layout: "triple"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff9e1f] rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#ff9e1f] rounded-full opacity-5 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d2d2d]/80 backdrop-blur-md border-b border-[#ff9e1f]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-heading tracking-wide">
            <span className="text-white">ERICK</span>
            <span className="text-[#ff9e1f]">.</span>
          </div>
          <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-[#ff9e1f] transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-[#ff9e1f] transition-colors duration-300">Services</a>
            <a href="#projects" className="hover:text-[#ff9e1f] transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-[#ff9e1f] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              {/* Mobile Profile Image - centered and positioned higher */}
              <div className="flex justify-center mb-8 lg:hidden">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff9e1f] to-[#ffa500] rounded-full opacity-20 blur-xl" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#ff9e1f]">
                    <img
                      src="/profile-img.jpg"
                      alt="Erick Zagal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading leading-none tracking-wider">
                  ERICK
                  <br />
                  <span className="text-[#ff9e1f]">ZAGAL</span>
                </h1>

                <div className="h-1 w-20 sm:w-24 bg-[#ff9e1f]" />

                <p className="text-2xl sm:text-3xl font-light text-gray-300">
                  Web Developer & Digital Marketer
                </p>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                  Helping businesses stand out online with websites that work as hard as you do.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <a href="#contact"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff9e1f] text-[#2d2d2d] font-bold text-center transition-all duration-300 active:scale-95 md:hover:bg-[#ffa500] md:hover:scale-105 shadow-lg md:hover:shadow-[#ff9e1f]/50">
                    Get In Touch
                  </a>
                  <a href="#projects"
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#ff9e1f] text-[#ff9e1f] font-bold text-center transition-all duration-300 active:scale-95 md:hover:bg-[#ff9e1f] md:hover:text-[#2d2d2d]">
                    View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Decorative Element */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-[500px] h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff9e1f] to-[#ffa500] rounded-full opacity-20 blur-2xl" />
                <div className="absolute inset-8 border-4 border-[#ff9e1f] rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-16 border-2 border-[#ff9e1f]/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-[#ff9e1f]">
                    <img
                      src="/profile-img.jpg"
                      alt="Erick Zagal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-4 tracking-wider">
              WHAT I <span className="text-[#ff9e1f]">DO</span>
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-[#ff9e1f] mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index}
                className="bg-[#1a1a1a] p-6 sm:p-8 border-2 border-[#ff9e1f]/20 transition-all duration-300 active:scale-95 md:hover:border-[#ff9e1f] md:hover:scale-105">
                <div className="text-[#ff9e1f] mb-4 sm:mb-6 transition-transform duration-300 md:group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors md:group-hover:text-[#ff9e1f]">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6 sm:mb-8 tracking-wider">
            LET'S GET <span className="text-[#ff9e1f]">YOU</span> NOTICED
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-[#ff9e1f] mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
            You provide amazing service, but potential customers might not know you exist yet. When they search online, big corporations and national chains often show up first, even though you're right in their neighborhood.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            With the right online presence, you can connect with local customers who need exactly what you offer. You've already done the hard part, building a great business. Now let's help people find it.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-4 tracking-wider">
              RECENT <span className="text-[#ff9e1f]">PROJECTS</span>
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-[#ff9e1f] mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-gray-300">
              Websites that drive results
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 transition-colors md:group-hover:text-[#ff9e1f]">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 lg:text-lg">{project.description}</p>
                </div>

                {project.layout === "single" ? (
                  // Single image layout
                  <div className="relative overflow-hidden border-2 border-[#ff9e1f]/20 transition-all duration-300 md:hover:border-[#ff9e1f]">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#ff9e1f] opacity-0 md:group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ) : (
                  // Triple image layout (website mockups)
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden border-2 border-[#ff9e1f]/20 transition-all duration-300 md:hover:border-[#ff9e1f]"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Screen ${imgIndex + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-500 md:hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#ff9e1f] opacity-0 md:hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 sm:mt-6 flex gap-4">
                  <a
                    href={project.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#ff9e1f] text-[#ff9e1f] text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 md:hover:bg-[#ff9e1f] md:hover:text-[#2d2d2d]"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    View on Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12 sm:mt-16">
            <a href="https://instagram.com/ezweb_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ff9e1f] text-[#2d2d2d] text-sm sm:text-base font-bold transition-all duration-300 active:scale-95 md:hover:bg-[#ffa500] md:hover:scale-105">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              See More Work on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-4 tracking-wider">
              LET'S <span className="text-[#ff9e1f]">GET IN TOUCH</span>
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-[#ff9e1f] mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-gray-300">
              Ready to connect with more customers?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <a href="mailto:jrzagal11@gmail.com"
              className="bg-[#2d2d2d] p-6 sm:p-8 border-2 border-[#ff9e1f]/20 transition-all duration-300 active:scale-95 md:hover:border-[#ff9e1f] md:hover:scale-105">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff9e1f] mb-3 sm:mb-4 transition-transform md:group-hover:scale-110" />
              <div className="text-xs sm:text-sm text-gray-400 mb-2">Email</div>
              <div className="text-sm sm:text-base font-semibold text-white break-all">jrzagal11@gmail.com</div>
            </a>

            <a href="tel:310-982-8464"
              className="bg-[#2d2d2d] p-6 sm:p-8 border-2 border-[#ff9e1f]/20 transition-all duration-300 active:scale-95 md:hover:border-[#ff9e1f] md:hover:scale-105">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff9e1f] mb-3 sm:mb-4 transition-transform md:group-hover:scale-110" />
              <div className="text-xs sm:text-sm text-gray-400 mb-2">Phone</div>
              <div className="text-sm sm:text-base font-semibold text-white">310-982-8464</div>
            </a>

            <a href="https://www.linkedin.com/in/erick-zagal-b41104223"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d2d] p-6 sm:p-8 border-2 border-[#ff9e1f]/20 transition-all duration-300 active:scale-95 md:hover:border-[#ff9e1f] md:hover:scale-105">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff9e1f] mb-3 sm:mb-4 transition-transform md:group-hover:scale-110" />
              <div className="text-xs sm:text-sm text-gray-400 mb-2">LinkedIn</div>
              <div className="text-sm sm:text-base font-semibold text-white">Erick Zagal</div>
            </a>

            <a href="https://instagram.com/ezweb_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d2d] p-6 sm:p-8 border-2 border-[#ff9e1f]/20 transition-all duration-300 active:scale-95 md:hover:border-[#ff9e1f] md:hover:scale-105">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff9e1f] mb-3 sm:mb-4 transition-transform md:group-hover:scale-110" />
              <div className="text-xs sm:text-sm text-gray-400 mb-2">Instagram</div>
              <div className="text-sm sm:text-base font-semibold text-white">@ezweb_dev</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ff9e1f]/20 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Erick Zagal. Crafted with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}