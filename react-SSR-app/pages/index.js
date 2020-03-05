import React, { Component } from "react";
import Link from 'next/link';

class App extends Component
{
    render()
    {
        return (
            <div>
                <div>
                    <Link href='/Home'><a>Home</a></Link>
                    <Link href='/About'><a>About</a></Link>
                    <Link href='/ContactUs'><a>Contact Us</a></Link>
                </div>
            </div>
        )
    }
}

export default App;