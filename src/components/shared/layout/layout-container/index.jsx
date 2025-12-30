// import {Breadcrumb} from "../../components/breadcrumb/index"
import { Footer } from "../../layout/footer";
import { Navbar } from "../navbar";
import './style.css';

export function LayoutContainer({ children }) {
    return (
        <>
            <Navbar />
            {/* Render page content inside the layout */}
            <main className="app-container">
                {children}
            </main>
            <Footer />
        </>
    )
}