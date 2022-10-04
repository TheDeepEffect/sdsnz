import type { NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useMemo } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Label from '../components/Label'
import { getPage } from '../lib/api'
import { Page } from '../lib/schema'
import styles from '../styles/Home.module.css'
import { contentfulLoader } from '../utils'
import useMapImage from '../utils/useMapImage'

const Home = (props: NextPageContext & { page: Page }) => {
  const { page } = props;
  const pageImages = useMapImage(page?.pageImgaesCollection?.items);

  return (
    <div className={styles.container}>
      <Head>
        <title>{page.content.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackgroundImage
          className={[styles.sectionOne, styles.textContainer]}
          url={pageImages[page.content.heroImageId]}
        >

          {React.Children.toArray(page.content.heroTextH1.map((x: ReactNode) => <h1>{x}</h1>))}
          <Link
            href={'#services'}>
            <Button>
              Learn More
            </Button>
          </Link>

        </BackgroundImage>
        <section className={styles.services} id='services'>
          <Label>
            {page.content.label}
          </Label>
          <div className={styles.serviceContent}>
            {React.Children.toArray(page.content.servicesCards.map((x: any) => <div className={styles.individual}>
              <div className={styles.individualContent}>
                <div className={styles.individualLabel}>
                  {x.title}
                </div>
                {x.paragraphs.map((text: ReactNode) => <p>{text}</p>)}
                <Link
                  href={x.btnInfo.link}
                >
                  <a>
                    <Button>{x.btnInfo.label}</Button>
                  </a>
                </Link>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  loader={contentfulLoader}
                  src={pageImages[x.cardImageId]}
                  height={340}
                  width={700}
                  objectFit='cover'
                />
              </div>
            </div>
            ))}
          </div>
        </section>
        <section className={styles.subscribeContainer}>
          <h1>Subscribe</h1>
          <p>Subscribe to receive the latest blog, government's updates and special offers</p>
          <form>
            <div className={styles.inputFieldgrp}>
              <input type="text" placeholder='Name' required />
              <input type="email" placeholder='Email' required />
            </div>
            <Button>Subscribe</Button>
          </form>
        </section>
      </main>
    </div>
  )
}




export async function getStaticProps() {
  const data = await getPage('/');
  return {
    props: {
      page: data ?? null
    }
  }
}
export default Home
