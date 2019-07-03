import React from 'react'
import Story from './Story'

const TopStories = (props) => {
    if (props.allStories == null || props.allStories.length === 0) {
        return <p>Loading Stories...</p>
    } 
    return (
        <ul>
            {props.allStories.map((story, index) =>
            <Story 
            title={story.title}
            url={story.url}
            key={index}
            value={index}
            /> 
            )   
            }
        </ul>
    )
}

export default TopStories;