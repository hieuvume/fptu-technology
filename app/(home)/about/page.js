import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="trending-tittle">
                                <strong>Trending now</strong>
                                <div className="trending-animated">
                                    <ul id="js-news" className="js-hidden">
                                        <li className="news-item">
                                            Bangladesh dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                        <li className="news-item">
                                            Spondon IT sit amet, consectetur.......
                                        </li>
                                        <li className="news-item">
                                            Rem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-right mb-90">
                            <div className="about-img">
                                {/* <img src="assets\img\post\about_heor.jpg" alt="" /> */}
                            </div>
                            <div className="section-tittle mb-30 pt-30">
                                <h3>About Us</h3>
                            </div>
                            <div className="about-prea">
                                <h4 className="about-pera1 mb-25">
                                    Welcome to the FPT University Technology!
                                </h4>
                                <p className="about-pera1 mb-25">
                                    Our technology forum is created with the goal of connecting students, lecturers, and technology enthusiasts at FPT University. This is a place where everyone can exchange, learn, and share knowledge and experiences in various fields such as information technology, programming, computer networks, cybersecurity, and more.
                                </p>
                                <div className="section-tittle mb-30 pt-30">
                                    <h4>Who We Are</h4>
                                    <p className="about-pera1 mb-25">
                                        We are a group of five passionate and creative technology enthusiasts from different majors at FPT University. Through collaboration and relentless effort, we have built this forum with the desire to provide practical and useful value to the community.
                                    </p>
                                </div>
                                <div className="section-tittle mb-30 pt-30">
                                    <h4>Our Objectives</h4>
                                    <ul className="section-tittle mb-30 pt-30">
                                        <li>Community Connection: Create a space for students, lecturers, and technology enthusiasts to interact and connect.</li>
                                        <li>Knowledge Sharing: Provide a platform for sharing knowledge, study materials, and practical experiences.</li>
                                        <li>Study Support: Assist students in their learning and research by answering questions, providing resources, and organizing online discussions.</li>
                                        <li>Skill Development: Organize competitions, workshops, and events to help students develop both soft and professional skills in the field of technology.</li>
                                    </ul>
                                </div>
                                <div className="section-tittle mb-30 pt-30">
                                <h3>Project Team Members</h3>
                                <ul className="section-tittle mb-30 pt-30" >
                                    <li>Nguyen Van A - Software Engineering Major</li>
                                    <li>Tran Thi B - Information Security Major</li>
                                    <li>Le Van C - Computer Networks Major</li>
                                    <li>Pham Thi D - Information Systems Major</li>
                                    <li>Hoang Van E - Artificial Intelligence Major</li>
                                </ul>
                                </div>
                                <p className="about-pera1 mb-25">
                                    We hope this forum will become a valuable resource and a place where everyone can learn, grow, and connect with each other.                                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;