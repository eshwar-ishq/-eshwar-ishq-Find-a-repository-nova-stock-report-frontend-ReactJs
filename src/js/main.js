import $ from "jquery"


// document.addEventListener('DOMContentLoaded', function () {

// 	// Define a simple browser object
// var browser = {
//     os: getOperatingSystem(), // Function to get the operating system
//     name: getBrowserName(),    // Function to get the browser name
//     canUse: function (feature) {
//         // Implement logic to check if a specific feature is supported
//         // For simplicity, this function always returns true
//         return true;
//     }
// };

// // Function to get the operating system
// function getOperatingSystem() {
//     // Implement logic to detect the operating system
//     // For simplicity, return a string representing the OS
//     return 'windows';
// }

// // Function to get the browser name
// function getBrowserName() {
//     // Implement logic to detect the browser name
//     // For simplicity, return a string representing the browser
//     return 'chrome';
// }


//     var window = window,
//         head = document.head || document.getElementsByTagName('head')[0],
//         body = document.body;

//     // Breakpoints.
//     function breakpoints(obj) {
//         // Implementation of breakpoints function goes here...
//     }

//     // Stops animations/transitions until the page has ...

//     // ... loaded.
//     window.addEventListener('load', function () {
//         setTimeout(function () {
//             body.classList.remove('is-preload');
//         }, 100);
//     });

//     // ... stopped resizing.
//     var resizeTimeout;

//     window.addEventListener('resize', function () {

//         // Mark as resizing.
//         body.classList.add('is-resizing');

//         // Unmark after delay.
//         clearTimeout(resizeTimeout);

//         resizeTimeout = setTimeout(function () {
//             body.classList.remove('is-resizing');
//         }, 100);

//     });

//     // Fixes.

//     // Object fit images.
//     // Assuming browser object is defined somewhere
//     if (!browser.canUse('object-fit') || browser.name == 'safari') {
//         var objectImages = document.querySelectorAll('.image.object');
//         objectImages.forEach(function (image) {
//             var img = image.querySelector('img');
//             img.style.opacity = '0';
//             image.style.backgroundImage = 'url("' + img.src + '")';
//             image.style.backgroundSize = img.style.objectFit ? img.style.objectFit : 'cover';
//             image.style.backgroundPosition = img.style.objectPosition ? img.style.objectPosition : 'center';
//         });
//     }

//     // Sidebar.
//     var sidebar = document.getElementById('sidebar'),
//         sidebarInner = sidebar.querySelector('.inner');

//     // Inactive by default on <= large.
//     function handleSidebarBreakpoint() {
//         if (window.innerWidth <= 1280) {
//             sidebar.classList.remove('inactive');
//         } else {
//             sidebar.classList.add('inactive');
//         }
//     }

//     handleSidebarBreakpoint();

//     window.addEventListener('resize', handleSidebarBreakpoint);

//     // Hack: Workaround for Chrome/Android scrollbar position bug.
//     if (browser.os == 'android' && browser.name == 'chrome') {
//         var style = document.createElement('style');
//         style.innerHTML = '#sidebar .inner::-webkit-scrollbar { display: none; }';
//         head.appendChild(style);
//     }

//     // Toggle.
//     var toggleLink = document.createElement('a');
//     toggleLink.href = '#sidebar';
//     toggleLink.classList.add('toggle');
//     toggleLink.textContent = 'Toggle';
//     sidebar.appendChild(toggleLink);

//     toggleLink.addEventListener('click', function (event) {

//         // Prevent default.
//         event.preventDefault();
//         event.stopPropagation();

//         // Toggle.
//         sidebar.classList.toggle('inactive');

//     });

//     // Events.

//     // Link clicks.
//     sidebar.addEventListener('click', function (event) {

//         // >large? Bail.
//         if (window.innerWidth > 1280) {
//             return;
//         }

//         // Vars.
//         var target = event.target;

//         // Find the closest 'a' element.
//         while (target && target.tagName !== 'A') {
//             target = target.parentNode;
//         }

//         if (!target || target.href === '#' || target.href === '') {
//             return;
//         }

//         // Prevent default.
//         event.preventDefault();
//         event.stopPropagation();

//         // Hide sidebar.
//         sidebar.classList.add('inactive');

//         // Redirect to href.
//         setTimeout(function () {

//             if (target.target === '_blank') {
//                 window.open(target.href);
//             } else {
//                 window.location.href = target.href;
//             }

//         }, 500);

