import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <div className="bg-gray-200">
                <Hero />
                <Landing />
            </div>
            <Cards />
            <Footer />
        </main>
    );
}
