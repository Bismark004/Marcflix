import React from 'react'


function SearchBoX (props) {
    function onChange (event) {
        props.setSearch(event.target.value)
    }
    return (
        <div>
            <input type='text'
             placeholder='type to search...'
             value={props.value}
             onChange={onChange}/>
        </div>

    )
}
export default SearchBoX;