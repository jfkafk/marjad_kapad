<script lang="ts">
	import { _ } from '$lib/i18n';

	export let mediaItems: Array<{
		id: number;
		type: 'video' | 'image';
		src: string;
		poster?: string;
		alt: string;
		title: string;
		description: string;
		duration?: string;
	}> = [
		{
			id: 1,
			type: 'video',
			src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
			poster: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=600&h=400&fit=crop',
			alt: 'Koerte trenni video',
			title: $_('about.gallery.items.item1.title'),
			description: $_('about.gallery.items.item1.description'),
			duration: '3:45'
		},
		{
			id: 2,
			type: 'image',
			src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop',
			alt: 'Kutsikad mängimas',
			title: $_('about.gallery.items.item2.title'),
			description: $_('about.gallery.items.item2.description'),
		},
		{
			id: 3,
			type: 'video',
			src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
			poster: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
			alt: 'Koerte mänguväljak video',
			title: $_('about.gallery.items.item3.title'),
			description: $_('about.gallery.items.item3.description'),
			duration: '2:15'
		},
		{
			id: 4,
			type: 'image',
			src: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=600&h=400&fit=crop',
			alt: 'Koera hooldus',
			title: $_('about.gallery.items.item4.title'),
			description: $_('about.gallery.items.item4.description'),
		},
		{
			id: 5,
			type: 'video',
			src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
			poster: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
			alt: 'Veterinaarabi video',
			title: $_('about.gallery.items.item5.title'),
			description: $_('about.gallery.items.item5.description'),
			duration: '4:20'
		}
	];

	let modalOpen = false;
	let currentVideo: typeof mediaItems[0] | null = null;
	let modalVideoElement: HTMLVideoElement;

	function openModal(item: typeof mediaItems[0]) {
		if (item.type === 'video') {
			currentVideo = item;
			modalOpen = true;
			document.body.style.overflow = 'hidden';
		}
	}

	function closeModal() {
		modalOpen = false;
		currentVideo = null;
		document.body.style.overflow = '';

		if (modalVideoElement) {
			modalVideoElement.pause();
			modalVideoElement.currentTime = 0;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && modalOpen) {
			closeModal();
		}
	}
</script>

<style>
    /* ... keep all your existing styles ... */
    .main-container {
        width: 100%;
        min-height: 30vh;
        position: relative;
        overflow: hidden;
        background: linear-gradient(to bottom, #667eea, #764ba2);
    }

    .main-container::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
    }

    .header-section, .gallery-container, .content-wrapper {
        position: relative;
        z-index: 1;
    }

    .header-centre {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #475569, transparent);
        margin: 2rem 0;
        position: relative;
        z-index: 10;
    }

    .gallery-container {
        width: 100%;
        padding: 3rem 0;
    }

    .content-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
    }

    .media-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        align-items: start;
    }

    @media (max-width: 640px) {
        .media-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    .media-item {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(15px);
        border-radius: 1.25rem;
        overflow: hidden;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.4);
        transition: all 0.3s ease;
        position: relative;
    }

    .media-item:hover {
        transform: translateY(-6px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        background: rgba(255, 255, 255, 0.3);
    }

    .media-wrapper {
        position: relative;
        width: 100%;
        height: 240px;
        overflow: hidden;
    }

    .media-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .media-item:hover .media-content {
        transform: scale(1.05);
    }

    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .media-item:hover .video-overlay {
        opacity: 1;
    }

    .play-button {
        width: 4rem;
        height: 4rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #1f2937;
        transition: all 0.3s ease;
        transform: scale(0.8);
    }

    .media-item:hover .play-button {
        transform: scale(1);
        background: rgba(255, 255, 255, 1);
    }

    .video-duration {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .media-type-badge {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        background: rgba(59, 130, 246, 0.9);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
    }

    .media-type-badge.image {
        background: rgba(16, 185, 129, 0.9);
    }

    .text-content {
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(5px);
    }

    .item-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.75rem;
        background: linear-gradient(135deg, #1e40af, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.4;
    }

    .item-description {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #4b5563;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .modal-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        background: black;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .modal-video {
        width: 100%;
        height: auto;
        max-height: 80vh;
    }

    .modal-close {
        position: absolute;
        top: -3rem;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
        transition: all 0.3s ease;
    }

    .modal-close:hover {
        transform: scale(1.1);
        opacity: 0.7;
    }

    @media (max-width: 640px) {
        .content-wrapper {
            padding: 0 0.75rem;
        }

        .media-grid {
            grid-template-columns: 1fr;
        }

        .media-wrapper {
            height: 200px;
        }

        .text-content {
            padding: 1.25rem;
        }

        .item-title {
            font-size: 1.125rem;
        }

        .item-description {
            font-size: 0.9rem;
        }
    }
</style>

<div class="main-container" id="whatDo">
	<div class="header-section">
		<!-- <div class="divider"></div> -->
		<div class="header-centre">
			{$_('about.gallery.title')}
		</div>
	</div>

	<div class="gallery-container">
		<div class="content-wrapper">
			<div class="media-grid">
				{#each mediaItems as item}
					<div class="media-item">
						<div class="media-wrapper">
							{#if item.type === 'video'}
								<video
									class="media-content"
									poster={item.poster}
									preload="metadata"
									muted
									on:click={() => openModal(item)}
								>
									<source src={item.src} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
								<div class="video-overlay" on:click={() => openModal(item)}>
									<div class="play-button">▶</div>
								</div>
								{#if item.duration}
									<div class="video-duration">{item.duration}</div>
								{/if}
								<div class="media-type-badge">{$_('about.gallery.mediaTypes.video')}</div>
							{:else}
								<img
									class="media-content"
									src={item.src}
									alt={item.alt}
									loading="lazy"
								/>
								<div class="media-type-badge image">{$_('about.gallery.mediaTypes.image')}</div>
							{/if}
						</div>

						<div class="text-content">
							<h3 class="item-title">{item.title}</h3>
							<p class="item-description">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- Video Modal -->
<div class="modal-overlay" class:active={modalOpen} on:click={closeModal}>
	<div class="modal-content" on:click|stopPropagation>
		<button class="modal-close" on:click={closeModal}>×</button>
		{#if currentVideo}
			<video
				class="modal-video"
				controls
				autoplay
				bind:this={modalVideoElement}
			>
				<source src={currentVideo.src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{/if}
	</div>
</div>

<svelte:window on:keydown={handleKeydown} />