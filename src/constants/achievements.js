import { Award, Trophy, Medal } from "lucide-react";

export const ACHIEVEMENTS = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        organization: "Amazon Web Services",
        year: "2026",
        description: "Validated overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", // Certificate placeholder
        organizationImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", // High-res SVG
        link: "https://aws.amazon.com/certification/", // placeholder
        icon: Award,
        color: "text-amber-500"
    },
    {
        id: 2,
        title: "Top 5% Topper: Operating System Fundamentals",
        organization: "IIT Kharagpur (NPTEL)",
        year: "2025",
        description: "Achieved top 5% ranking in the certification course on Operating Systems.",
        image: "/OS_NPTEL.png", // Certificate image
        organizationImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg", // High-res SVG
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs141/Course/NPTEL25CS141S125840088210601317.pdf",
        icon: Trophy,
        color: "text-emerald-500"
    },
    {
        id: 3,
        title: "All India Rank 52: Computer and Network Performance Analysis",
        organization: "IIT Bombay (NPTEL)",
        year: "2025",
        description: "Secured AIR 52 in the certification course on network performance analysis.",
        image: "/CN_NPTEL.png", // Certificate image
        organizationImage: "https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg", // High-res SVG
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs126/Course/NPTEL25CS126S105840201510601317.pdf",
        icon: Medal,
        color: "text-blue-500"
    },
    {
        id: 4,
        title: "AWS Academy Graduate - Cloud Architecting",
        organization: "Amazon Web Services",
        year: "2025",
        description: "Training Badge demonstrating foundational knowledge of AWS Cloud architecture.",
        image: "/Cloud Architecting.png", // Certificate image
        organizationImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", // High-res SVG
        link: "https://www.credly.com/badges/aea64295-2b1f-4748-aa4f-a7dd9d07edfa/print",
        icon: Award,
        color: "text-amber-500"
    }
];
