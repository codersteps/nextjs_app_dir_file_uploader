import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import FileUploader from "@/components/FileUploader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={`${styles.container} ${inter.className}`}>
        <h1>File uploader</h1>
        <form>
          <div>
            <h3>Thumbnail</h3>
            <FileUploader />
          </div>
        </form>
      </div>
    </main>
  );
}
