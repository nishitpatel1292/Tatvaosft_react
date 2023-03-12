import React,{Component} from 'react';
import Counter from '../components/counter';
import List from '../components/List';
class Home extends Component
{
    render(){
        return (
            <>
            <h3 >Home Page</h3>
            {/* <Counter/> */}
            <List/>
        </>
        );
    }
}
export default Home;