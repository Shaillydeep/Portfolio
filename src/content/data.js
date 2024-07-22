// This file contains the content for the portfolio website.

// Import images
import hospitalDataAnalysis from '../assets/hospital-data-analysis.png';

import python from '../assets/python.png';
import mysql from '../assets/mysql.png';
import powerBI from '../assets/powerbi.png';
import excel from '../assets/excel.png';
import react from '../assets/react.png';

export default{
    "experience": [
        {
            "role": "Trainee Data Analyst",
            "company": "DRDO - INMAS",
            "duration": "April 2024 - May 2024",
            "responsibilities": [
                "Utilize tools (Excel, Python & SQL) to clean, manipulate, and analyze data sets.",
                "Utilize programming languages and database tools for data manipulation, filtration, and analysis tasks. ",
                "Assist in the development of data models and visualizations.",
                "Leverage pivot tables and data filtering techniques in Excel to identify key trends.",
            ],
            "isOpen": false
        },
        {
            "role": "Data Analyst Intern",
            "company": "IBM - CSRBOX",
            "duration": "June 2023 - May 2023",
            "responsibilities": [
                "Analyze data sets using Python (pandas & plots) to identify trends and patterns.",
                "Apply data cleaning techniques to ensure data quality and consistency.",
                "Learn and implement machine learning algorithms for predictive analytics.",
                "Receive mentorship from IBM Experts on data analysis and model building."
            ],
            "isOpen": false
        }
    ],

    "skills": [
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "Data Wrangling, Analysis & Visualization",
        "Predictive Modelling",
        "ReactJs",
        "VueJs",
        "CSS",
        "HTML",
        "Computer Vision",
        "Machine Learning",
        "Google Cloud Platform"
    ],

    "projects": [
        {
            "title": "Hospital Patient Disease Data Analysis & Predictive Modelling",
            "year": 2024,
            "description": "I harnessed machine learning to predict 49 diseases based on a patient's symptoms, age, and sex. This project involved wrangling messy medical records, transforming data into a format the model could understand, and visualizing results to uncover patterns for more informed diagnoses.",
            "outcome": "The predictive model achieved an accuracy of 98%. This high accuracy rate can help doctors make more informed decisions and provide better care to patients. The project also highlighted the potential of machine learning in healthcare to improve patient outcomes and reduce costs.",
            "role": [
                "Data Analyst",
                " Machine Learning Engineer"
            ],
            "deliverables": [
                "Data Wrangling",
                "Feature Engineering",
                "Model Training",
                "Model Evaluation"
            ],
            "imagePath": hospitalDataAnalysis
        },
        {
            "title": "Eateries Customer Segmentation",
            "year": 2023,
            "description": "This project highlights my ability to transform raw data into customer insights that can inform targeted marketing strategies. I used k-means clustering to segment student customers at on-campus eateries based on their spending habits and preferences. By wrangling data on purchases, I revealed four distinct student groups: budget-minded Chinese food lovers, students with a sweet tooth for snacks, those who splurge on fast food, and occasional diners.",
            "outcome": "The insights from this project informed the dining services team on how to better target and engage with students. For example, they could create promotions for the budget-minded Chinese food lovers or offer new snack options for students with a sweet tooth.",
            "role": [
                "Data Analyst",
                "Business Intelligence Analyst"
            ],
            "deliverables": [
                "Data Wrangling",
                "Exploratory Data Analysis",
                "Customer Segmentation",
                "Insights Presentation"
            ],
        }
    ],

    hero: {
        textContent: "Shailly Deep",
        subText: "Currently looking for opportunities",
        desc: ["I'm an analyst based in New Delhi, India. "," Proficient in tools like Python, SQL, and advanced Excel."],
        funFact: ["My other skills also include basic Front-end Web Development using React, Vue."," Fun Fact: This website is also built using Vue."],
    },

    about: {
        greeting: ['Hi, I\'m Shailly!','A data analyst by day, a curious learner by night. I\'m always expanding my skillset and exploring new ways to leverage data for good.'],
        details: [
            'Hey there! I\'m Shailly Deep, an aspiring Data Analyst based in Delhi. I have recently completed my B.Tech Computer Science Engineering degree from SRM University. I have 8 months of work experience.',
            'I leverage my knowledge of data manipulation, analysis (using tools like SQL and Python), and visualization and ChatGPT to tell compelling data stories. I love to find new and interesting hidden patterns and turning data into solutions.',
            'I also like tinkering with other technologies & fields like computer vision, web development frameworks broadening my analytical toolkit to tackle real-world challenges from diverse perspectives.',
        ],    
    },

    links: {
        linkedin: "https://www.linkedin.com/in/shailly-deep-481aa42b2/",
        github: "https://github.com/Shaillydeep",
        mailLink: "mailto:shaillydeep999@gmail.com",
        mail: " shaillydeep999@gmail.com"
    }, 

    carousel: {
        images: [
            python,
            mysql,
            powerBI,
            excel,
            react
        ],
        imageCount: 4,
    }
}
