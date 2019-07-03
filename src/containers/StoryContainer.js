import React, { Component } from 'react';
import TopStories from '../components/TopStories';
import FilterStory from '../components/FilterStory';

class StoryContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allStories: [],
            currentStory: null
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then((data) => {
                const newData = data.slice(0, 20);
                const promises = newData.map((id) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then(res => res.json());
                });

                Promise.all(promises)
                    .then((results) => {
                        this.setState({ allStories: results });
                    });
            });
    }

    handleSelectChange(index){
        const selectStory = this.state.allStories[index]
        this.state({currentStory: selectStory})
    }

    render() {
        return (
            <>
            <h1>Top Stories</h1>
            <FilterStory 
            allStories={this.state.allStories}
            onStorySelect={this.handleSelectChange} />
            <TopStories allStories={this.state.allStories} />
            </>
        )
    }
}

    export default StoryContainer;