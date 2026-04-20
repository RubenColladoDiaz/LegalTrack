import { useContext } from "react";
import { UserContext } from "../../../contexts";

function LeftBar() {
  const userContext = useContext(UserContext);
  return (
    <div>
      {userContext.user?.username}
      {userContext.user?.email}
    </div>
  );
}
export default LeftBar;
