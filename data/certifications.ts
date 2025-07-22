export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  category: string;
}

export interface CertificationCategory {
  id: string;
  label: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Meta Advanced React Developer",
    issuer: "Meta",
    date: "2024",
    image: "/certificates/meta-advanced-react-developer.png",
    description: "Advanced React development techniques and best practices",
    category: "webdev",
  },
  {
    id: 2,
    title: "Sentiment Analysis with NLP on Amazon Reviews",
    issuer: "Coursera",
    date: "2024",
    image: "/certificates/nlp-sentiment-analysis.png",
    description: "Applied natural language processing for sentiment analysis on Amazon reviews",
    category: "datascience",
  },
  {
    id: 3,
    title: "Big Data Analytics with Spark and Hadoop",
    issuer: "Meta",
    date: "2023",
    image: "/certificates/ibm-bigdata-with-spark-hadoop.png",
    description: "Professional certificate program for big data analytics using Spark and Hadoop.",
    category: "datascience",
  },
  {
    id: 4,
    title: "Full Stack Development with JavaScript",
    issuer: "Google + GDSC",
    date: "2023",
    image: "/certificates/javascript.png",
    description: "Comprehensive course on JavaScript programming for dynamic web development.",
    category: "webdev",
  },
  {
    id: 5,
    title: "Applications of Data Science",
    issuer: "Udemy",
    date: "2022",
    image: "/certificates/data science.png",
    description: "Applied data science techniques for real-world applications.",
    category: "datascience",
  },
  {
    id: 6,
    title: "MySQL for Developers",
    issuer: "Udemy",
    date: "2022",
    image: "/certificates/mysql.png",
    description: "Comprehensive course on MySQL for ai web development.",
    category: "ml",
  },
  {
    id: 7,
    title: "Database Management with SQL Server",
    issuer: "Udemy",
    date: "2022",
    image: "/certificates/dbms.png",
    description: "Advanced database management concepts and practices",
    category: "webdev",
  },
  {
    id: 8,
    title: "CSS3 and Tailwind CSS for Modern Web Design",
    issuer: "Google + GDSC",
    date: "2022",
    image: "/certificates/css.png",
    description: "Complete CSS3 and Tailwind CSS for Modern Web Design certification",
    category: "webdev",
  },
];

export const certCategories: CertificationCategory[] = [
  { id: "all", label: "All Certificates" },
  { id: "webdev", label: "Web Development" },
  { id: "datascience", label: "Data Science" },
  { id: "ml", label: "Machine Learning" },
];
