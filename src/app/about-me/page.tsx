import { Metadata } from 'next';
import Resume from '../ui/resume';

export const metadata: Metadata = {
  title:'Meet Ashish Sharma',
  description: 'Ashish Sharma, an Innovation Experience Designer at EY, Gurgaon, India. From studying chartered accountancy to UX design, join Ashish on this exciting journey of bridging people and technology.',
}

export default function AboutMe() {
  return(
    <Resume/>
  )
}