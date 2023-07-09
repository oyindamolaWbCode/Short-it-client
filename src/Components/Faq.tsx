interface FaqProps{
    faq: any;
    index: any;
    toggleFAQ: any;
}

const Faq = ({ faq, index, toggleFAQ }: FaqProps) => {
    return (
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    );
  };
  
  export default Faq;