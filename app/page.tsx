import Container from "@/app/components/Container";
import Filter from "./components/home/Filter";
import TopAreas from "./components/home/TopAreas";
import HeroSection from "./components/home/HeroSection";
import getAreas, { IParams } from "./actions/getAreas";
import getCompounds from "./actions/getCompounds";
import TopCompounds from "./components/TopCompounds";
import TopListings from "./components/TopListings";
import getProperties from "./actions/getProperties";
import getCurrentUser from "./actions/getCurrentUser";
import Promotion from "./components/Promotion";
import Contactus from "@/app//components/Contactus";

export const metadata = {
    title: "RE/MAX Royal | ريماكس رويال : عقارت للبيع وللإيجار في مصر",
    description:
        "ريماكس رويال موطن العقارات التي تبحث عنها | عقارات للبيع وللايجار في مصر",
};

const Home = async ({ searchParams }: { searchParams: IParams }) => {
    const currentUser = await getCurrentUser();
    const areas = await getAreas({ perPage: 8 });
    const compounds = await getCompounds({ perPage: 6 });
    const listings = await getProperties({ perPage: 6, isAddHome: true });
    return (
        <>
            <div>
                <HeroSection>
                    <Filter />
                </HeroSection>
                <Container>
                    <TopAreas areas={areas as any} />
                    <TopCompounds compounds={compounds as any} />
                    <Promotion />
                    <TopListings
                        listings={listings as any}
                        currentUser={currentUser as any}
                    />
                    <Contactus />
                </Container>
            </div>
        </>
    );
};

export default Home;
