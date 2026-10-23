import React, { useState, useEffect } from 'react';
import './App.css'; 
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import PuppiesView from './components/PuppiesView';
import PuppyDetailView from './components/PuppyDetailView';
import FaqView from './components/FaqView';
import HowItWorksView from './components/HowItWorksView';
import ContactView from './components/ContactView';
import GoneHomeView from './components/GoneHomeView';
import HappyFamiliesView from './components/HappyFamiliesView';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);
  const [puppiesDatabase, setPuppiesDatabase] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ where: 'Everywhere', breeds: [], genders: [] });

  useEffect(() => {
    const mockData = [
      { id: 1, name: "Max", breed: "Maltipoo", gender: "Boy", age: "3 months", where: "Dubai", colorBg: "#e8f1f5", image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=500&q=80" },
      { id: 2, name: "Bella", breed: "Pomeranian", gender: "Girl", age: "2 months", where: "Korean Teacup", colorBg: "#fae8df", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80" },
      { id: 3, name: "Charlie", breed: "Poodle", gender: "Boy", age: "2.5 months", where: "Imported", colorBg: "#f1efe7", image: "https://images.unsplash.com/photo-1546447147-3fc2d118ea1f?auto=format&fit=crop&w=500&q=80" },
      { id: 4, name: "Luna", breed: "Cavapoo", gender: "Girl", age: "3 months", where: "Dubai", colorBg: "#f2e6d8", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80" },
      { id: 5, name: "Cooper", breed: "Shih Tzu", gender: "Boy", age: "2 months", where: "Imported", colorBg: "#fadbd8", image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=500&q=80" },
      { id: 6, name: "Daisy", breed: "Maltipoo", gender: "Girl", age: "2 months", where: "Korean Teacup", colorBg: "#d5f5e3", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80" },
      { id: 7, name: "Teddy", breed: "Pomeranian", gender: "Boy", age: "3 months", where: "Dubai", colorBg: "#fcf3cf", image: "https://images.unsplash.com/photo-1589146114881-3773cbb7790b?auto=format&fit=crop&w=500&q=80" },
      { id: 8, name: "Milo", breed: "Cavapoo", gender: "Boy", age: "2 months", where: "Imported", colorBg: "#e8f1f5", image: "https://images.unsplash.com/photo-1537151608804-ea2aa1427189?auto=format&fit=crop&w=500&q=80" },
    ];
    setPuppiesDatabase(mockData);
  }, []);

  const updateFilter = (category, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (category === 'where') newFilters.where = value;
      else if (category === 'breed') newFilters.breeds = prev.breeds.includes(value) ? prev.breeds.filter(b => b !== value) : [...prev.breeds, value];
      else if (category === 'gender') newFilters.genders = prev.genders.includes(value) ? prev.genders.filter(g => g !== value) : [...prev.genders, value];
      return newFilters;
    });
  };

  const setFilterAndGo = (type, value) => {
    setActiveFilters({ where: 'Everywhere', breeds: [], genders: [] });
    updateFilter(type, value);
    setCurrentView('puppies');
  };

  const showPuppyDetail = (id) => {
    setSelectedPuppyId(id);
    setCurrentView('detail');
  };

  const getSelectedPuppy = () => puppiesDatabase.find(p => p.id === selectedPuppyId || p._id === selectedPuppyId);

  return (
    <div className="app-container">
      <Navigation setCurrentView={setCurrentView} />

      {currentView === 'home' && <HomeView setCurrentView={setCurrentView} setFilterAndGo={setFilterAndGo} />}
      
      {/* PERFECTLY PASSED setCurrentView PROPS HERE: */}
      {currentView === 'puppies' && <PuppiesView puppies={puppiesDatabase} activeFilters={activeFilters} updateFilter={updateFilter} showPuppyDetail={showPuppyDetail} setCurrentView={setCurrentView} />}
      
      {currentView === 'detail' && <PuppyDetailView puppy={getSelectedPuppy()} goBack={() => setCurrentView('puppies')} />}
      {currentView === 'faq' && <FaqView />}
      {currentView === 'how-it-works' && <HowItWorksView />}
      {currentView === 'contact' && <ContactView />}
      {currentView === 'happy-families' && <HappyFamiliesView setCurrentView={setCurrentView} />}
      {/* GONE HOME ROUTE */}
      {currentView === 'gone-home' && <GoneHomeView setCurrentView={setCurrentView} />}
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}
