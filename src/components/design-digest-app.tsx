"use client";

import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

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

export function DesignDigestApp() {
  const [articles, setArticles] = useState<Articles>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Design Weekly Digest</h1>
      <div className="grid gap-6">
        {Object.entries(articles).map(([category, items]: [string, Article[]]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid gap-4">
              {items.map((article, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-medium">
                    <a href={article.url} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {article.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
