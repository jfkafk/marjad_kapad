<script lang="ts">
	// Define the event type
	type EventType = 'Paitamine' | 'Treening' | 'Vesi' | 'Muu';

	interface Event {
		id: number;
		date: string;
		time: string;
		location: string;
		type: EventType;
		info: string;
	}

	let events: Event[] = [
		{
			id: 1,
			date: '2024-09-15',
			time: '14:00',
			location: 'Viljandi Hansapäevad',
			type: 'Paitamine',
			info: 'Trenn kestab orienteeruvalt 2h'
		},
		{
			id: 2,
			date: '2024-09-22',
			time: '10:30',
			location: 'Elva Arbi Järv',
			type: 'Treening',
			info: 'Vot seal teeme trenni!'
		},
		{
			id: 3,
			date: '2024-09-28',
			time: '16:00',
			location: 'Miinisadam, Tallinn',
			type: 'Vesi',
			info: 'Ujume vee sees.'
		},
		{
			id: 4,
			date: '2024-10-05',
			time: '13:30',
			location: 'Tartu raekoda',
			type: 'Muu',
			info: 'Jõulujalutuskäik septembris'
		},
		{
			id: 5,
			date: '2024-10-12',
			time: '11:00',
			location: 'Puu taga',
			type: 'Paitamine',
			info: 'mingi asja raames teeme koerale pai'
		}
	];

	// Function to get badge styling based on event type
	function getTypeBadge(type: EventType): string {
		const badges: Record<EventType, string> = {
			Paitamine: 'bg-blue-100 text-blue-800 border-blue-200',
			Treening: 'bg-green-100 text-green-800 border-green-200',
			Vesi: 'bg-purple-100 text-purple-800 border-purple-200',
			Muu: 'bg-gray-100 text-gray-800 border-gray-200'
		};
		return badges[type];
	}

	// Function to format date for display
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('et-EE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}

	// Function to format time for display
	function formatTime(timeString: string): string {
		return timeString;
	}
</script>

<div class="w-full max-w-6xl mx-auto p-6">
	<h2 class="text-2xl font-bold text-gray-900 mb-6">Tule kohtu meiega järgnevatel üritustel</h2>

	<div class="bg-white shadow-lg rounded-lg overflow-hidden">
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Kuupäev
					</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Kellaaeg
					</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Asukoht
					</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Tüüp
					</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Muu info
					</th>
				</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
				{#each events as event (event.id)}
					<tr class="hover:bg-gray-50 transition-colors duration-200">
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
							{formatDate(event.date)}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{formatTime(event.time)}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{event.location}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
								<span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border {getTypeBadge(event.type)}">
									{event.type}
								</span>
						</td>
						<td class="px-6 py-4 text-sm text-gray-700 max-w-xs">
							<div class="truncate" title={event.info}>
								{event.info}
							</div>
						</td>
					</tr>
				{/each}
				</tbody>
			</table>
		</div>

		{#if events.length === 0}
			<div class="text-center py-12">
				<div class="text-gray-400 mb-2">
					<svg class="mx-auto h-12 w-12" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
				</div>
				<p class="text-gray-500 text-lg">Midagi pole hetkel tulemass</p>
				<p class="text-gray-400 text-sm">Vaata hiljem uuesti!</p>
			</div>
		{/if}
	</div>

	<!-- Legend for event types -->
	<div class="mt-6 flex flex-wrap gap-4">
		<div class="flex items-center">
			<span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border bg-blue-100 text-blue-800 border-blue-200 mr-2">
				Paitamine
			</span>
			<span class="text-sm text-gray-600">Saab koera katsuda</span>
		</div>
		<div class="flex items-center">
			<span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-200 mr-2">
				Treening
			</span>
			<span class="text-sm text-gray-600">Trenn</span>
		</div>
		<div class="flex items-center">
			<span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border bg-purple-100 text-purple-800 border-purple-200 mr-2">
				Vesi
			</span>
			<span class="text-sm text-gray-600">Vesi</span>
		</div>
		<div class="flex items-center">
			<span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border bg-gray-100 text-gray-800 border-gray-200 mr-2">
				Muu
			</span>
			<span class="text-sm text-gray-600">Midagi muud</span>
		</div>
	</div>
</div>