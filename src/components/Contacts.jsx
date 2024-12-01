import React, { useRef } from 'react'
import { listContacts } from '../constants'
import CustomHook from './CustomHook'

const Contacts = () => {

  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam exercitationem quod sit, doloremque soluta nobis delectus omnis illum fugit at ad laboriosam magni error aperiam laudantium ullam repudiandae eius!
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((contact, key)=>(
            <div className="item" key={key}>
              <h3>{contact.title}</h3>
              <div>{contact.value}</div>
            </div>
          )
        )
        }
      </div>
    </section>
  )
}

export default Contacts