import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export function Home(){
    return(
        <>
            <Header />
            <Banner />
            <div>
                <div>
                    title
                </div>
                <div>
                    <p>imagem</p>
                    <p>nome</p>
                </div>
            </div>
        </>
    )
}