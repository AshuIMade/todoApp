import { useState } from 'react';
//items= [] and heading which is string

//interface props{
  //items: string[],
  //heading:string,  
//}

function ListGroup({items,heading,onSelectItem}) {
  
  
  
  //let selctedIndex = -1;
  //const hanleClick = (event) => console.log(event);
  //hook
  const [selctedIndex,setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {items.map((city,index) =>
          <li style={selctedIndex === index ?
            { 'backgroundColor': 'red' } :
            { 'backgroundColor': 'white' }}
            className={
            selctedIndex === index ?
              'list-group-item active'
              : 'list-group-item'}
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}>
            {city}
          </li>)}
      </ul>
    </>
  );
}
export default ListGroup;