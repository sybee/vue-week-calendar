<template>
	<div id="app">
		<main>
			<h4>Week: {{ week }}</h4>
			<h4>dateFrom: {{ dateFrom }}</h4>
			<h4>dateTo: {{ dateTo }}</h4>

			<div class="controls">
				<button class="controls__item controls__item--prev" @click="week--">Prev</button>
				<button class="controls__item controls__item--next" @click="week++">Next</button>
			</div>

			<table class="table">
				<!-- Calendar Legend -->
				<thead>
					<tr>
						<th>User</th>
						<th v-for="day in 7" :key="day">{{ $dayjs().set('day', day).format('dddd') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.name">
						<td>{{ user.name }}</td>
						<td v-for="day in 7" :key="day">
							<!-- Calendar Item -->
							<div>{{ $dayjs().week(week).set('day', day).format('ll') }}</div>
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data({ $dayjs }) {
			return {
				users: [
					{ name: 'User 1' },
					{ name: 'User 2' },
					{ name: 'User 3' },
					{ name: 'User 4' },
					{ name: 'User 5' },
					{ name: 'User 6' },
					{ name: 'User 7' },
					{ name: 'User 8' },
				],

				week: $dayjs().isoWeek(),
			}
		},
		computed: {
			dateFrom() {
				return this.$dayjs().week(this.week).startOf('week')
			},
			dateTo() {
				return this.$dayjs().week(this.week).endOf('week')
			},
		},
		methods: {
			async fetchData() {
				return await this.$axios.get('url', {
					params: {
						date_from: this.dateFrom.format('YYYY-MM-DD'),
						date_to: this.dateFrom.format('YYYY-MM-DD'),
					},
				})
			},
		},
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&__item {
			background-color: blue;
			color: white;

			&--prev {
			}

			&--next {
			}
		}
	}

	.table {
		width: 100%;
		table-layout: fixed;
	}
</style>
