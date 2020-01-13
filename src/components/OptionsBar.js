import React from 'react'

const OptionsBar = ({changeFunctions, currentDisplay, changeStatOpts}) => {

    return (<div>
        <form>
            <label>Sort by: </label>
            <select name="sortOpt" onChange={changeFunctions} value={currentDisplay.sortOpt}>
                <option value='id'>Pokedex #</option>
                <option value='name'>Name</option>
                <option value='height'>Height</option>
                <option value='weight'>Weight</option>
            </select> <br/>
            <label>Filter by Type:</label>
            <select name="filterOpt" onChange={changeFunctions} value={currentDisplay.filterOpt}>
                <option value="">None</option>
                <option value='bug'>Bug</option>
                <option value='dragon'>Dragon</option>
                <option value='electric'>Electric</option>
                <option value="fight">Fight</option>
                <option value="fire">Fire</option>
                <option value='flying'>Flying</option>
                <option value='ghost'>Ghost</option>
                <option value="grass">Grass</option> 
                <option value='ground'>Ground</option>
                <option value='ice'>Ice</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value='psychic'>Psychic</option>
                <option value='rock'>Rock</option>
                <option value='water'>Water</option>
            </select> <br />
            <label>Filter by Stat Minimum</label>
            <select name='statName' onChange={changeStatOpts} value={currentDisplay.statOpts.statName}>
                <option value="">None</option>
                <option value="speed">Speed</option>
                <option value="special-defense">Special Defense</option>
                <option value="special-attack">Special Attack</option>
                <option value="defense">Defense</option>
                <option value="attack">Attack</option>
                <option value="hp">HP</option>
            </select>
            <input type='number' onChange={changeStatOpts} name='minValue' value={currentDisplay.statOpts.minValue} min='0' step='5' max='250' />

        </form>        
        </div>)
}

export default OptionsBar