'use strict';

//Setting up route
angular.module('candidates').config(['$stateProvider',
	function($stateProvider) {
		// Candidates state routing
		$stateProvider.
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/candidates/views/contact.client.view.html'
		}).
		state('motivation', {
			url: '/motivation',
			templateUrl: 'modules/candidates/views/motivation.client.view.html'
		}).
		state('province', {
			url: '/province',
			templateUrl: 'modules/candidates/views/province.client.view.html'
		}).
		state('dob', {
			url: '/dob',
			templateUrl: 'modules/candidates/views/dob.client.view.html'
		}).
		state('parties', {
			url: '/parties',
			templateUrl: 'modules/candidates/views/parties.client.view.html'
		}).
		state('listCandidates', {
			url: '/candidates',
			templateUrl: 'modules/candidates/views/list-candidates.client.view.html'
		}).
		state('createCandidate', {
			url: '/candidates/create',
			templateUrl: 'modules/candidates/views/create-candidate.client.view.html'
		}).
		state('viewCandidate', {
			url: '/candidates/:candidateId',
			templateUrl: 'modules/candidates/views/view-candidate.client.view.html'
		}).
		state('editCandidate', {
			url: '/candidates/:candidateId/edit',
			templateUrl: 'modules/candidates/views/edit-candidate.client.view.html'
		});
	}
]);