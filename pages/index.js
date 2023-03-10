import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Not a VC</title>
      </Head>

      <main>
        <Header title="Karanveer Mohan is not a VC." />
        <Header title="Nor is Henry Charles Elliott." />
      </main>
    </div>
  );
}
