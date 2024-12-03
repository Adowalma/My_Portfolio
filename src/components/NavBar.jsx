import { useState } from 'react'
import { listNav } from '../constants'
import { connect, useDispatch } from 'react-redux';
import {changeTabActive} from '../redux/action';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({activeTab}) => {
  const dispatch = useDispatch();
  const changeTab = (value) =>{
    dispatch(changeTabActive(value));
    toggleNav();
  }
  const [statusNav, setStatusNav] = useState('');
  const toggleNav = () =>{
    setStatusNav(statusNav === 'active'? null: 'active')
  }

  return (
    <header>
      <div className='logo'>
        <img src='/letter-a-logo.png' alt=''/>
      </div>
      <nav className={statusNav}>
        {
          listNav.map((list,key)=>(
            <span key={key} className={activeTab === list.value? 'active' : ''} onClick={() => changeTab(list.value)}>{list.name}</span>
          ))
        }
      </nav>
    <div className="icon-bar" onClick={toggleNav}>
      <FontAwesomeIcon icon={faBars}/>
    </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)