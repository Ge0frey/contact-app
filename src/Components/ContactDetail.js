import { Link } from "react-router-dom";
import user from "../Images/user.jpg"

function ContactDetail (props)  {
    //console.log(props)
        const contact = props.location?.state?.contact || {};
        const { name, email } = contact;
        return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user image"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to={"/"}>
                    <button className="ui button black center">Back to contact list</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail;