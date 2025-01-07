import { NextResponse } from 'next/server';

interface Article {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  source: string;
}

interface Articles {
  [category: string]: Article[];
}

export async function GET() {
  const articles: Articles = {
    'Web Design': [
      {
        title: 'The Future of Responsive Design',
        url: 'https://example.com',
        date: '2025-01-07',
        excerpt: 'Exploring new paradigms in responsive design...',
        source: 'Smashing Magazine'
      }
    ],
    'Graphic Design': [
      {
        title: 'Color Trends for 2025',
        url: 'https://example.com',
        date: '2025-01-07',
        excerpt: 'Exploring the emerging color palettes...',
        source: 'Design Week'
      }
    ],
    'Typography': [],
    'UI/UX': [],
    'General': []
  };

  return NextResponse.json({ articles });
}
