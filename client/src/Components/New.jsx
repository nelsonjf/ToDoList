import React from "react"

function New () {
    return (
        <div>
            <h1>New ToDo</h1>
            <form>
                <input type="text" placeholder="Enter a new Task"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default New