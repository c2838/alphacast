import { useContext } from 'react';
import closeIcon from '../../assets/close-icon.svg'
import searchIcon from "../../assets/search-icon.svg";
import addStyle from './AddChannelModal.module.scss'
import { PodCastCardsContext } from '../../context/constContext';

export default function AddChannelModal() {
  const { handleClickAddChannel } = useContext(PodCastCardsContext)

  return (
    <div className={addStyle.addModalContainer}>
      <div className={addStyle.titleGroup}>
        <h2 className={addStyle.title}>新增 Podcast</h2>
        <button onClick={handleClickAddChannel}>
          <img src={closeIcon} alt="colse" className={addStyle.closeIcon} />
        </button>
      </div>
      <div className={addStyle.inputGroup}>
        <input
          type="text"
          placeholder="開始搜尋 ..."
          className={addStyle.searchInput}
        />
        <img src={searchIcon} alt="search" className={addStyle.searchIcon} />
      </div>
      <div className={addStyle.footer}>
        <button className={addStyle.cancelBtn} onClick={handleClickAddChannel}>取消</button>
        <button className={addStyle.addBtn}>確認新增</button>
      </div>
    </div>
  );
}