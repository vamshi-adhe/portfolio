import React from 'react';
import type { SkillCategory, Project, ExperienceItem, EducationItem } from './types';

// SVG Icons for skills
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>;
const NextjsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.75 15.5v-7L16.5 4v7.5l-6.75 4zm-1.5 0v-7L1.5 4v7.5l6.75 4z"/></svg>;
const TypescriptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM8.5 7.5h3.033l4.467-1.5-1.5 4.5h-3.033L7 15l-1.5-4.5h3.033L7 6l1.5 1.5z"/></svg>;
const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.582c-5.503 0-9.962 4.459-9.962 9.962s4.459 9.962 9.962 9.962 9.962-4.459 9.962-9.962S17.503 2.582 12 2.582zm-4.321 9.924c0 1.63.81 3.12 2.064 3.966 1.254.846 2.859.972 4.288.378.33-.135.531-.486.486-.864-.045-.378-.378-.63-.756-.585-1.053.126-2.223.018-3.159-.477-.945-.495-1.476-1.53-1.476-2.61v-2.07c0-.54.441-.981.981-.981h5.958c.54 0 .981.441.981.981v.981c0 .54-.441.981-.981.981h-2.979c-.54 0-.981.441-.981.981v.54z"/></svg>;
const VuejsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.4 3.99l-6.4 11.08L5.6 3.99H0l12 20.78L24 3.99z"/><path d="M18.4 3.99l-6.4 11.08L5.6 3.99H3.5l8.5 14.72L20.5 3.99z"/></svg>;
const JavaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.11 15.35c.42.34.8.74 1.14 1.18-.3.27-.62.51-.97.72-1.76 1.05-4.42.7-5.92-1.2-1.5-1.9-1.2-4.57.56-5.62.33-.2.67-.36 1.02-.48.07 1.05.48 2.33 1.29 3.23.85.95 2.12 1.48 3.9 2.17m-1.42-9.22c-.01.37.01.75.05 1.12.23 1.95.9 3.55 1.93 4.8.44.53.93 1.01 1.46 1.45.39.32.8.62 1.22.88 2.07 1.3 4.34.63 5.59-1.39 1.25-2.02.66-4.37-1.29-5.69-.35-.24-.73-.43-1.12-.58-.17-1.1-.7-2.4-1.59-3.3-1.02-1.03-2.5-1.4-4.2-1.22-.3.03-.6.08-.89.15-1.09.26-2.1.8-2.92 1.55-.8.74-1.35 1.66-1.63 2.65-.02.04-.03.08-.05.12m-3.9 6.55c-1.76-1.05-2.12-3.72-1.2-5.62s3.23-2.95 5-1.9c.47.28.88.66 1.22 1.1-.34.25-.66.53-.95.84-1.7 1.83-1.35 4.5.8 5.57.3.15.62.26.95.33.02 1.02-.3 2.3-1.12 3.12-.9.9-2.17 1.4-3.5 1.3-.23-.02-.46-.05-.68-.1-1-.23-1.9-.7-2.6-1.35-.7-.65-1.1-1.48-1.2-2.39Z"/></svg>;
const SpringBootIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 11.1V8.2c-1.3-1.6-4.4-3.1-8.3-3.1-3.9 0-7 1.5-8.3 3.1v2.9c0 1.5.9 2.8 2.2 3.5v.1c-1.3.7-2.2 2-2.2 3.5v2.8c1.3 1.6 4.4 3.1 8.3 3.1 3.9 0 7-1.5 8.3-3.1v-2.8c0-1.5-.9-2.8-2.2-3.5v-.1c1.3-.7 2.2-2 2.2-3.5M19 18.2c-.8 1-2.9 2-5.3 2-2.4 0-4.5-1-5.3-2v-1.7c0-1 .6-1.9 1.5-2.2v4.4h7.5v-4.4c.9.3 1.6 1.2 1.6 2.2v1.7zm0-6.9c-.8 1-2.9 2-5.3 2-2.4 0-4.5-1-5.3-2V9.6c.8-1 2.9-2 5.3-2 2.4 0 4.5 1 5.3 2v1.7z"/></svg>;
const NodejsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2,10.6l-5.7-1c-0.2,0-0.4-0.1-0.5-0.2L12,3.3l-4,6.1c-0.1,0.2-0.3,0.3-0.5,0.3l-5.7,1 c-0.5,0.1-0.7,0.7-0.3,1l4.1,4l-1,5.7c-0.1,0.5,0.4,0.9,0.9,0.6l5.1-2.7c0.2-0.1,0.4-0.1,0.6,0l5.1,2.7c0.5,0.3,1-0.1,0.9-0.6 l-1-5.7l4.1-4C22.9,11.3,22.7,10.7,22.2,10.6z"/></svg>;
const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10,10-10-4.48-10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6 S15.31,18,12,18z"/><path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z"/></svg>;
const GraphqlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2zm-4 4h8v2h-8z"/></svg>;
const AwsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.3 8.6c0 .3-.1.6-.3.9s-.4.5-.7.6c-.3.1-.6.2-1 .2s-.7-.1-1-.2c-.3-.1-.5-.3-.7-.6s-.3-.6-.3-.9v-1c0-.3.1-.6.3-.9s.4-.5.7-.6c.3-.1.6-.2 1-.2s.7.1 1 .2c.3.1.5.3.7.6s.3.6.3.9v1zm-5.7 6.8h1.6c.3 0 .6-.1.8-.2s.4-.3.5-.5.2-.4.2-.7v-3.7c0-.3-.1-.5-.2-.7s-.3-.3-.5-.5-.4-.2-.8-.2H9.1c-.5 0-.9.2-1.2.6-.3.4-.5.9-.5 1.5v2c0 .6.2 1.1.5 1.5s.7.6 1.2.6zm5.7 0c.5 0 .9-.2 1.2-.6s.5-.9.5-1.5v-2c0-.6-.2-1.1-.5-1.5s-.7-.6-1.2-.6h-1.6c-.3 0-.6.1-.8.2s-.4.3-.5.5-.2.4-.2.7v3.7c0 .3.1.5.2.7s.3.3.5.5.4.2.8.2zM21.1 12c0 2.4-1 4.7-2.7 6.4-1.7 1.7-4 2.7-6.4 2.7S7.3 20.1 5.6 18.4C3.9 16.7 3 14.4 3 12s1-4.7 2.7-6.4C7.3 3.9 9.6 3 12 3s4.7 1 6.4 2.7c1.7 1.6 2.7 3.9 2.7 6.3z"/></svg>;
const DockerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2,9.3c-0.1-1.1-0.4-2.2-0.8-3.3c-0.5-1-1.1-2-1.8-2.9C18.1,1.5,16.5,0,13.6,0H4.4C3.3,0,2.4,0.9,2.4,2v12.2 c0,1.1,0.9,2,2,2h12.2c1.1,0,2-0.9,2-2V9.3H22.2z M6.4,12.2H4.4V10h2V12.2z M6.4,8H4.4V5.8h2V8z M10.5,12.2H8.5V10h2V12.2z M10.5,8H8.5V5.8h2V8z M14.6,12.2h-2V10h2V12.2z M14.6,8h-2V5.8h2V8z"/></svg>;
const KubernetesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10,10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 s8,3.59,8,8S16.41,20,12,20z M12,11.55l-5.6,3.24l-1.4-2.42l7-4.04l7,4.04l-1.4,2.42L12,11.55z M12,18.5l-5.6-3.24l-1.4-2.42 l7-4.04l7,4.04l-1.4,2.42L12,18.5z"/></svg>;

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", percentage: 95, icon: <ReactIcon />, animation: 'spin' },
      { name: "Next.js", percentage: 90, icon: <NextjsIcon />, animation: 'pulse' },
      { name: "TypeScript", percentage: 88, icon: <TypescriptIcon />, animation: 'shake' },
      { name: "Tailwind CSS", percentage: 92, icon: <TailwindIcon />, animation: 'shake' },
      { name: "Vue.js", percentage: 85, icon: <VuejsIcon />, animation: 'shake' },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", percentage: 95, icon: <JavaIcon />, animation: 'shake' },
      { name: "Spring Boot", percentage: 93, icon: <SpringBootIcon />, animation: 'pulse' },
      { name: "Node.js", percentage: 87, icon: <NodejsIcon />, animation: 'spin' },
      { name: "Python", percentage: 82, icon: <PythonIcon />, animation: 'spin' },
      { name: "GraphQL", percentage: 80, icon: <GraphqlIcon />, animation: 'spin' },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", percentage: 88, icon: <AwsIcon />, animation: 'pulse' },
      { name: "Docker", percentage: 90, icon: <DockerIcon />, animation: 'shake' },
      { name: "Kubernetes", percentage: 85, icon: <KubernetesIcon />, animation: 'spin' },
    ],
  },
];

