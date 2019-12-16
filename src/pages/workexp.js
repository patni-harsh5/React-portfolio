import React from 'react';
import '../style.css';
import Appbar from '../components/appbar';
import { Helmet } from 'react-helmet';

export default function workexp() {
    return (
        <div className="container">
            <Appbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Work Experience | Harsh</title>
            </Helmet>

            <div className="row">
                <ul>
                    <li className="display-5" style={{ color: "#FF8A00" }}>USAA: Software Engineer/Consultant (Aug, 2019 - Present)<br />
                        <span style = {{color : "white"}}>
                        <ul>
                            <li>Performing Full-Stack operations using technologies like J2EE (Java, JSP Servlet, JDBC), JavaScript, HTML/CSS and delivering quality products on client location.</li>
                            <li>Developing Web Applications using MERN Stack (Primarily using React, Node.js, and MongoDB) and Angular v.7.</li>
                            <li>Integrating projects with GIT version control and CI/CD tools like Jenkins, Docker, Slack and JIRA for continuous integration and delivery of the code.</li>
                        </ul>
                        </span> 
                    </li>

                    <br />

                    <li className="display-5" style={{ color: "#FF8A00" }}>Torii Technologies Inc: Frontend UI Developer Intern (May, 2019 - Aug, 2019)<br />
                        <span style = {{color : "white"}}>
                        <ul>
                            <li>Developing interactive designs for customer-based products using technologies such as JavaScript, PHP, NodeJS, AngularJS, and Python specifically applied to the active dashboard of Tacet Application.</li>
                            <li>Using a variety of JavaScript and PHP libraries like High Charts, FPDF, PHP PowerPoint to provide security-based services for customer-centric applications..</li>
                        </ul>
                        </span> 
                    </li>

                    <br />

                    <li className="display-5" style={{ color: "#FF8A00" }}>Texas State University: Graduate Assistant (Aug, 2019 - May, 2019)<br />
                        <span style = {{color : "white"}}>
                        <ul>
                            <li>Display strong leadership and communication skills in tutoring topics of Data Structures, Software Development (C++, C#), mobile(iOS) development, and System Analysis.</li>
                            <li>Develop interactive and innovative strategies to increase outcomes-based results.</li>
                            <li>Utilize a wide variety of instructional techniques to increase the productivity of students significantly.</li>
                        </ul>
                        </span> 
                    </li>

                    <br />

                    <li className="display-5" style={{ color: "#FF8A00" }}>Infonaya Software Solutions: Web Developer Intern (Dec, 2015 - March, 2016)<br />
                        <span style = {{color : "white"}}>
                        <ul>
                            <li>Demonstrated mature understanding of the entire development process of web and mobile applications, including design, specification, documentation, implementation, and testing.</li>
                            <li>Cross-collaborated with other members of the development team on a daily basis.</li>
                            <li>Aligned with a diverse team of different IT professionals to develop proprietary, secure, and web-accessible database applications that met rigorous, time-sensitive requirements.</li>
                            <li>Conducted extensive research and testing to design and develop tailored interactive user interfaces.</li>
                        </ul>
                        </span> 
                    </li>




                    
                </ul>
            </div>
        </div>
    );
};