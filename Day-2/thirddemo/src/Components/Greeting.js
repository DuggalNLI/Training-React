import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import { useState } from "react";

export default function Greeting(props){
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting name='Harshit'/>;
    }
    return<GuestGreeting/>;
}