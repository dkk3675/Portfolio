import React  from "react";
import { useState } from "react";

const Contact = ({ modeDark }) => {
    const [formDetails,setFormDetails] = useState({ name: '', email: '', subject: '', message: '', });
    const onSendMessage = async (e) => {
        e.preventDefault();
        await fetch(process.env.REACT_APP_TO_SERVER,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                name: formDetails.name.trim(), 
                email: formDetails.email.trim(), 
                subject: formDetails.subject.trim(), 
                message: formDetails.message.trim(), 
            }),
        })
        .then(() => {
            alert("Message Conveyed Successfully!!!"); 
        })
        .catch(err => console.log(err));
        // window.location.reload(false);
    };
    return(
        <section id="contact" className="flex flex-wrap flex-col w-full font-quicksand font-semibold pt-20 pb-5">
            <div className="flex flex-wrap w-full justify-center mb-32">
                <span className="flex flex-wrap justify-center basis-full text-4xl mb-10"><h1>Get In Touch</h1></span>
                <form onSubmit={onSendMessage} className="message">
                    <div>
                        <input type="text" placeholder="Name" value={formDetails.name} onChange={(e) => { setFormDetails((form) => {return {...form,name: e.target.value}}); }} name="Name" required />
                        <input type="email" placeholder="Email" value={formDetails.email} onChange={(e) => { setFormDetails((form) => {return {...form,email: e.target.value}}); }} name="Email" required />
                        <input type="text" placeholder="Subject" value={formDetails.subject} onChange={(e) => { setFormDetails((form) => {return {...form,subject: e.target.value}}); }} name="Subject" required />
                    </div>
                    <div>
                        <textarea type="text" placeholder="Your Message" value={formDetails.message} onChange={(e) => { setFormDetails((form) => {return {...form,message: e.target.value}}); }} name="Your Message" required />
                    </div>
                    <div>
                        <button type="submit" title="Submit Your Message!" className={ `bg-green-600 text-base rounded-full px-7 py-4 m-3 ${ modeDark ? 'hover:bg-white hover:text-greyish-blue' : 'hover:bg-greyish-blue hover:text-white' } hover:transition-all hover:duration-300 hover:ease-out` }>Send Message</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap w-full justify-center items-center text-white mb-10">
                <div className="flex flex-wrap flex-col w-4/5 md:flex-row justify-center items-center">
                    <div className="flex w-full h-[450px] md:w-[500px] bg-slate-700 justify-center items-center p-2">
                        <span className="p-6 justify-center items-center">
                            <p className="flex justify-center text-2xl leading-loose font-light">support@example.com</p>
                            <p className="flex justify-center text-4xl leading-loose font-extrabold">1234-123-123</p>
                            <span className="flex justify-center w-full">
                                <p className="flex w-[40vw] justify-center text-2xl font-light">3481 Melrose Place, Beverly Hills CA 90210</p>
                            </span>
                        </span>
                    </div>
                    <div className="flex w-full md:w-[500px]"><iframe title="onMapLocation" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58931.12623840116!2d70.94185099999997!3d22.609177699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670303237322!5m2!1sen!2sin" width="600" height="450" style={ { border:0 } } loading="lazy" /></div>
                </div>
            </div>
            <footer className="w-full pl-10 pr-10 pt-10 cursor-default">
                <span className="float-left mt-2"><i className="fa fa-copyright" /> 2022 Nick Berg</span>
                <span className="float-right">Created & Designed by 
                    <span className="font-la-belle-aurore flex justify-center text-xl">Divya</span>
                </span>
            </footer>
        </section>
    );
}

export default Contact;