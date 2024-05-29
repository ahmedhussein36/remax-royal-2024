// import Container from "@/app/components/Container";
import Filter from "./components/home/Filter";
// import TopAreas from "./components/home/TopAreas";
import HeroSection from "./components/home/HeroSection";
// import getAreas, { IParams } from "./actions/getAreas";

export const metadata = {
    title: "RE/MAX Royal | ريماكس رويال : عقارت للبيع وللإيجار في مصر",
    description:
        "ريماكس رويال موطن العقارات التي تبحث عنها | عقارات للبيع وللايجار في مصر",
};

const Home = async () => {
    // const areas = await getAreas(searchParams);
    return (
        <>
            <div>
                <HeroSection>
                    <Filter />
                </HeroSection>
                {/* <Container>
                    <TopAreas areas={areas as any} />
                </Container> */}
            </div>
        </>
    );
};

export default Home;
