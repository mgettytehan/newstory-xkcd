import React from 'react';

const getLatestComic = () => 
    fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .catch(console.log);

export default class Latest extends React.Component {
    state = {
        comic: 0
    }

    componentDidMount() {
        getLatestComic().then(
            comic => { this.setState({comic}) }
        );
    }

    render() {
        return (
            <div className="latest">
                {!this.state.comic
                ? "No comic found"
                : (<img src={this.state.comic.img} alt={this.state.comic.title} className="latestImage" />)}
            </div>
        )
    }
}