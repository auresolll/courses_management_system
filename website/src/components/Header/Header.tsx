import { useAuth0 } from "@auth0/auth0-react";
import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {
  layout: number;
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

const Header: FC<HeaderProps> = ({ layout, isOpen, setIsOpen }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Logo} onClick={() => navigate("/")}>
        <span>HỌC</span>
        <span>CÙNG</span>
        <span>THỊNH</span>
      </div>

      {layout === 0 && (
        <>
          <ul
            className={`${styles.Header__Nav__List} ${isOpen && styles.active}`}
          >
            <li className={styles.Header__Nav__List__Item}>Trang chủ</li>
            <li className={styles.Header__Nav__List__Item}>Thể loại</li>
            {!isAuthenticated && (
              <li
                className={styles.Header__Nav__List__Item}
                onClick={() => loginWithRedirect()}
              >
                Tham gia
              </li>
            )}
            <div
              className={styles.Header__Close}
              onClick={() => setIsOpen(false)}
            >
              <i className="ri-close-circle-fill"></i>
            </div>
          </ul>

          <div className={styles.Header__Toggle}>
            <i className="ri-menu-line" onClick={() => setIsOpen(true)}></i>
          </div>
        </>
      )}
      {layout === 1 && (
        <>
          <div className={styles.Header__Toggle}>
            <i className="ri-menu-line" onClick={() => setIsOpen(true)}></i>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
