import user from "../Images/user.jpg"

function ContactDetail ()  {
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user image"/>
                </div>
                <div className="content">
                    <div className="header">Geofrey</div>
                    <div className="description">geofrey@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail;