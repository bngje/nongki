import React from "react";
import "../../Styles/Faq.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SplitText from '../SplitText';
import AnimatedContent from "../AnimatedContent";

const faqData = [
  {
    question: "Apa tempat parkirnya luas?",
    answer: "Ya, kami menyediakan area parkir yang cukup luas untuk kendaraan roda dua maupun roda empat."
  },
  {
    question: "Apakah boleh membawa makanan dari luar?",
    answer: "Untuk menjaga kebersihan dan kenyamanan bersama, kami mohon maaf tidak mengizinkan membawa makanan atau minuman dari luar. Namun, Anda bisa menikmati berbagai pilihan menu yang tersedia di tempat kami."
  },
  {
    question: "Apakah ada tolietnya?",
    answer: "Tentu, tersedia toilet bersih dan terawat untuk pria dan wanita. Kami juga secara rutin melakukan pengecekan kebersihan."
  },
  {
    question: "Apakah yang harus dilakukan jika ingin membatalkan pesanan?",
    answer: "Anda dapat membatalkan pesanan dengan menghubungi staf kami secara langsung atau melalui layanan customer service maksimal 30 menit sebelum waktu pemesanan. Dana akan dikembalikan sesuai dengan ketentuan refund yang berlaku."
  },
  {
    question: "Apakah bisa pesan ditempat?",
    answer: "Bisa. Anda dapat langsung datang dan melakukan pemesanan di lokasi kami, baik secara langsung kepada staf maupun melalui sistem pemesanan digital yang tersedia."
  },
  {
    question: "Bagaimana jika pesanan saya gagal?",
    answer: "Jika pesanan Anda gagal karena kesalahan sistem atau stok habis, dana akan dikembalikan sepenuhnya dalam waktu maksimal 1x24 jam melalui metode pembayaran yang Anda gunakan."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const leftFaqs = faqData.slice(0, Math.ceil(faqData.length / 2));
  const rightFaqs = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          <SplitText
          text="Frequently Asked"
          type="chars"
          className=""
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)', stagger: 0, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 110%' }}
        />
        <SplitText
          text="Question"
          type="chars"
          className="faq-highlight"
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)', stagger: 0, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 110%' }}
        />
        </h2>
        <div className="faq-list">
          <div className="faq-column">
            {leftFaqs.map((item, idx) => (
              <AnimatedContent
                animation={{
                  from: { y: 40, opacity: 0 },
                  to: { y: 0, opacity: 1, duration: 0.5, delay: 1 }
                }}
                scrollTriggerOptions={{ start: 'top 110%' }}
              >
                <Accordion
                  className="custom-accordion"
                  expanded={expanded === `left-${idx}`}
                  onChange={handleChange(`left-${idx}`)}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon style={{ color: "#FEB800" }} />}
                    className="custom-summary"
                  >
                    {item.question}
                  </AccordionSummary>
                  <AccordionDetails className="custom-details">
                    {item.answer}
                  </AccordionDetails>
                </Accordion>
              </AnimatedContent>
            ))}
          </div>
          <div className="faq-column">
            {leftFaqs.map((item, idx) => (
              <AnimatedContent
                animation={{
                  from: { y: 40, opacity: 0 },
                  to: { y: 0, opacity: 1, duration: 0.5, delay: 1 }
                }}
                scrollTriggerOptions={{ start: 'top 110%' }}
              >
                <Accordion
                  className="custom-accordion"
                  expanded={expanded === `right-${idx}`}
                  onChange={handleChange(`right-${idx}`)}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon style={{ color: "#FEB800" }} />}
                    className="custom-summary"
                  >
                    {item.question}
                  </AccordionSummary>
                  <AccordionDetails className="custom-details">
                    {item.answer}
                  </AccordionDetails>
                </Accordion>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;