// Article Types for Strapi
export interface ArticleType {
  id: number;
  documentId: string;
  name: string;
  slug?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  duration: string;
  article_type: ArticleType;
  thumbnail: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: Record<string, unknown> | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: Record<string, unknown> | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  slug: string;
  summary: string;
  htmlContent: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type ArticlesResponse = StrapiResponse<Article>;

export type ArticleTypesResponse = StrapiResponse<ArticleType>;

// Filter and Pagination Parameters
export interface ArticleFilters {
  articleType?: string;
  page?: number;
  pageSize?: number;
}