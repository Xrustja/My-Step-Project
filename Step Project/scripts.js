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
    )





});