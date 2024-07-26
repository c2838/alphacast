import { useContext } from 'react';
import editStyle from './NavEditModal.module.scss'
import { PodCastCardsContext } from '../../context/constContext';

export default function NavEditModal() {
  const { handleClickAddChannel } = useContext(PodCastCardsContext)
  return (
    <div className={editStyle.editContainer}>
      <ul className={editStyle.editList}>
        <li className={editStyle.editItem}>編輯分類</li>
        <li className={editStyle.editItem}>刪除分類</li>
        <li className={editStyle.editItem} onClick={handleClickAddChannel}>新增 Podcast</li>
      </ul>
    </div>
  );
}