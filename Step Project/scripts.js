document.addEventListener('DOMContentLoaded', () => {
        let tabs = document.querySelectorAll('li.our-services-tabs-title');
        let text = document.querySelectorAll('div.our-service-content-container');

    let activeTab;
        let activeText;
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                if (activeTab) activeTab.classList.toggle('active');
                tab.classList.toggle('active');
                activeTab = tab;
                if (activeText) activeText.classList.toggle('active');
                text[index].classList.toggle('active');
                activeText = text[index];
            })
        });

    }
);