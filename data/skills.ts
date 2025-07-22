export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsData {
  [key: string]: SkillCategory;
}

export const skillsData: SkillsData = {
  webdev: {
    title: "Web Development",
    skills: [
      { name: "WordPress", icon: "/skills_assets/wordpress.png" },
      { name: "Django", icon: "/skills_assets/django.png" },
      { name: "Node.js", icon: "/skills_assets/node.png" },
      { name: "React.js", icon: "/skills_assets/react.png" },
      { name: "Next.js", icon: "/skills_assets/next.png" },
      { name: "REST API", icon: "/skills_assets/restapi.png" },
      { name: "MongoDB", icon: "/skills_assets/mongodb.png" },
      { name: "SQL", icon: "/skills_assets/sql.png" },
      { name: "Vercel", icon: "/skills_assets/vercel.png" },
      { name: "Hostinger", icon: "/skills_assets/hostinger.png" },
      { name: "GitHub", icon: "/skills_assets/github.png" },
      { name: "HTML", icon: "/skills_assets/html.png" },
      { name: "CSS", icon: "/skills_assets/css.png" },
      { name: "JavaScript", icon: "/skills_assets/js.png" },
      { name: "Tailwind CSS", icon: "/skills_assets/tailwind.png" },
    ],
  },
  datascience: {
    title: "Data Science",
    skills: [
      { name: "Matplotlib", icon: "/skills_assets/matplotlib.png" },
      { name: "Seaborn", icon: "/skills_assets/seaborn.png" },
      { name: "NumPy", icon: "/skills_assets/numpy.png" },
      { name: "Pandas", icon: "/skills_assets/pandas.svg" },
      { name: "TensorFlow", icon: "/skills_assets/tensorflow.png" },
      { name: "Scikit-learn", icon: "/skills_assets/scikitlearn.png" },
      { name: "Python", icon: "/skills_assets/python.png" },
      { name: "Excel", icon: "/skills_assets/excel.png" },
      { name: "SQL", icon: "/skills_assets/sql.png" },
      { name: "MongoDB", icon: "/skills_assets/mongodb.png" },
      { name: "Spark", icon: "/skills_assets/spark.png" },
      { name: "GitHub", icon: "/skills_assets/github.png" },
      { name: "Hadoop", icon: "/skills_assets/hadoop.png" },
    ],
  },
  ml: {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: "/skills_assets/scikitlearn.png" },
      { name: "Tensorflow", icon: "/skills_assets/tensorflow.png" },
      { name: "Python", icon: "/skills_assets/python.png" },
      { name: "AWS", icon: "/skills_assets/aws.png" },
      { name: "SQL", icon: "/skills_assets/sql.png" },
      { name: "GitHub", icon: "/skills_assets/github.png" },
      { name: "Hive", icon: "/skills_assets/hive.png" },
    ],
  },
};
