

const Resume = () => {
    return (
        <div>
            <div className="md:p-10">
                <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
                    <div className="md:flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">Md. Ashraful Islam</h1>
                            <p className="md:text-lg">MERN Stack Developer</p>
                            <p className="text-gray-600 mb-6">Dhaka, Bangladesh</p>
                        </div>
                        <div className="md:text-right">
                            <p className="text-gray-600">+8801777112564</p>
                            <p className="text-gray-600">ashraful.islam0871@gmail.com</p>
                            <div className="mt-2">
                                <a href="https://ashrafulislam.vercel.app/" className="text-blue-600 hover:underline">Portfolio</a> ·
                                <a href="https://bd.linkedin.com/in/ashrafulislamm" className="text-blue-600 hover:underline">LinkedIn</a> ·
                                <a href="https://github.com/Darkasfu" className="text-blue-600 hover:underline">GitHub</a>
                            </div>
                        </div>
                    </div>


                    <section className="mb-6">
                        <h2 className="text-[16px] md:text-xl font-bold border-b pb-2 mb-4">SKILLS</h2>
                        <p className="text-[14px] md:text-[16px]"><span className="font-semibold">Frontend:</span> HTML5 | CSS3 | JavaScript (ES6+) | TailwindCSS | Bootstrap | DaisyUI | NextUI | ReactJS | React Router | MaterialUI | React Hook Form | React Query</p>
                        <p className="text-[14px] md:text-[16px]"><span className="font-semibold">Backend:</span> NodeJs | ExpressJs | Rest API | Firebase Authentication | JWT | Redux (Familiar)</p>
                        <p className="text-[14px] md:text-[16px]"><span className="font-semibold">Database:</span> MongoDB | MySQL</p>
                        <p className="text-[14px] md:text-[16px]"><span className="font-semibold">Tools:</span> VS Code | Git | Figma | Netlify | Vercel | Surge</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-[16px] md:text-xl font-bold border-b pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>
                        <div className="mb-4">
                            <div className="md:flex justify-between text-[16px]">
                                <h3 className="text-[16px] md:text-lg font-semibold">Talentship Global Advisory Forum</h3>
                                <p className="italic text-gray-600 text-[14px] md:text-[16px]">Frontend Developer · Aug 2023 - Oct 2023</p>
                            </div>
                            <ul className="list-disc list-inside text-[14px] md:text-[16px]">
                                <li>Front-End Development: Contributed to website development using ReactJS, HTML, CSS, and Tailwind.</li>
                                <li>Skills Acquired: Proficiency in ReactJS, and ExpressJs.</li>
                                <li>Achievements: Recognized for outstanding contributions, effective teamwork, and timely project completion.</li>
                                <li>Project Highlights: Developed key sections for the 6Sparks LLC website, Talentship Global Advisory Forum.</li>
                                <li>Certificate: Awarded on 7th Oct 2023 by Shobhit Jain, Founder, Talentship Global Advisory Forum.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-[16px] md:text-xl font-bold border-b pb-2 mb-4">PROJECTS</h2>

                        <div className="mb-4">
                            <div className="md:flex justify-between items-center">
                                <h3 className="text-[16px] md:text-lg font-semibold">Learner Cafe</h3>
                                <p className="italic text-gray-600 text-[14px] md:text-[16px]">Live - Client - Server</p>
                            </div>
                            <ul className="list-disc list-inside text-[14px] md:text-[16px]">
                                <li>Admin controls: user management, document approvals, and blog uploads with a text editor.</li>
                                <li>User document management: upload, update, and delete documents with admin approval workflow.</li>
                                <li>Authentication: Email, Google, Facebook, and GitHub sign-in/sign-up.</li>
                                <li>Data organization: Categorize and display documents by category and subject, view detailed document pages with related document suggestions, bookmark and download options available after login, documents can be viewed using an integrated PDF viewer.</li>
                                <li>Profile updates and contact form for seamless admin communication.</li>
                                <li>Ensure the website is accessible and user-friendly across various devices.</li>
                            </ul>
                            <p className="mt-2 text-[14px] md:text-[16px]"><span className="font-semibold">Technologies used:</span> HTML, CSS, TailwindCSS, DaisyUI, JavaScript, Firebase Auth, React Js, Node Js, Expressjs, MongoDB etc.</p>
                        </div>

                        <div className="mb-4">
                            <div className="md:flex justify-between">
                                <h3 className="text-[16px] md:text-lg font-semibold">Summer Camp (Online course portal)</h3>
                                <p className="italic text-gray-600 text-[14px] md:text-[16px]">Live - Client - Server</p>
                            </div>
                            <ul className="list-disc list-inside text-[14px] md:text-[16px]">
                                <li>User Registration and Login (Firebase Authentication): Secure and user-friendly system for users to create accounts and access personalized features.</li>
                                <li>Use MongoDB CRUD operations for instructors can add classes, manage class details, and receive feedback from students.</li>
                                <li>Stripe Payment Integration: Seamless integration of the Stripe payment system for secure and convenient class bookings.</li>
                                <li>Student Dashboard: Dedicated dashboard for students to view selected classes, track payment history, and manage their learning journey.</li>
                            </ul>
                            <p className="mt-2 text-[14px] md:text-[16px]"><span className="text-[16px] font-semibold">Technologies used:</span> HTML, CSS, TailwindCSS, DaisyUI, JavaScript, Firebase Auth, React Js, Node Js, Expressjs, MongoDB, JWT, Stripe for payment etc.</p>
                        </div>

                        <div className="mb-4">
                            <div className="md:flex justify-between">
                                <h3 className="text-[16px] md:text-lg font-semibold">HR Management</h3>
                                <p className="italic text-gray-600 text-[14px] md:text-[16px]">Client - Server</p>
                            </div>
                            <ul className="list-disc list-inside text-[14px] md:text-[16px]">
                                <li>Dashboard: Displays total number of employees, departments, and department-wise employee counts.</li>
                                <li>Employee Management: View all employees in a table with options to view details, update, and delete records.</li>
                                <li>Add Employee: Create new employee profiles.</li>
                                <li>Employee Attendance: Manage and track employee attendance.</li>
                                <li>Department-wise Employee Info: View detailed information of employees categorized by departments.</li>
                            </ul>
                            <p className="mt-2  text-[14px] md:text-[16px]"><span className="font-semibold">Technologies used:</span> HTML, CSS, TailwindCSS, DaisyUI, JavaScript, Firebase Auth, React Js, Node Js, Expressjs, MySQL etc.</p>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold border-b pb-2 mb-4">EDUCATION</h2>
                        <p>B.Sc in CSE, Green University of Bangladesh · <span className="italic">2022-present</span></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold border-b pb-2 mb-4">LANGUAGE</h2>
                        <p>Bangla, English, Hindi</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;