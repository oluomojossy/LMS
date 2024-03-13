import './ConfirmedEmail.css'
import Messages from "../../assets/Messages.png"


const ConfirmedEmail = () => {
  return (
    <div className='confirm'>
        <div className="messageImageDiv">
            <img src={Messages}/>
        </div>
        <h3>Email Address Confirmed!</h3>
        <button>Login</button>

    </div>
  )
}

export default ConfirmedEmail