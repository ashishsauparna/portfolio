import { Metadata } from 'next';
import Books from '../ui/books';

export const metadata: Metadata = {
  title: 'My Reads',
  openGraph: {
      title: 'My Reads',
    },
  description: 'I find solace in self-help and fiction books. They offer insights, hope, and a broader perspective on life. These reads have inspired personal growth, and I hope they can do the same for you.',
}

export default function Home() {

  return (
    <Books/>
  )
}
