import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Card_Generate.scss';

let nextId = 0;
const Card_Generate = () => {
  const [array_num, setArray_num] = useState(JSON.parse(window.localStorage.getItem("array_num")));

  const generate_random_number = () => {
    const random_number = Math.floor(Math.random() * 100);
    setArray_num([
      ...array_num,
      { id: nextId++, name: random_number }
    ])
  };

  const onRemove_number = (id) => {
    setArray_num((array_num) => array_num.filter((el) => el.id !== id));
  };

  const sort_array = () => {
    const sorted_array = [...array_num].sort((a, b) => a.name - b.name);
    setArray_num(sorted_array);
  };

  useEffect(() => {
    window.localStorage.setItem("array_num", JSON.stringify(array_num));
  }, [array_num]);

  return (
    <>
      <Header generate_random_number={generate_random_number} sort_array={sort_array} />
      <div className='Card_Generate'>
        {array_num.map(num => (
          <Card key={num.id} onRemove={() => onRemove_number(num.id)}>{num.name}</Card>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Card_Generate;