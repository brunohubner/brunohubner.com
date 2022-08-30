import './styles.scss';

interface Props {
  img: string;
}

export function ProfileAvatar({ img }: Props) {
  return (
    <div className="ProfileAvatar">
      <div className="avatarImage">
        <img src={img} alt="Bruno Hubner" />
      </div>
    </div>
  );
}
