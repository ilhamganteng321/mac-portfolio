import {Navbar, Welcome, Dock, Home} from "#components"
import {Draggable} from "gsap/Draggable";
import {gsap} from "gsap";
import {Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text} from "#windows";
gsap.registerPlugin(Draggable)

const App = () => {
    return (
        <>
           <main>
               <Navbar/>
               <Welcome/>
               <Dock/>

               <Terminal/>
               <Safari/>
               <Resume/>
               <Finder/>
               <Text/>
               <Image/>
               <Contact/>
               <Home/>
               <Photos/>
           </main>
        </>
    )
}

export default App