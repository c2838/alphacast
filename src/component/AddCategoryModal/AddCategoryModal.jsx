import { useContext } from "react";
import closeIcon from "../../assets/close-icon.svg";
import cateGoryModalStyle from "./AddCategoryModal.module.scss";
import { NavCastCategoryListContext } from "../../context/constContext";

export default function AddCategoryModal() {
  const { handleClickAddCategory } = useContext(NavCastCategoryListContext)
  return (
    <div className={cateGoryModalStyle.categoryModalContainer}>
      <div className={cateGoryModalStyle.titleGroup}>
        <h3 className={cateGoryModalStyle.title}>新增分類</h3>
        <button onClick={handleClickAddCategory}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
      <div className={cateGoryModalStyle.inputGroup}>
        <input
          type="text"
          placeholder="請輸入分類名稱"
          className={cateGoryModalStyle.searchInput}
        />
      </div>
      <div className={cateGoryModalStyle.footer}>
        <button className={cateGoryModalStyle.cancelBtn} onClick={handleClickAddCategory}>取消</button>
        <button className={cateGoryModalStyle.addBtn}>儲存</button>
      </div>
    </div>
  );
}
