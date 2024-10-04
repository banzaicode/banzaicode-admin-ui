export interface News {
  id: number;
  origin: string;
  title: string;
  date: string;
  time: string;
  hasDescription: boolean;
}

export interface NewsWithDescription extends News {
  description: string;
}

class NewsService {
  private news: News[] = [
    { id: 1, origin: '/images/cnn.svg', title: 'Noticia importante de CNN', date: '15-05-2023', time: '10:30', hasDescription: true },
    { id: 2, origin: '/images/nbc.svg', title: 'Última hora de BBC', date: '15-05-2023', time: '11:45', hasDescription: true },
    { id: 3, origin: '/images/newyorktimes.svg', title: 'Reportaje especial del New York Times', date: '15-05-2023', time: '14:20', hasDescription: true },
    { id: 4, origin: '/images/newyorktimes.svg', title: 'Reportaje especial del New York Times parte 2', date: '15-05-2023', time: '14:20', hasDescription: false },
    { id: 5, origin: '/images/nbc.svg', title: 'Última hora de BBC parte 2', date: '15-05-2023', time: '11:45', hasDescription: true },
  ];

  async getNews(): Promise<News[]> {
    // Simulando una llamada asíncrona a una base de datos
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.news), 500);
    });
  }

  async getDescriptionNews(id: number): Promise<NewsWithDescription | undefined> {
    // Simulando una llamada asíncrona para obtener la descripción
    return new Promise((resolve) => {
      setTimeout(() => {
        const newsItem = this.news.find(item => item.id === id);
        if (newsItem) {
          resolve({
            ...newsItem,
            description: `Esta es una descripción detallada de la noticia "${newsItem.title}".`
          });
        } else {
          resolve(undefined);
        }
      }, 300);
    });
  }
}

export const newsService = new NewsService();