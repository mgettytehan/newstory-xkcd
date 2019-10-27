import React from 'react';
import { comicDisplay } from '../shared/comicDisplay.js';

const getComicById = (comicId) =>
    fetch(`https://xkcd.now.sh/?comic=${comicId}`)
    .then(res => res.json())
    .catch(console.log);

export default class Search extends React.Component {
    state = {
        comicId: "",
        searchedComic: {}
    }

    componentDidMount() {
        //set to comic 1 on page load
        this.setSearchedComic("1");
    }

    setSearchedComic = comicId => {
        getComicById(comicId)
            .then(searchedComic => this.setState({searchedComic}));
    }

    handleChange = evnt => {
        this.setState({ [evnt.target.name]: evnt.target.value });
    }

    handleSubmit = evnt => {
        evnt.preventDefault();
        this.setSearchedComic(this.state.comicId);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="comicId" value={this.state.comicId} className="searchInput" onChange={this.handleChange} required />
                    <input type="submit" value="Search" className="searchSubmit" />
                </form>
                <div>
                    {/* Displays not found message if searchedComic is empty or undef */}
                    {(this.state.searchedComic && Object.keys(this.state.searchedComic).length !== 0)
                    ? comicDisplay(this.state.searchedComic, "searchImage")
                    : "No comic found with that id"}
                </div>
            </div>
        );
    }
}