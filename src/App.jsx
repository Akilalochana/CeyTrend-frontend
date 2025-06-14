import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AllCards from './pages/AllCards';
import CreateCard from './pages/CreateCard';
import DrawCard from './pages/DrawCard';
import AdminDashboard from './pages/admin/Dashboard';
import ManageCards from './pages/admin/ManageCards';
import ReviewApprovals from './pages/admin/ReviewApprovals';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cards" element={<AllCards />} />
              <Route path="/create-card" element={<CreateCard />} />
              <Route path="/draw-card" element={<DrawCard />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/manage-cards" element={<ManageCards />} />
              <Route path="/admin/review-approvals" element={<ReviewApprovals />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
