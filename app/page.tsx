import Container from "@/app/components/Container";
import ClientOnly from "./components/ClientOnly";
import Filter from "./components/home/Filter";
import TopAreas from "./components/home/TopAreas";
import HeroSection from "./components/home/HeroSection";
import Card from "./components/Card";

const Home = async () => {
    return (
        <ClientOnly>
            <div>
                <HeroSection>
                    <Filter />
                </HeroSection>

                <Container>
                    <TopAreas />
                </Container>
            </div>
        </ClientOnly>
    );
};

export default Home;
