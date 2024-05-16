import Container from "@/app/components/Container";
import Filter from "./components/home/Filter";
import TopAreas from "./components/home/TopAreas";
import HeroSection from "./components/home/HeroSection";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Remax Royal : ريماكس رويال ",
    description: "ريماكس رويال موطن العقارات التي تبحث عنها",
};

const Home = async () => {
    return (
        <>
            <div>
                <HeroSection>
                    <Filter />
                </HeroSection>

                <Container>
                    <TopAreas />
                </Container>
            </div>
        </>
    );
};

export default Home;
