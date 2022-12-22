import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApplyforJob from "./Components/ApplyforJob";
import ContactUs from "./Components/ContactUs";
import CoverPage from "./Components/CoverPage";
import Home from "./Components/Home";
import JobLists from "./Components/JobLists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/coverpage" element={<CoverPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/joblists" element={<JobLists />} />
        <Route path="/applyjob" element={<ApplyforJob />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;