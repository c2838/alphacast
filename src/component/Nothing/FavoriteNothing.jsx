import emptyFolderImg from "../../assets/empty-folder.png";
import nothingStyle from "./Nothing.module.scss";

export default function FavoriteNothing() {
  return (
    <section className={nothingStyle.MainNothingContainer}>
      <div className={nothingStyle.addCastReminding}>
        <img className={nothingStyle.emptyImg} src={emptyFolderImg} alt="" />
        <span className={nothingStyle.remindingTxet}>
          您尚未收藏任何 Podcast
        </span>
      </div>
    </section>
  );
}
