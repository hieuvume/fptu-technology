import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-area">
                <div className="container">
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
                                    <li>Vũ Ngọc Minh Quân - HE160804</li>
                                    <li>Nguyễn Kim Chung - HE160935</li>
                                    <li>Vũ Anh Tú - HE161770</li>
                                    <li>Vũ Trung Hiếu - HE163586</li>
                                    <li>Trương Xuân Dũng - SE160459</li>
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