import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
        img: project1, 
        title: "TradeSystem",
        description: "Developed a real-time stock market analysis system with live data fetching and caching.",
        date: "March 2025 - Present",
        details: [
          "Tools & technologies used: Python, Flask, PostgreSQL, Angel Smart API, Git",
          "Built a system to fetch, cache, and update live stock data for market analysis.",
          "Implemented real-time stock price tracking and market parameter analysis for option strategies.",
          "Created a webhook to log trades to a csv(paper trading) when a certain criteria is met as per the strategy.",
        ],
        links: {
          site: "#",
          github: "https://github.com/LuciFr01/TradeSystem", 
        },
    }
    ,
    {
      img: project2, 
      title: "Chemical Plant Process Optimization Dashboard",
      description: "Developed a real-time analytics dashboard for optimizing chemical manufacturing processes.",
      date: "January 2025 - Present",
      details: [
        "Tools & technologies used: Python, Flask, React, PostgreSQL, MQTT",
        "Implemented real-time monitoring of reactor parameters (temperature, pressure, flow rates) using IoT sensors.",
        "Designed a machine learning model to predict optimal conditions for improving chemical yield.",
        "Developed an interactive dashboard for data visualization and anomaly detection.",
        "Optimized database queries, reducing data retrieval time by 30ms using indexing and query tuning.",
      ],
      links: {
        site: "#",  
        github: "#", 
      },
    },
    {
      img: project4,
      title: "E-Commerce Platform",
      description: "An e-commerce platform with various features.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4, 
      title: "AI Pest Detection in Potatoes",
      description: "Developed a deep learning-based system for detecting and classifying potato pests using AI.",
      date: "August 2024 - Present",
      details: [
        "Tools & technologies used: Python, TensorFlow, OpenCV, Flask, React",
        "Collected and preprocessed a dataset of potato pest images for training a deep learning model.",
        "Implemented a Convolutional Neural Network (CNN) for real-time pest classification with 90% accuracy.",
        "Developed a web-based interface for farmers to upload images and receive pest detection results.",
        "Optimized model inference speed using TensorRT, reducing prediction time by 40%.",
      ],
      links: {
        site: "#",  
        github: "#", 
      },
    },
    {
      img: project6,
      title: "NFC Parking Management System",
      description: "Designed and implemented an NFC-based parking management system for commercial buildings.",
      links: {
        site: "#",
        github: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
