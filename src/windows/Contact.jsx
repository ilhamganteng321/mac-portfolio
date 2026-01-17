import {WindowControls} from "#components";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    className="w-40 h-40 rounded-full"
                    src="/images/profile.jpg" alt="Ilham"/>

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just Wanna talk tech? I'm in.</p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{backgroundColor:bg}}>
                            <a href={link} title={text} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className="size-5 filter invert brightness-0"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = windowWrapper(Contact,"contact");

export default ContactWindow;