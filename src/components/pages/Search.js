import React from 'react';
import { comicDisplay } from '../shared/comicDisplay.js';

//handle if GET fails (covers non-existent ids)
const getComicById = (comicId) =>
    fetch(`https://xkcd.now.sh/?comic=${comicId}`)
    .then(res => {
        if (res.ok)
            return res.json();
        else
            throw new Error('Could not get comic');
    })
    .catch(err => { throw new Error('Could not get comic') });

export default class Search extends React.Component {
    state = {
        comicId: "",
        searchedComic: {}
    }

    componentDidMount() {
        //set to comic 303 on page load
        this.setSearchedComic("303");
    }

    setSearchedComic = comicId => {
        getComicById(comicId)
            .then(searchedComic => this.setState({searchedComic}))
            .catch(err => {
                this.setState({searchedComic: {}});
                console.log(err);
            });
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
                    <input type="number" name="comicId" value={this.state.comicId}
                    className="searchInput"
                    max="2219" min="1"
                    onChange={this.handleChange}
                    required />
                    <input type="submit" value="Search" className="searchSubmit" />
                </form>
                <div>
                    {/* Displays not found message if searchedComic is empty or undef */}
                    {(this.state.searchedComic && Object.keys(this.state.searchedComic).length !== 0)
                    ? comicDisplay(this.state.searchedComic, "searchImage")
                    : "No comic found with that id. Please type another."}
                </div>
            </div>
        );
    }
}