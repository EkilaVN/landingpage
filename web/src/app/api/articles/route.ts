import { NextRequest, NextResponse } from "next/server";

// Mock data for articles that matches Strapi structure
const mockArticles = [
  {
    id: 1,
    documentId: "connect-a-job-doc",
    title: "Connect A Job - Ứng dụng quản lý công việc thông minh",
    duration: "5",
    article_type: {
      id: 1,
      documentId: "mobile-doc",
      name: "Mobile App",
      slug: "mobile",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 1,
      documentId: "thumbnail-1",
      name: "connect-a-job.jpg",
      alternativeText: "Connect A Job thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "connect_a_job_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 245.6,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-09-15T00:00:00.000Z",
      updatedAt: "2023-09-15T00:00:00.000Z",
      publishedAt: "2023-09-15T00:00:00.000Z",
    },
    slug: "connect-a-job-ung-dung-quan-ly-cong-viec-thong-minh",
    summary: "ConnectaJob đại diện cho quản lý công việc thông minh với các tính năng hiện đại.",
    htmlContent:
      "<p>Nội dung chi tiết về Connect A Job và các tính năng quản lý công việc thông minh...</p>",
    publishedAt: "2023-10-01T00:00:00.000Z",
    createdAt: "2023-09-15T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
  },
  {
    id: 2,
    documentId: "project-x-doc",
    title: "Project X - Ứng dụng di động cho du lịch",
    duration: "7",
    article_type: {
      id: 1,
      documentId: "mobile-doc",
      name: "Mobile App",
      slug: "mobile",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 2,
      documentId: "thumbnail-2",
      name: "project-x.jpg",
      alternativeText: "Project X thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "project_x_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 198.3,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-09-20T00:00:00.000Z",
      updatedAt: "2023-09-20T00:00:00.000Z",
      publishedAt: "2023-09-20T00:00:00.000Z",
    },
    slug: "project-x-ung-dung-di-dong-cho-du-lich",
    summary: "The Luxe Nomad là ứng dụng hàng đầu châu Á - Thái Bình Dương cho du lịch cao cấp.",
    htmlContent: "<p>Nội dung chi tiết về Project X và tính năng du lịch...</p>",
    publishedAt: "2023-10-02T00:00:00.000Z",
    createdAt: "2023-09-20T00:00:00.000Z",
    updatedAt: "2023-10-02T00:00:00.000Z",
  },
  {
    id: 3,
    documentId: "web-tips-doc",
    title: "5 Tips phát triển Website hiệu quả",
    duration: "8",
    article_type: {
      id: 2,
      documentId: "web-doc",
      name: "Website",
      slug: "web",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 3,
      documentId: "thumbnail-3",
      name: "web-tips.jpg",
      alternativeText: "Web development tips thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "web_tips_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 156.7,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-09-25T00:00:00.000Z",
      updatedAt: "2023-09-25T00:00:00.000Z",
      publishedAt: "2023-09-25T00:00:00.000Z",
    },
    slug: "5-tips-phat-trien-website-hieu-qua",
    summary: "Khám phá 5 tips quan trọng để phát triển website hiệu quả và chuyên nghiệp.",
    htmlContent: "<p>Nội dung chi tiết về tips phát triển website...</p>",
    publishedAt: "2023-10-03T00:00:00.000Z",
    createdAt: "2023-09-25T00:00:00.000Z",
    updatedAt: "2023-10-03T00:00:00.000Z",
  },
  {
    id: 4,
    documentId: "zalo-guide-doc",
    title: "Hướng dẫn phát triển Zalo Mini App",
    duration: "10",
    article_type: {
      id: 3,
      documentId: "zma-doc",
      name: "Zalo Mini App",
      slug: "zma",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 4,
      documentId: "thumbnail-4",
      name: "zalo-guide.jpg",
      alternativeText: "Zalo Mini App guide thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "zalo_guide_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 223.1,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-09-28T00:00:00.000Z",
      updatedAt: "2023-09-28T00:00:00.000Z",
      publishedAt: "2023-09-28T00:00:00.000Z",
    },
    slug: "huong-dan-phat-trien-zalo-mini-app",
    summary: "Tìm hiểu cách phát triển Zalo Mini App từ cơ bản đến nâng cao.",
    htmlContent: "<p>Nội dung chi tiết về phát triển Zalo Mini App...</p>",
    publishedAt: "2023-10-04T00:00:00.000Z",
    createdAt: "2023-09-28T00:00:00.000Z",
    updatedAt: "2023-10-04T00:00:00.000Z",
  },
  {
    id: 5,
    documentId: "design-trends-doc",
    title: "Xu hướng thiết kế UI/UX 2024",
    duration: "6",
    article_type: {
      id: 4,
      documentId: "design-doc",
      name: "Design/Thiết kế",
      slug: "design",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 5,
      documentId: "thumbnail-5",
      name: "design-trends.jpg",
      alternativeText: "UI/UX design trends thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "design_trends_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 187.9,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-09-30T00:00:00.000Z",
      updatedAt: "2023-09-30T00:00:00.000Z",
      publishedAt: "2023-09-30T00:00:00.000Z",
    },
    slug: "xu-huong-thiet-ke-ui-ux-2024",
    summary: "Khám phá những xu hướng thiết kế UI/UX mới nhất trong năm 2024.",
    htmlContent: "<p>Nội dung chi tiết về xu hướng thiết kế...</p>",
    publishedAt: "2023-10-05T00:00:00.000Z",
    createdAt: "2023-09-30T00:00:00.000Z",
    updatedAt: "2023-10-05T00:00:00.000Z",
  },
  {
    id: 6,
    documentId: "marketing-strategy-doc",
    title: "Chiến lược Digital Marketing hiệu quả",
    duration: "9",
    article_type: {
      id: 5,
      documentId: "marketing-doc",
      name: "Marketing",
      slug: "marketing",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 6,
      documentId: "thumbnail-6",
      name: "marketing-strategy.jpg",
      alternativeText: "Digital marketing strategy thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "marketing_strategy_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 201.4,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-10-01T00:00:00.000Z",
      updatedAt: "2023-10-01T00:00:00.000Z",
      publishedAt: "2023-10-01T00:00:00.000Z",
    },
    slug: "chien-luoc-digital-marketing-hieu-qua",
    summary: "Tìm hiểu về các chiến lược Digital Marketing hiệu quả.",
    htmlContent: "<p>Nội dung chi tiết về chiến lược marketing...</p>",
    publishedAt: "2023-10-06T00:00:00.000Z",
    createdAt: "2023-10-01T00:00:00.000Z",
    updatedAt: "2023-10-06T00:00:00.000Z",
  },
  {
    id: 7,
    documentId: "company-news-doc",
    title: "Ekila công bố đối tác mới trong Q4",
    duration: "4",
    article_type: {
      id: 6,
      documentId: "news-doc",
      name: "Tin tức & Sự kiện",
      slug: "news",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 7,
      documentId: "thumbnail-7",
      name: "company-news.jpg",
      alternativeText: "Company news thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "company_news_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 178.2,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-10-05T00:00:00.000Z",
      updatedAt: "2023-10-05T00:00:00.000Z",
      publishedAt: "2023-10-05T00:00:00.000Z",
    },
    slug: "ekila-cong-bo-doi-tac-moi-trong-q4",
    summary: "Ekila vui mừng thông báo về việc hợp tác với các đối tác chiến lược mới.",
    htmlContent: "<p>Nội dung chi tiết về tin tức công ty...</p>",
    publishedAt: "2023-10-07T00:00:00.000Z",
    createdAt: "2023-10-05T00:00:00.000Z",
    updatedAt: "2023-10-07T00:00:00.000Z",
  },
  {
    id: 8,
    documentId: "custom-software-doc",
    title: "Lợi ích của phần mềm tùy chỉnh cho doanh nghiệp",
    duration: "12",
    article_type: {
      id: 7,
      documentId: "customSoftware-doc",
      name: "Phát triển phần mềm tùy chỉnh",
      slug: "customSoftware",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      publishedAt: "2023-09-01T00:00:00.000Z",
    },
    thumbnail: {
      id: 8,
      documentId: "thumbnail-8",
      name: "custom-software.jpg",
      alternativeText: "Custom software development thumbnail",
      caption: null,
      width: 800,
      height: 400,
      formats: null,
      hash: "custom_software_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 234.5,
      url: "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
      previewUrl: null,
      provider: "aws-s3",
      provider_metadata: null,
      createdAt: "2023-10-03T00:00:00.000Z",
      updatedAt: "2023-10-03T00:00:00.000Z",
      publishedAt: "2023-10-03T00:00:00.000Z",
    },
    slug: "loi-ich-cua-phan-mem-tuy-chinh-cho-doanh-nghiep",
    summary: "Tìm hiểu về những lợi ích vượt trội của việc phát triển phần mềm tùy chỉnh.",
    htmlContent: "<p>Nội dung chi tiết về phần mềm tùy chỉnh...</p>",
    publishedAt: "2023-10-08T00:00:00.000Z",
    createdAt: "2023-10-03T00:00:00.000Z",
    updatedAt: "2023-10-08T00:00:00.000Z",
  },
];

export async function GET(request: NextRequest) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("pagination[page]") || "1");
    const pageSize = parseInt(searchParams.get("pagination[pageSize]") || "6");
    const articleTypeId = searchParams.get("filters[article_type][id][$eq]");
    const slug = searchParams.get("filters[slug][$eq]");

    // Filter by slug if specified (for single article fetch)
    if (slug) {
      const article = mockArticles.find((article) => article.slug === slug);
      if (!article) {
        return NextResponse.json({ error: "Article not found" }, { status: 404 });
      }
      return NextResponse.json({
        data: [article], // Return as array to match the expected structure
        meta: {
          pagination: {
            page: 1,
            pageSize: 1,
            pageCount: 1,
            total: 1,
          },
        },
      });
    }

    // Filter by article type if specified
    let filteredArticles = mockArticles;
    if (articleTypeId) {
      filteredArticles = mockArticles.filter(
        (article) => article.article_type.id.toString() === articleTypeId
      );
    }

    // Calculate pagination
    const total = filteredArticles.length;
    const pageCount = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    const response = {
      data: paginatedArticles,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount,
          total,
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}
