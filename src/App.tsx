import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Calendar, Users, Award, Code, Database, Server, GitBranch, Settings, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              WMA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Winfred Mawuli Agbotey
              </h1>
              <p className="text-2xl text-blue-600 mb-6">
                Backend Engineer | Salesforce Administrator
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Backend Engineer with 3+ years of experience specializing in designing and building scalable, 
                performant, and maintainable backend systems. Currently serving as an Instructor & Backend Engineer, 
                mentoring the next generation of developers while building enterprise solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get In Touch
                </a>
                <a href="#experience" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Experience
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Java & Spring Boot</span>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg text-center">
                    <Server className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Node.js & TypeScript</span>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Salesforce & Apex</span>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Backend Engineer with 3+ years of experience specializing in designing and building scalable, 
                performant, and maintainable backend systems. Proficient in Java (Spring Boot), Node.js, and TypeScript, 
                with hands-on expertise in microservices, cloud-native development, and backend architecture.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Successfully led and contributed to key projects such as an Assessment Platform, Event Management System, 
                and Mentorship Tracker. Certified Salesforce Administrator with experience in Apex development and system integration.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Ghana</span>
                <Mail className="w-5 h-5" />
                <span>winfredagbotey20@gmail.com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">11</div>
                <div className="text-gray-700">Trainees Mentored</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700">Code Reviews</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {/* Current Role */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Instructor & Backend Engineer</h3>
                  <p className="text-xl text-blue-600 mb-2">AmaliTech</p>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>May 2025 – Present</span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Current
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Managing and supporting 11 backend trainees through their learning journey, providing daily guidance, performance tracking, and one-on-one technical assistance.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Delivering structured backend engineering lectures covering Java, Spring Boot, REST APIs, Git, testing, and development best practices.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Designed and assessed 6+ real-world project-based tasks, simulating industry development environments.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mentored 5 high-potential trainees, achieving a 100% completion rate in core backend modules and personal code deliverables.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Facilitated weekly firechat sessions (12+ to date) on career growth, engineering culture, productivity tools, and industry standards.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Conducted over 50+ personalized code reviews and milestone evaluations, leading to a 40% improvement in code quality and best practice adherence.
                </li>
              </ul>
            </div>

            {/* Backend & Salesforce Developer */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend & Salesforce Developer</h3>
                  <p className="text-xl text-blue-600 mb-2">AmaliTech</p>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>October 2023 – Present</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Designed and implemented Salesforce Apex web services to integrate with a CMS, resulting in enhanced system interoperability.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Built backend features using Spring Boot and Node.js to support scalable APIs and service communication.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Developed custom objects, flows, and triggers to automate business logic in Salesforce.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mentored five junior developers in both Java and Salesforce, accelerating team-wide learning and delivery.
                </li>
              </ul>
            </div>

            {/* Backend Engineer */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Engineer</h3>
                  <p className="text-xl text-blue-600 mb-2">AmaliTech</p>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>November 2022 – September 2023</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Engineered event-based backend APIs using Node.js and TypeScript for a location-driven event platform.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Implemented location-aware search features with Google Geo-location API, increasing relevant event discovery by 40%.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Refactored legacy backend code and enhanced logging systems, reducing error rates by 30% and improving maintainability.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Collaborated with internal teams to resolve 40+ backend tickets, supporting smoother QA and frontend integration across sprints.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Java</li>
                <li>Apex</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <Server className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frameworks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Spring Boot</li>
                <li>Node.js/Express</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Database className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Databases</h3>
              <ul className="space-y-2 text-gray-700">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>AWS DynamoDB</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Settings className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Platforms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Docker</li>
                <li>Jenkins</li>
                <li>Kubernetes</li>
                <li>Salesforce</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <Award className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>JUnit</li>
                <li>JMeter</li>
                <li>Mocha/Chai</li>
                <li>Supertest</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <GitBranch className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Version Control</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Jira</li>
                <li>Trello</li>
                <li>Confluence</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-pink-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Agile/Scrum</li>
                <li>Code Reviews</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Assessment Platform */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment Platform</h3>
              <p className="text-gray-700 mb-4">
                A cloud-based system for evaluating candidate performance with detailed analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Java and Spring Boot with microservices architecture</li>
                <li>• Kafka for event streaming, Redis for caching</li>
                <li>• DynamoDB for fast-access data storage</li>
                <li>• Real-time analytics and performance scoring</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Java</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Spring Boot</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Kafka</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Redis</span>
              </div>
            </div>

            {/* Salesforce Integration Service */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Salesforce Integration Service</h3>
              <p className="text-gray-700 mb-4">
                A CMS integration built with Apex and Salesforce APIs to improve enterprise workflow efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Custom Apex REST classes for secure data exchange</li>
                <li>• Triggers and flows for real-time record sync</li>
                <li>• Optimized SOQL queries and platform caching</li>
                <li>• 90%+ test coverage with comprehensive test classes</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Apex</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Salesforce</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">REST API</span>
              </div>
            </div>

            {/* Event Management System */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Management System</h3>
              <p className="text-gray-700 mb-4">
                A platform for discovering and promoting events with real-time location updates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• RESTful APIs using Node.js and TypeScript</li>
                <li>• Google Maps API for location-based search</li>
                <li>• Firebase Cloud Messaging for push notifications</li>
                <li>• Real-time event updates and user interactions</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Google Maps</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Higher National Diploma</h3>
              <p className="text-blue-600 font-medium mb-2">Information Technology</p>
              <p className="text-gray-700 mb-2">Takoradi Technical University, Ghana</p>
              <p className="text-gray-600">2022</p>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Certified Salesforce Administrator</h4>
                <p className="text-gray-700 text-sm">Official Salesforce certification demonstrating expertise in administration and configuration</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Digital Innovation Programme</h4>
                <p className="text-gray-700 text-sm">Advanced program focusing on digital transformation and innovation strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Development & Contributions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instructor – GTP Backend Training Program</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Delivered backend and introductory Salesforce concepts to GTP trainees</li>
                <li>• Led practical labs and project assignments focused on backend architecture and CRM usage</li>
                <li>• Provided performance evaluations and mentorship on real-world engineering workflows</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">Java Accelerator Program</h4>
                <p className="text-gray-700">Served as Scrum Master and Team Lead</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">Technical Interviewer</h4>
                <p className="text-gray-700">Conducted backend and Salesforce evaluations for Junior Associates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-blue-100">Ready to discuss opportunities and collaborations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-700 p-8 rounded-lg">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:winfredagbotey20@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                winfredagbotey20@gmail.com
              </a>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+233554704302" className="text-blue-100 hover:text-white transition-colors">
                +233 554704302
              </a>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg">
              <Linkedin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/winfred-mawuli" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                linkedin.com/in/winfred-mawuli
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://winfred-mawuli.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
              Visit Portfolio Website →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Winfred Mawuli Agbotey. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Backend Engineer | Salesforce Administrator</p>
        </div>
      </footer>
    </div>
  );
}

export default App;