//     });

//     // Prevent certain events inside the panel from bubbling.
//     ['click', 'touchend', 'touchstart', 'touchmove'].forEach(function (eventType) {
//         sidebar.addEventListener(eventType, function (event) {

//             // >large? Bail.
//             if (window.innerWidth > 1280) {
//                 return;
//             }

//             // Prevent propagation.
//             event.stopPropagation('');

//         });
//     });

//     // Hide panel on body click/tap.
//     body.addEventListener('click', function (event) {

//         // >large? Bail.
//         if (window.innerWidth > 1280) {
//             return;
//         }

//         // Deactivate.
//         sidebar.classList.remove('inactive');

//     });

//     // Scroll lock.
//     // Note: If you do anything to change the height of the sidebar's content, be sure to
//     // trigger 'resize.sidebar-lock' on window so stuff doesn't get out of sync.

//     window.addEventListener('load', function () {

//         var sh, wh, st;

//         // Reset scroll position to 0 if it's 1.
//         if (window.scrollY === 1) {
//             window.scrollTo(0, 0);
//         }

//         window.addEventListener('scroll', function () {

//             var x, y;

//             // <=large? Bail.
//             if (window.innerWidth <= 1280) {

//                 sidebarInner.dataset.locked = '0';
//                 sidebarInner.style.position = '';
//                 sidebarInner.style.top = '';

//                 return;

//             }

//             // Calculate positions.
//             x = Math.max(sh - wh, 0);
//             y = Math.max(0, window.scrollY - x);

//             // Lock/unlock.
//             if (sidebarInner.dataset.locked === '1') {

//                 if (y <= 0) {
//                     sidebarInner.dataset.locked = '0';
//                     sidebarInner.style.position = '';
//                     sidebarInner.style.top = '';
//                 } else {
//                     sidebarInner.style.top = -1 * x + 'px';
//                 }

//             } else {

//                 if (y > 0) {
//                     sidebarInner.dataset.locked = '1';
//                     sidebarInner.style.position = 'fixed';
//                     sidebarInner.style.top = -1 * x + 'px';
//                 }

//             }

//         });

//         window.addEventListener('resize', function () {

//             // Calculate heights.
//             wh = window.innerHeight;
//             sh = sidebarInner.offsetHeight + 30;

//             // Trigger scroll.
//             window.dispatchEvent(new Event('scroll'));

//         });

//         window.dispatchEvent(new Event('resize'));

//     });

//     // Menu.
//     var menu = document.getElementById('menu'),
//         menuOpeners = menu.querySelectorAll('ul .opener');

//     // Openers.
//     menuOpeners.forEach(function (opener) {

//         opener.addEventListener('click', function (event) {

//             // Prevent default.
//             event.preventDefault();

//             // Toggle.
//             menuOpeners.forEach(function (otherOpener) {
//                 if (otherOpener !== opener) {
//                     otherOpener.classList.remove('active');
//                 }
//             });
//             opener.classList.toggle('active');

//             // Trigger resize (sidebar lock).
//             window.dispatchEvent(new Event('resize.sidebar-lock'));

//         });

//     });

// });

