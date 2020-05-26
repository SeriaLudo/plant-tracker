import React from 'react'
import ReactDOM from 'react-dom'
import './MainPage.scss'
import DailyTodo from '../../components/DailyTodo'
import PlantList from '../../components/PlantList'
import PlantDetail from '../../components/PlantDetail'

const housePlants = require('../../HousePlants.json');

class MainPage extends React.Component {

  getPlantOptions() {
    return housePlants.map(plant => {
      return {
        id: plant.id,
        name: plant.name
      }
    });
  }

  render () {
    console.log('mapped:', this.getPlantOptions());
    return (
      <div>
        <div className='daily-row row'>
          <DailyTodo/>
        </div>
        <div className='list-detail-row row'>
          <div className='list-column'>
            <PlantList
              plants={this.getPlantOptions()}
            />
          </div>
          <div className='detail-column'>
            <PlantDetail/>
          </div>
        </div>
      </div>
    )
  }
}
export default MainPage;