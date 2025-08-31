<script lang="ts">
	import boatDog from "$lib/assets/boat_dog_back_big.jpg"
	import smallDog from "$lib/assets/login_side_small_dog.jpg"
	import banditLaunch from "$lib/assets/bandit_launch_big.jpg"
	import sittingDog from "$lib/assets/login_side_sit_dog.jpg"

	function goToSlide(slideId: string) {
		const element = document.getElementById(slideId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
		}
	}
</script>

<style>
    .carousel {
        scroll-behavior: smooth;
    }
    .carousel-item {
        scroll-margin-top: 0;
    }
</style>

<div class="w-full bg-gradient-to-b from-[#1e293b] to-[#1e293b] bg-cover bg-center bg-no-repeat py-8">
	<div class="w-full flex justify-center px-4">
		<div class="carousel w-full sm:w-11/12 md:w-11/12 lg:w-3/4 xl:w-2/3 max-w-6xl rounded-xl overflow-hidden shadow-2xl">
			<div id="slide1" class="carousel-item relative w-full">
				<img alt="Sitting dog"
						 src={sittingDog}
						 class="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover" />
				<div class="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide4')}>❮</button>
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide2')}>❯</button>
				</div>
			</div>

			<div id="slide2" class="carousel-item relative w-full">
				<img alt="Small dog"
						 src={smallDog}
						 class="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover" />
				<div class="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide1')}>❮</button>
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide3')}>❯</button>
				</div>
			</div>

			<div id="slide3" class="carousel-item relative w-full">
				<img alt="Boat dog"
						 src={boatDog}
						 class="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover" />
				<div class="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide2')}>❮</button>
					<button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide4')}>❯</button>
       </div>
      </div>

      <div id="slide4" class="carousel-item relative w-full">
       <img alt="Bandit launch"
        src={banditLaunch}
          class="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover" />
       <div class="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide3')}>❮</button>
        <button class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg" on:click={() => goToSlide('slide1')}>❯</button>
       </div>
      </div>
    </div>
  </div>
</div>