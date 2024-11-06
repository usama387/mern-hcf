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
    </div>
  );
};

export default Home;
