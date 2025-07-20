import React from 'react';
import { motion } from 'framer-motion';

import ServiceCard from '../components/ServiceCard';
import DestinationCard from '../components/DestinationCard';
import TripStep from '../components/TripStep';

const Home = () => {
    const services = [
        {
            icon: '/service-weather.png',
            title: 'Calculated Weather',
            description: 'Built Wicket longer admire do barton vanity itself do in it.',
        },
        {
            icon: '/service-flights.png',
            title: 'Best Flights',
            description: 'Engrossed listening. Park gate sell they west hard for the.',
        },
        {
            icon: '/service-mic.png',
            title: 'Local Events',
            description: 'Barton vanity itself do in it. Preferred to sportsmen it engrossed listening.',
        },
        {
            icon: '/service-customization.png',
            title: 'Customization',
            description: 'We offer travel plans tailored to your needs and preferences.',
        },
    ];

    const destinations = [
        {
            image: '/rome.png',
            location: 'Rome, Italy',
            price: '$5.42k',
            days: '10',
        },
        {
            image: '/london.jpg',
            location: 'London, UK',
            price: '$4.2k',
            days: '12',
        },
        {
            image: '/europe.png',
            location: 'Full Europe',
            price: '$15k',
            days: '28',
        },
    ];

    const tripSteps = [
        {
            icon: '/book-trip-icon-1.png',
            title: 'Choose Destination',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et adipiscing elit.',
        },
        {
            icon: '/book-trip-icon-2.png',
            title: 'Make Payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et adipiscing elit.',
        },
        {
            icon: '/book-trip-icon-3.png',
            title: 'Reach Airport on Selected Date',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et adipiscing elit.',
        },
    ];

    const sectionTitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const sectionSubTitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const imageFloatVariants = {
        float: {
            y: ["0%", "-10%", "0%"],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
    };


    return (
        <>
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        }}
                        className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative"
                    >
            
                        <motion.p variants={sectionTitleVariants} className="text-orange-700 font-bold text-lg uppercase mb-4">
                            Best Destinations around the world
                        </motion.p>
                        <motion.h1 variants={sectionSubTitleVariants} className="font-volkhov text-5xl md:text-6xl lg:text-7xl leading-tight text-secondary mb-6">
                            Travel, <span className="relative inline-block">enjoy
                                <img src="/hero-highlight.svg" alt="Decorative highlight" className="absolute left-0 right-0 mx-auto bottom-[-10px] w-full h-[30px] object-contain animate-wiggle" />
                            </span> and live a new <br className="hidden md:inline" />and full life
                        </motion.h1>
                        <motion.p variants={contentVariants} className="text-textGray text-lg md:text-xl leading-relaxed mb-8">
                            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </motion.p>
                        <motion.div variants={contentVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-orange-400 text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
                                Find out more
                            </button>
                            <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 group">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-red-500 text-white rounded-full p-4 mr-3 shadow-lg cursor-pointer flex-shrink-0"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                </motion.div>
                                <span className="font-medium">Play Demo</span>
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
                    >
                        <motion.img
                            src="/hero-traveler.png"
                            alt="Traveler with luggage"
                            className="max-w-full h-auto object-contain"
                            variants={imageFloatVariants}
                            animate="float"
                        />
                        <motion.img
                            src="/plane.png"
                            alt="plane"
                            className="absolute top-[10%] left-[5%] w-16 opacity-70 animate-planeFly"
                            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="/plane.png"
                            alt="plane"
                            className="absolute bottom-[20%] right-[10%] w-20 opacity-70 animate-planeFly"
                            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative bg-[url('/decorative-dot-pattern.svg')] bg-no-repeat bg-left-top">
                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionTitleVariants}
                        className="text-gray-500 uppercase text-lg mb-2"
                    >
                        Category
                    </motion.p>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionSubTitleVariants}
                        className="font-volkhov text-4xl md:text-5xl text-secondary mb-16"
                    >
                        We Offer Best Services
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={index * 0.15}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative">
                <img
                    src="/Decore.png"
                    alt="Decorative dots"
                    className="absolute top-[30%] right-0 w-32 h-32 object-contain opacity-50 -z-10"
                />

                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionTitleVariants}
                        className="text-gray-500 uppercase text-lg mb-2"
                    >
                        Top Selling
                    </motion.p>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionSubTitleVariants}
                        className="font-volkhov text-4xl md:text-5xl text-secondary mb-16"
                    >
                        Top Destinations
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest) => (
                            <DestinationCard
                                key={dest.location}
                                image={dest.image}
                                location={dest.location}
                                price={dest.price}
                                days={dest.days}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionTitleVariants}
                            className="text-gray-500 uppercase text-lg mb-2"
                        >
                            Easy and Fast
                        </motion.p>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionSubTitleVariants}
                            className="font-volkhov text-4xl md:text-5xl text-secondary mb-12"
                        >
                            Book Your Next Trip <br className="hidden md:inline" />in 3 Easy Steps
                        </motion.h2>

                        <div className="space-y-10">
                            {tripSteps.map((step, index) => (
                                <TripStep
                                    key={step.title}
                                    icon={step.icon}
                                    title={step.title}
                                    description={step.description}
                                    delay={index * 0.2}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end relative"
                    >
                        <img
                            src="/book-trip-illustration.jpg"
                            alt="Trip Illustration"
                            className="w-full max-w-lg object-contain rounded-3xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="absolute -bottom-8 -left-4 md:bottom-12 md:left-12 bg-white rounded-3xl p-6 shadow-xl flex items-center space-x-4 w-64 md:w-80"
                        >
                            <img src="/rome.png" alt="Rome" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Ongoing Trip</p>
                                <h4 className="font-semibold text-secondary">Rome, Italy</h4>
                                <p className="text-xs text-gray-500 flex items-center">
                                    <span className="text-primary mr-1">●</span> 40% Completed
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative bg-lightBlueBg">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, true: 0.5 }}
                            variants={sectionTitleVariants}
                            className="text-gray-500 uppercase text-lg mb-2"
                        >
                            Testimonials
                        </motion.p>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionSubTitleVariants}
                            className="font-volkhov text-4xl md:text-5xl text-secondary mb-12"
                        >
                            What People Say <br className="hidden md:inline" />About Us.
                        </motion.h2>
                    </div>
                    <img src="/decorative-dots.svg" alt="dots" className="absolute bottom-[10%] left-[10%] w-20 h-20 opacity-30" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 relative flex justify-center items-center"

                    >

                        <div className="relative bg-white rounded-3xl shadow-xl p-8 w-full max-w-md testimonial-gradient-border">
                            <img
                                src="/testimonial-image.png"
                                alt="Client"
                                className="absolute -top-10 -left-10 w-24 h-24 rounded-full object-cover shadow-md border-4 border-white"
                            />
                            <p className="text-textGray leading-relaxed italic mb-6 mt-6 md:mt-0">
                                “Jadoo was excellent in providing me with a personalized travel experience. Their attention to detail and responsiveness made my trip truly unforgettable. Highly recommend!”
                            </p>
                            <h4 className="font-bold text-secondary text-lg">Mike Taylor</h4>
                            <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {[
                        { name: 'Axon', logo: '/axon.png' },
                        { name: 'Expedia', logo: '/expedia.png' },
                        { name: 'Qantas', logo: '/qantas.png' },
                        { name: 'Alitalia', logo: '/alitalia.png' },
                        { name: 'Jetstar', logo: '/jetstar.png' },
                    ].map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0"
                        >
                            <motion.img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-12 lg:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-20 md:py-28 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        className="relative bg-lightPinkBg rounded-[2rem] px-8 py-16 md:px-16 md:py-24 text-center overflow-hidden
                       border border-gray-100 shadow-lg"
                    >
                        <img src="/plane.png" alt="Paper plane" className="absolute -top-4 -right-4 md:top-0 md:right-0 w-24 h-24 rotate-45 opacity-60 animate-wave" />
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary to-gradientEnd rounded-tl-[2rem] rounded-br-[4rem] opacity-30 blur-xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-bl-[4rem] rounded-tr-[2rem] opacity-20 blur-xl"></div>

                        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-secondary mb-12 leading-relaxed relative z-10">
                            Subscribe to get information, latest news and <br className="hidden md:inline" /> other interesting offers about Jadoo
                        </h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10"
                        >
                            <div className="relative w-full sm:w-auto flex-grow max-w-md">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.26.17.59.26.93.26h0c.34 0 .67-.09.93-.26L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                                />
                            </div>
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
                                Subscribe
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;