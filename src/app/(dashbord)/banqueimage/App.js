import './App.css';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';
import React from 'react';
import './Loader.css';

let preselectedwords = ['mountain','sea','sky', 'bird', 'cars','beach','aircraft',]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "Sky",
      isLoading: false
    };
  }

  handleChangeSearch = (text) => {
    this.setState({ searchtext: text, isLoading: true }, () => {
      
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);
    });
  };

  changetobeach = (event) => {
    let text = event.target.outerText;
    this.setState({ searchtext: text });
  };

  render() {
    if (this.state.isLoading) {
      return <div className="loader"></div>;
    }
  
    return (
      <div>
        <Title />
        <SearchBar onSearch={this.handleChangeSearch} />
        <PresetSearch preselectedwords={preselectedwords} onclick={this.changetobeach} />
        <ImageResults searchtext={this.state.searchtext} />
      </div>
    );
  }
}

export default App;
