import { ProfileData } from '@/types';

export const profileData: ProfileData = {
  name: "Digvijay Ingole",
  pronouns: "He/Him",
  jobTitle: "Software Engineer",
  location: "San Francisco",
  email: "digvijayingole55@gmail.com",
  linkedIn: "https://www.linkedin.com/in/digvijay-sanjay-ingole/",
  resume: "/resume.pdf",
  about: [
    "I'm Digvijay Ingole, a San Francisco-based software engineer with a passion for AI engineering. I spend my days crafting full-stack applications and Flutter mobile apps, while my nights are devoted to training models and building voice assistants that occasionally understand what I'm saying.",
    "From React frontends to Node.js backends, I've built my fair share of traditional apps. But lately, I've been more interested in teaching machines to see screenshots, process speech, and generate recipe suggestions—because apparently, regular software wasn't challenging enough. When I'm not debugging API calls or wrestling with Gemini's latest quirks, you'll find me exploring the endless possibilities of AI-powered applications."
  ],
  projects: [
    {
      image: "/specta.png",
      title: "Specta",
      description: "Voice AI Gaming Assistant",
      year: "2025",
      detailedDescription: "A voice-activated AI gaming assistant that uses wake word detection, speech-to-text, and text-to-speech technologies. Features automatic screenshot capture for visual context analysis using Gemini Vision API. Includes intelligent conversation handling with context management and real-time audio processing. Utilizes Picovoice for wake word detection and Deepgram for high-quality voice synthesis. Designed specifically for gaming environments with optimized response times.",
      tags: ["Python", "Gemini Vision API", "Picovoice", "Deepgram", "Whisper STT", "Pipecat", "Audio Processing"],
      alt: "Specta Voice AI Gaming Assistant",
      githubLink: "https://github.com/DigvijayIngole55/Specta.git",
      liveLink: "https://www.linkedin.com/posts/digvijay-sanjay-ingole_built-an-ai-gaming-buddy-that-sees-your-activity-7348851105927221248-8Ebr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJOcm8BHSxGWDqjXrRDlChyv03pl7BvAsY"
    },
    {
      image: "/recipe.png",
      title: "Recipeee",
      description: "Full Stack",
      year: "2024",
      detailedDescription: "A web-based platform that generates recipe suggestions based on user-provided ingredients. Features frontend using Flutter and backend with Node.js and Express.js. Includes Tesseract OCR for real-time ingredient recognition from images. Uses intelligent recipe matching algorithm with ingredient compatibility database. Runs on scalable architecture with cloud infrastructure and automated CI/CD pipeline.",
      tags: ["Flutter", "Node.js", "Express.js", "Gemini", "Netlify", "Heroku", "Cloudinary"],
      alt: "Recipeee Full Stack project",
      liveLink: "https://recipeee-digs.netlify.app/",
      githubLink: "https://github.com/DigvijayIngole55/recipeee_flutter"
    }
  ],
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "Chhajed LLC",
      years: "Aug 2024 - May 2025",
      description: "• Built AlienInUsa immigration app using Flutter with Provider architecture for enhanced scalability\n• Created Jain matrimonial platform in Swift with MVC architecture and CoreData integration\n• Developed secure document vault with AES-256 encryption and integrated Stripe payment gateway"
    },
    {
      role: "Software Engineer",
      company: "Mobigic Technologies",
      years: "Nov 2022 - Jul 2023",
      description: "• Enhanced digital gold trading app accessibility for rural users, boosting adoption by 20%\n• Integrated Razorpay payment system and optimized API performance for better scalability\n• Redesigned grocery delivery app interface, improving user retention by 25%"
    }
  ],
  education: [
    {
      degree: "Master's in Computer Science",
      school: "California State University, East Bay",
      years: "2023-2025",
      description: "Focused on advanced algorithms, web systems, cybersecurity, operating systems, computer networks, database systems, artificial intelligence, and machine learning technologies."
    },
    {
      degree: "Bachelor's in Computer Engineering",
      school: "Savitribai Phule Pune University",
      years: "2018-2022",
      description: "Comprehensive study of data structures, algorithms, web development, and database systems with strong foundation in computer engineering principles."
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "C", "C++", "Java", "SQL", "Dart", "HTML", "CSS", "Swift"]
    },
    {
      category: "AI & Data Libraries",
      items: ["Gemini API", "LangGraph", "RAG", "Vector Databases", "Whisper", "Picovoice", "Deepgram", "Pillow", "NumPy", "Transformers", "PyTorch", "Scikit-learn"]
    },
    {
      category: "Tools & Frameworks",
      items: ["NodeJS", "Angular", "Flutter", "Git", "Shell Scripting", "React", "Next.js", "Tailwind CSS", "pipecat-ai"]
    },
    {
      category: "Cloud & Database Technologies",
      items: ["AWS", "Supabase", "GCP", "Firebase", "MySQL", "MongoDB"]
    }
  ],
  awards: [
    { title: "AI Agents Excellence", organization: "Hugging Face", year: "2025" },
    { title: "Complete 2021 Flutter Development Bootcamp with Dart", organization: "Udemy", year: "2020" },
    { title: "ISTE Hack-SPRINT v3.0 - Runner Up", organization: "ISTE", year: "2021" }
  ],
  contacts: [
    { label: "E-Mail:", value: "digvijayingole55@gmail.com", link: "mailto:digvijayingole55@gmail.com" },
    { label: "Phone:", value: "(510) 850-4566", link: "tel:+15108504566" },
    { label: "GitHub:", value: "github.com/DigvijayIngole55", link: "https://github.com/DigvijayIngole55" },
    { label: "LinkedIn:", value: "linkedin.com/in/digvijay-sanjay-ingole", link: "https://www.linkedin.com/in/digvijay-sanjay-ingole/" },
    { label: "Resume:", value: "Download", link: "/resume.pdf" }
  ]
};