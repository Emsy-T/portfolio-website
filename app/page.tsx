'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Github,
  Instagram,
  Linkedin,
  Download,
  ChevronDown,
  ChevronUp,
  Heart,
  ThumbsDown,
  Sparkles,
  Play,
  ExternalLink,
  Mail,
  Menu,
} from 'lucide-react';
import { X as Twitter } from 'lucide-react'; // Import Twitter (X) icon with alias
import Link from 'next/link';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trophyShelfPage, setTrophyShelfPage] = useState(0);
  const TROPHY_SHELVES_PER_PAGE = 2;
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  const skills = [
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-600' },
    { name: 'C++', color: 'bg-purple-500' },
    { name: 'Flutter', color: 'bg-blue-400' },
    { name: 'Figma', color: 'bg-pink-500' },
  ];

  const projects = [
    {
      title: 'Gradebook App',
      description: 'A simple gradebook application for tracking student grades',
      tech: 'HTML, CSS, JavaScript',
      image: '/placeholder.svg?height=200&width=300',
      link: 'https://github.com/emsy-T/gradebook-app',
    },
    {
      title: 'Project Two',
      description: 'Mobile application with cross-platform compatibility',
      tech: 'Flutter, Firebase, Dart',
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
  ];

  const trophies = [
    [
      {
        name: '2024 Technovation Semifinalist',
        image: '/2024-semifinalist-technovation.jpeg?height=150&width=200',
      },
      {
        name: '2023 Technovation Quarterfinalist',
        image: '/2023-quarterfinalist-technovation.jpeg?height=150&width=200',
      },
    ],
    [
      {
        name: 'Microsoft Office Specialist (Word 2016)',
        image: '/MOS Office Word 2016 Certificate.jpeg?height=150&width=200',
      },
      {
        name: 'Project Management',
        image:
          '/Great Learning Project Management Certificate.jpeg?height=150&width=200',
      },
    ],
    [
      {
        name: 'Autodesk Certified Professional (AutoCAD)',
        image: '/ACP AutoCAD Certificate.jpeg?height=150&width=200',
      },
      {
        name: 'DELF A1',
        image: '/DELF A1 Certificate.jpeg?height=150&width=200',
      },
    ],
  ];

  const likes = [
    'Building solutions to personal and global problems',
    'Learning new things on various topics from tech to business',
    'Exploring my other passions like music and design',
    'Reading books',
    'Watching YouTube videos',
    'Collaborating with people on various projects',
    'Playing games',
    'Listening to music',
  ];

  const dislikes = [
    'Poor communication',
    'Rushed deadlines without proper planning',
    'Disorganized environments',
    'Ignoring user feedback',
    'Being bored or idle',
    'Practices and systems that promote injustice, unfairness, and inequality',
    'Wasting time and resources',
  ];

  const dreams = [
    'Build successful businesses across industries',
    'Contribute to the global shift to sustainable living',
    'Become a strong voice for youths across the world',
    'Build solutions that impact millions of people',
    'Share my story and empower others',
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollTrophyShelf = (
    direction: 'up' | 'down',
    e?: React.MouseEvent
  ) => {
    if (e) {
      e.preventDefault();
      e.currentTarget.blur();
    }
    if (
      direction === 'down' &&
      trophyShelfPage < trophies.length - TROPHY_SHELVES_PER_PAGE
    ) {
      setTrophyShelfPage((prev) => prev + TROPHY_SHELVES_PER_PAGE);
    } else if (direction === 'up' && trophyShelfPage > 0) {
      setTrophyShelfPage((prev) => prev - TROPHY_SHELVES_PER_PAGE);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='font-bold text-xl text-slate-800'
            >
              Imoleayo
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <button
                onClick={() => scrollToSection('about')}
                className='text-slate-600 hover:text-violet-600 transition-colors font-medium'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className='text-slate-600 hover:text-violet-600 transition-colors font-medium'
              >
                Projects
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className='bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className='h-6 w-6 text-slate-600' />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className='md:hidden py-4 border-t border-slate-200'
            >
              <div className='flex flex-col space-y-4'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='text-slate-600 hover:text-violet-600 transition-colors font-medium text-left'
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className='text-slate-600 hover:text-violet-600 transition-colors font-medium text-left'
                >
                  Projects
                </button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className='bg-violet-600 hover:bg-violet-700 text-white w-fit px-6 py-2 rounded-full font-medium'
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-24 pb-10 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.div
            style={{ y: heroY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight'>
              Hi, I'm{' '}
              <span className='bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent'>
                Imoleayo Olunde
              </span>
            </h1>
            <p className='text-xl sm:text-2xl text-slate-600 mb-4 font-light'>
              Student by day | Builder by night
            </p>
            <p className='text-lg text-slate-500 mb-12 font-medium'>
              I Never Stop Learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center'>
              Get To Know Me
            </h2>

            {/* Video Section */}
            <div className='mb-16'>
              <div className='relative bg-slate-200 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto aspect-video'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Button className='bg-violet-600 hover:bg-violet-700 rounded-full p-4 shadow-lg'>
                    <Play className='h-8 w-8 text-white ml-1' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Backstory */}
            <div className='mb-16'>
              <h3 className='text-2xl font-semibold text-slate-800 mb-6'>
                Here's my backstory...
              </h3>
              <Card className='bg-white shadow-lg border-0'>
                <CardContent className='p-8'>
                  <p className='text-slate-600 leading-relaxed text-lg'>
                    When I was 5, I got my first laptop. At age 8, I started
                    learning how to develop apps and websites. And by the time I
                    was 15, I got into university to study Software Engineering.
                    I’ve followed a rather unusual path to get to where I am
                    now. I skipped grades, did a bit of home-schooling, and got
                    exposed to a lot of trainings and resources online. My
                    parents went all out to make sure that I explored my passion
                    for technology and along the way I picked up new passions
                    like Music, Graphic Design, Writing, and even 3D Animation.
                    Now, my mission is to develop solutions to all sorts of
                    problems; small and big, and empower youths across the world
                    with my story, showing them that nothing is impossible when
                    they set their minds to it.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className='mb-16'>
              <h3 className='text-2xl font-semibold text-slate-800 mb-8'>
                Check out my skills
              </h3>
              <div className='flex flex-wrap gap-4 justify-center'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      className={`${skill.color} text-white px-4 py-2 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Buttons */}
            <div className='text-center'>
              <p className='text-xl text-slate-600 mb-8'>
                For those who care, here are my...
              </p>
              <div className='flex flex-wrap gap-4 justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'>
                      <Heart className='h-5 w-5 mr-2' />
                      Likes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-md'>
                    <DialogHeader>
                      <DialogTitle className='text-green-600'>
                        Things I Like
                      </DialogTitle>
                    </DialogHeader>
                    <ul className='space-y-2'>
                      {likes.map((like, index) => (
                        <li
                          key={index}
                          className='flex items-center text-slate-600'
                        >
                          <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
                          {like}
                        </li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'>
                      <ThumbsDown className='h-5 w-5 mr-2' />
                      Dislikes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-md'>
                    <DialogHeader>
                      <DialogTitle className='text-red-600'>
                        Things I Dislike
                      </DialogTitle>
                    </DialogHeader>
                    <ul className='space-y-2'>
                      {dislikes.map((dislike, index) => (
                        <li
                          key={index}
                          className='flex items-center text-slate-600'
                        >
                          <span className='w-2 h-2 bg-red-500 rounded-full mr-3'></span>
                          {dislike}
                        </li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'>
                      <Sparkles className='h-5 w-5 mr-2' />
                      Dreams
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-md'>
                    <DialogHeader>
                      <DialogTitle className='text-violet-600'>
                        My Dreams
                      </DialogTitle>
                    </DialogHeader>
                    <ul className='space-y-2'>
                      {dreams.map((dream, index) => (
                        <li
                          key={index}
                          className='flex items-center text-slate-600'
                        >
                          <span className='w-2 h-2 bg-violet-500 rounded-full mr-3'></span>
                          {dream}
                        </li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center'>
              My Project Showcase
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className='group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0'>
                    <div className='relative overflow-hidden'>
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-violet-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <div className='text-white text-center'>
                          <p className='font-medium mb-2'>Tech Stack:</p>
                          <p className='text-sm'>{project.tech}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className='p-6'>
                      <h3 className='text-xl font-semibold text-slate-800 mb-2'>
                        {project.title}
                      </h3>
                      <p className='text-slate-600 mb-4'>
                        {project.description}
                      </p>
                      <Button
                        asChild
                        className='bg-violet-600 hover:bg-violet-700 text-white text-sm'
                      >
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          tabIndex={-1}
                        >
                          View Project
                          <ExternalLink className='h-4 w-4 ml-2' />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='text-center'>
              <Link href='/projectspage'>
                <Button className='bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'>
                  See More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trophy Shelf Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center'>
              My Trophy Shelf
            </h2>

            <div className='relative max-w-4xl mx-auto'>
              {/* Up Arrow */}
              {trophyShelfPage > 0 && (
                <button
                  onClick={(e) => scrollTrophyShelf('up', e)}
                  className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all'
                  tabIndex={0}
                  type='button'
                >
                  <ChevronUp className='h-6 w-6 text-slate-600' />
                </button>
              )}

              {/* Trophy Shelf */}
              <div
                className='bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl p-8 shadow-xl overflow-hidden max-h-[600px] overflow-y-auto'
                style={{ scrollBehavior: 'auto' }} // disables smooth scroll for this container
              >
                {/* Only render 2 shelves at a time */}
                {trophies
                  .slice(
                    trophyShelfPage,
                    trophyShelfPage + TROPHY_SHELVES_PER_PAGE
                  )
                  .map((shelf, shelfIndex) => (
                    <div
                      key={trophyShelfPage + shelfIndex}
                      className='mb-8 last:mb-0'
                    >
                      <div className='bg-amber-800 h-4 rounded-lg mb-4 shadow-md'></div>
                      <div className='grid grid-cols-2 gap-8 px-4'>
                        {shelf.map((trophy, trophyIndex) => (
                          <motion.div
                            key={trophyIndex}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className='bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer'
                          >
                            <img
                              src={trophy.image || '/placeholder.svg'}
                              alt={trophy.name}
                              className='w-full h-32 object-cover rounded-lg'
                            />
                            <p className='text-center text-sm font-medium text-slate-700 mt-2'>
                              {trophy.name}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Down Arrow */}
              {trophyShelfPage < trophies.length - TROPHY_SHELVES_PER_PAGE && (
                <button
                  onClick={(e) => scrollTrophyShelf('down', e)}
                  className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all'
                  tabIndex={0}
                  type='button'
                >
                  <ChevronDown className='h-6 w-6 text-slate-600' />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-8'>
              Download my{' '}
              <span className='bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent'>
                RESUME
              </span>
            </h2>
            <a href='/MY RESUME.pdf' target='_blank' rel='noopener noreferrer'>
              <Button className='bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all'>
                <Download className='h-5 w-5 mr-2' />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center'>
              Contact Me
            </h2>

            <div className='max-w-2xl mx-auto'>
              <Card className='bg-white shadow-xl border-0'>
                <CardContent className='p-8'>
                  <form className='space-y-6'>
                    <div>
                      <Input
                        placeholder='Enter your email'
                        type='email'
                        className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all'
                      />
                    </div>
                    <div>
                      <Input
                        placeholder='Subject'
                        className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all'
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder='Message'
                        rows={5}
                        className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all resize-none'
                      />
                    </div>
                    <Button className='w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all'>
                      <Mail className='h-5 w-5 mr-2' />
                      Send Message
                    </Button>
                  </form>

                  {/* Social Links */}
                  <div className='flex justify-center space-x-6 mt-8 pt-8 border-t border-slate-200'>
                    {[
                      {
                        icon: Github,
                        href: 'https://github.com/emsy-T',
                        label: 'GitHub',
                      },
                      {
                        icon: Twitter, // Use the aliased Twitter (X) icon here
                        href: 'https://x.com/emma_olunde',
                        label: 'Twitter',
                      },
                      {
                        icon: Instagram,
                        href: 'https://www.instagram.com/imole_olunde/',
                        label: 'Instagram',
                      },
                      {
                        icon: Linkedin,
                        href: 'https://www.linkedin.com/in/imoleayo-olunde/',
                        label: 'LinkedIn',
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.1, y: -2 }}
                        className='p-3 bg-slate-100 hover:bg-violet-100 rounded-full transition-all group'
                        aria-label={social.label}
                      >
                        <social.icon className='h-6 w-6 text-slate-600 group-hover:text-violet-600 transition-colors' />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <p className='text-slate-300'>
                © {new Date().getFullYear()} Imoleayo Olunde. All rights
                reserved.
              </p>
            </div>
            <div className='flex space-x-8'>
              <button
                onClick={() => scrollToSection('about')}
                className='text-slate-300 hover:text-white transition-colors'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className='text-slate-300 hover:text-white transition-colors'
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='text-slate-300 hover:text-white transition-colors'
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
