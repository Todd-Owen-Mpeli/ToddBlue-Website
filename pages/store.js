/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import ProductDisplayFourGrid from "/components/productDisplayFourGrid";
import animation from "/animation/animation.js";

const store = () => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>Store | ToddBlue</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/otherImages/ms-icon-310x310.jpg" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			{/* <!--===== NAVIGATION =====--> */}
			{/* <Navbar /> */}

			<main className={styles.main}>
				{/* <!--===== POPULAR =====--> */}
				<div className={styles.store}>
					<div className={styles.borderLineMid}></div>
					{/* PRODUCTS DISPLAY SECTION */}
					<ProductDisplayFourGrid />

					<div className={styles.borderLineMid}></div>
					{/* <!--===== RELATED CATEGORY =====--> */}
					<div className={styles.bottomContent}>
						<div className={styles.relatedCategories}>
							<h2>Related Categories</h2>

							<div className={styles.list}>
								<motion.ul variants={animation[0]} className={styles.links}>
									<Link href="/OneTime" target="blank">
										<motion.a variants={animation[2]}>Limited Drops</motion.a>
									</Link>
									<Link href="/OneTime" target="blank">
										<motion.a variants={animation[2]}>
											One Time Customs
										</motion.a>
									</Link>
									<Link href="/Accessories" target="blank">
										<motion.a variants={animation[2]}>
											Backpacks & Bags
										</motion.a>
									</Link>
									<Link href="/Accessories" target="blank">
										<motion.a variants={animation[2]}>Cross-Body Bags</motion.a>
									</Link>
								</motion.ul>
							</div>
						</div>
						<div className={styles.relatedStories}>
							<h2>Help Guide Stories</h2>

							<div className={styles.content}>
								<div className={styles.productGuide}>
									<motion.div variants={animation[1]}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/a6da69b3cbefc0b7d1c3e9f67d011f8a.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={animation[1]}>
										<h5>Size Guide</h5>
										<h2>How to select the right shoe size.</h2>
									</motion.div>
								</div>
								<div className={styles.productGuide}>
									<motion.div variants={animation[1]}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/dca9766ecf88354b6b32ea3c48b6e7cb.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={animation[1]}>
										<h5>Buying Guide</h5>
										<h2>How to select the right item.</h2>
									</motion.div>
								</div>
								<div className={styles.productGuide}>
									<motion.div variants={animation[1]}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/c7e6d1df7824762ba1395ea8db3978d2.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={animation[1]}>
										<h5>Backpacks & Bags Guide</h5>
										<h2>Which is the right Backpacks or Bags for the event.</h2>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<div className={styles.borderLineMid}></div>

			{/* <!--===== FOOTER =====--> */}
			{/* <Footer /> */}
		</motion.div>
	);
};

export default store;
