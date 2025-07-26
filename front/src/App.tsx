import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Couerses from './pages/Couerses';
import NotFound from './pages/NotFound';
import CourseDetail from './pages/CourseDetail';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ShoppingCart from './pages/ShoppingCart';
import CanWatch from './pages/CanWatch';
import CanNotWatch from './pages/CanNotWatch';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-700">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Couerses />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/canwatch" element={<CanWatch />} />
              <Route path="/cannotwatch" element={<CanNotWatch />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}