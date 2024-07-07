import emptyFolderImg from '../../assets/empty-folder.png'
import nothingStyle from './MainNothing.module.scss'

export default function MainNothing() {
  return (
    <section className={nothingStyle.MainNothingContainer}>
      <div className={nothingStyle.addCastReminding}>
        <img className={nothingStyle.emptyImg} src={emptyFolderImg} alt="" />
        <span className={nothingStyle.remindingTxet}>
          您尚未加入任何 Podcast，可以點擊按鈕新增！
        </span>
      </div>
      <button className={nothingStyle.addBtn}>
        <span className={nothingStyle.btnText}>新增 Podcast</span>
      </button>
    </section>
  );
}