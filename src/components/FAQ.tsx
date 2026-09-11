import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "@/lib/nomotion";

const faqItems = [
  {
    question: "هل النتائج دي إلي في الكيس ستدي ممكن تتكرر في البراند بتاعي؟",
    answer: "جاري التحديث",
  },
  {
    question: "قد إيه هياخد وقت لحد ما أشوف نتائج؟",
    answer: "جاري التحديث",
  },
  {
    question: "هل بتاخد نسبة من الميزانية ولا فيه باقات ثابتة؟",
    answer: "جاري التحديث",
  },
  {
    question: "هتشتغل بأي ميزانية إعلانية؟ وفيه حد أدنى؟",
    answer: "جاري التحديث",
  },
  {
    question: "إزاي بتقيس النجاح ROAS / CPA / إيه المعيار؟",
    answer: "جاري التحديث",
  },
  {
    question: "بتشتغل على أنهي منصات؟",
    answer: "جاري التحديث",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      dir="rtl"
      className="bg-background py-12 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-8 text-center font-bold text-primary sm:mb-10"
        >
          أسئلة تهمك قبل ما نبدأ شغل على البراند
        </motion.h2>

        <div className="border-t border-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className={`flex w-full items-center justify-between gap-4 py-4 text-right transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-5 ${isOpen ? "text-primary" : "text-foreground"}`}
                >
                  <span className="fluid-body font-bold">{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="fluid-body max-w-4xl whitespace-pre-line pb-6 text-right leading-loose text-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
