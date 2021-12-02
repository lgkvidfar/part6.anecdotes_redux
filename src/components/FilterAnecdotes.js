import React from "react"
import { connect } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const FilterAnecdotes = (props) => {
    const handleChange = (event) => {
        props.filterChange(event.target.value)
    }

    return (
        <div>
            filter <input name="filter" onChange={handleChange} />
        </div>
        )
}
export default connect(null, {filterChange}) (FilterAnecdotes)