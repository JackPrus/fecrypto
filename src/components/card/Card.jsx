import { WithRuBalance } from '../../helpers/hock/WithRuBalance';
import './styles.css'


const Card = ({ balance, setBalance, ruBalance}) => {
    console.log({ruBalance});
    return <div className='card'>

        <div className='card-block'>
            <p>Crypto-Finance</p>
            <button onClick={() => setBalance(setBalance)}>Add money</button>
        </div>
        <div className='card-block'>
            <p>Dmitry Proger</p>
            <p>{balance} $</p>
        </div>


    </div>;
};
export default WithRuBalance(Card);