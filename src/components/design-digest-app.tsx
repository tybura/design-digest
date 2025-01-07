<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
=======
"use client";

import React, { useState, useEffect } from 'react';
>>>>>>> 9173108 (Add core app components)
import { Calendar, Eye, Type, Palette, Layout, Monitor } from 'lucide-react';

export function DesignDigestApp() {
  const [articles, setArticles] = useState<any>({});
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

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Design':
        return <Monitor className="h-4 w-4" />;
      case 'Graphic Design':
        return <Palette className="h-4 w-4" />;
      case 'Typography':
        return <Type className="h-4 w-4" />;
      case 'UI/UX':
        return <Layout className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };

  const allArticles = Object.entries(articles).flatMap(([category, items]: [string, any[]]) =>
    items.map(item => ({ ...item, category }))
  );

  return (
    <Card className="mx-auto max-w-6xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Design Weekly Digest</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 lg:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            {Object.keys(articles).map(category => (
              <TabsTrigger key={category} value={category}>
                <span className="hidden lg:inline">{category}</span>
                <span className="lg:hidden">{getCategoryIcon(category)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6">
              {allArticles.map((article: any, idx: number) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          </TabsContent>

          {Object.entries(articles).map(([category, items]: [string, any[]]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid gap-6">
                {items.map((article, idx) => (
                  <ArticleCard key={idx} article={article} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ArticleCard({ article }: { article: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              <a href={article.url} className="hover:text-blue-600 transition-colors">
                {article.title}
              </a>
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                {article.source}
              </Badge>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{article.excerpt}</p>
      </CardContent>
    </Card>
  );
}
=======
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Design Weekly Digest</h1>
      <div className="grid gap-6">
        {Object.entries(articles).map(([category, items]: [string, any[]]) => (
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
                 "use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Eye, Type, Palette, Layout, Monitor } from 'lucide-react';

export function DesignDigestApp() {
  const [articles, setArticles] = useState<any>({});
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
        {Object.entries(articles).map(([category, items]: [string, any[]]) => (
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
