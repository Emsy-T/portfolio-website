'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Dummy projects data (replace with your real data or import)
const projects = [
  {
    title: 'Gradebook App',
    description: 'A simple gradebook application for tracking student grades',
    tech: 'HTML, CSS, JavaScript',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'Project Two',
    description: 'Mobile application with cross-platform compatibility',
    tech: 'Flutter, Firebase, Dart',
    image: '/placeholder.svg?height=200&width=300',
  },
  // ...add more projects here
];

export default function ProjectsPage() {
  const router = useRouter();

  // You can extract the header/footer into components for reuse if you want
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col'>
      {/* Header (copy from your home page) */}
      <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='font-bold text-xl text-slate-800'
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/')}
            >
              Imoleayo
            </motion.div>
            <div className='hidden md:flex items-center space-x-8'>
              <button
                onClick={() => router.push('/#about')}
                className='text-slate-600 hover:text-violet-600 transition-colors font-medium'
              >
                About
              </button>
              <button
                onClick={() => router.push('/projects')}
                className='text-violet-600 font-medium'
              >
                Projects
              </button>
              <Button
                onClick={() => router.push('/#contact')}
                className='bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='flex-1 pt-28 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl font-bold text-slate-800 mb-12 text-center'>
            All Projects
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
                    <p className='text-slate-600 mb-4'>{project.description}</p>
                    <Button className='bg-violet-600 hover:bg-violet-700 text-white text-sm'>
                      View Project
                      <ExternalLink className='h-4 w-4 ml-2' />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer (copy from your home page) */}
      <footer className='bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <p className='text-slate-300'>
                © 2024 Imoleayo Olunde. All rights reserved.
              </p>
            </div>
            <div className='flex space-x-8'>
              <button
                onClick={() => router.push('/#about')}
                className='text-slate-300 hover:text-white transition-colors'
              >
                About
              </button>
              <button
                onClick={() => router.push('/projects')}
                className='text-white transition-colors'
              >
                Projects
              </button>
              <button
                onClick={() => router.push('/#contact')}
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
