import './PricingCard.css'
import { FaCheck } from "react-icons/fa" 
import { Link } from 'react-router-dom'



const PricingCard = (props) => {

  const { hideLastIcon } = props

  return (
    <div className='card'>
        <div className="plan">
        <p className='free'>{props.plan}</p>
        <p className='best'>Best for a team getting started.</p>
        </div>

        <div className="amount">
        <p className='price'>₦{props.amount}</p>
        <p className='peruser'>per user, per month</p>
        </div>

        <div className="features">

            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>{props.feature}</p>
            </div>
            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>{props.feature2}</p>
            </div>
            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>{props.feature3}</p>
            </div>
             {!hideLastIcon && ( 
          <div className="features-icon">
            <FaCheck fill="#FFA500" />
            <p>{props.feature4}</p>
          </div>
        )}

        </div>
        <Link className='link' to="/signup">
        <button>Try for free</button>
        </Link>
       
       




    </div>
  )
}

export default PricingCard