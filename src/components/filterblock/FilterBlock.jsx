import React, { useContext } from 'react';
import './styles.css'
import { CoinsContext } from '../../context/CoinsContext';
import { useFilterCOins } from '../../helpers/hooks/UseFilterCoins';


const FilterBlock = ({setCoins}) => {

    const coinsContext = useContext(CoinsContext);
    const {coins} = coinsContext;
    const {setValue, value} = useFilterCOins(setCoins, coins)
    console.log('--render filter--');

    return (
        <div className='filter-block'>
        <input 
        onChange={(e) => setValue(e.target.value)} 
        value={value} 
        className='input' 
        type='text' 
        placeholder='bitcoin'
        />
    </div>
    );
};
export default React.memo(FilterBlock);