$(document).ready(function(){

	
	function initWeWorkCarousel() {
		var car = $('.slick-home-we-work');
		if (car) {
			car.slick({
				arrows: false,
				slidesToShow: 4
			});
		}
	}
	initWeWorkCarousel();
	
	function toggleTopSearchClass(field) {
		if (field) {
			if (field.val() !== '') {
				field.addClass('has-value');
			} else {
				field.removeClass('has-value');
			}
		}
	}

	function onToggleTopSearchClass() {
		var field = $('.top-search-field');
		if (field) {
			field.on('change', function() {
				toggleTopSearchClass($(this));
			});
			toggleTopSearchClass(field);
		}
	}
	onToggleTopSearchClass();

	function performanceChart() {
		var chart = $('#chartPerformance');
		if (chart.length > 0) {
			var myLegendContainer = document.getElementById('legendChartPerformance');
			var tooltips = {
				callbacks: {
					title: function(tooltipItem, data) {
						return null;
					},
					label: function(tooltipItem, data) {
						var newColor = data['datasets'][tooltipItem.datasetIndex].borderColor;
						this._chartInstance.tooltip._options.bodyFontColor = newColor;
						this._chartInstance.tooltip._options.borderColor = newColor;
						setTimeout(function() {
							chartPerformance.tooltip.update()
						}, 1);
						return 'R$ ' + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem['index']].y;
					}
				},
				intersect: false,
				backgroundColor: '#FFF',
				bodyFontSize: 18,
				bodyFontColor: '#000',
				borderColor: '#000',
				borderWidth: 2,
				cornerRadius: 0,
				displayColors: false,
				yPadding: 8,
				xPadding: 20
			}

			var ctx = document.getElementById('chartPerformance');

			var lineChartData = {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: 'REAL',
					borderColor: '#cd9794',
					backgroundColor: '#cd9794',
					fill: false,
					borderWidth: 2,
					pointBackgroundColor: 'transparent',
					pointBorderColor: 'transparent',
					data: [
						{t: 0, y: '30'},
						{t: 1, y: '33'},
						{t: 2, y: '11'},
						{t: 3, y: '30'},
						{t: 4, y: '33'},
						{t: 5, y: '11'},
						{t: 6, y: '50'},
						{t: 7, y: '33'},
						{t: 8, y: '77'},
						{t: 9, y: '8'},
						{t: 10, y: '24'},
						{t: 11, y: '11'}
					]
				}, {
					label: 'BITCOIN',
					borderColor: '#303c50',
					backgroundColor: '#303c50',
					fill: false,
					borderWidth: 2,
					pointBackgroundColor: 'transparent',
					pointBorderColor: 'transparent',
					data: [
						{t: 0, y: '43'},
						{t: 1, y: '88'},
						{t: 2, y: '35'},
						{t: 3, y: '1'},
						{t: 4, y: '43'},
						{t: 5, y: '59'},
						{t: 6, y: '87'},
						{t: 7, y: '91'},
						{t: 8, y: '23'},
						{t: 9, y: '33'},
						{t: 10, y: '32'},
						{t: 11, y: '12'}
					]
				}]
			};

			var chartPerformance = new Chart(ctx, {
			    type: 'line',
			    data: lineChartData,
			    options: {
			    	responsive: true,
			    	maintainAspectRatio: true,
			    	aspectRatio: 3,
			    	elements: {
						line: {
							tension: 0
						}
					},
					legend: {
				        display: false
				    },
					responsive: true,
					title: {
						display: false
					},
					scales: {
			            xAxes: [{
			                ticks: {
			                    autoSkip: true,
			                    autoSkipPadding: 1,
			                    maxRotation: 90,
			                    minRotation: 90,
			                }
			            }]
			        },
			        tooltips: tooltips
				}
			});
			myLegendContainer.innerHTML = chartPerformance.generateLegend();
		}
	}
	performanceChart();


	function performanceFilledChart() {
		var chart = $('#chartPerformanceFilled');
		if (chart.length > 0) {
			var myLegendContainer = document.getElementById('legendChartPerformanceFilled');
			var tooltips = {
				callbacks: {
					title: function(tooltipItem, data) {
						return null;
					},
					label: function(tooltipItem, data) {
						var newColor = data['datasets'][tooltipItem.datasetIndex].borderColor;
						this._chartInstance.tooltip._options.bodyFontColor = newColor;
						this._chartInstance.tooltip._options.borderColor = newColor;
						setTimeout(function() {
							chartPerformance.tooltip.update()
						}, 1);
						return 'R$ ' + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem['index']].y;
					}
				},
				intersect: false,
				backgroundColor: '#FFF',
				bodyFontSize: 18,
				bodyFontColor: '#000',
				borderColor: '#000',
				borderWidth: 2,
				cornerRadius: 0,
				displayColors: false,
				yPadding: 8,
				xPadding: 20
			}

			var ctx = document.getElementById('chartPerformanceFilled');

			var lineChartData = {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: 'REAL',
					borderColor: '#263741',
					backgroundColor: 'rgba(38, 55, 65, 0.5)',
					fill: true,
					borderWidth: 2,
					pointBackgroundColor: '#263741',
					pointBorderColor: '#263741',
					data: [
						{t: 0, y: '30'},
						{t: 1, y: '33'},
						{t: 2, y: '11'},
						{t: 3, y: '30'},
						{t: 4, y: '33'},
						{t: 5, y: '11'},
						{t: 6, y: '50'},
						{t: 7, y: '33'},
						{t: 8, y: '77'},
						{t: 9, y: '8'},
						{t: 10, y: '24'},
						{t: 11, y: '11'}
					]
				}, {
					label: 'BITCOIN',
					borderColor: '#bf9693',
					backgroundColor: 'rgba(191, 150, 147, 0.5)',
					fill: true,
					borderWidth: 2,
					pointBackgroundColor: '#bf9693',
					pointBorderColor: '#bf9693',
					data: [
						{t: 0, y: '43'},
						{t: 1, y: '88'},
						{t: 2, y: '35'},
						{t: 3, y: '1'},
						{t: 4, y: '43'},
						{t: 5, y: '59'},
						{t: 6, y: '87'},
						{t: 7, y: '91'},
						{t: 8, y: '23'},
						{t: 9, y: '33'},
						{t: 10, y: '32'},
						{t: 11, y: '12'}
					]
				}]
			};

			var chartPerformance = new Chart(ctx, {
			    type: 'line',
			    data: lineChartData,
			    options: {
			    	responsive: true,
			    	maintainAspectRatio: true,
			    	aspectRatio: 3,
			    	elements: {
						line: {
							tension: 0
						}
					},
					legend: {
				        display: false
				    },
					responsive: true,
					title: {
						display: false
					},
					scales: {
			            xAxes: [{
			                gridLines: {
				                display: false
				            }
			            }],
			            yAxes: [{
			            	ticks: {
				                display: false
				            },
				            gridLines: {
				                display: false,
				                drawBorder: false
				            }   
				        }]
			        },
			        tooltips: tooltips
				}
			});
			myLegendContainer.innerHTML = chartPerformance.generateLegend();
		}
	}
	performanceFilledChart();

});