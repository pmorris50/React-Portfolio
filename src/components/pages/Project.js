import React from 'react';
import MyCard from '../Card'


const projects = [
    {
        name: 'Workout Generator',
        details: {
            url: 'https://bootycamp.herokuapp.com/',
            description: 'A full stack application that uses mySql, javascript, CSS bootstrap, and HTMl to allow users to create a profile, select equipment, and be shown exercises reflecting that equipment.',
            repo: 'https://github.com/pmorris50/Workout-Creator',
            tech: [
                "nodeMailer",
                "mySQL"
            ],

        }
    },
    {
        name: 'Weekly Task Manager',
        details: {
            url: 'https://val-gee.github.io/weekly-task-manager/',
            description: 'A small project, using vanilla javascript, html, and CSS incorporating API requests. This application allows the user to keep track of weekly tasks and stay motivated',
            repo: 'https://github.com/Val-gee/weekly-task-manager',
            tech: [
                'Open Weather APi',
                'Javascript',
                'MDBootstrap'
                ,]
        }
    },
    {
        name: 'React Portfolio',
        details: {
            url: ' https://pmorris50.github.io/React-Portfolio/',
            description: 'My personal portfolio, highlighting my projects using the React framework',
            repo: 'https://github.com/pmorris50/React-Portfolio',
            tech: [
                'React',
                'react-bootstrap',
                'javascript'
            ]

        }
    },
    {
        name: 'Home Town Hero',
        details: {
            url: 'https://hometownhero.herokuapp.com/',
            description: 'This application allows a pro athlete/college athlete to log in as an admin, create a youth camp for a user to register and purchase products through his/her shop',
            repo: 'https://github.com/pmorris50/HometownHero',
            tech: [
                "React",
                "GraphQL",
                "Bootstrap"
            ],

        }
    },
];


function Project(props) {
    const style = {
        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          padding: '16px',
          boxSizing: 'border-box',
          backgroundImage: 'linear-gradient(to right, #f5f5f5, #e0e0e0)'
        },
      };
    
      return (
        <div style={style.container}>
          {projects.map((project) => (
            <MyCard key={project.id} project={project} />
          ))}
        </div>
      );
    }

export default Project



// <div className = "pContainer">


