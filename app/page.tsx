import Menu from "../src/Components/Menu";
import AssinaturaNewsletter from "../src/Components/AssignaturaNewsletter";
import Card from "../src/Components/Card";
import ProductSection from "../src/Components/Products";
import Footer from "../src/Components/Footer";

export default function Home() {
  return (
    <div >
      <main>
        <Menu></Menu>
        <AssinaturaNewsletter></AssinaturaNewsletter>
        <Card></Card>
        <ProductSection></ProductSection>
        <Footer showCopyright></Footer>
      </main>
      
    </div>
  );
}
