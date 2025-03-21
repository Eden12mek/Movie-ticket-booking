"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import MoviePage from '@/components/MoviePage/MoviePage';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePageSlider />
      <MoviePage/>
    </main>
  );
}
