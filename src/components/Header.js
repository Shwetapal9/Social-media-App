// import { BiBookmark, BiBell, BiUser } from "react-icons/bi";
import {
  GoHomeFill,
  GoBellFill,
  GoBookmarkFill,
  GoPersonFill,
} from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <div className="title">TravelMedia.in</div>
      <div className="nav-items">
        <ul>
          <li>
            <GoHomeFill />
          </li>
          <li>
            <GoBellFill />
          </li>
          <li>
            <GoBookmarkFill />
          </li>
          <li>
            <GoPersonFill />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
