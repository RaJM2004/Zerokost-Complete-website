import { motion } from "framer-motion";
import img5 from "../assets/Group1.png";
import img1 from "../assets/Group2.jpg";
import img2 from "../assets/Group3.jpeg";
import img3 from "../assets/Group4.jpg";
import img4 from "../assets/Group5.jpg";
// Replace above with your actual image imports
import roboBrain from "../assets/robo_brain.png";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CareersChatbot from "../components/CareersChatbot";
// Add more image imports as needed
import React, { useRef, useState } from "react";
import jobsData from "../data/jobs.json";
 
 
const imageColumns = [
    [img1], // Tall single image
    [img2, img3], // Two stacked images, different heights
    [img4], // Tall single image
    [img5, img1], // Two stacked images, different heights
    [img2], // Tall single image
];
 
const benefits = [
    {
        title: "Top Talent",
        desc: "Work with the best minds in the industry and grow your skills.",
    },
    {
        title: "Career Growth",
        desc: "Opportunities for rapid advancement and leadership roles.",
    },
    {
        title: "Learning Programs",
        desc: "Continuous learning with sponsored courses and certifications.",
    },
    {
        title: "Global Exposure",
        desc: "Collaborate with global teams and clients on cutting-edge projects.",
    },
    {
        title: "Social Responsibility",
        desc: "Be part of initiatives that make a difference in the world.",
    },
    {
        title: "Diversity & Inclusion",
        desc: "Inclusive culture that values every voice.",
    },
    {
        title: "Work-Life Balance",
        desc: "Flexible hours and remote work options.",
    },
    {
        title: "Innovative Culture",
        desc: "A culture that encourages creativity and innovation.",
    },
];
 
const stats = [
    { value: "9.1", label: "Overall satisfaction" },
    { value: "9.2", label: "Career growth satisfaction" },
    { value: "9.0", label: "Work-life balance" },
    { value: "9.3", label: "Collaboration perception" },
    { value: "9.1", label: "Innovation culture" },
];
 
const testimonials = [
    {
        name: "Vishal Mehra",
        title: "CEO & Founder of InnoLabs",
        text: "My experience with Rapid Innovation was exceptional. The team is highly skilled and professional.",
    },
    {
        name: "Chuck Williams",
        title: "CTO, ConnectNet",
        text: "RapidInnovation is the blend of innovation and quality. Their team is outstanding!",
    },
    {
        name: "Scott Brown",
        title: "CEO & Founder of Krypz",
        text: "Highly recommended for anyone seeking cutting-edge solutions and a great working culture.",
    },
    {
        name: "Jasminne",
        title: "Head of HR, CHAINLET",
        text: "The process was smooth and the results exceeded expectations. Amazing team!",
    },
];
 
