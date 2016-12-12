// app.controller('LectureController', ['$http', function ($http) {
// 				console.log('LectureController up and running');
// 				var self = this;
// 				self.article = {};
// 				self.newBudget = {};
// 				self.lectureArticles = [];
// 				self.factory = DataFactory;
//
// 				getLecture();
//
// 				function getLecture() {
// 					$http.get('/lecture')
// 						.then(function (response) {
// 								self.budgets = response.data;
// 								self.currentBudget = self.budgets[self.budgets.length - 1].monthly_limit;
// 								DataFactory.currentBudget = self.currentBudget;
// 							},
// 							function (response) {
// 								// error
// 								console.log('ERROR get response: ', response.data);
// 							});
// 				}
