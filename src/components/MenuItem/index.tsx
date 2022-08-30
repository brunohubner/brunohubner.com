import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { useToggleMenu } from '../../context/ToggleMenuContext';

interface Props {
  label: string;
  href: string;
  selected: boolean;
}

export function MenuItem({ href, label, selected }: Props) {
  const navigate = useNavigate();
  const { toggleMenu } = useToggleMenu();

  const handleNavigate = () => {
    navigate(`/projects/${href}`);
    toggleMenu();
  };

  return (
    <li
      onClick={handleNavigate}
      className={`${selected ? 'selected' : ''} MenuItem`}
    >
      {label}
    </li>
  );
}
