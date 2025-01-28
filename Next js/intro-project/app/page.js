import Image from "next/image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <button><Link href="/about">About</Link></button>
      <button><Link href="/services">Service</Link></button>
      <Header/>
      <h2>
        Hello world!
      </h2>
      <Footer/>
    </div>
  );
}
