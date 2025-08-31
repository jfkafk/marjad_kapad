<script lang="ts">
	import loginImg from '$lib/assets/login_side_sit_dog.jpg'
	import registerImg from '$lib/assets/login_side_small_dog.jpg'
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let modal: HTMLDialogElement;
	let email = '';
	let password = '';
	let name = '';
	let confirmPassword = '';
	let isLoading = false;
	let error = '';
	let isSignUp = false;

	function openModal() {
		modal.showModal();
	}

	function closeModal() {
		modal.close();
		// Reset form when closing
		email = '';
		password = '';
		name = '';
		confirmPassword = '';
		error = '';
		isSignUp = false;
	}

	function toggleMode() {
		isSignUp = !isSignUp;
		error = '';
		// Reset form fields when switching
		email = '';
		password = '';
		name = '';
		confirmPassword = '';
	}

	async function handleAuth(event: Event) {
		event.preventDefault();

		if (isSignUp) {
			// Validation for signup
			if (!name || !email || !password || !confirmPassword) {
				error = 'Palun täitke kõik väljad';
				return;
			}
			if (password !== confirmPassword) {
				error = 'Paroolid ei kattu';
				return;
			}
			if (password.length < 8) {
				error = 'Parool peab olema vähemalt 8 tähemärki pikk';
				return;
			}
		} else {
			// Validation for login
			if (!email || !password) {
				error = 'Palun sisestage nii e-post kui ka parool';
				return;
			}
		}

		isLoading = true;
		error = '';

		try {
			// DEVELOPMENT: Check hardcoded credentials FIRST and ONLY for login
			if (!isSignUp && email === "test@pilvel.ee" && password === "P4r00L123@") {
				// Set authentication
				auth.login({
					email: email,
					name: 'Test User'
				});

				// Close modal
				closeModal();

				// Navigate to protected route
				await goto('/landing');
				return; // IMPORTANT: Exit the function here
			}

			// PRODUCTION: Normal API call
			const endpoint = isSignUp ? '/api/signup' : '/api/login';
			const body = isSignUp
				? { name, email, password }
				: { email, password };

			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});

			if (response.ok) {
				// Get user data from response
				const userData = await response.json();

				// Set authentication with real user data
				auth.login({
					email: userData.email || email,
					name: userData.name || name
				});

				// Close modal
				closeModal();

				// Navigate to protected route
				await goto('/landing');
			} else {
				// Handle error response
				const data = await response.json();
				error = data.message || (isSignUp ? 'Registreerumine ebaõnnestus' : 'Sisselogimine ebaõnnestus');
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			// Only show error if not a successful dev login
			error = 'Viga ühenduse loomisel. Palun proovige uuesti.';
		} finally {
			isLoading = false;
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === modal) {
			closeModal();
		}
	}
</script>

