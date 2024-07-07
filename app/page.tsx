import Container from "@/app/components/Container";
import Filter from "./components/home/Filter";
import HeroSection from "./components/home/HeroSection";
import TopCompounds from "./components/TopCompounds";
import TopListings from "./components/TopListings";
import getProperties, { IParams } from "./actions/getProperties";
import getCurrentUser from "./actions/getCurrentUser";
import Promotion from "./components/Promotion";
import Contactus from "@/app//components/Contactus";
import { getTopCompounds } from "./actions/getAll";

export const metadata = {
    title: "RE/MAX Royal | ريماكس رويال : عقارت للبيع وللإيجار في مصر",
    description:
        "ريماكس رويال موطن العقارات التي تبحث عنها | عقارات للبيع وللايجار في مصر",
};

const Home = async ({ searchParams }: { searchParams: IParams }) => {
    const currentUser = await getCurrentUser();
    // const areas = await getAreas({ perPage: 8 });
    const compounds = await getTopCompounds();
    const listings = await getProperties({ perPage: 6, isAddHome: true });
    return (
        <>
            <div>
                <HeroSection>
                    <Filter />
                </HeroSection>
                <Container>
                    {/* <TopAreas areas={areas as any} /> */}
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
