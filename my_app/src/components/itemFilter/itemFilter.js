/* CUSTOM STYLES */
import './itemFilter.css';
/* MATERIAL UI */
import { Accordion, AccordionDetails, AccordionSummary, Slider } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function valuetext(rangeValue) {
    return `$${rangeValue}`;
}

const ItemFilter = () => 
{
    const [rangeValue, setRangeValue] = useState([0, 19000]);

    const handleRangeValue = (event, value) => {
        setRangeValue(value);
    }

    console.log(rangeValue);

    return(
        <div className="filter-container">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Precio
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                        value={rangeValue}
                        onChange={handleRangeValue}
                        valueLabelDisplay="auto"
                        valueLabelFormat={valuetext}
                        min={0}
                        max={19000}
                        step={1000}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default ItemFilter;