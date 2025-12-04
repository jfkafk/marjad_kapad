<script lang="ts">
	import type { Dog } from '$lib/data/dogs';

	export let dog: Dog;
</script>

<div class="dog-card">
	{#if dog.image}
		<figure class="dog-image">
			<img src={dog.image} alt={dog.name} />
		</figure>
	{:else}
		<div class="dog-placeholder">
			<svg class="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>
	{/if}

	<div class="dog-content">
		<div class="dog-header">
			<h2 class="dog-name">
				{dog.name}
			</h2>
			{#if dog.fullName}
				<p class="dog-full-name">{dog.fullName}</p>
			{/if}
		</div>

		<div class="dog-badges">
			{#if dog.breed}
				<span class="badge badge-breed">{dog.breed}</span>
			{/if}
			{#if dog.dob}
				<span class="badge badge-dob">Sünd: {dog.dob}</span>
			{/if}
			{#if dog.status === 'rainbow_bridge'}
				<span class="badge badge-rainbow">Rainbow Bridge</span>
			{:else if dog.status === 'retired'}
				<span class="badge badge-retired">Pensionil</span>
			{:else}
				<span class="badge badge-active">Aktiivne</span>
			{/if}
		</div>

		{#if dog.owner}
			<p class="dog-info"><strong>Omanik:</strong> {dog.owner}</p>
		{/if}

		{#if dog.titles}
			<p class="dog-info"><strong>Tiitlid:</strong> {dog.titles}</p>
		{/if}

		{#if dog.achievements}
			<p class="dog-info"><strong>Saavutused:</strong> {dog.achievements}</p>
		{/if}

		{#if dog.description}
			<div class="dog-divider"></div>
			<p class="dog-description">{dog.description}</p>
		{/if}
	</div>
</div>

<style>
	.dog-card {
		background: white;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
		transition: all 0.3s ease;
		border: 1px solid rgba(102, 126, 234, 0.1);
	}

	.dog-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.dog-image img {
		width: 100%;
		height: 16rem;
		object-fit: cover;
		display: block;
	}

	.dog-placeholder {
		width: 100%;
		height: 16rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-icon {
		width: 5rem;
		height: 5rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.dog-content {
		padding: 1.5rem;
	}

	.dog-header {
		margin-bottom: 1rem;
	}

	.dog-name {
		font-size: 1.75rem;
		font-weight: bold;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.25rem;
	}

	.dog-full-name {
		font-size: 0.875rem;
		color: #64748b;
		font-style: italic;
	}

	.dog-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.badge {
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 500;
		display: inline-block;
	}

	.badge-breed {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.badge-dob {
		background: rgba(102, 126, 234, 0.1);
		color: #667eea;
		border: 1px solid rgba(102, 126, 234, 0.3);
	}

	.badge-active {
		background: #10b981;
		color: white;
	}

	.badge-retired {
		background: #f59e0b;
		color: white;
	}

	.badge-rainbow {
		background: linear-gradient(90deg, #ec4899, #a855f7, #3b82f6);
		color: white;
	}

	.dog-info {
		font-size: 0.875rem;
		color: #475569;
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.dog-info strong {
		color: #1e293b;
	}

	.dog-divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
		margin: 1rem 0;
	}

	.dog-description {
		white-space: pre-line;
		color: #334155;
		line-height: 1.6;
		font-size: 0.9rem;
	}
</style>
