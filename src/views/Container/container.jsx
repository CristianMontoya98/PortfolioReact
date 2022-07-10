import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/header";
import { NavBar } from "./components/NavBar/NavBar";
import { Skills } from "./components/Skills/Skills";
function Container() {
    return (
        <main>
            <NavBar />
            <Header />
            <AboutMe />
            <Skills />
        </main>
    );    
}
export { Container };