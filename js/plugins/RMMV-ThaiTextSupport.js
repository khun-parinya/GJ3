//=============================================================================
// ThaiMessageBoxFix.js
//=============================================================================

/*:
 * @plugindesc
 * Fix font render that contain upper or/and lower glypts in message box.
 * @author Admannon
 *
 * @help This plugin does not provide plugin commands.
 */

(function () {

    Window_Base.TH_MARK_LIST = "\u0E38\u0E39\u0E36\u0E31\u0E35\u0E4A\u0E49\u0E47\u0E48\u0E4B\u0E34\u0E3A\u0E37\u0E4C\u0E4D"

    var WinBaseConvertEscChar = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = WinBaseConvertEscChar.call(this, text);
        text = text.replace(new RegExp(`([${Window_Base.TH_MARK_LIST}]+)\u0E33`, "g"), "\u0E4D$1\u0E32");
        text = text.replace(new RegExp(`\u0E33([${Window_Base.TH_MARK_LIST}]+)`, "g"), "\u0E4D$1\u0E32");
        text = text.replace(new RegExp(`\u0E33`, 'g'), "\u0E4D\u0E32");
        return text;
    };

    var WindowBaseProcessNormChar = Window_Base.prototype.processNormalCharacter;
    Window_Base.prototype.processNormalCharacter = function (textState) {
        var c = "";
        var m;
        do {
            c += textState.text[textState.index++];
            m = textState.text[textState.index];
        } while (Window_Base.TH_MARK_LIST.contains(m))
        var w = this.textWidth(c);
        this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
        textState.x += w;
    };

})();
