import { RootLayout } from "@/components/layout/RootLayout";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { CategoriesSection } from "@/sections/Categories";


function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
    </RootLayout>
  );
}

export default App;
