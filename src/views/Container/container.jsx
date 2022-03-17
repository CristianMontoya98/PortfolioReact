import { Header } from "./components/Header/header";
import { NavBar } from "./components/NavBar/NavBar";

function Container() {
    return (
        <main>
            <NavBar />
            <Header/>
        </main>
    );    
}
export { Container };