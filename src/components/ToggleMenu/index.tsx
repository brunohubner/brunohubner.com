import './styles.scss';
import { VscMenu, VscClose } from 'react-icons/vsc';
import { useToggleMenu } from '../../context/ToggleMenuContext';

export function ToggleMenu() {
  const { isOpen, toggleMenu } = useToggleMenu();

  return (
    <div onClick={() => toggleMenu()} className="ToggleMenu">
      {isOpen ? <VscClose size={28} /> : <VscMenu size={24} />}
    </div>
  );
}
