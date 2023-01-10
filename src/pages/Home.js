import React from 'react'
import NavigationComponent from '../components/navbar/NavigationComponent'
import About from '../components/about/About'


const Home = () => {
  return (
    <div className="home">
        <NavigationComponent></NavigationComponent>
        <About></About>
    </div>
  )
}

export default Home