export const PORTFOLIO_DATA: Project[] = [
    {
        title: "E-Commerce Microservices Platform",
        description: "Built a scalable e-commerce platform using Spring Boot microservices on AWS EKS with React frontend.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tags: ["Java", "Spring Boot", "React.js", "AWS", "Kubernetes"],
    },
    {
        title: "Financial Risk Assessment System",
        description: "Developed an AI-driven financial risk scoring system using machine learning models. Integrated with existing underwriting process.",
        image: "https://images.unsplash.com/photo-1642792969914-8d26f082e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tags: ["Python", "TensorFlow", "Java", "React.js"],
    },
    {
        title: "Real-time Analytics Dashboard",
        description: "Created a comprehensive analytics dashboard with real-time data visualization using React and D3.js.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tags: ["React.js", "TypeScript", "D3.js", "Node.js"],
    },
    {
        title: "DevOps Automation Pipeline",
        description: "Designed and implemented comprehensive CI/CD pipelines using Jenkins, Docker, and Kubernetes. Achieved 40% reduction in deployment cycles.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tags: ["Jenkins", "Docker", "Kubernetes", "AWS"],
    },
    {
        title: "Customer Sentiment Analysis Tool",
        description: "Built an NLP-powered sentiment analysis system for customer service transcripts. Improved customer retention by 12%.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tags: ["Python", "NLP", "scikit-learn", "Flask"],
    },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: "Full Stack Developer",
        company: "Capital One",
        period: "08/2024 to Current",
        location: "USA",
        status: "Current",
        description: [
            "Architected microservices using Spring Boot on AWS EKS, integrating third-party APIs and automating end-to-end workflows.",
            "Secured infrastructure with IAM, KMS, and VPC isolation, maintaining HIPAA and PCI compliance.",
            "Developed automated test scripts in Java using Robot Framework, increasing test coverage by 30%.",
            "Built robust CI/CD pipelines leveraging Jenkins, Docker, and Kubernetes, cutting deployment cycles by 40%.",
            "Mentored junior developers in best practices for microservices architecture and clean code."
        ]
    },
    {
        role: "Senior Software Developer",
        company: "Paytm",
        period: "11/2021 to 12/2022",
        location: "India",
        status: "Previous",
        description: [
            "Improved software reliability by implementing automated testing using Selenium and Postman.",
            "Managed AWS infrastructure (EC2, Lambda, RDS, API Gateway) to ensure scalable, reliable, and low-downtime environments.",
            "Executed CI/CD processes across dev, staging, and production using Docker and AWS.",
            "Optimized application performance by identifying and resolving backend bottlenecks, resulting in a 20% reduction in API response times."
        ]
    },
    {
        role: "Software Engineer",
        company: "Global Logic Technologies Pvt Ltd",
        period: "08/2018 to 10/2021",
        location: "India",
        status: "Previous",
        description: [
            "Translated business requirements into scalable Java-based solutions through collaboration with cross-functional teams.",
            "Developed and deployed RESTful APIs using Java, Spring Boot, and MongoDB.",
            "Built CI/CD pipelines using Jenkins and Terraform; integrated Prometheus and Grafana for real-time monitoring.",
            "Actively participated in Agile/Scrum ceremonies, contributing to sprint planning, daily stand-ups, and retrospectives to improve team velocity."
        ]
    },
];


export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: "Master of Administration: Information Technology",
        university: "Webster University",
        year: "2024"
    },
    {
        degree: "Bachelor of Science: Computer Science and Engineering",
        university: "Jawaharlal Nehru Technological University",
        year: "2019"
    }
]

export const HERO_IMAGE_URL = "shc.png";