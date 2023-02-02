// import Hero from "./components/Hero"
// import Header from "./components/Header"
// import Section from "./components/Section"
// import Testimonial from "./components/Testimonial"
// import ContactUs from "./components/ContactUs"
// import Footer from "./components/Footer"
// import AboutUs from "./components/AboutUs"
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider} from '@mui/material/styles';
// // import Sidebar from './components/Sidebar';

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Poppins',
//       'sans-serif',
//     ].join(','),
//   },});

// function App() {
//   return (
//     <>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {/* <Header /> */}
//       <Hero />
//       <Section />
//       <AboutUs />
//       <Testimonial />
//       <ContactUs />
//       <Footer />
//       </ThemeProvider>
//     </>

//   );
// }

// export default App;



// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Route, Routes } from "react-router-dom";

// import Hero from "./components/AboutUs";
// import Header from "./components/Section";
// import Section from "./components/Testimonial";
// import Testimonial from "./components/Testimonial";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";


// function App() {
//   return (
    
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<AboutUs />} />
//           <Route path="/Section" element={<Section />} />
//           <Route path="/Hero" element={<Hero />} />
//           <Route path="/Testimonial" element={<Testimonial />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/Footer" element={<Footer />} />
          
          
//         </Routes>
        
//         </Sidebar>
        
     
    
//   );
// }
// export default App;


// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Side from "./components/Sidebar";
import Routes from "./components/Pathway";
function App() {
    return (
      <>
      
      <Side/>
      <Routes/>
        
      </>
  
    );
  }
  export default App;