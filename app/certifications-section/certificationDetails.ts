import { StaticImageData } from "next/image";

export type certificationProps = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string; // Use string for external image URLs
  link?: string;
  index: number;
  isOfferLetter?: boolean; // To distinguish between certificate and offer letter
};

export const certificationDetails: certificationProps[] = [
  // Certificates with uploaded PDFs
  {
    title: "CC Course Pre-assessment (Certified in Cybersecurity Pathway)",
    issuer: "(ISC)² - International Information System Security Certification Consortium",
    date: "July 5, 2025",
    credentialId: "fd4c66e6-e1cf-400e-919f-3b6eb8f5aace",
    link: "/certificates/ISC2 Pre-Assessment Course Completion.pdf",
    index: 0,
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "August 31, 2025",
    credentialId: "b7ee07d4-1c45-45b0-aef8-b6b59d880439",
    link: "/certificates/Cert_Cicsco.pdf",
    index: 28,
  },
  {
    title: "AI Aware & Appreciate Certified",
    issuer: "Intel & Digital India",
    date: "July 5, 2025",
    link: "/certificates/AI Aware Certificate.pdf",
    index: 1,
  },
  {
    title: "AI Appreciate 2025",
    issuer: "Intel & Digital India",
    date: "July 5, 2025",
    link: "/certificates/AI Appreciate Certificate.pdf",
    index: 2,
  },
  {
    title: "Fortinet Certified Fundamentals In Cybersecurity (FCF)",
    issuer: "Fortinet",
    date: "July 3, 2025",
    credentialId: "1758417027AK",
    link: "/certificates/Fortinet Certifed Fundamental.pdf",
    index: 3,
  },
  {
    title: "Fortinet Certified – Threat Landscape Analyst 3.0",
    issuer: "Fortinet",
    date: "July 2025",
    credentialId: "6e430e61-1e10-44fe-a0c6-1508e1ed10ac",
    link: "/certificates/threat landscape Certificate.pdf",
    index: 4,
  },
  {
    title: "Data Analysis with Python (DA0101EN)",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "/certificates/Data Analysis using Python IBM Certificate.pdf",
    index: 5,
  },
  {
    title: "Big Data 101 (BD0101EN)",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "/certificates/Big Data Cert.pdf",
    index: 6,
  },
  {
    title: "INNOhack 2025 Participation Certificate",
    issuer: "Bot Buddies",
    date: "2025",
    link: "/certificates/Innohack Certificate.pdf",
    index: 7,
  },
  {
    title: "Certificate of Completion and Evaluation",
    issuer: "Code Techie",
    date: "2025",
    link: "/certificates/Code techie Certificate Of Completion And Evaluation -2.pdf",
    index: 8,
  },
  {
    title: "Certificate of Completion",
    issuer: "Bluestock Fintech",
    date: "2025",
    link: "/certificates/Bluestock.pdf",
    index: 9,
  },
  {
    title: "Certificate of Completion",
    issuer: "Critical Infrastructure Protection",
    date: "2025",
    link: "/certificates/Critical Infrastructure Protection Cert.pdf",
    index: 10,
  },
  {
    title: "Google Analytics Certification GA-4",
    issuer: "Google",
    date: "2025",
    link: "/certificates/Google Analytics GA4.pdf",
    index: 11,
  },
  {
    title: "Introduction To Cybersecurity",
    issuer: "Cisco Network Academy",
    date: "2025",
    link: "/certificates/Cisco Certification_page-0001.pdf",
    index: 12,
  },
  {
    title: "AWS Virtual Simulation Certificate",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "/certificates/AWS Virtual Simulation Certification.pdf",
    index: 13,
  },
  {
    title: "Cyber Job Simulation Certificate",
    issuer: "Cybersecurity Training",
    date: "2025",
    link: "/certificates/Cyber Job Simulation Certification.pdf",
    index: 14,
  },
  {
    title: "Udemy Course Certificate",
    issuer: "Udemy",
    date: "2025",
    link: "/certificates/Udemy Course Cert.pdf",
    index: 15,
  },
  {
    title: "CodeAlpha DevOps Certificate",
    issuer: "CodeAlpha",
    date: "2025",
    link: "/certificates/CodeAlpha DevOps Cert -1.pdf",
    index: 16,
  },
  {
    title: "GDG Certificate Of Achievement",
    issuer: "Hack2Skill",
    date: "2025",
    link: "/certificates/Hack2skill-Certificate.pdf",
    index: 17,
  },
  {
    title: "Software Development Intern",
    issuer: "Yuga Yatra (Retail) OPC PVT. LTD.",
    date: "2025",
    link: "/certificates/Yuga Yatra SDE Certificate.pdf",
    index: 17,
  },

  // Certificates with LinkedIn links (keeping existing ones)
  
  
  // Offer Letters with uploaded PDFs
  {
    title: "IBM Virtual Internship",
    issuer: "IBM (Powered by Edunet Foundation)",
    date: "2025",
    link: "/certificates/IBM Offer Letter.pdf",
    index: 22,
    isOfferLetter: true,
  },
  {
    title: "Cybersecurity Internship",
    issuer: "Codec Technologies India (AICTE Certified)",
    date: "2025",
    link: "/certificates/codec Offer Letter.pdf",
    index: 23,
    isOfferLetter: true,
  },
  {
    title: "Software Development Engineering Intern",
    issuer: "YugaYatra Retail (OPC) Pvt. Ltd. (Startup India Certified)",
    date: "June 16, 2025 – August 16, 2025",
    link: "/certificates/Yuga Yatra Offer Letter.pdf",
    index: 24,
    isOfferLetter: true,
  },
  {
    title: "Python Development Internship",
    issuer: "Code Techie",
    date: "2025",
    link: "/certificates/Python Development Internshipt Offer Letter-4.pdf",
    index: 25,
    isOfferLetter: true,
  },
  {
    title: "DevOps Internship",
    issuer: "CodeAlpha",
    date: "2025",
    link: "/certificates/DevOps Offer Letter!-1.pdf",
    index: 26,
    isOfferLetter: true,
  },
  {
    title: "Software Development Intern (Team Lead)",
    issuer: "Bluestock Finetech",
    date: "2025",
    link: "/certificates/Offer Letter Of Bluestock Finetech .pdf",
    index: 27,
    isOfferLetter: true,
  },
  {
    title: "MERN Stack Developer @ WebStack Academy (WSA)",
    issuer: "WebStack Academy",
    date: "2025",
    link: "/certificates/  webstack_academy_internship_offer_letter_Akshay Kale.pdf",
    index: 29,
    isOfferLetter: true,
  },



]; 
