import { RootLayout } from "@/components/layout/RootLayout";
import { HeroSection } from "@/sections/Hero";
import { UserJourneySection } from "@/sections/UserJourney";
import { AboutSection } from "@/sections/About";
import { CategoriesSection } from "@/sections/Categories";
import { DisciplinesSection } from "@/sections/Disciplines";
import { WhyRegisterSection } from "@/sections/WhyRegister";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <UserJourneySection />
      <AboutSection />
      <CategoriesSection />
      <DisciplinesSection />
      <WhyRegisterSection />
    </RootLayout>
  );
}

export default App;