export default function Careers() {
    const openPositionsRef = useRef<HTMLDivElement>(null);
    const [showWriteModal, setShowWriteModal] = useState(false);
    const [coverLetter, setCoverLetter] = useState("");
    const [resume, setResume] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const maxWords = 500;
 
    const [selectedIndustry, setSelectedIndustry] = React.useState("View All");
 
    const industries = [
        "Engineering",
        "Infrastructure",
        "Governance/Legal",
        "Consulting",
        "Product"
    ];
 
    const filteredJobs = selectedIndustry === "View All"
        ? jobsData
        : jobsData.filter(job => job.industry === selectedIndustry);
 
    const handleScrollToJobs = () => {
        if (openPositionsRef.current) {
            openPositionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleCoverLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const words = e.target.value.split(/\s+/).filter(Boolean);
        if (words.length <= maxWords) setCoverLetter(e.target.value);
    };
    const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setResume(e.target.files[0]);
    };
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) setResume(e.dataTransfer.files[0]);
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); setDragActive(true); };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); setDragActive(false); };
 
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-900 to-blue-800">
                {/* Left Side: Title, Description, Button */}
                <div className="flex-1 flex flex-col justify-center items-center h-full z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up text-white max-w-xl text-left">
                        Join Zerokost — <span className="bg-gradient-primary bg-clip-text text-transparent">Build the AI Future</span>
                    </h1>
                    <p className="text-xl md:text- text-white text-muted-foreground mb-8 max-w-xl leading-relaxed animate-slide-up text-left">
                        We’re hiring across engineering, infrastructure, governance, and product. Help us deliver reliable, secure, and scalable AI for the real world.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition shadow-lg" onClick={handleScrollToJobs}>View All Jobs</button>
                </div>
                {/* Right Side: Animated Images */}
                <div className="flex-1 flex h-[500px] gap-[10px] items-stretch justify-center">
                    {/* Column 1: Top and Bottom images */}
                    <div className="flex flex-col justify-between h-full gap-[10px]">
                        <motion.img
                            src={img4}
                            alt="Top"
                            className="w-[300px] h-[640px] object-cover rounded-xl shadow-lg border-2 border-white mb-[5px]"
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        />
                        <motion.img
                            src={img3}
                            alt="Bottom"
                            className="w-[300px] h-[140px] object-cover rounded-xl shadow-lg border-2 border-white mt-[5px]"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                        />
                    </div>
                    {/* Column 2: Right side images with staggered padding */}
                    <div className="flex flex-col justify-between h-full gap-[10px] pt-16">
                        <motion.img
                            src={img2}
                            alt="Right1"
                            className="w-[300px] h-[540px] object-cover rounded-xl shadow-lg border-2 border-white mb-[5px]"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
                        />
                        <motion.img
                            src={img1}
                            alt="Right2"
                            className="w-[260px] h-[500px] object-cover rounded-xl shadow-lg border-2 border-white mt-[5px]"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
                        />
                    </div>
                </div>
            </section>
 
            {/* Why Us Section - Life at Zerokost & Cards */}
            <section className="py-16 px-4 md:px-16">
                <h2 className="text-4xl font-bold mb-6 text-center">Why join us?</h2>
                <div className="flex justify-center mb-10">
                    <p className="text-lg text-muted-foreground text-center w-full max-w-2xl tracking-[0.5px] mx-auto">
                        Be part of a fast-growing, cutting-edge company where your ideas fuel innovation.<br />
                        Work remotely, grow rapidly, and make a global impact!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Card 1: Top Talent Collaboration - Handshake Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Person Star Icon */}
                            <img src="https://img.icons8.com/color/96/star--v1.png" alt="Top Talent" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Top Talent Collaboration</h3>
                        <p className="text-sm text-white text-center">Work alongside the industry’s top 1% of talent, tackling the most exciting and challenging projects in tech.</p>
                    </div>
                    {/* Card 2 */}
                    {/* Card 2: Career Growth & Leadership - Upward Arrow/Bar Chart Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Graph Up Icon */}
                            <img src="https://img.icons8.com/color/96/positive-dynamic.png" alt="Career Growth" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Career Growth & Leadership</h3>
                        <p className="text-sm text-white text-center">Develop new skills, enhance your capabilities, and cultivate leadership qualities while advancing your career.</p>
                    </div>
                    {/* Card 3 */}
                    {/* Card 3: Innovative Projects - Rocket Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Document Icon */}
                            <img src="https://img.icons8.com/color/96/document--v2.png" alt="Innovative Projects" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Innovative Projects</h3>
                        <p className="text-sm text-white text-center">Engage in cutting-edge projects that push boundaries and drive technological advancements, shaping the future of innovation.</p>
                    </div>
                    {/* Card 4 */}
                    {/* Card 4: Continuous Learning - Book Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Book Icon */}
                            <img src="https://img.icons8.com/color/96/open-book--v2.png" alt="Continuous Learning" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Continuous Learning</h3>
                        <p className="text-sm text-white text-center">Benefit from ongoing education and training to stay ahead of industry trends and continuously expand your expertise.</p>
                    </div>
                    {/* Card 5 */}
                    {/* Card 5: Social Responsibility - Heart Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Handshake Icon */}
                            <img src="https://img.icons8.com/color/96/handshake.png" alt="Social Responsibility" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Social Responsibility</h3>
                        <p className="text-sm text-white text-center">Contribute to impactful social and environmental initiatives, from charity and philanthropy to green and decentralized economy projects.</p>
                    </div>
                    {/* Card 6 */}
                    {/* Card 6: Dynamic Team Environment - Users/Team Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Team Icon */}
                            <img src="https://img.icons8.com/color/96/conference-call--v2.png" alt="Dynamic Team" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Dynamic Team Environment</h3>
                        <p className="text-sm text-white text-center">Thrive in a supportive and collaborative team setting where every voice is valued, and teamwork drives success.</p>
                    </div>
                    {/* Card 7 */}
                    {/* Card 7: Flexibility & Balance - Clock Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Balance Icon */}
                            <img src="https://img.icons8.com/color/96/scales--v2.png" alt="Flexibility & Balance" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Flexibility & Balance</h3>
                        <p className="text-sm text-white text-center">Enjoy a remote work environment that offers flexibility, helping you balance work and life while remaining productive.</p>
                    </div>
                    {/* Card 8 */}
                    {/* Card 8: Innovative Culture - Lightbulb Icon */}
                    <div className="bg-black rounded-xl p-8 shadow-lg border border-white/10 text-white flex flex-col justify-between min-h-[220px]">
                        <div className="mb-4 flex justify-center">
                            {/* 3D Bulb Icon */}
                            <img src="https://img.icons8.com/color/96/idea.png" alt="Innovative Culture" width="48" height="48" className="rounded-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-center">Innovative Culture</h3>
                        <p className="text-sm text-white text-center">Be part of a culture that embraces speed, creativity, and forward-thinking, where your ideas and contributions make a real difference.</p>
                    </div>
                </div>
            </section>
 
            {/* Let's Make it Happen */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-16 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up text-center">
                        Lets make it happen
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed animate-slide-up text-center">
                        We are always in search for talented people. If you are committed to excellence and initiative, you are the person for us and we are the company for you.
                    </p>
                    <div className="w-full overflow-hidden relative flex justify-center h-[340px]">
                        <div
                            className="scrolling-images whitespace-nowrap animate-fade-in h-[340px] inline-block animate-scrollX"
                        >
                            {/* Double the images for seamless loop */}
                            {[...Array(2)].map((_, repeatIdx) => (
                                imageColumns.map((col, colIdx) => (
                                    <span key={repeatIdx + '-' + colIdx} className="inline-block align-top min-w-[220px] mr-8">
                                        <div className="flex flex-col gap-6">
                                            {col.map((img, imgIdx) => (
                                                <img
                                                    key={repeatIdx + '-' + colIdx + '-' + imgIdx}
                                                    src={img}
                                                    alt="Career"
                                                    className="rounded-xl shadow-lg object-cover flex-shrink-0 animate-slide-up"
                                                    style={{
                                                        width: '320px',
                                                        height:
                                                            col.length === 1
                                                                ? '340px'
                                                                : colIdx % 2 === 1
                                                                    ? imgIdx === 0
                                                                        ? '180px'
                                                                        : '140px'
                                                                    : imgIdx === 0
                                                                        ? '200px'
                                                                        : '140px',
                                                        marginBottom: col.length === 2 && imgIdx === 0 ? '20px' : '0',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </span>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
                {/* Optional: Add gradient overlays for depth, similar to Hero */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
            </section>
 
            {/* Open Positions */}
            <section ref={openPositionsRef} className="py-16 px-4 md:px-16 bg-white">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Open positions</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl">We are always in search for talented people. If you are committed to excellence and initiative, you are the person for us and we are the company for you.</p>
                <div className="flex gap-4 mb-6 flex-wrap">
                    <button
                        className={`px-4 py-2 rounded-full font-semibold order-first ${selectedIndustry === "View All" ? "bg-black text-white" : "bg-gray-100 text-black"}`}
                        onClick={() => setSelectedIndustry("View All")}
                    >
                        View All
                    </button>
                    {industries.map(industry => (
                        <button
                            key={industry}
                            className={`px-4 py-2 rounded-full font-semibold ${selectedIndustry === industry ? "bg-black text-white" : "bg-gray-100 text-black"}`}
                            onClick={() => setSelectedIndustry(industry)}
                        >
                            {industry}
                        </button>
                    ))}
                </div>
                <div className="space-y-4">
                    {filteredJobs.map(job => (
                        <div key={job.id} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">{job.role_name}</h4>
                                <span className="text-sm text-gray-500 mr-4">{job.job_type}</span>
                                <span className="text-sm text-gray-500">{job.location}</span>
                            </div>
                            <a
                                href={`/view-job-details?id=${job.id}`}
                                rel="noopener noreferrer"
                                className="font-semibold text-yellow-400 hover:text-yellow-500 transition"
                            >
                                View job
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            {/* Haven't found a position card */}
            <div className="flex justify-center items-center py-16 bg-white">
                <div className="flex flex-row items-center w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-900 to-blue-600 min-h-[340px]">
                    <div className="flex flex-row items-center w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-900 to-blue-600 min-h-[340px]">
                        <div className="flex-1 p-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Haven’t found a position?</h2>
                            <p className="text-white text-base md:text-lg mb-8 max-w-xl">Join our dynamic team where innovation thrives and career growth is not simply a goal, but a reality. Gain valuable industry experience, sharpen your leadership skills, and be an integral part of a collaborative environment.</p>
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-full text-lg transition" onClick={() => setShowWriteModal(true)}>Write To us</button>
                            {/* Write To Us Modal */}
                            {showWriteModal && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
                                        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowWriteModal(false)}>&times;</button>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Write to us</h3>
                                        <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
                                        <textarea
                                            className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:border-yellow-400"
                                            rows={5}
                                            value={coverLetter}
                                            onChange={handleCoverLetterChange}
                                            placeholder="Write your cover letter here... (max 500 words)"
                                        />
                                        <div className="text-right text-xs mb-4 text-gray-500">{coverLetter.trim().split(/\s+/).filter(Boolean).length} / 500 words</div>
                                        <label className="block text-gray-700 font-semibold mb-2">Upload your resume</label>
                                        <div
                                            className={`w-full border-2 ${dragActive ? 'border-yellow-400' : 'border-gray-300'} border-dashed rounded-lg p-4 text-center mb-4 bg-gray-50 cursor-pointer`}
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onClick={() => document.getElementById('resume-upload')?.click()}
                                        >
                                            {resume ? (
                                                <span className="text-gray-700">{resume.name}</span>
                                            ) : (
                                                <span className="text-gray-500">Drag & drop resume or <span className="text-yellow-400 underline">Browse</span></span>
                                            )}
                                            <input
                                                id="resume-upload"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                onChange={handleResumeChange}
                                            />
                                        </div>
                                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full text-lg transition mt-2">Submit</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="hidden md:block flex-1 h-full relative">
                            <img src={roboBrain} alt="Robo Brain" className="absolute right-0 top-0 h-full w-auto object-contain opacity-90 max-h-[340px] min-h-full min-w-[100px]" />
                        </div>
                    </div>
                </div>
               
            </div>
                 <Footer />
                 <CareersChatbot />          
        </div>
    );
}