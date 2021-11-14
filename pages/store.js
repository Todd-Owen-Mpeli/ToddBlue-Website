/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "/styles/Home.module.scss";

const store = () => {
	return (
		<div>
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

			<main className={styles.main}>
				{/* <!--===== NAVIGATION =====--> */}
				<Navbar />

				{/* <!--===== POPULAR =====--> */}
				<div className={styles.popular}>
					<h2>New</h2>

					<div className={styles.productDisplay}>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								{/* <img src="/productImages/_MG_2936.jpg" alt="Product Image" /> */}
								<Image
									src="/productImages/_MG_3295.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Spider-Man: Miles Morales
									</a>
									<h2 className={styles.price}> £199.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens
								</a>
							</div>
						</div>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								<Image
									src="/productImages/_MG_3551 - Copy.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Demon Slayer - Mitsuri Kanroji
									</a>
									<h2 className={styles.price}> £119.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens
								</a>
							</div>
						</div>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								<Image
									src="/productImages/_MG_3644.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Haikyuu!! - Tetsuro Kuroo
									</a>
									<h2 className={styles.price}> £169.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default store;
