import NavBar from '../ui/navbar';
import Footer from '../ui/footer';
import ProjectsData from '../ui/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Ashish Sharma',
  openGraph: {
      title: 'Projects | Ashish Sharma',
    },
  description: 'Explore captivating UX case studies, and innovative Figma plugins in the portfolio of Ashish Sharma. Discover thought processes, design methodologies, and user-centric solutions that exemplify expertise in creating intuitive digital experiences.',
}

export default function Projects() {

    return (
        <main className="flex min-h-screen flex-col items-center"> 
          <NavBar/>
          <div className='items-left mt-16'>
            <h1 className='md:w-5/6'>My Projects</h1>
            <ProjectsData/>
          </div>
          <Footer/>
        </main>
      )
}