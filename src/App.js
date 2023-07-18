import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      {/* here I'm passing the faqs (array of objects) as 
      a 'data' prop */}
      <Accordion data={faqs} />
    </div>
  );
}

//here I'm receiving the data prop from the father component
function Accordion({ data }) {
  return (
    <div className="accordion">
      {/* Using map() to  cycle through the array and for 
      every element I create an <AccordionItem/>*/}
      {data.map((el, i) => (
        //Accordion items with props and the key
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  //Piece of state | initial value is false so that the accordion elements are all close in the beginning
  const [isOpen, setIsOpen] = useState(false);

  //handler function
  function handleToggle() {
    //Given a curIsOpen (can be true or false) reverse it
    setIsOpen((curIsOpen) => !isOpen);
  }

  //JSX
  return (
    <div className={`item ${isOpen ? "open" : ""} `} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {/* If isOpen = false doesn't show the div */}
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
