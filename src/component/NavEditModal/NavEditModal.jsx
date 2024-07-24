import editStyle from './NavEditModal.module.scss'

export default function NavEditModal() {
  return (
    <div className={editStyle.editContainer}>
      <ul className={editStyle.editList}>
        <li className={editStyle.editItem}>編輯分類</li>
        <li className={editStyle.editItem}>刪除分類</li>
        <li className={editStyle.editItem}>新增 Podcast</li>
      </ul>
    </div>
  );
}