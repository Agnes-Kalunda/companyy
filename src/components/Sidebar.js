// import { NavLink } from "react-router-dom";
// import { FaBars, FaHome, FaUser } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// const routes = [
//   {
//     path: "/",
//     name: "Dashboard",
//     icon: <FaHome />,
//   },
//   {
//     path: "/users",
//     name: "Users",
//     icon: <FaUser />,
//   },
//   {
//     path: "/messages",
//     name: "Messages",
//     icon: <MdMessage />,
//   },
//   {
//     path: "/analytics",
//     name: "Analytics",
//     icon: <BiAnalyse />,
//   },
//   {
//     path: "/file-manager",
//     name: "File Manager",
//     icon: <AiTwotoneFileExclamation />,
//   },
//   {
//     path: "/order",
//     name: "Order",
//     icon: <BsCartCheck />,
//   },
//   {
//     path: "/saved",
//     name: "Saved",
//     icon: <AiFillHeart />,
//   },
//   {
//     path: "/settings",
//     name: "Settings",
//     icon: <BiCog />,
//   },
// ];

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       width: "140px",
//       padding: "5px 15px",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? "200px" : "45px",
//             transition: { duration: 0.5 },
//           }}
//           className={`sidebar `}
//         >
//           <div className="top_section">
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.h1
//                   variants={showAnimation}
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   className="logo"
//                 >
//                   DoSomeCoding
//                 </motion.h1>
//               )}
//             </AnimatePresence>

//             <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
//           <div className="search">
//             <div className="search_icon">
//               <BiSearch />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   type="text"
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//           <section className="routes">
//             {routes.map((route, index) => {
//               return (
//                 <NavLink
//                   to={route.path}
//                   key={index}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div className="icon">{route.icon}</div>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         variants={showAnimation}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="link_text"
//                       >
//                         {route.name}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </NavLink>
//               );
//             })}
//           </section>
//         </motion.div>

//         <main>{children}</main>
//       </div>
//     </>
//   );
// };

// export default SideBar;



import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Side() {
  const { collapseSidebar } = useProSidebar();
    return (
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Company</h2>

            
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>

        
      </Sidebar>

      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>

      </div>
    );
  }
  
  export default Side;