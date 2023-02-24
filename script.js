const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imageContainer = document.querySelector(".img-container");
const images = document.querySelectorAll("img");
let time;
let currentImg = 1

nextBtn.addEventListener("click", () => {
	currentImg++;
	clearTimeout(time)
	updateImg()
})

prevBtn.addEventListener("click", () => {
	currentImg--
	clearTimeout(time)
	updateImg()
})

updateImg()

function updateImg(){
	if(currentImg > images.length){
		currentImg = 1
	}
	else if(currentImg < 1){
		currentImg = images.length
	}	
	imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

	time = setTimeout(() => {
		currentImg++;
		updateImg()
	}, 3000)
}

