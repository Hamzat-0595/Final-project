import './UserInfo.scss'
import img from '../../../assets/Rectangle 314.png'
const UserInfo = () => {
  return (
    <div>
     <div className="User__Action">
        <img className="User__img" src={img} />
        <button className="User__Button_Name">Кофетун</button>
        <button className="User__Button-Bloc">
          <div className="User__Button-Buy">Заказы</div>
        </button>
        <button className="User__Button-Meny">Меню</button>
        <button className="User__Button-Information">
          Информация о расторане
        </button>
      </div>
    </div>
  )
}

export default UserInfo