document.addEventListener('DOMContentLoaded', function () {

    // Define a simple browser object
    var browser = {
        os: getOperatingSystem(), // Function to get the operating system
        name: getBrowserName(),    // Function to get the browser name
        canUse: function (feature) {
            // Implement logic to check if a specific feature is supported
            // For simplicity, this function always returns true
            return true;
        }
    };

    // Function to get the operating system
    function getOperatingSystem() {
        // Implement logic to detect the operating system
        // For simplicity, return a string representing the OS
        return 'windows';
    }

    // Function to get the browser name
    function getBrowserName() {
        // Implement logic to detect the browser name
        // For simplicity, return a string representing the browser
        return 'chrome';
    }

    var $window = $(window),
        $head = $('head'),
        $body = $('body');

    // Breakpoints.
    function breakpoints(obj) {
        // Implementation of breakpoints function goes here...
    }

    // Stops animations/transitions until the page has ...

    // ... loaded.
    $window.on('load', function () {
        setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // ... stopped resizing.
    var resizeTimeout;

    $window.on('resize', function () {

        // Mark as resizing.
        $body.addClass('is-resizing');

        // Unmark after delay.
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(function () {
            $body.removeClass('is-resizing');
        }, 100);

    });

    // Fixes.

    // Object fit images.
    // Assuming browser object is defined somewhere
    if (!browser.canUse('object-fit') || browser.name == 'safari') {
        var objectImages = document.querySelectorAll('.image.object');
        objectImages.forEach(function (image) {
            var img = image.querySelector('img');
            img.style.opacity = '0';
            image.style.backgroundImage = 'url("' + img.src + '")';
            image.style.backgroundSize = img.style.objectFit ? img.style.objectFit : 'cover';
            image.style.backgroundPosition = img.style.objectPosition ? img.style.objectPosition : 'center';
        });
    }

    // Sidebar.
    var $sidebar = $('#sidebar'),
        $sidebarInner = $sidebar.children('.inner');

    // Inactive by default on <= large.
    function handleSidebarBreakpoint() {
        if ($window.innerWidth() <= 1280) {
            $sidebar.removeClass('inactive');
        } else {
            $sidebar.addClass('inactive');
        }
    }

    handleSidebarBreakpoint();

    $window.on('resize', handleSidebarBreakpoint);

    // Hack: Workaround for Chrome/Android scrollbar position bug.
    if (browser.os == 'android' && browser.name == 'chrome') {
        $('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>').appendTo($head);
    }

    // Toggle.
    $('<a href="#sidebar" class="toggle">Toggle</a>').appendTo($sidebar).on('click', function (event) {

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Toggle.
        $sidebar.toggleClass('inactive');

    });

    // Events.

    // Link clicks.
    $sidebar.on('click', 'a', function (event) {

        // >large? Bail.
        // if (breakpoints.active('>large'))
        //     return;

        // Vars.
        var $a = $(this),
            href = $a.attr('href'),
            target = $a.attr('target');

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Check URL.
        if (!href || href == '#' || href == '')
            return;

        // Hide sidebar.
        $sidebar.addClass('inactive');

        // Redirect to href.
        setTimeout(function () {

            if (target == '_blank')
                window.open(href);
            else
                window.location.href = href;

        }, 500);

    });

    // Prevent certain events inside the panel from bubbling.
    $sidebar.on('click touchend touchstart touchmove', function (event) {

        // >large? Bail.
        // if (breakpoints.active('>large'))
        //     return;

        // Prevent propagation.
        event.stopPropagation('');

    });

    // Hide panel on body click/tap.
    $body.on('click touchend', function (event) {

        // >large? Bail.
        // if (breakpoints.active('>large'))
        //     return;

        // Deactivate.
        $sidebar.removeClass('inactive');

    });

    // Scroll lock.
    // Note: If you do anything to change the height of the sidebar's content, be sure to
    // trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

    $window.on('load.sidebar-lock', function () {

        var sh, wh, st;

        // Reset scroll position to 0 if it's 1.
        if ($window.scrollTop() == 1)
            $window.scrollTop(0);

        $window
            .on('scroll.sidebar-lock', function () {

                var x, y;

                // <=large? Bail.
                // if (breakpoints.active('<=large')) {

                //     $sidebarInner
                //         .data('locked', 0)
                //         .css('position', '')
                //         .css('top', '');

                //     return;

                // }

                // Calculate positions.
                x = Math.max(sh - wh, 0);
                y = Math.max(0, $window.scrollTop() - x);

                // Lock/unlock.
                if ($sidebarInner.data('locked') == 1) {

                    if (y <= 0)
                        $sidebarInner
                            .data('locked', 0)
                            .css('position', '')
                            .css('top', '');
                    else
                        $sidebarInner
                            .css('top', -1 * x);

                }
                else {

                    if (y > 0)
                        $sidebarInner
                            .data('locked', 1)
                            .css('position', 'fixed')
                            .css('top', -1 * x);

                }

            })
            .on('resize.sidebar-lock', function () {

                // Calculate heights.
                wh = $window.height();
                sh = $sidebarInner.outerHeight() + 30;

                // Trigger scroll.
                $window.trigger('scroll.sidebar-lock');

            })
            .trigger('resize.sidebar-lock');

    });

    // Menu.
    var $menu = $('#menu'),
        $menuOpeners = $menu.children('ul').find('.opener');

    // Openers.
    $menuOpeners.each(function () {

        var $this = $(this);

        $this.on('click', function (event) {

            // Prevent default.
            event.preventDefault();

            // Toggle.
            $menuOpeners.not($this).removeClass('active');
            $this.toggleClass('active');

            // Trigger resize (sidebar lock).
            $window.triggerHandler('resize.sidebar-lock');

        });

    });
});

