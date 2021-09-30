/* CUSTOM STYLE */
import './itemSize.css';
import {Button} from '@material-ui/core';
import ItemCount from '../itemCount/itemCount';
/* MATERIAL UI */


function ItemSize() {
  return (
    <>
        <div className="size-container">
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

        <ItemCount stock={10} initial={1} />
    </>

  );
}

export default ItemSize;
