import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  handleChange = event => {
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    const filteredResult = countryAndCapitalsList.filter(item => item.id === id)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <label>
            <select onChange={this.handleChange} className="select-box">
              {countryAndCapitalsList.map(item => (
                <option value={item.id} key={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </label>
          <h1>{filteredResult[0].country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
