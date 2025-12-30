// import {Breadcrumb} from "../../components/breadcrumb/index"
import { Footer } from "../../../../../../components/shared/layout/footer";
import ResturantNavbar from "../../../navbar";

import './style.css';

export function ResturantLayoutContainer({ children }) {
    return (
        <>
            <ResturantNavbar />
            {/* Render page content inside the layout */}
            <main className="app-container">
                {children}
            </main>
            <Footer/>
        </>
    )
}