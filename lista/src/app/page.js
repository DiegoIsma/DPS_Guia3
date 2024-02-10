import Image from "next/image";
import styles from "./page.module.css";
import From from "@/components/Form"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main}>
        <div>
          <p>
            Aqui haremos nuestro TO-DO list<br/>
          </p>
          <From></From>
        </div>
      </div>
    </main>
  );
}
