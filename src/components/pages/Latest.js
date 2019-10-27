import React from 'react';
import { comicDisplay } from '../shared/comicDisplay.js'

const getLatestComic = () => 
    fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .catch(console.log);

export default class Latest extends React.Component {
    state = {
        comic: {}
    }

    componentDidMount() {
        getLatestComic().then(
            comic => { this.setState({comic}) }
        );
    }

    render() {
        return (
            <div>
                {!Object.keys(this.state.comic)
                ? "No comic found"
                : comicDisplay(this.state.comic, "latestImage")
                }
            </div>
        )
    }
}