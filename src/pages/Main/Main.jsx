import { useMemo } from 'react';
import Card from '../../components/card/Card';
import CoinsList from '../../components/coinslist/CoinsList';
import FilterBlock from '../../components/filterblock/FilterBlock';
import styles from './styles.module.css'
const Main = ({balance, setBalance, coins, setCoins}) => {
//    const filterExpensiveCoins = () => {
//        console.log('--func work--');
//        return filteredCoins.filter((coin) => coin.price > 1000);
//    };
//    const expensiveCoins = filterExpensiveCoins();
//const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins])
    return(
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock setCoins={setCoins} />
            {coins.length>0 ? <CoinsList/> : <div>Loading...</div>}
        </main>
    );
};
export default Main