<!-- Rest of your modal HTML stays the same -->
<div>
	<button class="btn z-10 right-2 top-2 absolute btn-soft btn-info" on:click={openModal}>
		Sisene
	</button>

	<dialog
		bind:this={modal}
		class="modal"
		on:click={handleBackdropClick}
	>
		<div class="modal-box max-w-none w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] h-[80vh] p-0 overflow-hidden">
			<div class="flex h-full">
				<!-- Form Section -->
				<div class={`w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center transition-all duration-500 ${isSignUp ? 'md:order-2' : 'md:order-1'}`}>
					<div class="max-w-md mx-auto w-full">
						<div class="flex justify-between items-center mb-6">
							<h3 class="text-xl md:text-2xl font-bold">
								{isSignUp ? 'Loo konto' : 'Tere tulemast tagasi'}
							</h3>
							<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 md:relative md:top-0 md:right-0" on:click={closeModal}>✕</button>
						</div>

						<p class="text-sm text-gray-600 mb-6">
							{isSignUp
								? 'Liitu meiega, praegu ei tööta!'
								: 'Logige palun sisse'}
						</p>

						<form on:submit={handleAuth} class="space-y-4">
							{#if error}
								<div class="alert alert-error py-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span class="text-sm">{error}</span>
								</div>
							{/if}

							{#if isSignUp}
								<div class="form-control">
									<label class="label" for="name">
										<span class="label-text">Nimi</span>
									</label>
									<input
										id="name"
										type="text"
										placeholder="Teie nimi"
										class="input input-bordered"
										bind:value={name}
										required
										disabled={isLoading}
									/>
								</div>
							{/if}

							<div class="form-control">
								<label class="label" for="email">
									<span class="label-text">E-post</span>
								</label>
								<input
									id="email"
									type="email"
									placeholder="teie@email.ee"
									class="input input-bordered"
									bind:value={email}
									required
									disabled={isLoading}
								/>
							</div>

							<div class="form-control">
								<label class="label" for="password">
									<span class="label-text">Parool</span>
								</label>
								<input
									id="password"
									type="password"
									placeholder="••••••••"
									class="input input-bordered"
									bind:value={password}
									required
									disabled={isLoading}
								/>
								{#if !isSignUp}
									<label class="label">
										<span class="label-text-alt"></span>
										<button type="button" class="label-text-alt link link-secondary" on:click={() => alert('Parooli taastamine tulekul!')}>
											Unustasid parooli?
										</button>
									</label>
								{/if}
							</div>

							{#if isSignUp}
								<div class="form-control">
									<label class="label" for="confirmPassword">
										<span class="label-text">Kinnita parool</span>
									</label>
									<input
										id="confirmPassword"
										type="password"
										placeholder="••••••••"
										class="input input-bordered"
										bind:value={confirmPassword}
										required
										disabled={isLoading}
									/>
								</div>
							{/if}

							<div class="form-control mt-6">
								<button
									type="submit"
									class="btn btn-primary"
									disabled={isLoading}
								>
									{#if isLoading}
										<span class="loading loading-spinner loading-sm"></span>
										{isSignUp ? 'Registreerimine...' : 'Sisselogimine...'}
									{:else}
										{isSignUp ? 'Registreeru' : 'Logi sisse'}
									{/if}
								</button>
							</div>
						</form>

						<div class="divider">või</div>

						<div class="text-center">
							<p class="text-sm text-gray-600">
								{isSignUp ? 'Juba registreeritud?' : 'Pole kontot?'}
								<button type="button" class="link link-primary ml-1" on:click={toggleMode}>
									{isSignUp ? 'Logi sisse' : 'Registreeru siin'}
								</button>
							</p>
						</div>
					</div>
				</div>

				<!-- Image Section -->
				<div class={`hidden md:block md:w-1/2 relative overflow-hidden transition-all duration-500 ${isSignUp ? 'md:order-1' : 'md:order-2'}`}>
					<!-- Gradient Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>

					<!-- Background Image -->
					<div
						class="absolute inset-0 bg-cover bg-center"
						style="background-image: url('{isSignUp ? registerImg : loginImg}')"
					></div>

					<!-- Content Overlay -->
					<div class="relative h-full flex flex-col justify-center items-center text-white p-8 text-center">
						<div class="max-w-sm">
							<h2 class="text-3xl font-bold mb-4">
								{isSignUp ? 'Tere tulemast!' : 'Liituge meiega!'}
							</h2>
							<p class="text-lg opacity-90 mb-8">
								{isSignUp
									? 'Registreeruge, et sdfsdfsdfsdf sdf sdfo isdjfo jsdoifj osdijf oisdjfoij sdof.'
									: 'Looge konto, et sdf se fsdf sdfs drsdg rtnn rshrynrth rynjrnhytrn rtjhn rnjrt.'}
							</p>
							<div class="flex flex-col gap-3 items-center">
								<div class="flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Lehe arengut näha!</span>
								</div>
								<div class="flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Midagi siia</span>
								</div>
								<div class="flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>ja sinna</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</dialog>
</div>

<style>
    /* Your existing styles remain the same */
    .form-control {
        display: block;
        margin-bottom: 1rem;
    }

    .form-control .label {
        display: block;
        margin-bottom: 0.25rem;
    }

    .form-control .label-text {
        display: inline-block;
        font-weight: 500;
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
    }

    .form-control .input {
        width: 100%;
        display: block;
    }

    .order-1, .md\:order-1 {
        animation: slideFromLeft 0.5s ease-out;
    }

    .order-2, .md\:order-2 {
        animation: slideFromRight 0.5s ease-out;
    }

    @keyframes slideFromLeft {
        from {
            transform: translateX(-20px);
            opacity: 0.8;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideFromRight {
        from {
            transform: translateX(20px);
            opacity: 0.8;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>