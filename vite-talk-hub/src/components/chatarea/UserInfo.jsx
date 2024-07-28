import pic from "/src/assets/pic.png"
import './MainChatArea.css'

const UserInfo = () => {
  return (
    <div>
      <div className='user-info-container'>
        <div>
          <img src={pic} alt="" className='avatar'/>
          <p>Asad Ali</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo

