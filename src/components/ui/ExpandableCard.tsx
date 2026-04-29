"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { ArrowUpRight, X } from "lucide-react";

interface Card {
  id: string;
  title: string;
  description: string;
  src: string;
  category: string;
  tags: string[];
  content: () => React.ReactNode;
}

const cards: Card[] = [
  {
    id: "1",
    title: "NeuralFlow AI",
    description: "Enterprise AI platform for workflow optimization",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI SaaS",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    content: () => (
      <div className="space-y-4">
        <p className="text-[#B7B7B2]">
          NeuralFlow AI is an enterprise-grade platform that leverages machine learning
          to automate and optimize complex business workflows. Built with React frontend
          and Python ML backend.
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "Python", "TensorFlow", "AWS"].map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-[#1B1B1B] text-[#F5F5F2] rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "2",
    title: "CloudSync Pro",
    description: "Real-time data synchronization platform",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    category: "Custom Software",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    content: () => (
      <div className="space-y-4">
        <p className="text-[#B7B7B2]">
          CloudSync Pro enables real-time data synchronization across distributed systems.
          Handles millions of events per second with sub-millisecond latency.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "PostgreSQL", "Redis", "Docker"].map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-[#1B1B1B] text-[#F5F5F2] rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "MarketPulse",
    description: "E-commerce analytics dashboard",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Web Platform",
    tags: ["Next.js", "D3.js", "GraphQL", "Stripe"],
    content: () => (
      <div className="space-y-4">
        <p className="text-[#B7B7B2]">
          MarketPulse provides real-time e-commerce analytics with beautiful visualizations.
          Integrated with Stripe for payment analytics and inventory management.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "D3.js", "GraphQL", "Stripe"].map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-[#1B1B1B] text-[#F5F5F2] rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function ExpandableCardGrid() {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50 p-4">
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 flex items-center justify-center bg-[#1B1B1B] rounded-full h-10 w-10 z-50 border border-white/10"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5 text-[#F5F5F2]" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-[#6B6B68] uppercase tracking-wider">
                      {active.category}
                    </span>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="text-2xl font-bold text-[#F5F5F2] mt-1"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-[#B7B7B2] mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.id}-${id}`}
                    className="btn-primary flex items-center gap-2"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </motion.button>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[#B7B7B2] text-sm leading-relaxed"
                >
                  {active.content()}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={card.id}
            onClick={() => setActive(card)}
            className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors"
          >
            <motion.div layoutId={`image-${card.id}-${id}`} className="relative h-40">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
            </motion.div>

            <div className="p-4">
              <span className="text-[10px] text-[#6B6B68] uppercase tracking-wider">
                {card.category}
              </span>
              <motion.h3
                layoutId={`title-${card.id}-${id}`}
                className="text-lg font-semibold text-[#F5F5F2] mt-1"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.id}-${id}`}
                className="text-sm text-[#B7B7B2] mt-1 line-clamp-2"
              >
                {card.description}
              </motion.p>

              <div className="flex flex-wrap gap-1 mt-3">
                {card.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 bg-[#1B1B1B] text-[#6B6B68] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.id}-${id}`}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#F5F5F2] text-[#0A0A0A] p-2 rounded-full"
            >
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ExpandableCardGrid;
