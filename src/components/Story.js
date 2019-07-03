import React from 'react'

const Story = (props) => {
    if (!props) return null
    return (
        <div>
            <h2>{props.title}</h2>
            <a href={props.url}>{props.url}</a>

        </div>
    )

}

export default Story