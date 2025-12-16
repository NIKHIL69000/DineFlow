import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import { MenuItem, Category } from '../types';
import { useStore } from '../context/StoreContext';
import { Plus, Sparkles, X, Flame } from 'lucide-react';
import { GeminiService } from '../services/geminiService';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('starters');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { addToCart } = useStore();
  
  // AI State
  const [showAI, setShowAI] = useState(false);
  const [mood, setMood] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({ ...item, cartId: Date.now().toString(), quantity: 1 });
    setSelectedItem(null);
  };

  const handleAskAI = async () => {
    if (!mood.trim()) return;
    setAiLoading(true);
    setRecommendation('');
    const result = await GeminiService.getRecommendation(mood);
    setRecommendation(result);
    setAiLoading(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div className="pb-8">
      {/* AI Suggestion Banner */}
      <motion.div 
        className="mb-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-lg cursor-pointer relative overflow-hidden group"
        onClick={() => setShowAI(true)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white/20 transition-all" />
        <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Sparkles size={24} className="text-white" />
            </div>
            <div>
                <h3 className="font-bold text-lg">Not sure what to eat?</h3>
                <p className="text-sm text-white/90">Ask our AI Chef for a personalized recommendation</p>
            </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 pb-2 sticky top-0 bg-neutral-900/95 backdrop-blur z-20 py-2 -mx-4 px-4 md:mx-0 md:px-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as Category)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id 
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25 scale-105' 
                : 'bg-neutral-800 text-neutral-400 border border-neutral-700 hover:border-neutral-500 hover:text-neutral-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Grid - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-700/50 group cursor-pointer flex flex-col"
            onClick={() => setSelectedItem(item)}
          >
            <div className="h-48 md:h-56 w-full relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-60" />
              {item.isVeg ? (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-lg border-2 border-green-500 flex items-center justify-center bg-black/40 backdrop-blur-md" title="Vegetarian">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              ) : (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-lg border-2 border-red-500 flex items-center justify-center bg-black/40 backdrop-blur-md" title="Non-Vegetarian">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{item.name}</h3>
                    <span className="text-lg font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded-lg">₹{item.price}</span>
                </div>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-4 flex-1">{item.description}</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                  className="w-full bg-neutral-700 hover:bg-white hover:text-black text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300"
                >
                    <Plus size={18} /> Add to Cart
                </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Item Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-neutral-900 w-full max-w-lg rounded-3xl overflow-hidden border border-neutral-800 max-h-[90vh] flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-72">
                <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover" 
                    onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-colors">
                    <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                    <h2 className="text-3xl font-bold font-serif text-white mb-1">{selectedItem.name}</h2>
                    <span className="text-xl font-bold text-amber-500">₹{selectedItem.price}</span>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                
                <div className="mb-8">
                    <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedItem.ingredients.map(ing => (
                            <span key={ing} className="text-sm bg-neutral-800 text-neutral-300 px-4 py-1.5 rounded-full border border-neutral-700">{ing}</span>
                        ))}
                    </div>
                </div>

                <button 
                  onClick={() => handleAddToCart(selectedItem)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all"
                >
                    Add to Order <span className="text-black/60 mx-1">•</span> ₹{selectedItem.price}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Modal */}
      <AnimatePresence>
        {showAI && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
           >
              <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-serif text-white flex items-center gap-2"><Sparkles className="text-amber-500" /> AI Chef</h2>
                      <button onClick={() => setShowAI(false)} className="text-neutral-500 hover:text-white"><X /></button>
                  </div>
                  
                  {!recommendation ? (
                      <>
                        <p className="text-neutral-400 mb-4">Tell me what you're in the mood for (e.g., "something spicy but vegetarian" or "heavy comfort food").</p>
                        <textarea 
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white mb-4 focus:ring-2 focus:ring-amber-500 outline-none resize-none h-32 placeholder:text-neutral-600"
                            placeholder="I'm feeling..."
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                        />
                        <button 
                            onClick={handleAskAI}
                            disabled={aiLoading}
                            className={`w-full bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 ${aiLoading ? 'opacity-50' : 'hover:bg-neutral-200'}`}
                        >
                            {aiLoading ? <span className="animate-pulse">Thinking...</span> : 'Get Recommendation'}
                        </button>
                      </>
                  ) : (
                      <div className="bg-neutral-800 p-6 rounded-xl border border-amber-500/30">
                          <Flame className="text-amber-500 mb-2" />
                          <p className="text-white text-lg leading-relaxed">{recommendation}</p>
                          <button 
                            onClick={() => { setRecommendation(''); setMood(''); setShowAI(false); }}
                            className="mt-6 w-full bg-amber-500 text-black font-bold py-3 rounded-xl hover:bg-amber-400"
                          >
                             Cool, thanks!
                          </button>
                      </div>
                  )}
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};