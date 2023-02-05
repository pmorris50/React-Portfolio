import React from 'react';
import MyCard from '../Card'



function Project(props) {
    const style = {
    
        background: {
            background: '#B3B4B5'
        }
    }

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
                url: '',
                description: 'My personal portfolio, highlighting my projects using the React framework',
                repo: 'https://github.com/pmorris50/React-Portfolio',
                tech: [
                    'React',
                    'react-bootstrap',
                    'javascript'
                ]

            }
        }
    ];




    return (
        <div style = {style.background}>
            
                <MyCard projects={projects[0]} />
                <MyCard  projects={projects[1]} />
                <MyCard projects={projects[2]} />
            
        </div>
    )
}

export default Project


