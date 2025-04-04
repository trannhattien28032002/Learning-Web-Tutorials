import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { faker } from '@faker-js/faker';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage(props) {
    // strict comparison === 
    // shallow comparison {a, b} {a, b}
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.list,
    // }), shallowEqual);

    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newId = randomNumber();
        const newHobby = {
            // id: faker.datatype.uuid(),
            // title: faker.datatype.userName(),
            id: newId,
            title: `Hobby ${newId}`
        }
        // Dispatch action to add a new hobby to redux stor

        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX HOOKS - Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
        </div>
    )
}

export default HomePage;