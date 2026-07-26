import { RootLayout } from "@/components/layout/RootLayout";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";


function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
    </RootLayout>
  );
}

export default App;
