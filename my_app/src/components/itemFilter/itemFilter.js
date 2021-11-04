/* CUSTOM STYLES */
import './itemFilter.css';
/* MATERIAL UI */
import { Accordion, AccordionDetails, AccordionSummary, Slider, Button } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function valuetext(rangeValue) {
    return `$${rangeValue}`;
}

function valuetext2(rangeSize) {
    return `${rangeSize}`;
}

const ItemFilter = ({rangeValue, rangeSize, handleRangeValue, handleRangeSize, handleResetFilters}) => 
{
    return(
        <div className="filter-container">
            <h2>Filtros</h2>
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
                        valueLabelDisplay="on"
                        valueLabelFormat={valuetext}
                        min={0}
                        max={19000}
                        step={1000}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Talle
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                        value={rangeSize}
                        onChange={handleRangeSize}
                        aria-label="Small steps"
                        getAriaValueText={valuetext2}
                        step={1}
                        marks
                        min={36}
                        max={45}
                        valueLabelDisplay="auto"
                    />
                </AccordionDetails>
            </Accordion>
            <Button 
                variant="outlined" 
                color="primary" 
                className="btn-limpiarFiltro"
                onClick={handleResetFilters}
            >
              Limpiar Filtros
            </Button>
        </div>
    );
}

export default ItemFilter;