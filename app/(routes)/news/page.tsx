"use client";

import React from 'react';
import CustomTableDetail from '../components/CustomTableDetail/CustomTableDetail';
import { newsService, News } from '@/app/services/newsService';
import Image from 'next/image';
import { ColumnDefinition } from '../components/CustomTableDetail/CustomTableDetail.types';
import CustomWidget from '../components/CustomWidget';
import { Newspaper } from 'lucide-react';

// Extendemos News para que cumpla con Record<string, unknown>
type NewsItem = News & Record<string, unknown>;

const getImageForOrigin = (origin: string): string => {
  const domainToImage: { [key: string]: string } = {
    'cnn.com': '/images/cnn.svg',
    'bbc.com': '/images/nbc.svg',
    'nytimes.com': '/images/newyorktimes.svg',
    // Agrega más mapeos según sea necesario
  };
  return domainToImage[origin] || '/images/default.svg';
};

const NewsPage: React.FC = () => {
  const [news, setNews] = React.useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const newsData = await newsService.getNews();
        setNews(newsData as NewsItem[]);
        setError(null);
      } catch (err) {
        setError('Error al cargar las noticias. Por favor, intente de nuevo más tarde.');
        console.error('Error fetching news:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const columns: ColumnDefinition<NewsItem>[] = [
    {
      key: 'origin',
      header: 'Origen',
      initialWidth: 48,
      render: (value) => (
        <div className="flex items-center justify-center w-12">
          <Image 
            src={getImageForOrigin(value as string)}
            alt="Origen" 
            width={24} 
            height={24} 
            className="rounded-full dark:invert dark:brightness-200 transition-all duration-200" 
          />
        </div>
      ),
    },
    {
      key: 'pubDate',
      header: 'Fecha y Hora',
      initialWidth: 160,
      render: (value) => {
        const date = new Date(value as string);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      },
    },
    {
      key: 'title',
      header: 'Título de noticia',
      initialWidth: 800,
    },
    {
      key: 'description',
      header: 'Descripción',
      isDetail: true,
      initialWidth: 600,
    },
  ];

  const handleRowClick = async (row: NewsItem) => {
    if (row.hasDescription && !row.description) {
      try {
        const newsWithDescription = await newsService.getDescriptionNews(row._id);
        if (newsWithDescription) {
          setNews(prevNews => prevNews.map(item => 
            item._id === newsWithDescription._id ? {...item, ...newsWithDescription} : item
          ));
        }
      } catch (err) {
        console.error('Error fetching news description:', err);
        // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-primary-dark">Noticias</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-200">
        <CustomWidget 
          content={
            isLoading ? (
              <p>Cargando noticias...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : news.length === 0 ? (
              <p>No hay noticias disponibles en este momento.</p>
            ) : (
              <CustomTableDetail<NewsItem>
                data={news}
                columns={columns}
                onRowClick={handleRowClick}
                className="text-gray-800 dark:text-gray-100"
              />
            )
          } 
          title="Noticias de Mercados" 
          icon={Newspaper} 
        />            
      </div>
    </div>
  );
};

export default NewsPage;