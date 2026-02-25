export const jobsData = [
  {
    node: {
      frontmatter: {
        title: "ML & Data Engineering Intern",
        company: "DRDO-ACEM",
        location: "Nashik, India",
        range: "June 2025 – Sept 2025",
        url: "https://www.drdo.gov.in"
      },
      html: "<p>Built machine learning pipelines to predict material properties using real-world experimental lab data.</p><p>Cleaned, processed, and prepared raw datasets. Applied feature engineering using physical and statistical methods.</p><p>Trained and evaluated regression models as part of an end-to-end ML workflow.</p><p>Tools used: Python, Scikit-learn, Pandas, NumPy.</p><p>Worked closely with DRDO scientists and contributed to ongoing research efforts.</p>"
    }
  }
];

export const projectsData = [
  {
    node: {
      frontmatter: {
        title: "Prompt2Manim — Agentic AI System",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["Python", "LLMs", "Manim", "Agentic AI"]
      },
      html: "<p>Built a planner–executor agent that turns natural language into Manim animations. Uses constrained JSON planning with validation layers for safe code execution.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "PDF Question Answering — RAG Pipeline",
        github: "https://github.com/siddcxdes/pdf_question_answering",
        external: "",
        tech: ["Python", "LangChain", "LlamaIndex", "OpenAI GPT-3.5"]
      },
      html: "<p>Built a RAG system that answers questions from uploaded PDFs. Handles document parsing, chunking, embeddings, and semantic search under the hood.</p>"
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
      html: "<p>Built a speech-to-text pipeline that evaluates grammar fluency and correctness on a 0–5 scale. Achieved R² = 0.94 alignment with expert human scores.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Digital Medical Board",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["Python", "FastAPI", "Streamlit", "NLP", "CV"]
      },
      html: "<p>Built a backend system that predicts health risks by combining clinical data, doctor notes, medical imaging, and genomics into one pipeline.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Ascension — AI Productivity Platform",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["MERN Stack", "LLMs", "Agentic AI"]
      },
      html: "<p>Full-stack productivity app with gamification. Includes an AI planner agent that generates adaptive daily plans based on user goals.</p>"
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
      html: "<p>Real-time sign language recognition system using computer vision. Handles gesture classification with solid accuracy.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "TaskManager — AI Workflow Agent",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["Python", "LLMs", "RAG", "Vector Databases"]
      },
      html: "<p>An AI agent that reads unstructured documents and converts them into structured task plans. Uses RAG and embeddings for context-aware processing.</p>"
    }
  }
];

export const featuredData = [
  {
    node: {
      frontmatter: {
        title: "Digital Medical Board",
        cover: "/doctor.png",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["Python", "FastAPI", "Streamlit", "NLP", "CV"],
        showInProjects: true
      },
      html: "<p>A backend-driven health risk prediction system. Takes in clinical data, doctor notes, medical images, and genomics data — runs them through ML models to predict risks for diabetes, kidney disease, cancer, and heart conditions.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "TaskManager",
        cover: "/taskManager.png",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["Python", "LLMs", "RAG", "Vector Databases", "Embeddings"],
        showInProjects: true
      },
      html: "<p>An AI agent that ingests messy strategy documents (PDFs, docs) and turns them into clean, structured task plans with deadlines and dependencies. Built with RAG for accurate context retrieval.</p>"
    }
  },
  {
    node: {
      frontmatter: {
        title: "Ascension",
        cover: "/ascension.png",
        github: "https://github.com/siddcxdes",
        external: "",
        tech: ["MERN Stack", "Agentic AI", "LLMs", "Gamification"],
        showInProjects: true
      },
      html: "<p>A full-stack productivity platform with gamification features. Includes an AI Planner Agent that creates adaptive daily and weekly schedules based on user goals and past performance.</p>"
    }
  }
];

export const skillsData = {
  backend_systems: {
    title: "Backend & Systems",
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "Authentication", "API Integration"]
  },
  ai_ml: {
    title: "AI & ML",
    skills: ["LLMs", "RAG", "LangChain", "Vector Databases", "OpenAI API"]
  },
  data_ml: {
    title: "Data & ML",
    skills: ["Feature Engineering", "Model Training", "Evaluation", "Pandas", "NumPy"]
  },
  tools: {
    title: "Tools",
    skills: ["Git", "Docker", "Streamlit", "Jupyter"]
  },
  core: {
    title: "Core Technologies",
    skills: ["Python", "SQL", "C++", "Machine Learning", "Deep Learning", "Data Science"]
  },
  practices: {
    title: "Engineering Practices",
    skills: ["API Design", "Auth & Authorization", "Database Design", "System Architecture", "Error Handling", "Logging"]
  }
};

export const siteMetadata = {
  title: 'Sidheshwar Sharma',
  description: 'Sidheshwar Sharma is a Backend + AI Engineer who builds APIs, backend systems, and AI-powered features.',
  siteUrl: 'https://sidheshwar-sharma.com',
  image: '/og.png',
  twitterUsername: '@sidheshwar23',
};
