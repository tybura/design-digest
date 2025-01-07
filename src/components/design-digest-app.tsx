import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET() {  // Remove the unused 'request' parameter
  const articles = {
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
