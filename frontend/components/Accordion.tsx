"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Separator from "./Separator";

interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div>
      <button
        className="flex w-full items-center mb-3 gap-2 text-left text-sm leading-[26px] md:text-md font-medium text-accent"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${value}`}
      >
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
        <span>{title}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`accordion-content-${value}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="text-sm md:text-base font-normal mb-3"
              id={`accordion-content-${value}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Separator />
    </div>
  );
};

interface AccordionProps {
  activeIndex: number | null;
  onItemToggle: (index: number) => void;
  children: React.ReactElement<AccordionItemProps>[];
}

const Accordion: React.FC<AccordionProps> = ({
  activeIndex,
  onItemToggle,
  children,
}) => {
  return (
    <div className="w-full flex flex-col gap-8">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: activeIndex === index,
          onToggle: () => onItemToggle(index),
        })
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
