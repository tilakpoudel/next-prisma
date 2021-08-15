import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ movie }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{movie.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h3>
          <strong>{movie.title}</strong>
        </h3>
        <p>{movie.year}</p>
        <p>{movie.description}</p>
        <Link href={'/'}>
          <a>Back</a>
        </Link>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const movie = await prisma.movie.findFirst({
    where: {
      slug: slug,
    },
  });

  return {
    props: {
      movie,
    },
  };
}
