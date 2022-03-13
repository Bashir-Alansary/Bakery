import {useRef, useEffects, useCallback} from 'react';
import {useSpring, animated} from "react-spring";
import {SearchSection, SearchInput, SearchIcon} from './style';
import {AiOutlineClose} from "react-icons/ai";
import './style.css';
const Search = (props) => {
    const animation = useSpring({
        config: {
            duration: 200
        },
        opacity: props.mark? 1 : 0,
        transform: props.mark? 'translateY(0%)' : 'translateY(-100%)'
    })

    return(
        <>
            {props.mark?
                <animated.div className="search-content" style={animation}>
                    <SearchSection>
                        <SearchInput type="search" placeholder="Search now" />
                        <SearchIcon onClick={()=>{props.handleSearch()}}><AiOutlineClose /></SearchIcon>
                    </SearchSection>
                </animated.div>
             : null}
        </>
    )
}

export default Search;