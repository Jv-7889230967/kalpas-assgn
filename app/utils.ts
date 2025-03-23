import axios from "axios"

interface articleType {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export interface NewsResultType {
    status: string,
    totalResults: number,
    articles: articleType[] | []
}


export const getNews = async (page: number = 1, limit: number = 6): Promise<NewsResultType> => {
    const response = await axios.get<NewsResultType>(`${process.env.NEXT_PUBLIC_BASE_URL}/top-headlines`, {
        params: {
            sources: 'techcrunch',
            apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
            pageSize: limit,
            page: page,
        },
    });
    return response.data;
};
