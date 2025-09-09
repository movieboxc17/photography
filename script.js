
// Navigation: Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
	// Mobile nav
	const navToggle = document.querySelector('.nav-toggle');
	const navMobile = document.querySelector('.nav-mobile');
	const navClose = document.querySelector('.nav-close');
	navToggle?.addEventListener('click', () => {
		navMobile.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
	navClose?.addEventListener('click', () => {
		navMobile.classList.remove('active');
		document.body.style.overflow = '';
	});

	// Instagram popup (improved)
	const instagramBubble = document.querySelector('.instagram-bubble');
	const instagramModal = document.querySelector('.instagram-modal');
	const modalClose = document.querySelector('.modal-close');
	instagramBubble?.addEventListener('click', () => {
		instagramModal.classList.add('active', 'improved-modal');
		document.body.style.overflow = 'hidden';
	});
	modalClose?.addEventListener('click', () => {
		instagramModal.classList.remove('active', 'improved-modal');
		document.body.style.overflow = '';
	});
	instagramModal?.addEventListener('click', (e) => {
		if (e.target === instagramModal) {
			instagramModal.classList.remove('active', 'improved-modal');
			document.body.style.overflow = '';
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && instagramModal.classList.contains('active')) {
			instagramModal.classList.remove('active', 'improved-modal');
			document.body.style.overflow = '';
		}
	});

	// Gallery filtering
	const categoryButtons = document.querySelectorAll('.category-btn');
	const galleryItems = document.querySelectorAll('.gallery-item');
	categoryButtons.forEach(button => {
		button.addEventListener('click', () => {
			const category = button.dataset.category;
			categoryButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');
			galleryItems.forEach(item => {
				if (category === 'all' || item.dataset.category === category) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});
		});
	});

	// Lightbox
	const lightbox = document.querySelector('.lightbox');
	const lightboxImg = lightbox.querySelector('img');
	const lightboxClose = lightbox.querySelector('.lightbox-close');
	const prevBtn = lightbox.querySelector('.prev');
	const nextBtn = lightbox.querySelector('.next');
	const galleryImages = document.querySelectorAll('.gallery-item img');
	let currentIndex = 0;
	function showImage(index) {
		const visibleImages = Array.from(galleryImages).filter(img => img.closest('.gallery-item').style.display !== 'none');
		if (visibleImages[index]) {
			lightboxImg.src = visibleImages[index].src;
			lightboxImg.alt = visibleImages[index].alt;
			currentIndex = index;
		}
	}
	galleryImages.forEach((img, idx) => {
		img.addEventListener('click', () => {
			const visibleImages = Array.from(galleryImages).filter(img => img.closest('.gallery-item').style.display !== 'none');
			const visibleIndex = visibleImages.indexOf(img);
			if (visibleIndex !== -1) {
				showImage(visibleIndex);
				lightbox.classList.add('active');
				document.body.style.overflow = 'hidden';
			}
		});
	});
	lightboxClose.addEventListener('click', () => {
		lightbox.classList.remove('active');
		document.body.style.overflow = '';
	});
	prevBtn.addEventListener('click', () => {
		const visibleImages = Array.from(galleryImages).filter(img => img.closest('.gallery-item').style.display !== 'none');
		currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
		showImage(currentIndex);
	});
	nextBtn.addEventListener('click', () => {
		const visibleImages = Array.from(galleryImages).filter(img => img.closest('.gallery-item').style.display !== 'none');
		currentIndex = (currentIndex + 1) % visibleImages.length;
		showImage(currentIndex);
	});
	lightbox.addEventListener('click', (e) => {
		if (e.target === lightbox) {
			lightbox.classList.remove('active');
			document.body.style.overflow = '';
		}
	});
});
