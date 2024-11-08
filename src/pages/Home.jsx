import Banner from "@/CustomComponents/Banner";
import Header from "@/CustomComponents/Header";
import SpecialistMenu from "@/CustomComponents/SpecialistMenu";
import TopDoctors from "@/CustomComponents/TopDoctors";

const Home = () => {
  return (
    <div>
      {/* Child Components */}
      <Header />
      <SpecialistMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
