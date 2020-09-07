$(document).ready(function () {

    let tabs = $("li.tabs-title");
    let text = $("div.our-service-content-container");
    let activeTab = $("li.tabs-title.active");
    let activeText = $("div.our-service-content-container.active");

    $.each(tabs, function (index, tab) {
        $(tab).click(function () {
            if (activeTab.length) {
                activeTab.toggleClass("active");
                $(this).toggleClass("active");
                activeTab = $(tab);
            }
            if (activeText.length) {
                activeText.toggleClass("active");
                $(text[index]).toggleClass("active");
                activeText = $(text[index]);
            }
        })
    });

    let tbsFilter = $('li.amazing-work-tabs-title');
    tbsFilter.click(function (event) {
            tbsFilter.removeClass('amazing-work-tabs-title-border');
            let targetTab = $(event.target);
            let imageBlock = $('div.two-images-container');
            targetTab.addClass('amazing-work-tabs-title-border');
            if (targetTab.attr('data-type') === "all") {
                imageBlock.removeClass('hidden');
            } else {
                imageBlock.removeClass('hidden');
                $.each(imageBlock, function (index, img) {
                    if (targetTab.attr('data-type') !== $(img).attr('data-type')) {
                        $(imageBlock[index]).addClass('hidden')
                    }
                })
            }
        }
    );


    let images = [{img: "Images/Step Project Ham/graphic design/graphic-design7.jpg", type: "graphic-design"},
        {img: "Images/Step Project Ham/graphic design/graphic-design8.jpg", type: "graphic-design"},
        {img: "Images/Step Project Ham/graphic design/graphic-design9.jpg", type: "graphic-design"},
        {img: "Images/Step Project Ham/graphic design/graphic-design10.jpg", type: "graphic-design"},
        {img: "Images/Step Project Ham/graphic design/graphic-design12.jpg", type: "graphic-design"},
        {img: "Images/Step Project Ham/landing page/landing-page4.jpg", type: "landing-pages"},
        {img: "Images/Step Project Ham/landing page/landing-page2.jpg", type: "landing-pages"},
        {img: "Images/Step Project Ham/landing page/landing-page6.jpg", type: "landing-pages"},
        {img: "Images/Step Project Ham/landing page/landing-page7.jpg", type: "landing-pages"},
        {img: "Images/Step Project Ham/wordpress/wordpress5.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/wordpress/wordpress6.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/wordpress/wordpress7.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/wordpress/wordpress8.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/wordpress/wordpress9.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/wordpress/wordpress10.jpg", type: "wordpress"},
        {img: "Images/Step Project Ham/web design/web-design4.jpg", type: "web-design"},
        {img: "Images/Step Project Ham/web design/web-design2.jpg", type: "web-design"},
        {img: "Images/Step Project Ham/web design/web-design6.jpg", type: "web-design"},
        {img: "Images/Step Project Ham/web design/web-design7.jpg", type: "web-design"}];


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    $("#amazing-work-btn").click(function () {
        shuffle(images);
        for (let i = 0; i < 12; i++) {
            let image = images[i];
            let src = image.img;
            let type = image.type;
            console.log(type);
            console.log(src);
            let newImageBlock = `<div class="two-images-container" data-type="${type}">
                    <img class="amazing-work-img-border"
                            src="${src}" alt="Graphic Design">
                    <div class="amazing-work-img-flip-side">
                        <img src="Images/Step%20Project%20Ham/logo/icon.png" alt="icon">
                        <p class="flip-side-title">creative design</p>
                        <p class="flip-side-type-name">${type}</p>
                    </div>
                </div>`;
            console.log(newImageBlock);
            let containerForAdd = document.querySelector('.amazing-work-img-container');
            containerForAdd.insertAdjacentHTML("beforeend", newImageBlock);
            $("li.amazing-work-tabs-title-border").click();
        }
        $("#amazing-work-btn").addClass("hidden");
    });

//  ------  Slider  ------

    function moveLeft() {
        const smallImages = $('.reviewer-small-photo-container');
        const currentImage = $('.reviewer-small-photo-container.circle-border-small');
        const currentImageIndex = currentImage.index();
        console.log('currentImag', smallImages.length - 1);
        // let prevImageIndex = currentImageIndex - 1;
        let prevImageIndex;
        if (currentImageIndex === 0) {
            prevImageIndex = smallImages.length - 1
        } else {
            prevImageIndex = currentImageIndex - 1;
        }
        console.log('prevImageIndex', prevImageIndex);

        let prevImage = smallImages.eq(prevImageIndex);
        if (currentImageIndex === ($('.reviewer-small-photo-container:visible:first').index())) {
            smallImages.eq(prevImageIndex).removeClass('hidden');
            smallImages.eq(currentImageIndex + 3).addClass('hidden');
        }
        if ((currentImageIndex) === ($('.reviewer-small-photo-container:first').index())) {
            $('.reviewer-small-photo-container.hidden').removeClass('hidden');
            prevImage = $('.reviewer-small-photo-container:last');
            currentImage.addClass('hidden');
        }
        currentImage.removeClass('circle-border-small');
        prevImage.addClass('circle-border-small');
        // for (let input of bigPeopleBlock) {
        //     if ($(input).data('people') === $('.mini-circle-photo.mini-circle-border').data('people')) {
        //         $(input).fadeIn(700);
        //     }
    }

    $('.left').on('click', moveLeft);

});