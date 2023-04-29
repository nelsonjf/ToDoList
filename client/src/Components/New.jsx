import React from "react"

function New (props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a new Task"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default New