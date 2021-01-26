import { Modal } from './UI/Modal.js';
//import { Map } from './UI/Map';

class PlaceFinder {
	constructor() {
		const addressForm = document.querySelector('form');
		const locateUserBtn = document.getElementById('locate-btn');
		
		locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
		addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
	}
	
	
	// u need google maps api !
//	selectPlace(coordinates) {
//		if (this.map) {
//			this.map.render(coordinates);
//		} else {
//			this.map = new Map(coordinates);
//		}
//	}
	
	locateUserHandler() {
		if (!navigator.geolocation) {
			alert(
				'location feature is not available in your browser - please use a more modern browser or manually enter an address.'
			);
			return;
		}
		const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
		modal.show();
		navigator.geolocation.getCurrentPosition(
			successResult => {
				modal.hide();
				const coordinates = {
					lat: successResult.coords.latitude,
					lng: successResult.coords.longitude
				};
				console.log(coordinates); //this.selectPlace(coordinates); change with that
			},
			error => {
				modal.hide();
				alert('could not locate you unfortunately. Please enter an address manually')
			}
		);
	}
	
	findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
















