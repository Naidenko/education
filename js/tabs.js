var tabs = (function () {
    return function (selector, config) {
        let _tabsContainer = (typeof selector === 'string' ? document.querySelector(selector) : selector);

        let _showTab = function (tabsLinkTarget) {
            let tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href')),
                tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.info__link--active'),
                tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.info__pane--show');

            if (tabsLinkTarget === tabsLinkActive) {
                return;
            }

            if (tabsLinkActive !== null) {
                tabsLinkActive.classList.remove('info__link--active');
            }
            if (tabsPaneShow !== null) {
                tabsPaneShow.classList.remove('info__pane--show');
            }

            tabsLinkTarget.classList.add('info__link--active');
            tabsPaneTarget.classList.add('info__pane--show');
            var eventTabShow = new CustomEvent('tab.show', { bubbles: true, detail: { tabsLinkPrevious: tabsLinkActive } });
            tabsLinkTarget.dispatchEvent(eventTabShow);
        }

        var _switchTabTo = function (tabsLinkIndex) {
            var tabsLinks = _tabsContainer.querySelectorAll('.info__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[tabsLinkIndex - 1]);
            }
        }

        var _setupListeners = function () {
            _tabsContainer.addEventListener('click', function (e) {
                var tabsLinkTarget = e.target;
                if (!tabsLinkTarget.classList.contains('info__link')) {
                    return;
                }

                e.preventDefault();
                _showTab(tabsLinkTarget);
            });
        }

        _setupListeners();

        return {
            switchTabTo: function (index) {
                _switchTabTo(index);
            }
        }
    }
}());

tabs('.info');
