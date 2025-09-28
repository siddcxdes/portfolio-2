// Static data to replace GraphQL queries
export const jobsData = [
  {
    node: {
      frontmatter: {
        title: "Machine Learning Intern",
        company: "DRDO",
        location: "Nashik, India",
        range: "June 2025 – Present",
        url: "https://www.drdo.gov.in"
      },
      html: "<p>Designed ML pipelines to predict material properties from experimental data.</p><p>Applied feature engineering using physical equations and statistical methods.</p><p>Achieved strong accuracy (R² = 0.98 standard, 0.99 with Repeated K-Fold Cross Validation).</p><p>Contributed to an upcoming research paper with DRDO scientists.</p>"
    }
  }
];

export const projectsData = [
  {
    node: {
      frontmatter: {
        title: "PDF Question Answering using RAG",
        github: "https://github.com/siddcxdes/pdf_question_answering",
        external: "",
        tech: ["Python", "LangChain", "LlamaIndex", "OpenAI GPT-3.5", "Streamlit"]
      },
      html: "<p>Built a Retrieval-Augmented Generation system that answers queries from uploaded PDFs. Implemented embeddings, semantic search, and chunk parsing. Designed a responsive Streamlit UI.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Automated Grammar Scoring Engine",
        github: "https://github.com/siddcxdes/grammar_scoring_engine",
        external: "",
        tech: ["Python", "Whisper", "spaCy", "DistilBERT", "Random Forest"]
      },
      html: "<p>Built speech-to-text grammar evaluation system. Rated grammar fluency/correctness (0–5 scale). Achieved R² = 0.94 alignment with expert scores.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Sign Language Recognition System",
        github: "https://github.com/siddcxdes/sign-language-detection",
        external: "",
        tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn"]
      },
      html: "<p>Real-time gesture-to-text translator. 90%+ accuracy across 20+ gestures. Implemented live feedback for smooth user experience.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Customer Churn Prediction",
        github: "",
        external: "",
        tech: ["Python", "SQL", "Scikit-learn", "Random Forest", "Logistic Regression"]
      },
      html: "<p>Predicted customer churn from transaction + engagement data. Achieved 88% F1 score, provided retention insights.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Recommender System for Personalized Learning",
        github: "",
        external: "",
        tech: ["Python", "Surprise", "Matrix Factorization", "SQL"]
      },
      html: "<p>Designed collaborative filtering system. Improved recommendation accuracy by 20%. Integrated with SQL backend for scalability.</p>"
    }
  }
];

export const featuredData = [
  {
    node: {
      frontmatter: {
        title: "PDF Question Answering using RAG",
        cover: "https://picsum.photos/600/400?random=1",
        github: "https://github.com/siddcxdes/pdf_question_answering",
        external: "",
        tech: ["Python", "LangChain", "LlamaIndex", "OpenAI GPT-3.5", "Streamlit"],
        showInProjects: true
      },
      html: "<p>Built a Retrieval-Augmented Generation system that answers queries from uploaded PDFs.</p><p>Implemented embeddings, semantic search, and chunk parsing.</p><p>Designed a responsive Streamlit UI.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Automated Grammar Scoring Engine",
        cover: "https://picsum.photos/600/400?random=2",
        github: "https://github.com/siddcxdes/grammar_scoring_engine",
        external: "",
        tech: ["Python", "Whisper", "spaCy", "DistilBERT", "Random Forest"],
        showInProjects: true
      },
      html: "<p>Built speech-to-text grammar evaluation system.</p><p>Rated grammar fluency/correctness (0–5 scale).</p><p>Achieved R² = 0.94 alignment with expert scores.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Sign Language Recognition System",
        cover: "https://picsum.photos/600/400?random=3",
        github: "https://github.com/siddcxdes/sign-language-detection",
        external: "",
        tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn"],
        showInProjects: true
      },
      html: "<p>Real-time gesture-to-text translator.</p><p>90%+ accuracy across 20+ gestures.</p><p>Implemented live feedback for smooth user experience.</p>"
    }
  }
];

export const skillsData = {
  core: {
    title: "Core Technologies",
    skills: ["Python", "SQL", "C++", "Machine Learning", "Deep Learning", "Data Science"]
  },
  ai_ml: {
    title: "AI/ML Frameworks",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "LangChain", "LlamaIndex"]
  },
  generative_ai: {
    title: "Generative AI & RAG",
    skills: ["OpenAI API", "FAISS", "Chroma", "Vector Databases", "LLMs", "Retrieval-Augmented Generation"]
  },
  computer_vision: {
    title: "Computer Vision & Multimodal",
    skills: ["OpenCV", "MediaPipe", "Whisper", "Speech Recognition", "Image Processing"]
  },
  data_tools: {
    title: "Data & Development Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Git", "Docker", "Streamlit", "Jupyter"]
  },
  algorithms: {
    title: "ML Algorithms & Methods",
    skills: ["Random Forest", "Gradient Boosting", "Regression", "Classification", "Ensemble Methods", "Feature Engineering"]
  }
};

export const siteMetadata = {
  title: 'Sidheshwar Sharma',
  description: 'Sidheshwar Sharma is an AI/ML Engineer specializing in Large Language Models, RAG, multimodal AI, and Data Science.',
  siteUrl: 'https://sidheshwar-sharma.com',
  image: '/og.png',
  twitterUsername: '@sidheshwar23',
};
