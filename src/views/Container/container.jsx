import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/header";
import { NavBar } from "./components/NavBar/NavBar";

function Container() {
    return (
        <main>
            <NavBar />
            <Header />
            <AboutMe/>
        </main>
    );    
}
export { Container };