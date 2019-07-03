import React from 'react'

const FilterStory = (props) => {

    const options = props.allStories.map((story, index) => {
        return <option value={index} key={index}>{story.title}</option>
    })

    function handleChange(event) {
        props.onTitleSelected(event.target.value)
    }

    return (
        <select id="story-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Choose a story...</option>
            {options}
        </select>
    )
}

export default FilterStory;