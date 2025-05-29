"use client";

import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useEffect, useRef, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import amazon from "@/public/amazon.png";
import oce from "@/public/oce.png";
import advanced from "@/public/advanced.png";
import mcdb from "@/public/mc.png";
import shop from "@/public/shop.png";
import coffe from "@/public/coffe.png";
import assembly from "@/public/Assembly.png";
import cv from "@/public/CV.png";
import tdl from "@/public/tdl.png";
import mohamed from "@/public/mohamed.jpg";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const { theme, setTheme } = useTheme();
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial mount animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const refs = [aboutRef, projectsRef, skillsRef, contactRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Amazon Clone",
      description:
        " fully responsive e-commerce application modeled after Amazon, offering product browsing, category filtering, user authentication, and cart management.",
      image: amazon,
      technologies: ["React", "TypeScript", "Redux Toolkit", "Firebase"],
      github: "https://github.com/MohamedHamdy210/amazon-clone",
      live: "https://amazon-clone-teal-ten-38.vercel.app/",
    },
    {
      title: "Online Code Editor",
      description:
        " React based online code editor that enables users to write, edit, and execute HTML, CSS, and JavaScript in real-time.",
      image: oce,
      technologies: ["React", "Material UI", "CodeMirror"],
      github: "https://github.com/MohamedHamdy210/RCE",
      live: "https://rce-tawny.vercel.app/",
    },
    {
      title: "Advanced dashboard",
      description:
        " Admin dashboard designed for data visualization and management, featuring charts, tables, and user management functionalities.",
      image: advanced,
      technologies: ["React", "Material UI", "Nivo Charts", "FullCalendar"],
      github: "https://github.com/MohamedHamdy210/Mui-dashboard",
      live: "https://mui-dashboard-nine.vercel.app/",
    },
    {
      title: "MCDB",
      description:
        " Movie browsing platform allows users to explore trending movies and view detailed information (ratings, release dates, overviews).",
      image: mcdb,
      technologies: ["React", "Framer motion", "Api"],
      github: "https://github.com/MohamedHamdy210/MC",
      live: "https://mc-eight-sand.vercel.app/",
    },
    {
      title: "The Shop",
      description:
        " Responsive E-commerce platform , featuring product listings, cart management, ",
      image: shop,
      technologies: ["React", "Api"],
      github: "https://github.com/MohamedHamdy210/The-Shop",
      live: "https://the-shop-mu.vercel.app/",
    },
    {
      title: "Coffee Shop",
      description:
        "Responsive coffee shop website providing a smooth and engaging user experience.",
      image: coffe,
      technologies: ["React", "Api"],
      github: "https://github.com/MohamedHamdy210/coffe-shop",
      live: "https://coffe-shop-lime-three.vercel.app",
    },
    {
      title: "Assembly: End-game",
      description:
        " Responsive and dynamic word guessing game designed to provide an engaging user experience with interactive UI and real-time feedback.",
      image: assembly,
      technologies: ["React"],
      github: "https://github.com/MohamedHamdy210/Assembly-EndGame",
      live: "https://assembly-end-game.vercel.app/",
    },
    {
      title: "CV Application",
      description:
        "Responsive web application enabling users to create, customize, and download professional formatted resumes.",
      image: cv,
      technologies: ["React"],
      github: "https://github.com/MohamedHamdy210/my-cv-application",
      live: "https://my-cv-application.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "Task management application allowing users to add, delete, and mark tasks as completed.",
      image: tdl,
      technologies: ["Js", "HTML", "CSS", "Webpack"],
      github: "https://github.com/MohamedHamdy210/To-Do-List/",
      live: "https://to-do-list-141y.vercel.app/",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "TypeScript",
    "JavaScript",
    "Framer Motion",
    "sass",
    "CSS",
    "HTML",
  ];
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              // size="icon"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
              className="hover:scale-105 transition-transform duration-200"
            >
              {theme === "light" ? (
                <Moon className="  h-6 w-6 " />
              ) : (
                <Sun className="h-6 w-6 " />
              )}
              <span className="sr-only">Toggle theme</span>
            </NavbarButton>
            <NavbarButton
              className="flex items-center"
              variant="primary"
              download
              href="/Mohamed-Hamdy-Front-End.pdf"
            >
              <Download className="mr-2 h-  4 w-4" />
              Resume
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <div className="flex items-center ">
              <NavbarButton
                variant="secondary"
                // size="icon"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
                className="hover:scale-105 transition-transform duration-200"
              >
                {theme === "light" ? (
                  <Moon className="  h-6 w-6 " />
                ) : (
                  <Sun className="h-6 w-6 " />
                )}
                <span className="sr-only">Toggle theme</span>
              </NavbarButton>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full flex items-center justify-center"
                download
                href="/Mohamed-Hamdy-Front-End.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Hero Section */}
      <section className="container flex min-h-[80vh] items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1
              className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
                Mohamed Hamdy
              </span>
            </h1>
            <p
              className={`mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Front-End Developer passionate about building modern, responsive,
              and user-focused web applications.
            </p>
          </div>
          <div
            className={`flex space-x-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="#projects">
              <Button
                size="lg"
                className="hover:scale-105 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
          <div
            className={`flex space-x-4 transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="https://github.com/MohamedHamdy210/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-hamdy-03796b1a2/"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"mailto:mohamed.hamdyy210@gmail.com"} target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`container py-12 transition-all duration-1000 ${
          visibleSections.has("about")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-muted-foreground">Get to know me better</p>
          </div>
          <div className="grid  gap-8 md:grid-cols-2">
            <div className=" max-sm:px-1 space-y-4 place-content-center">
              <p className="text-muted-foreground">
                I&apos;m a passionate Front-End Developer with a strong
                foundation in React.js, Redux Toolkit, Tailwind CSS, and modern
                JavaScript (ES6+). I&apos;ve built multiple projects including
                e-commerce platforms, admin dashboards, and interactive UIs that
                focus on performance, responsiveness, and user experience. I
                take pride in writing clean, reusable code and turning design
                concepts into fully functional, accessible web applications.
              </p>
              <p className="text-muted-foreground">
                Beyond coding, I enjoy solving real-world problems through
                thoughtful design and intuitive interfaces. I&apos;m constantly
                learning new tools and frameworks to sharpen my skills and stay
                current with modern development practices.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={mohamed}
                alt="Profile"
                width={350}
                // height={300}
                className="rounded-lg object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className={`container py-12 transition-all duration-1000 delay-200 ${
          visibleSections.has("projects")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground">Some of my recent work</p>
          </div>
          <div className="px-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has("projects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visibleSections.has("projects")
                    ? `100ms`
                    : "0ms",
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:scale-110 transition-transform"
                      >
                        <Link target="_blank" href={project.github}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:scale-110 transition-transform"
                      >
                        <Link target="_blank" href={project.live}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className={`container py-12 transition-all duration-1000 delay-300 ${
          visibleSections.has("skills")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-muted-foreground">
              Technologies I work with
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="default"
                  className={`px-3 py-1 text-sm hover:scale-110 transition-all duration-300 ${
                    visibleSections.has("skills")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visibleSections.has("skills")
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`container py-12 transition-all duration-1000 delay-400 ${
          visibleSections.has("contact")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let&apos;s work together on your next project
            </p>
          </div>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>mohamed.hamdyy210@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button
                    asChild
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    <Link href="mailto:mohamed.hamdyy210@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/mohamed-hamdy-03796b1a2/"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-2 py-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Mohamed Hamdy. All rights reserved.
          </p>
          <div className="flex space-x-4 max-sm:space-x-0">
            <Link href="https://github.com/MohamedHamdy210/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-hamdy-03796b1a2/"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:mohamed.hamdyy210@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
