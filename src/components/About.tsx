import { motion } from "@/lib/nomotion";
import GoldWaButton from "./GoldWaButton";

const heading =
  "متخصص في الPerformance Marketing & Web Conversion Specialist ببني Funnel لرحلة العميل من الإعلان لمرحلة الشراء وبحول بيانات الحملات لقرارت ربحية تحقق هدف البراند";

const paragraphs = [
  "بساعد البراندات تحسن أداء الإعلانات والـFunnel وتحول البيانات لقرارات ترفع المبيعات.",
  "خلال آخر سنة اشتغلت على ميزانيات إعلانية وصلت لأكتر من مليون جنيه في قطاعات مختلفة وحققت نتائج ملموسة منها:",
  "35x ROAS في قطاع الأثاث خلال حملة عروض الجمعة البيضاء",
  "9.5x ROAS في قطاع الفاشون خلال أول 29 يوم من إطلاق براند جديد.",
  "رفع معدل التحويل من أقل من 1% إلى 3.46% خلال أسبوع بعد إعادة هيكلة الـFunnel",
  "42 Lead عالي الجودة من حملة لقطاع التصميم الداخلي والتشطيبات بميزانية محدودة.",
  "هدفي مش الأرقام وبس هدفي أحلل الداتا ونبني عليها قرارات ترويجية أفضل.",
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-10"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="fluid-lead mb-6 font-semibold text-primary max-w-3xl leading-loose"
      >
        {heading}
      </h2>

      <p className="fluid-lead mb-4 font-semibold text-primary max-w-3xl">متخصص في</p>

      {paragraphs.map((text) => (
        <p key={text} className="fluid-body text-foreground mb-4 max-w-3xl leading-loose">
          {text}
        </p>
      ))}

      <p className="fluid-body font-semibold text-primary text-right mb-5 mt-6">
        جاهز تعرف إزاي نقدر نحسن أداء الإعلانات والـFunnel ونحول البيانات لنتائج ربحية للبراند؟
      </p>

      <div className="flex flex-wrap gap-3 justify-end items-center">
        <GoldWaButton withArrow>جاهز؟ خلينا نشتغل على البراند</GoldWaButton>
      </div>
    </motion.section>
  );
};

export default About;
