import { RootLayout } from "@/components/layout/RootLayout";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { CategoriesSection } from "@/sections/Categories";
import { DisciplinesSection } from "@/sections/Disciplines";


function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <DisciplinesSection />
    </RootLayout>
  );
}

export default App;
