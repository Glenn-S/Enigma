import React from 'react';
import Stock from './Stock';
import API from '../utils/API';

// example borrowed from
// https://designrevision.com/react-axios/

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  // adjust this to make an api call to IEX Cloud api and pull in stock data
  // change from being component did mount to be a button call to get the data
  // and accept parameters to call the api
  async componentDidMount() {
    try {
      let userData = await API.get('/', {
        params: {
          results: 1,
          inc: 'name,email,picture'
        }
      });
      userData = userData.data.results[0];

      const name = `${userData.name.first} ${userData.name.last}`;
      const avatar = userData.picture.large;
      const email = userData.email;

      this.setState({
        ...this.state, ...{
          isLoading: false,
          name,
          avatar,
          email
        }
      });
    } catch(e) {
      console.log(`Axios request failed: ${e}`);
    }
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <div>
        <Stock isLoading={isLoading} name={name} avatar={avatar} email={email} />
      </div>
    );
  }
}