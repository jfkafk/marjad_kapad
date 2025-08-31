<!-- YourFacebookPageManager.svelte -->
<script>
	export let pageId = '100066198655798'; // Lõuna-Eesti veepäästekoerte grupp
	export let accessToken = ''; // Your page access token
	export let width = 500;
	export let height = 600;

	let posts = [];
	let videos = [];
	let loading = false;
	let error = '';
	let selectedContent = '';
	let feedMethod = 'manual'; // 'manual', 'api', 'zapier', 'rss'

	// Manual embed URL
	let manualUrl = '';

	// RSS feed URL (from FetchRSS or Zapier)
	let rssFeedUrl = '';

	// API configuration
	let apiConfigured = false;

	$: isValidUrl = manualUrl && (
		manualUrl.includes('facebook.com/') ||
		manualUrl.includes('fb.watch/') ||
		manualUrl.includes('/videos/') ||
		manualUrl.includes('/reel/')
	);

	$: embedUrl = isValidUrl ?
		`https://www.facebook.com/plugins/video.php?height=${height}&href=${encodeURIComponent(manualUrl)}&show_text=false&width=${width}&show_captions=false` :
		null;

	// Fetch posts using Graph API (server-side recommended)
	async function fetchPageContent() {
		if (!accessToken) {
			error = 'Access token required for API access';
			return;
		}

		loading = true;
		error = '';

		try {
			// Note: This should be done server-side to protect your access token
			const postsResponse = await fetch(`https://graph.facebook.com/v18.0/${pageId}/posts?access_token=${accessToken}&fields=id,message,created_time,permalink_url,full_picture`);
			const postsData = await postsResponse.json();

			const videosResponse = await fetch(`https://graph.facebook.com/v18.0/${pageId}/videos?access_token=${accessToken}&fields=id,title,description,created_time,permalink_url,source`);
			const videosData = await videosResponse.json();

			if (postsData.error) {
				throw new Error(postsData.error.message);
			}

			posts = postsData.data || [];
			videos = videosData.data || [];
			apiConfigured = true;

		} catch (err) {
			error = err.message;
			console.error('API Error:', err);
		} finally {
			loading = false;
		}
	}

	function selectPost(post) {
		selectedContent = post.permalink_url;
		manualUrl = post.permalink_url;
		feedMethod = 'manual';
	}

	function setupZapier() {
		window.open('https://zapier.com/apps/facebook-pages/integrations/rss', '_blank');
	}

	function setupFetchRSS() {
		window.open('https://fetchrss.com/source/facebook', '_blank');
	}

	function setupFacebookApp() {
		window.open('https://developers.facebook.com/apps/', '_blank');
	}
</script>

