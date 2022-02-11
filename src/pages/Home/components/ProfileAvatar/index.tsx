import "./styles.scss"
import avatar from "../../../../temp/avatar.jpeg"

export function ProfileAvatar() {
    return (
        <div className="ProfileAvatar">
            <div className="avatarImage">
                <img src={avatar} alt="Bruno Hubner" />
            </div>
        </div>
    )
}
