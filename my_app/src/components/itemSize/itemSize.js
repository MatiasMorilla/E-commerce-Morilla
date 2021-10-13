import { useContext } from 'react';
/* CUSTOM STYLE */
import './itemSize.css';
/* MATERIAL UI */
import {Button} from '@material-ui/core';


function ItemSize() {

  return (
    <>
        <div className="size-container">
          <h3>Talle:</h3>
           <div>
              <Button className="size-item" variant="outlined">35</Button>
              <Button className="size-item" variant="outlined">36</Button>
              <Button className="size-item" variant="outlined">37</Button>
              <Button className="size-item" variant="outlined">38</Button>
              <Button className="size-item" variant="outlined">39</Button>
              <Button className="size-item" variant="outlined">40</Button>
              <Button className="size-item" variant="outlined">41</Button>
              <Button className="size-item" variant="outlined">42</Button>
              <Button className="size-item" variant="outlined">43</Button>
           </div>
        </div>
    </>

  );
}

export default ItemSize;
