<script lang="ts">
	import landingBackground from '$lib/assets/boat_dog_back_big.jpg';
	import yeah from '$lib/assets/elva_vtü yeah 1.jpg';
	import euro from '$lib/assets/euro.webp';
	import tractor from '$lib/assets/traktor.jpg';
	import man from '$lib/assets/tractorist.png';
</script>

<!-- Fixed background image -->
<div class="landing-background-container">
	<img alt="dog" src={landingBackground} />
</div>

<!-- Gradient overlay -->
<div class="gradient-overlay"></div>

<div class="header-centre">Kust me tuleme?</div>

<!-- Scrollable content -->
<div class="content-wrapper">
	<!-- Timeline section - separate from hero -->
	<div class="timeline-section">
		<!-- Mobile wrapper for high z-index -->
		<div class="mobile-timeline-wrapper">
			<!-- Timeline with proper spacing -->
			<div class="timeline-container">
				<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
					<li>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-start mb-10 md:text-end timeline-item-content">
							<time class="font-mono italic">2025</time>
							<div class="text-lg font-black">Elva VTÜ</div>
							<img src={yeah} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end md:mb-10 timeline-item-content">
							<time class="font-mono italic">2018</time>
							<div class="text-lg font-black">Elva VTÜ esimene traktor</div>
							<img src={tractor} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-start mb-10 md:text-end timeline-item-content">
							<time class="font-mono italic">1964</time>
							<div class="text-lg font-black">Elva VTÜ esimene traktorijuht</div>
							<img src={man} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end md:mb-10 timeline-item-content">
							<time class="font-mono italic">1991</time>
							<div class="text-lg font-black">Elva VTÜ yeah!</div>
							<img src={yeah} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-start md:mb-10 timeline-item-content">
							<time class="font-mono italic">1999</time>
							<div class="text-lg font-black">Elva VTÜ yeah! teist korda</div>
							<img src={yeah} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end md:mb-10 timeline-item-content">
							<time class="font-mono italic">2003</time>
							<div class="text-lg font-black">Karl</div>
							<img src={man} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-start md:mb-10 timeline-item-content">
							<time class="font-mono italic">2009</time>
							<div class="text-lg font-black">Elva VTÜ yeah! kolmas tulemine</div>
							<img src={yeah} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end md:mb-10 timeline-item-content">
							<time class="font-mono italic">2010</time>
							<div class="text-lg font-black">Märjad-Käpad</div>
							<img src={yeah} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-start mb-10 md:text-end timeline-item-content">
							<time class="font-mono italic">2011</time>
							<div class="text-lg font-black">Eesti võttis kasutusele euro</div>
							<img src={euro} alt="Description" class="timeline-thumbnail" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.landing-background-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0; /* Even more negative */
	}

	.landing-background-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0; /* Between background and content */
		background:
			linear-gradient(to right, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)),
			linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
		background-blend-mode: lighten;
		pointer-events: none; /* Allow clicks to pass through */
	}

	.content-wrapper {
		position: relative;
		min-height: 100vh;
		margin-bottom: 3rem;
		z-index: 1; /* Lower than timeline but higher than background */
	}
	/* Mobile-specific wrapper to ensure timeline is always on top */
	.mobile-timeline-wrapper {
		position: relative;
		z-index: 999; /* Very high for mobile only */
		width: 100%;
	}

	.timeline-section {
		position: relative;
		z-index: 5;
		min-height: 50vh; /* Ensure enough space for timeline */
	}

	@media (min-width: 1501px) {
		.mobile-timeline-wrapper {
			z-index: 5; /* Normal z-index for large desktop */
		}
	}

	@media (max-width: 1500px) and (min-width: 769px) {
		.mobile-timeline-wrapper {
			z-index: 10; /* Medium z-index for medium screens */
		}
	}

	/* Timeline container with proper z-index and spacing */
	.timeline-container {
		position: relative;
		z-index: 5; /* Below header/footer but above background */
		padding: 2rem;
		/* Space for header */
		/* Space for footer */
		margin: 3rem 2rem;
		background: rgba(255, 255, 255, 0); /* Very subtle background */
		border-radius: 1rem;
	}

	/* Individual timeline item styling for better readability */
	:global(.timeline-item-content) {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 0.5rem;
		padding: 1rem;
		backdrop-filter: blur(5px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	/* Small thumbnail images - default positioning for timeline-start (right side) */
	:global(.timeline-thumbnail) {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		float: right;
		margin: 0 0 1rem 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	/* Timeline-end images should be on the left side */
	:global(.timeline-end .timeline-thumbnail) {
		float: left;
		margin: 0 1rem 1rem 0;
	}

	/* Hover effects - adjust translation for left-positioned images */
	:global(.timeline-thumbnail) {
		transition: all 0.5s ease;
	}

	:global(.timeline-start .timeline-thumbnail:hover) {
		transform: scale(6) !important;
		border-radius: 0.125rem !important;
	}

	:global(.timeline-end .timeline-thumbnail:hover) {
		transform: scale(6) translateX(12px) !important;
		border-radius: 0.125rem !important;
	}

	:global(.timeline-gallery img) {
		width: 100%;
		height: 120px;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	/* Large desktop spacing */
	@media (max-width: 1600px) {
		.timeline-container {
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
	}

	/* Medium desktop spacing */
	@media (max-width: 1400px) {
		.timeline-container {
			margin-top: 2rem;
			margin-bottom: 2rem;
			z-index: 6;
		}
	}

	/* Small desktop spacing */
	@media (max-width: 1200px) {
		.timeline-container {
			margin-top: 2rem;
			margin-bottom: 2rem;
			z-index: 7;
		}
	}

	/* Tablet spacing adjustments */
	@media (max-width: 1024px) {
		.timeline-container {
			/* More space for tablet headers */
			margin: 2rem 1.5rem;
			padding: 1.5rem;
			z-index: 8; /* Higher z-index for tablets */
		}
	}

	/* Mobile spacing adjustments */
	@media (max-width: 768px) {
		.timeline-container {
			/* Even more space for mobile headers */
			margin: 2rem 1rem;
			padding: 1rem;
			z-index: 15; /* Much higher z-index for mobile */
		}

		/* On mobile, all images should behave consistently */
		:global(.timeline-thumbnail) {
			float: none;
			display: block;
			margin: 0 auto 1rem auto;
		}

		:global(.timeline-end .timeline-thumbnail) {
			float: none;
			margin: 0 auto 1rem auto;
		}
	}

	/* Extra small mobile screens */
	@media (max-width: 480px) {
		.timeline-container {
			/* Maximum space for small mobile headers */
			margin: 2rem 0.5rem;
			padding: 1rem;
			z-index: 20; /* Highest z-index for small screens */
		}
	}

	.header-centre {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
