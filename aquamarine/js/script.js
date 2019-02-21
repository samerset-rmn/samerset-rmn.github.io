// Video script

function findVideos() {
	let videos = document.querySelectorAll('.video-section');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video-section__link');
	let media = video.querySelector('.video-section__media');
	let button = video.querySelector('.video-section__button');
	let text = video.querySelector('.video-section__desc');
	let id = media.dataset.id;

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		text.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video-section--enabled');
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video-section__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();


// Меню

let menuElem = document.querySelector('.main-header__list');
let buttonElem = document.querySelector('.main-header__nav-button');
let overall = document.querySelector('.all-page');


buttonElem.onclick = function() {
  menuElem.classList.toggle('main-header__list--active');

  overall.classList.toggle('blur-all');
};
