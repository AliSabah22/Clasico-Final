"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const services = [
  {
    category: "Hair & Beard",
    items: [
      { name: "Haircut(Taper, Zero Fade, Skin Fade)", price: "$30" },
      { name: "Senior haircut (+60)", price: "$24" },
      { name: "Student haircut", price: "$28.49" },
      { name: "Kids haircut (5 and under)", price: "$25" },
      { name: "Kids haircut (zero fade)", price: "$30" },
      { name: "Haircut & beard trim", price: "$45" },
      { name: "Haircut & beard trim line up(blade)", price: "$50" },
      { name: "Haircut & beard trim Line-up (machine)", price: "$47" },
      { name: "Haircut & line-up beard(blade)", price: "$39.99" },
      { name: "Haircut & line-up (machine)", price: "$38.45" },
      { name: "Haircut & beard hot towel shave (blade)", price: "$47.99" },
      { name: "Scissor cut", price: "$33.25" },
      { name: "Buzzcut", price: "$24.99" },
      { name: "Buzzcut & Skin Fade", price: "$30" },
      { name: "Line-up, hair & beard (blade)", price: "$20" },
    ],
  },
  {
    category: "Fades",
    items: [
      { name: "Side fade & beard trim", price: "$37.99" },
      { name: "Side fade & beard trim line-up (blade)", price: "$47.99" },
      { name: "Side fade & beard trim line-up (machine)", price: "$45" },
      { name: "Side fade & line-up beard (blade)", price: "$35" },
      { name: "Side fade & line-up beard (machine)", price: "$33.65" },
      { name: "Side fade & beard hot tower shave (blade)", price: "$47.75" },
      { name: "Buzz cut & beard trim line-up (blade)", price: "$50" },
      { name: "Buzz cut & beard trim line-up (machine)", price: "$47.50" },
      { name: "Shampoo & wash", price: "$5" },
      { name: "Full shave with hot towel (head)", price: "$35" },
      { name: "Hair design", price: "$6 & up" },
      { name: "Hair styling", price: "$15" },
    ],
  },
  {
    category: "Face Waxing",
    items: [
      { name: "Ears wax or threading", price: "$10" },
      { name: "Nose waxing", price: "$10" },
      { name: "Unibrow threading", price: "$7" },
      { name: "Eyebrows waxing", price: "$15" },
      { name: "Eyebrows shaping (blade)", price: "$10" },
      { name: "Forehead wax or threading", price: "$8" },
      { name: "Cheeks wax or threading", price: "$10" },
      { name: "Full face wax or threading (cheeks, forehead, ears, nose and eyebrows)", price: "$30" },
      { name: "Beard line-up wax or threading", price: "$15" },
      { name: "Facial (steam, hot towel, black mask and more) - 45 min", price: "$55" },
    ],
  },
  {
    category: "Beard",
    items: [
      { name: "Beard trim", price: "$15" },
      { name: "Beard trim (scissors)", price: "$15" },
      { name: "Line-up beard (blade)", price: "$10" },
      { name: "Line-up beard (machine)", price: "$8.99" },
      { name: "Beard trim line-up (blade)", price: "$25" },
      { name: "Beard trim line-up (machine)", price: "$24" },
      { name: "Hot towel", price: "$5" },
      { name: "Beard Hot towel shave (blade)", price: "$30" },
      { name: "Hair dye", price: "$45" },
      { name: "Beard dye (colouring)", price: "$24.99" },
      { name: "Moustache dye (colouring)", price: "$7" },
      { name: "Moustache trim", price: "$5" },
      { name: "Steam face shave", price: "$35" },
      { name: "Beard trim line up (blade) and hot tower", price: "$28.50" },
      { name: "Hair & beard dye", price: "$70" },
      { name: "Eyebrow dye", price: "$10" },
    ],
  },
];

export default function ServicesAccordion() {
  // Keep all categories open by default
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerHeights, setHeaderHeights] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    setHeaderHeights(
      contentRefs.current.map((el) => (el ? el.previousElementSibling?.clientHeight || 64 : 64))
    );
    setContentHeights(
      contentRefs.current.map((el) => (el ? el.scrollHeight : 0))
    );
  }, [openCategory]);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((category, idx) => {
          const isOpen = true;
          return (
            <div
              key={category.category}
              className="w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ minHeight: '600px' }}
            >
              <div className="bg-black text-white px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-bold font-display">{category.category}</h3>
              </div>
              <div className="p-6 space-y-3 flex-1">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-black font-semibold text-base flex-1 pr-4 leading-tight">{item.name}</span>
                    <span className="text-gold font-bold text-base whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 