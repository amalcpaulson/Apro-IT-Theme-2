import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Footing } from "./components/Footing/Footing";
import { Landing } from "./components/Landing/Landing";
import { Meal } from "./components/Meal/Meal";
import { SplendidMenu } from "./components/SplendidMenu/SplendidMenu";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Landing />
      <SplendidMenu />
      <Meal />
      <Footing />
      <Footer />
    </div>
  );
};
