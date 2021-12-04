<script>
</script>

<div class="flex flex-col w-5/6 bg-blue-300">
	<div class="relative flex bg-gray-100 h-10 justify-between select-none">
		<div class="flex ">
			<div class="flex items-center space-x-2 bg-gradient-to-tr from-indigo-200 to-gray-300 px-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
					/>
				</svg>
				<span class="font-normal text-xs ">Select</span>
			</div>
			<div class="flex items-center space-x-2 bg-red-1000 px-5 hover:bg-gray-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
					/>
				</svg>
				<span class="font-normal text-xs ">Crop</span>
			</div>
			<div class="flex items-center space-x-2 bg-red-1000 px-5 hover:bg-gray-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
					/>
				</svg>
				<span class="font-normal text-xs ">Magic Select</span>
			</div>
		</div>
		<div class="flex">
			<div class="flex items-center space-x-2 bg-red-1000 px-5 hover:bg-gray-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					/>
				</svg>
				<span class="font-normal text-xs ">Mixed Reality</span>
			</div>
			<div class="flex items-center space-x-2 bg-red-1000 px-5 hover:bg-gray-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<span class="font-normal text-xs ">3D View</span>
			</div>
			<div class="flex w-10 text-gray-400  items-center justify-center hover:bg-gray-300 mr-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</div>
			<input type="range" id="vol" name="vol" min="0" max="50" class="px-0" />
			<div class="flex w-10 text-gray-400  items-center justify-center hover:bg-gray-300 ml-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 16l-4-4m0 0l4-4m-4 4h18"
					/>
				</svg>
			</div>
			<div
				class="flex items-center space-x-2 bg-red-1000 px-5 border-l border-gray-300 hover:bg-gray-200"
			>
				<span class="font-normal text-xs ">100%</span>
			</div>
			<div
				class="flex items-center space-x-2 bg-red-1000 px-5 border-l border-gray-300 hover:bg-gray-200"
			>
				<div class="font-normal text-xs  ">. . .</div>
			</div>
		</div>
		<div
			class="absolute flex flex-col p-0 right-0 top-0 mt-9 bg-gray-200 w-56 border space-y-1 border-black text-sm font-thin py-3 text-blue-900"
		>
			<div class="flex space-x-3 hover:bg-gray-300 p-1 pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/></svg
				>
				<span>Undo</span>
			</div>
			<div class="flex space-x-3 hover:bg-gray-300 p-1  pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
					/></svg
				>
				<span>Redo</span>
			</div>
			<hr class="h-0.5 bg-gray-300" />
			<div class="flex space-x-3 hover:bg-gray-300 p-1  pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
					/></svg
				>
				<span>Paste</span>
			</div>
			<hr class="h-0.5 bg-gray-300" />
			<div class="flex space-x-3 hover:bg-gray-300 p-1  pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
					/></svg
				>
				<span>Canvas options</span>
			</div>
			<hr class="h-0.5 bg-gray-300" />
			<div class="flex space-x-3 hover:bg-gray-300 p-1  pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
					/></svg
				>
				<span>Show interaction controls</span>
			</div>
			<div class="flex space-x-3 hover:bg-gray-300 p-1  pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-4 w-4  "
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
					/></svg
				><span>Reset view</span>
			</div>
			<div class="flex space-x-3 items-center hover:bg-gray-300 p-1  pl-3">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
				  </svg>
				<span>Take screenshot</span>
			</div>
		</div>
	</div>
	<div class="flex bg-gray-500 h-full" />
</div>

<div class="flex flex-col w-1/6 bg-gray-100 pl-5  ">
	<div class="flex h-10 items-center ">
		<span class="text-blue-500 font-medium">Effects</span>
	</div>
	<div class="flex bg-gray-8000 h-full flex-col ">
		<div class="flex space-x-3">
			<span class="font-thin text-sm">Filter:</span>
			<span class="font-semibold text-sm">Default</span>
		</div>
		<div class="grid grid-cols-5 pl-3 mt-5 gap-y-3 ">
			<div class="h-8 w-8 border border-black rounded-full bg-blue-300" />
			<div class="h-8 w-8 border border-black rounded-full bg-blue-400" />
			<div class="h-8 w-8 border border-black rounded-full bg-blue-500" />
			<div class="h-8 w-8 border border-black rounded-full bg-blue-600" />
			<div class="h-8 w-8 border border-black rounded-full bg-blue-700" />

			<div class="h-8 w-8 border border-black rounded-full bg-red-700" />
			<div class="h-8 w-8 border border-black rounded-full bg-red-600" />
			<div class="h-8 w-8 border border-black rounded-full bg-red-500" />
			<div class="h-8 w-8 border border-black rounded-full bg-red-400" />
			<div class="h-8 w-8 border border-black rounded-full bg-red-300" />

			<div class="h-8 w-8 border border-black rounded-full bg-green-300" />
			<div class="h-8 w-8 border border-black rounded-full bg-green-400" />
			<div class="h-8 w-8 border border-black rounded-full bg-green-500" />
			<div class="h-8 w-8 border border-black rounded-full bg-green-600" />
			<div class="h-8 w-8 border border-black rounded-full bg-green-700" />

			<div class="h-8 w-8 border border-black rounded-full bg-yellow-700" />
			<div class="h-8 w-8 border border-black rounded-full bg-yellow-600" />
			<div class="h-8 w-8 border border-black rounded-full bg-yellow-500" />
			<div class="h-8 w-8 border border-black rounded-full bg-yellow-400" />
			<div class="h-8 w-8 border border-black rounded-full bg-yellow-300" />

			<div class="h-8 w-8 border border-black rounded-full bg-indigo-300" />
			<div class="h-8 w-8 border border-black rounded-full bg-indigo-400" />
		</div>
		<div class="flex space-x-3 mt-8">
			<span class="font-thin text-sm">Light Wheel</span>
		</div>
		<div class="flex items-center justify-center mt-8">
			<!-- <div class="rounded-full h-36 w-36 border-2 border-black bg-gray-600 ">
            </div> -->
			<div class="h-40 w-40 rounded-full border-2 border-black flex items-center justify-center">
				<span class="h-24 w-24 rounded-full bg-gray-400/50" />
			</div>
		</div>
	</div>
</div>