<div class="page-manager">
	<h2>Your Facebook Page Content Manager</h2>
	<p class="page-info">Managing: <strong>Lõuna-Eesti veepäästekoerte grupp</strong></p>

	<!-- Method Selection -->
	<div class="method-selector">
		<h3>Choose Your Content Access Method:</h3>

		<div class="method-cards">
			<!-- Manual Method -->
			<div class="method-card" class:selected={feedMethod === 'manual'}>
				<button on:click={() => feedMethod = 'manual'} class="method-button">
					<h4>🎯 Manual Embed</h4>
					<p>Copy individual post/reel URLs for embedding</p>
					<span class="difficulty easy">Easy • Secure • Reliable</span>
				</button>
			</div>

			<!-- Zapier Method -->
			<div class="method-card" class:selected={feedMethod === 'zapier'}>
				<button on:click={() => feedMethod = 'zapier'} class="method-button">
					<h4>🔄 Zapier RSS</h4>
					<p>Automated RSS feed for your own page</p>
					<span class="difficulty easy">Easy • No coding • Free tier</span>
				</button>
			</div>

			<!-- FetchRSS Method -->
			<div class="method-card" class:selected={feedMethod === 'rss'}>
				<button on:click={() => feedMethod = 'rss'} class="method-button">
					<h4>📡 FetchRSS</h4>
					<p>Third-party RSS generation</p>
					<span class="difficulty medium">Medium • Free tier • Some limitations</span>
				</button>
			</div>

			<!-- API Method -->
			<div class="method-card" class:selected={feedMethod === 'api'}>
				<button on:click={() => feedMethod = 'api'} class="method-button">
					<h4>🔧 Facebook API</h4>
					<p>Full programmatic access to your content</p>
					<span class="difficulty hard">Advanced • Full control • Requires setup</span>
				</button>
			</div>
		</div>
	</div>

	<!-- Method-specific interfaces -->
	{#if feedMethod === 'manual'}
		<div class="method-content">
			<h3>Manual Content Embedding</h3>
			<div class="manual-interface">
				<div class="url-input">
					<label for="manual-url">Facebook Post/Reel URL:</label>
					<input
						id="manual-url"
						type="url"
						bind:value={manualUrl}
						placeholder="Paste Facebook post/reel URL here..."
						class="url-field"
					/>
				</div>

				<div class="instructions">
					<h4>How to get URLs from your page:</h4>
					<ol>
						<li>Go to your <a href="https://www.facebook.com/p/Lõuna-Eesti-veepäästekoerte-grupp-Märjad-käpad-100066198655798/" target="_blank">Facebook page</a></li>
						<li>Click on the post or reel you want to embed</li>
						<li>Copy the URL from your browser's address bar</li>
						<li>Paste it above</li>
					</ol>
				</div>
			</div>
		</div>
	{:else if feedMethod === 'zapier'}
		<div class="method-content">
			<h3>Zapier RSS Setup</h3>
			<div class="zapier-interface">
				<p>Since you own the page, Zapier can create an automated RSS feed:</p>
				<ol>
					<li>Click the button below to set up Zapier</li>
					<li>Connect your Facebook account</li>
					<li>Select your page</li>
					<li>Choose "RSS by Zapier" as the action</li>
					<li>Get your RSS feed URL</li>
				</ol>

				<button on:click={setupZapier} class="setup-button">
					Set up Zapier RSS →
				</button>

				<div class="rss-input">
					<label for="zapier-rss">Your Zapier RSS URL:</label>
					<input
						type="url"
						bind:value={rssFeedUrl}
						placeholder="Paste your Zapier RSS URL here..."
						class="url-field"
					/>
				</div>
			</div>
		</div>
	{:else if feedMethod === 'rss'}
		<div class="method-content">
			<h3>FetchRSS Setup</h3>
			<div class="fetchrss-interface">
				<p>Create an RSS feed from your public page:</p>

				<button on:click={setupFetchRSS} class="setup-button">
					Create RSS at FetchRSS →
				</button>

				<div class="rss-input">
					<label for="fetch-rss">Your FetchRSS URL:</label>
					<input
						type="url"
						bind:value={rssFeedUrl}
						placeholder="Paste your FetchRSS URL here..."
						class="url-field"
					/>
				</div>

				<div class="limitations">
					<h4>FetchRSS Limitations:</h4>
					<ul>
						<li>Free: 5 feeds, 5 posts each, 24h updates</li>
						<li>May not capture all content types</li>
						<li>Regular posts more reliable than reels</li>
					</ul>
				</div>
			</div>
		</div>
	{:else if feedMethod === 'api'}
		<div class="method-content">
			<h3>Facebook Graph API Setup</h3>
			<div class="api-interface">
				<div class="api-warning">
					⚠️ <strong>Security Note:</strong> Never put access tokens in client-side code in production. This should be done server-side.
				</div>

				<div class="api-setup">
					<h4>Setup Steps:</h4>
					<ol>
						<li>Create a Facebook App at developers.facebook.com</li>
						<li>Add Facebook Login and Pages API products</li>
						<li>Get your Page Access Token</li>
						<li>Use the token below (for testing only)</li>
					</ol>

					<button on:click={setupFacebookApp} class="setup-button">
						Create Facebook App →
					</button>
				</div>

				<div class="token-input">
					<label for="access-token">Page Access Token (Testing only):</label>
					<input
						id="access-token"
						type="password"
						bind:value={accessToken}
						placeholder="Your page access token..."
						class="url-field"
					/>
					<button on:click={fetchPageContent} disabled={!accessToken || loading} class="fetch-button">
						{loading ? 'Fetching...' : 'Fetch Content'}
					</button>
				</div>

				{#if error}
					<div class="error">Error: {error}</div>
				{/if}

				{#if posts.length > 0}
					<div class="content-list">
						<h4>Your Recent Posts:</h4>
						{#each posts.slice(0, 5) as post}
							<div class="content-item">
								<p>{post.message || 'No message'}</p>
								<small>{new Date(post.created_time).toLocaleDateString()}</small>
								<button on:click={() => selectPost(post)} class="select-button">Embed This</button>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Content Display -->
	{#if (embedUrl && feedMethod === 'manual') || selectedContent}
		<div class="content-display">
			<h3>Preview:</h3>
			<div class="embed-wrapper">
				<iframe
					src={embedUrl}
					{width}
					{height}
					title="Facebook Content"
					style="border:none;overflow:hidden"
					scrolling="no"
					frameborder="0"
					allowfullscreen="true"
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					loading="lazy"
					sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
				</iframe>
			</div>
		</div>
	{/if}

	<!-- RSS Feed Display -->
	{#if rssFeedUrl && (feedMethod === 'zapier' || feedMethod === 'rss')}
		<div class="rss-display">
			<h3>RSS Feed Ready:</h3>
			<p>You can now use this RSS URL in any feed reader or website:</p>
			<code>{rssFeedUrl}</code>
		</div>
	{/if}
</div>

<style>
    .page-manager {
        max-width: 900px;
        margin: 0 auto;
        padding: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .page-info {
        color: #666;
        margin-bottom: 2rem;
    }

    .method-selector {
        margin-bottom: 2rem;
    }

    .method-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .method-card {
        border: 2px solid #e9ecef;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.2s;
    }

    .method-card.selected {
        border-color: #1877f2;
        box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
    }

    .method-button {
        width: 100%;
        padding: 1.5rem;
        background: white;
        border: none;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .method-button:hover {
        background: #f8f9fa;
    }

    .method-button h4 {
        margin: 0 0 0.5rem 0;
        color: #495057;
        font-size: 1.1rem;
    }

    .method-button p {
        margin: 0 0 0.75rem 0;
        color: #6c757d;
        font-size: 0.9rem;
    }

    .difficulty {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    .difficulty.easy {
        background: #d1edff;
        color: #0969da;
    }

    .difficulty.medium {
        background: #fff8c5;
        color: #7c6c00;
    }

    .difficulty.hard {
        background: #ffebe9;
        color: #cf222e;
    }

    .method-content {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .url-input, .rss-input, .token-input {
        margin-bottom: 1rem;
    }

    .url-input label, .rss-input label, .token-input label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #495057;
    }

    .url-field {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 6px;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .url-field:focus {
        outline: none;
        border-color: #1877f2;
        box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
    }

    .setup-button, .fetch-button, .select-button {
        background: #1877f2;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        font-size: 0.9rem;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.2s;
    }

    .setup-button:hover, .fetch-button:hover, .select-button:hover {
        background: #166fe5;
    }

    .setup-button:disabled, .fetch-button:disabled {
        background: #6c757d;
        cursor: not-allowed;
    }

    .instructions ol, .limitations ul {
        padding-left: 1.5rem;
        color: #6c757d;
    }

    .instructions li, .limitations li {
        margin-bottom: 0.5rem;
    }

    .api-warning {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 6px;
        padding: 1rem;
        margin-bottom: 1.5rem;
        color: #856404;
    }

    .content-list {
        margin-top: 1.5rem;
        max-height: 300px;
        overflow-y: auto;
    }

    .content-item {
        background: white;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 1rem;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content-item p {
        margin: 0;
        flex-grow: 1;
        margin-right: 1rem;
    }

    .content-item small {
        color: #6c757d;
        margin-right: 1rem;
    }

    .select-button {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    .embed-wrapper {
        text-align: center;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
    }

    .embed-wrapper iframe {
        max-width: 100%;
    }

    .rss-display {
        background: #e8f5e8;
        border: 1px solid #c3e6c3;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .rss-display code {
        background: white;
        padding: 0.5rem;
        border-radius: 4px;
        display: block;
        margin-top: 0.5rem;
        word-break: break-all;
    }

    .error {
        background: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 6px;
        padding: 1rem;
        color: #721c24;
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        .method-cards {
            grid-template-columns: 1fr;
        }

        .embed-wrapper iframe {
            width: 100% !important;
            height: 400px !important;
        }

        .content-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
</style>