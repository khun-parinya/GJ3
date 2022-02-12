//=============================================================================
// NoCache.js
//=============================================================================

/*:
 * @plugindesc
 * Append parameter prevent browser cache files.
 * @author Hudell
 *
 * @help This plugin does not provide plugin commands.
 */
var oldDataManager_loadDataFile = DataManager.loadDataFile;
DataManager.loadDataFile = function(name, src)
{
	src += '?' + (new Date().getTime());
	oldDataManager_loadDataFile.call(this, name, src);
};