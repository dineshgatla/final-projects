/* eslint-disable react/no-unescaped-entities */
import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: <a href="https://dineshgatla.github.io/music-page/">Music Page</a>,
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: (
      <a href="https://dineshgatla.github.io/tourism-website/">
        Tourism Website
      </a>
    ),
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: (
      <a href="https://dineshgatla.github.io/advanced-technologies/">
        Advanced Technologies
      </a>
    ),
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: (
      <a href="https://dineshgatla.github.io/happy-meals-static-website/">
        Happy Meals
      </a>
    ),
    description: 'Discover the best foods in over 1,000 restaurants.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: (
      <a href="https://dineshgatla.github.io/virtual-reality-website/">
        VR Website
      </a>
    ),
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: (
      <a href="https://dineshgatla.github.io/dinfood-website/">Din Foods</a>
    ),
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL:
      'https://lh3.googleusercontent.com/Aqc0Q1yGB1UuxTpRuktn1JRkRZcRiIT2_StWlbzM-mPVCSXz8ZTKEvtlcjvBGTUQ50-QrVEU7pt7IXmkTH0PJvut8lhOok2mrQ7ZnnoWeY5Fk2baf04q5CXtQpNVEjZjT6UCb4HIzzoAaJCA0ZdjxVby5JLKaMQp6D4GxV-TJTJDNcIdIikT6vkBrUO2gZzPnkbCdyy0tTS3_Uzkx0pEfKjc6WQCIdUdK9ymrY89wjAey4AH4PiiKpF5tF65933lVcFM49e13O4w9BVM7d-lZRLMGQT5FWzNq17TA_tl_4-dDCxbG30wAtQnFGntAspULp_U6zSvShdxI-3OBaSa7j9Ku5BEjFYpzYAtLyNZH1cd_tEmL1KWt5-TJmVCLEjboq8gIKja_wY5NH8hI6NT4KyuJkbu5vWgeBwpvqouP5Auwz9K6NVLQ_JZok7WDhoaJY6MQfwe6mW0Mo9XgjoriLvQiddAE2KiV1RXZOknN9ag0M6hNwnHSbzDECj6kGFMqO0L_1r1ly2Z-a8y2ezF7EeuehCIm6ouaPmlFe7QOQAt5Ng5ZMf20etREzKRsfeLMl3QhKrw1uYp11eiDgBhCraTGjTz2veo-YAJuaXmtO5wY2UYjD5rTOGnVYuvs8uyE_UO_0A6judEfym8Z6Z-b0L5CiQQxEpmOJBHYtPG5WjyzU6vRYGN18dm_sW7jbmUlXV8mgdhxhDutrUnIQ0VA3OyY9n33R2hLx2PNwBG08RwoWhNU16EH4Db8eWDiEyq19_Yge_J0DFvYCAbq5LNJBlhzA7eg-RIMCptUtSpfadJrJrmOGocz8oNbGNakWgwzU6kolGIppgcmBQUpSoykfqe9MbUg4hCqS6bBHvv0JC5sXahNYIs03LrS-mzsNhfX9q5f63N1hInGMUzTy5kfqjDsxxu_Y3FHSdVNeZtGMEdMpOFag=w640-h626-no?authuser=0',
    title: (
      <a href="https://dineshgatla.github.io/Portfolio-Website/"> Portfolio </a>
    ),
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: (
      <a href="https://dineshgatla.github.io/design-responsive-website/">
        Design
      </a>
    ),
    description:
      'A website to showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: (
      <a href="https://dineshgatla.github.io/speedtypetest/">
        Speed Typing Test
      </a>
    ),
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: (
      <a href="https://dineshgatla.github.io/random-joke/">Random Joke Page </a>
    ),
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: (
      <a href="https://dineshgatla.github.io/sizing-an-image/">
        Sizing An Image
      </a>
    ),
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
