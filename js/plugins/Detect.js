//=============================================================================
// Detect.js
//=============================================================================

/*:
 * @plugindesc
 * Return OS or Browser.
 * @author Dexter
 *
 * @help This plugin does not provide plugin commands.
 */
 
var Detect = {
    browser: function() {
        var n = navigator.userAgent.indexOf(" Edge/") >= 0,
            e = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
            o = "undefined" != typeof InstallTrigger,
            i = (Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, !!window.chrome && !e && !n),
            r = !!document.documentMode;
        return 1 == e ? "Opera" : 1 == o ? "Mozilla Firefox" : 1 == i ? "Google Chrome" : 1 == r ? "Internet Explorer" : 1 == n ? "Microsoft Edge" : void 0
    },
    OS: function() {
        var n = "Unknown OS";
		
		if (navigator.appVersion.indexOf("Win") != -1) {
			n = "Windows";
		} else if (navigator.appVersion.indexOf("iPad") != -1) {
			n = "iOS";
		} else if (navigator.userAgent.indexOf("iPhone") != -1) {
			n = "iOS";
		} else if (navigator.userAgent.indexOf("Android") != -1) {
			n = "Android";
		} else if (navigator.userAgent.indexOf("Windows Phone") != -1) {
			n = "Windows Phone";
		} else if (navigator.appVersion.indexOf("Mac") != -1) {
			n = "MacOS";
		} else if (navigator.appVersion.indexOf("X11") != -1) {
			n = "UNIX";
		} else if (navigator.appVersion.indexOf("Linux") != -1) {
			n = "Linux";
		}
		return n;
    }
};