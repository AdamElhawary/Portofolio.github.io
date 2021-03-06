import React from 'react'
import '../../styles/aboutMe.css'
import myPhoto from '../../assets/me2.svg'
export default function AboutMe() {
    return (
        <div className='sectionContainer'>
            <h1 className='headtitles'>My Story</h1>
            <div className='subSectionContainer'>
                <div className='aboutMeText'>
                    <p>
                        I used to be a call center team manager,
                         <br />service matter expert working for Expedia.ca, Vodafone.UK and optimum.US.
                      <br />
                     I'd that weird feeling deep down that this's not what I wanna spend my life doing!
                     <br />
                     I started to look around despertly searching for my passion...
                     <br />
                        <strong>A few Months later</strong>...<br />
                       I got bored trying to complete a repetitive task on a specific website.
                       <br />
                        I wanted to do it faster! I started to learn Js/Html/Css.<br />
                        <strong>11/22/2012</strong>
                        I created a Chrome Extension to complete the task automatically "Best day of my life".
                      <br /> I'm a commited
                     <strong>Web Developer</strong> and finally I do what I love.
                    </p>
                </div>
                <div className='aboutMeImg' >
                    <img src={myPhoto} alt='Adam' />
                </div>
            </div>
        </div>
    )
}
