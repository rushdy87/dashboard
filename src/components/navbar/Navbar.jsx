import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Cart, Chat, Notification, UserProfile } from "../";
import NavButton from "../nav-button/NavButton";
import avatar from "../../data/avatar.jpg";
import { useStateContext } from "../../context/context-provider";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize());

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
        color="blue"
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color="blue"
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color="blue"
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color="blue"
          dotColor="#03C9D7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className=" flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className=" rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p className=" text-gray-400 text-14">
              <span>Hi, </span> <span className="font-bold ml-1">Rushdy</span>
            </p>
            <MdKeyboardArrowDown className=" text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
