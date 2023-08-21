import { useContext } from 'react';
import './styles.css'
import { CoinsContext } from '../../context/CoinsContext';


const CoinsList = () => {
    const coinsContext = useContext(CoinsContext);
    const {filteredCoins} = coinsContext
    
    return <ul className='coins-list'>
        {filteredCoins.map(coin => {
            return <li className='coin-item' key={coin.uuid}>
                <div className='coin-item_info'>
                    <img className='coin-item_logo' src={coin.iconUrl} alt={coin.name}/>
                    <p style={{color: coin.color}}>
                        {coin.name}/USD
                    </p>
                </div>
                <div className='coin-item_price'>
                <p style={{color: coin.color}}>{(+coin.price).toFixed(2)} USD</p>
                <p style={{color: coin.color}}>{(+coin.btcPrice).toFixed(2)} BTC</p>
                </div>
            </li>
        })}
    </ul>;
};
export default CoinsList;