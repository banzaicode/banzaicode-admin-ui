import axios from 'axios';

export interface News {
  _id: string;
  title: string;
  link: string;
  datetime: string;
  description?: string;
  origin: string;
  hasDescription: boolean;
}

interface ApiNewsItem {
  _id: string;
  title: string;
  link: string;
  datetime: string;
  description?: string;
}

class NewsService {
  private apiUrl = '/api/news';

  private extractDomain(url: string): string {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch (error) {
      console.error('Error extracting domain:', error);
      return 'unknown';
    }
  }

  async getNews(): Promise<News[]> {
    try {
      const response = await axios.get<ApiNewsItem[]>(this.apiUrl);
      return response.data.map((item: ApiNewsItem) => ({
        _id: item._id,
        title: item.title,
        link: item.link,
        datetime: item.datetime,
        description: item.description,
        origin: this.extractDomain(item.link),
        hasDescription: !!item.description
      }));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching news:', error.message);
        throw new Error(`Failed to fetch news: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred while fetching news');
      }
    }
  }

  async getDescriptionNews(id: string): Promise<News | undefined> {
    try {
      const response = await axios.get<ApiNewsItem>(`${this.apiUrl}/${id}`);
      const item = response.data;
      return {
        _id: item._id,
        title: item.title,
        link: item.link,
        datetime: item.datetime,
        description: item.description,
        origin: this.extractDomain(item.link),
        hasDescription: !!item.description
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          console.error(`News with id ${id} not found`);
          return undefined;
        }
        console.error('Error fetching news description:', error.message);
        throw new Error(`Failed to fetch news description: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred while fetching news description');
      }
    }
  }
}

export const newsService = new NewsService();