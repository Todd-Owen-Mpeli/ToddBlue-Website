import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import accessoriesDB from "../lib/accessoriesDB.json";
import animation from "../animation/animation.json";

const Accessories = () => {
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
				<title>Accessories | ToddBlue</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/otherImages/ms-icon-310x310.jpg" />
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
				<div className={styles.new}>
					<div className={styles.borderLineMid}></div>
					{/* <!--===== NEW PRODUCTS =====--> */}
					<motion.div variants={animation[0]} className={styles.productDisplay}>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Blue Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[0].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[0].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[0].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pink Daisy Shoelaces.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[1].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[1].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[1].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/PinkBlue Daisy Shoelaces.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[2].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[2].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[2].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Sunflowers Rainbow Brooch Pins.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[3].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[3].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[3].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pink Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[4].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[4].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[4].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/White Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[5].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[5].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[5].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/White Pink Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[6].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[6].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[6].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Black Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[7].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[7].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[7].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_Black.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[8].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[8].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[8].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_BrightOrange.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[9].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[9].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[9].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_Green.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[10].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[10].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[10].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_LipstickPink.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[11].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[11].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[11].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_White.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[12].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[12].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[12].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_Violet.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[13].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[13].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[13].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_Red.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[14].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[14].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[14].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Flatties_Purple.webp"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[15].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[15].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[15].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Black Daisy Shoelaces Tube.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[16].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[16].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[16].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pink Daisy Shoelaces.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{accessoriesDB[17].productName}</a>
									</Link>
									<h2 className={styles.price}>£{accessoriesDB[17].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{accessoriesDB[17].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</main>
		</motion.div>
	);
};

export default Accessories;
