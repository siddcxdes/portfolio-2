// Static data to replace GraphQL queries
export const jobsData = [
  {
    node: {
      frontmatter: {
        title: "Machine Learning Intern",
        company: "DRDO-ACEM",
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
        title: "Prompt2Manim — Agentic AI System",
        github: "",
        external: "",
        tech: ["Python", "LLMs", "Manim", "Agentic AI"]
      },
      html: "<p>Built a planner–executor agent translating natural language prompts into Manim animations using constrained JSON planning with validation layers for safe execution.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "PDF Question Answering using RAG",
        github: "https://github.com/siddcxdes/pdf_question_answering",
        external: "",
        tech: ["Python", "LangChain", "LlamaIndex", "OpenAI GPT-3.5"]
      },
      html: "<p>Built a Retrieval-Augmented Generation system that answers queries from uploaded PDFs. Implemented embeddings, semantic search, and chunk parsing.</p>"
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
        title: "Digital Medical Board",
        github: "",
        external: "",
        tech: ["Python", "FastAPI", "Streamlit", "NLP", "CV"]
      },
      html: "<p>Built a multimodal health risk prediction system integrating clinical data, doctor notes, medical imaging, and genomics.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Ascension — AI Productivity Platform",
        github: "",
        external: "",
        tech: ["MERN Stack", "LLMs", "Agentic AI"]
      },
      html: "<p>Built a full-stack productivity platform with gamification and an agentic AI planner generating adaptive daily plans.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Sign Lang — Real-Time Recognition",
        github: "https://github.com/siddcxdes/sign-language-detection",
        external: "",
        tech: ["Python", "OpenCV", "MediaPipe", "ML"]
      },
      html: "<p>Built a real-time sign language recognition system using computer vision, achieving robust gesture classification.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "TaskManager — AI Workflow Agent",
        github: "",
        external: "",
        tech: ["Python", "LLMs", "RAG", "Vector Databases"]
      },
      html: "<p>Built an AI workflow automation agent that converts unstructured documents into structured task plans using RAG and embeddings.</p>"
    }
  }
];

export const featuredData = [
  {
    node: {
      frontmatter: {
        title: "Digital Medical Board",
        cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        github: "",
        external: "",
        tech: ["Python", "FastAPI", "Streamlit", "NLP", "CV"],
        showInProjects: true
      },
      html: "<p>A unified multimodal health risk prediction system capable of analyzing clinical data, doctor notes, medical imaging, and genomics data. Predicts risks for diabetes, kidney disease, cancer, and heart disease with high accuracy.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "TaskManager",
        cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        github: "",
        external: "",
        tech: ["Python", "LLMs", "RAG", "Vector Databases", "Embeddings"],
        showInProjects: true
      },
      html: "<p>An intelligent agent that ingests unstructured strategy documents (PDFs, docs) and autonomously converts them into structured, actionable task plans with deadlines and dependencies.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Ascension",
        cover: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        github: "",
        external: "",
        tech: ["MERN Stack", "Agentic AI", "LLMs", "Gamification"],
        showInProjects: true
      },
      html: "<p>A gamified personal productivity platform featuring an AI Planner Agent that generates adaptive daily and weekly schedules based on user goals and performance metrics.</p>"
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
