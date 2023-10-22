import './CostYearPicker.css'

const CostYearPicker = (props) => {
    const changeYearHandler = (e) => props.onChange(e.target.value);
    
    return (
        <select name="year-picker" id="year-picker" onChange={changeYearHandler} value={props.value}>
            {props.options.map((e) => 
                <option 
                    value={e.value} 
                    key={e.value}
                >{e.label}
                </option>
            )}
        </select>
    );
}

export default CostYearPicker;