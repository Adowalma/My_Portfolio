import { useRef } from "react";
import { listContacts } from "../constants";
import CustomHook from "./CustomHook";

const Contacts = () => {
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Meus Contactos
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
      Seja para colaborar, trocar ideias ou aprender juntos, estou sempre aberta a novas conexões.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((contact, key) => (
          <div className="item" key={key}>
            <h3>{contact.title}</h3>
            <a href={contact.value}>{contact.value}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
