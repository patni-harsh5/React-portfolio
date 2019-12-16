import React from 'react';
import '../style.css';
import Appbar from '../components/appbar';
import { Helmet } from 'react-helmet';

export default function education() {
    return (
        <div className="container">
            <Appbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Education | Harsh</title>
            </Helmet>

            <div className="row">
                <ul>
                    <li className="display-5" style={{ color: "#FF8A00" }}>Texas State University: M.S. in Computer Science (Aug, 2017 - May, 2019)<br />
                        <span style = {{color : "white"}}>
                            <p>
                        Relevant Coursework: Advanced Artificial Intelligence, Advance Operating Systems, Algorithm Design and Analysis, Advance
Networking and Communication, Distributed Computer Networking.
</p>
                        </span> 
                    </li>

                    <br />

                    <li className="display-5" style={{ color: "#FF8A00" }}>University of Mumbai: B.E. in Computer Engineering (May, 2019 - Aug, 2019)<br />
                        <span style = {{color : "white"}}>
                            <p>
                            Relevant Coursework: Data Structure, Web Development, Operating Systems, Computer Networks, DBMS and OOP’s.
                            </p>
                        
                        </span> 
                    </li>

                    <br />



                    
                </ul>
            </div>
        </div>
    );
};