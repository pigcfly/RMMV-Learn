//=============================================================================
// SoraShiro - Avg UI
// SoraShiro_AvgUI.js
//=============================================================================

var Sora = Sora || {};
Sora.AvgUI = Sora.AvgUI || {};
Sora.AvgUI.version = 1.00;

//=============================================================================
/*:
 * @plugindesc v1.00 用 RMMV 制作 AVG
 * @author Sora
 * 
 * @param ---Screen---
 * @default
 *
 * @param Screen Width
 * @parent ---Screen---
 * @type number
 * @min 0
 * @desc 游戏画面宽度
 * @default 1280
 *
 * @param Screen Height
 * @parent ---Screen---
 * @type number
 * @min 0
 * @desc 游戏画面高度
 * @default 720
 * 
 * @param --Name Box--
 * @default
 * 
 * @param Name Box Width
 * @parent --Name Box--
 * @type number
 * @desc 名字窗口宽度
 * @default 250
 * 
 * @param Name Box Height
 * @parent --Name Box--
 * @type number
 * @desc 名字窗口高度
 * @default 60
 * 
 * @param Name Box Text X Shift
 * @parent --Name Box--
 * @type number
 * @desc 名字窗口文本 X 轴方向调整
 * @default 15
 * 
 * @param Name Box Text Y Shift
 * @parent --Name Box--
 * @type number
 * @desc 名字窗口文本 Y 轴方向调整
 * @default 10
 * 
 * @param Name Box Bg Transparent
 * @parent --Name Box--
 * @type number
 * @desc 名字窗口背景图片透明度
 * @default 128
 * 
 * @param --Message Box--
 * @default
 * 
 * @param Message Box Width
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口宽度
 * @default 250
 * 
 * @param Message Box Height
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口高度
 * @default 60
 * 
 * @param Message Box Bg
 * @parent --Message Box--
 * @type string
 * @desc 消息窗口背景图片
 * @default talk-00
 * 
 * @param Message Box Bg Transparent
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口背景图片透明度
 * @default 128
 * 
 * @param Message Box Text Padding Left
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口左内边距（严格来讲这些都是调整数值，并不是左右边距设置相等看起来就会相等）
 * @default 15
 * 
 * @param Message Box Text Padding Right
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口右内边距
 * @default 15
 * 
 * @param Message Box Text Padding Top
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口上内边距
 * @default 36
 * 
 * @param Message Box Text Padding Bottom
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口下内边距
 * @default 5
 * 
 * @param Message Box Text Row Spacing Shift
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口行距调整
 * @default 5
 * 
 * @param Message Box Pause Icon
 * @parent --Message Box--
 * @type string
 * @desc 消息窗口暂停标记图标
 * @default pauseicon
 * 
 * @param Message Box Pause Icon X
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口暂停标记图标相对于消息窗口的 X 坐标
 * @default 640
 * 
 * @param Message Box Pause Icon Y
 * @parent --Message Box--
 * @type number
 * @desc 消息窗口暂停标记图标相对于消息窗口的 Y 坐标
 * @default 190
 * 
 * @param --Cg Sprite--
 * @default
 * 
 * @param Auto Change Brightness
 * @parent --Cg Sprite--
 * @type boolean
 * @desc 是否开启自动调整立绘亮度
 * @default true
 * 
 * @param Real To Abbr
 * @parent --Cg Sprite--
 * @type string
 * @desc 将角色名与对应立绘图片绑定，具体使用方法见介绍
 * @default {}
 * 
 * @param --Avg Menu--
 * @default
 * 
 * @param Avg Menu Width
 * @parent --Avg Menu--
 * @type number
 * @desc 菜单宽度
 * @default 100
 * 
 * @param Avg Menu Height
 * @parent --Avg Menu--
 * @type number
 * @desc 菜单高度
 * @default 40
 * 
 * @param Avg Menu Auto Height
 * @parent --Avg Menu--
 * @type boolean
 * @desc 是否自动调整选项高度，使选项平分，高度总和与消息框高度相等
 * @default true
 * 
 * @param Avg Menu Enable
 * @parent --Avg Menu--
 * @type boolean
 * @desc 是否开启 Avg 菜单
 * @default true
 * 
 * @param Avg Menu Bg
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单背景图片
 * @default talkmenu
 * 
 * @param Avg Menu Bg Transparent
 * @parent --Avg Menu--
 * @type number
 * @desc 菜单背景图片透明度
 * @default 128
 * 
 * @param Avg Menu Speed
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单快进选项图片
 * @default speed
 * 
 * @param Avg Menu Stop
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单停止选项图片
 * @default stop
 * 
 * @param Avg Menu Save
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单存储选项图片
 * @default save
 * 
 * @param Avg Menu Load
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单读取选项图片
 * @default stop
 * 
 * @param Avg Menu Playback
 * @parent --Avg Menu--
 * @type string
 * @desc 菜单回放选项图片
 * @default playback
 * 
 * @help
 * ============================================================================
 * 介绍和使用指南  Introduction and Instructions
 * ============================================================================
 *
 * 用 RMMV 制作 AVG ，需要 YEP_MessageCore.js 支持。
 * 
 * 需要在 img 目录下新建一个 AvgUI 文件夹，本插件需要的图片都要放在这个文件
 * 夹中。
 * 
 * 立绘命名规范：
 * 统一按照 XX-000 即 [人名]-[编号] 的命名方式。
 * 
 * AvgUIRealToAbbr 参数说明：
 * 一般在 AVG 中，当前说话的人会保持或恢复正常亮度，而其他人亮度会变暗，而手
 * 动处理这些动画较为繁琐，所以为了方便，在开发该插件时我增加了立绘亮度自动
 * 控制功能。
 * 通过 AvgUIRealToAbbr 参数将当前说话人名（RealName，从 NameBoxWindow 获得）
 * 和对应的图片系列（Abbr）绑定在一起，这样插件在显示姓名框的时候就能自动处
 * 理每个人的亮度。
 * 如 img 文件夹中有 "AL-000.png" 图片，表示 Alice 说话时的立绘之一，那么就
 * 在参数中写 "{'Alice': "AL"}"（Js 定义对象的语法），这样每次 Alice 说话，
 * 只要当前画面的精灵，它的位图源文件名前缀是 "AL" 的，都是正常亮度，其余立绘
 * 则会变暗。
 * 
 * 需要注意的地方：
 * 1. 每次调用 Show(Left/Mid/Right)AvgPic 指令，就会让最新的立绘置于最上方，
 * 开发者可以用 Move(Up/Down/Top/Bottom)(Left/Mid/Right)AvgPic 指令调整。
 * 2. 当姓名框关闭时，立绘的亮度不会发生变化。立绘的亮度此时留给开发者处理，
 * 因为此时常见的情况可能有两种：当前角色内心独白；旁白描述。此时的立绘亮度
 * 变化没有统一的标准。
 * 3. 使用该脚本的其他指令时，务必先调用 StartStartSoraAvgMode 指令；同理，
 * 从 AVG 模式中离开后，务必调用 StopSoraAvgMode 指令。
 * 
 * 
 * Use RMMV to create AVG environment, Need YEP_MessageCore.js supported.
 * 
 * You need to create a folder named 'AvgUI' in 'img/' directory, and 
 * all pics this plugin needs should put in here.
 * 
 * The standard of CG's name:
 * Use [name]-[number] like "Alice-000".
 * 
 * [AvgUIRealToAbbr] introduction:
 * Normally, when we playing an AVG, the CG of people currently speaking
 * is brighter while others are darker, which means there are lots of 
 * animations to play. Obviously it is tedious to handle these animations,
 * so I add a fuction to this plugin to automatically change CG's brightness.
 * By binding the current speaker's RealName(from YEP's NameBoxWindow) 
 * to the certain series of picture files, every CG's brightness will be
 * changed automatically while the Window_NameBox is showing.
 * Example: Write `{'Alice': "AL"}` to the [AvgUIRealToAbbr], which means when
 * Alice is speaking, all sprite in game screen, whose bitmap's 
 * source-picture-file-name-prefix is "AL", will be changed to or keep 
 * brighter while others will be darker.
 * 
 * Attention:
 * 1. `Show(Left/Mid/Right)AvgPic` will make the new CG at the top of 
 * layer, you can use `Move(Up/Down/Top/Bottom)(Left/Mid/Right)AvgPic`
 * to adjust it.
 * 2. CG's brightness will not change when Window_NameBox close, because
 * when this happend there may be 2 situations occur: current speaker 
 * is speaking internal monologue, or Narrator is speaking. There is NO 
 * unified standard of CG's birghtness change at this time.
 * 3. You must call `StartStartSoraAvgMode` command before you use any
 * other Plugin Commands from this plugin, and when exiting the AVG mode,
 * you must call `StopSoraAvgMode` command.
 * 
 * ============================================================================
 * 插件指令表  Plugin Commands
 * ============================================================================
 *
 * Plugin Command:
 * 
 *   注意，[] 为必填项，{} 为可选项
 *   Noted that [] is required value, {} is optional value
 * 
 *   ==================
 *   Interpolator、Duration
 *   
 *   关于各类常见插值器的表现参考：
 *   The reference of kinds of common interpolator:
 *   https://github.com/Sora-Shiro/interpolator
 *   源参考：
 *   The original reference:
 *   https://github.com/inloop/interpolator
 *   
 *   介绍 Introdution：
 * 
 *   有的插件指令提供了 {Interpolator} 选项，这个意思是播放相应动画时，
 *   计算时所用的插值器。默认为值 AD（AccelerateDecelerateInterpolator），
 *   有以下值可选：
 *   Some Plugin Command provide {Interpolator} option, which can set 
 *   the interpolator for animation. 
 *   Default value is AD(AccelerateDecelerateInterpolator), and you can
 *   choose one abbr. from following:
 * 
 *   插值器 Name            缩写 Abbr.（大小写皆可 Case Insensitive）
 *   Linear                 L
 *   SmoothStep             SS
 *   Spring                 SR
 *   AccelerateDecelerate   AD
 *   Bounce                 B
 *   Accelerate             A
 *   Anticipate             AT
 *   AnticipateOvershoot    ATO
 *   Cycle                  C
 *   Decelerate             D
 *   Overshoot              O
 *   CubicHermite           CH
 * 
 *   {Duration} 的默认值为 30。
 *   {Duration} default value is 30.
 *   ==================
 * 
 *   StartStartSoraAvgMode  
 *   - 开始 AVG 模式
 *   - Start AVG mode
 * 
 *   StopSoraAvgMode
 *   - 关闭 AVG 模式
 *   - Stop AVG mode
 * 
 *   ShowSoraAvgBg [path] {Interpolator} {Duration}
 *   - 背景显示的文件为 path 的图片
 *   - Show Background Picture at [path]
 * 
 *   HideSoraAvgBg {Interpolator} {Duration}
 *   - 隐藏背景图片
 *   - Hide Background Picture
 * 
 *   SetNameBoxBg [path] 
 *   - 名字窗口背景图片为 [path] 的图片
 *   - Show Name Box Background Picture at [path]
 * 
 *   SetMessageBoxBg [path]  
 *   - 消息窗口背景图片为 [path] 的图片
 *   - Show Message Box Background Picture at [path]
 * 
 *   SetMessageBoxPadding [left] [right] [top] [bottom]
 *   - 设置消息窗口内边距调整值
 *   - Set Message Box Padding Adjust Value
 * 
 *   SetMessageBoxRowSpacing [spacing]
 *   - 设置消息窗口行距调整值
 *   - Set Message Box Row Spacing Adjust Value
 * 
 *   ShowLeftAvgPic [path] {Interpolator} {Duration}
 *   ShowMidAvgPic [path] {Interpolator} {Duration}
 *   ShowRightAvgPic [path] {Interpolator} {Duration}
 *   - 在对应位置显示图片
 *   - Set picture position at left/mid/right and show it
 * 
 *   ShowAvgPic [path] [x] [id] {Interpolator} {Duration}
 *   - 以图片中线的最低点为锚点，将该点与画面最下方的横坐标 x 点重合
 *     并给这个图片一个 id ，注意 id 不能取 left、mid、right
 *   - Set picture position according to its middle-line's bottom 
 *     point(anchor), which is coincide with the bottom of game screen's
 *     horizontal axis point x value
 *     Add an id value to this pic, but don't use left/mid/right value
 * 
 *   HideLeftAvgPic {Interpolator} {Duration}
 *   HideMidAvgPic {Interpolator} {Duration}
 *   HideRightAvgPic {Interpolator} {Duration}
 *   HideAvgPic [id] {Interpolator} {Duration}
 *   - 隐藏对应位置或 ID 的图片
 *   - Hide pic
 * 
 *   AnimateLeftAvgPic [AnimateType] {Duration}
 *   AnimateMidAvgPic [AnimateType] {Duration}
 *   AnimateRightAvgPic [AnimateType] {Duration}
 *   AnimateAvgPic [id] [AnimateType] {Duration}
 *   AnimateAvgBg [AnimateType] {Duration}
 *   - 使背景/某个图片做某种预设动画（AnimateType 大小写不敏感）
 *   - Animate the background or a pic (AnimateType is Case Insensitive)
 *   AnimateType    Meaning
 *   FlipX          水平翻转                  
 *   FlipXBack      水平翻转回来   
 *   FlipY          垂直翻转   
 *   FlipYBack      垂直翻转回来   
 *   Grey           色调的灰度从 0 至 128   
 *   GreyBack       色调的灰度从 128 至 0   
 *   Dark           色调的 RGB 值从 0 至 -68   
 *   Light          色调的 RGB 值从 -68 至 0
 *   ShakeH         水平方向抖动 
 *   ShakeV         垂直方向抖动
 * 
 *   AvgMove [optional orientation] left [num]
 *   AvgMove [optional orientation] mid [num]
 *   AvgMove [optional orientation] right [num]
 *   AvgMove [optional orientation] [id] [num]
 *   - 使对应的立绘图层执行上下 [num] 层移动
 *   - Make pic layer move [optional orientation] by [num]
 *   [optional orientation]  对大小写不敏感  Case Insensitive
 *   [optional orientation]    Meaning
 *   Up                        上移一层
 *   Down                      下移一层
 *   Top                       移至最顶层
 *   Bottom                    移至最底层
 *   注意：当使用 Top 和 Bottom 时 [num] 是可选的
 *   Note: When use Top or Bottom, [num] is optional
 *   
 * 
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Developing
 *
 * ============================================================================
 * Term of Use
 * ============================================================================
 *
 * Free for use in non-commercial or commercial RMMV projects
 * Please credit SoraShiro
 * 
 */
//=============================================================================

Sora.Parameters = PluginManager.parameters('SoraShiro_AvgUI');
Sora.Param = Sora.Param || {};

Sora.Param.ScreenWidth = Number(Sora.Parameters['Screen Width'] || 1280);
Sora.Param.ScreenHeight = Number(Sora.Parameters['Screen Height'] || 720);

Sora.Param.AvgUINameBoxWidth = Number(Sora.Parameters['Name Box Width'] || 250);
Sora.Param.AvgUINameBoxHeight = Number(Sora.Parameters['Name Box Height'] || 60);
Sora.Param.AvgUINameBoxBg = String(Sora.Parameters['Name Box Bg'] || 'name');
Sora.Param.AvgUINameBoxBgTransparent = Number(Sora.Parameters['Name Box Bg Transparent'] || 128);
Sora.Param.AvgUINameBoxTextXShift = Number(Sora.Parameters['Name Box Text X Shift'] || 15);
Sora.Param.AvgUINameBoxTextYShift = Number(Sora.Parameters['Name Box Text Y Shift'] || 10);

Sora.Param.AvgUIMessageBoxWidth = Number(Sora.Parameters['Message Box Width'] || 1280);
Sora.Param.AvgUIMessageBoxHeight = Number(Sora.Parameters['Message Box Height'] || 200);
Sora.Param.AvgUIMessageBoxBg = String(Sora.Parameters['Message Box Bg'] || 'talk-00');
Sora.Param.AvgUIMessageBoxBgTransparent = Number(Sora.Parameters['Message Box Bg Transparent'] || 128);
Sora.Param.AvgUIMessageBoxPaddingLeft = Number(Sora.Parameters['Message Box Text Padding Left'] || 15);
Sora.Param.AvgUIMessageBoxPaddingRight = Number(Sora.Parameters['Message Box Text Padding Right'] || 15);
Sora.Param.AvgUIMessageBoxPaddingTop = Number(Sora.Parameters['Message Box Text Padding Top'] || 36);
Sora.Param.AvgUIMessageBoxPaddingBottom = Number(Sora.Parameters['Message Box Text Padding Bottom'] || 5);
Sora.Param.AvgUIMessageBoxRowSpacingShift = Number(Sora.Parameters['Message Box Text Row Spacing Shift'] || 5);
Sora.Param.AvgUIMessageBoxPauseIcon = String(Sora.Parameters['Message Box Pause Icon'] || 'pauseicon');
Sora.Param.AvgUIMessageBoxPauseIconX = Number(Sora.Parameters['Message Box Pause Icon X'] || 640);
Sora.Param.AvgUIMessageBoxPauseIconY = Number(Sora.Parameters['Message Box Pause Icon Y'] || 190);

Sora.Param.AvgUIAutoChangeBri = eval(Sora.Parameters['Auto Change Brightness']);
Sora.Param.rta = Sora.Parameters['Real To Abbr'] || '{}';
eval('Sora.Param.RealToAbbrEval = ' + Sora.Param.rta);
Sora.Param.AvgUIRealToAbbr = Sora.Param.RealToAbbrEval;

Sora.Param.AvgUIMenuWidth = Number(Sora.Parameters['Avg Menu Width'] || 100);
Sora.Param.AvgUIMenuHeight = Number(Sora.Parameters['Avg Menu Height'] || 40);
Sora.Param.AvgUIMenuAutoHeight = eval(Sora.Parameters['Avg Menu Auto Height']);
Sora.Param.AvgUIMenuEnable = eval(Sora.Parameters['Avg Menu Enable']);
Sora.Param.AvgUIMenuBg = String(Sora.Parameters['Avg Menu Bg'] || 'talkmenu');
Sora.Param.AvgUIMenuTransparent = Number(Sora.Parameters['Avg Menu Bg Transparent'] || 128);
Sora.Param.AvgUIMenuSpeed = String(Sora.Parameters['Avg Menu Speed'] || 'speed');
Sora.Param.AvgUIMenuStop = String(Sora.Parameters['Avg Menu Stop'] || 'stop');
Sora.Param.AvgUIMenuSave = String(Sora.Parameters['Avg Menu Save'] || 'save');
Sora.Param.AvgUIMenuLoad = String(Sora.Parameters['Avg Menu Load'] || 'load');
Sora.Param.AvgUIMenuPlayback = String(Sora.Parameters['Avg Menu Playback'] || 'playback');

//=============================================================================
// SceneManager
//=============================================================================

SceneManager._screenWidth  = Sora.Param.ScreenWidth;
SceneManager._screenHeight = Sora.Param.ScreenHeight;
SceneManager._boxWidth     = Sora.Param.ScreenWidth;
SceneManager._boxHeight    = Sora.Param.ScreenHeight;

//=============================================================================
// ImageManager
//=============================================================================			

ImageManager.loadAvgUI = function (filename, hue) {
    var path = 'img/AvgUI/';
    return this.loadBitmap(path, filename, hue, true);
};

Sora.AvgUI.ImgPath = ['name', 'talk-00', 'talkmenu'];
Sora.AvgUI.isAvgMode = false;

// Preload
(function () {

    var sprite;
    Sora.AvgUI.ImgPath.forEach(function (path) {
        sprite = new Sprite(
            ImageManager.loadAvgUI(path, null)
        );
    });

}());

//=============================================================================
// Game_Interpreter
//=============================================================================			

Sora.AvgUI.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Sora.AvgUI.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'StartSoraAvgMode') this.startSoraAvgMode(args);
    if (command === 'StopSoraAvgMode') this.stopSoraAvgMode(args);
    if (command === 'ShowSoraAvgBg') this.showSoraAvgBg(args);
    if (command === 'HideSoraAvgBg') this.hideSoraAvgBg(args);
    if (command === 'SetNameBoxBg') this.setNameBoxBg(args);
    if (command === 'SetMessageBoxBg') this.setMessageBoxBg(args);
    if (command === 'SetMessageBoxPadding') this.setMessageBoxPadding(args);
    if (command === 'SetMessageBoxRowSpacing') this.setMessageBoxRowSpacing(args);
    if (command === 'ShowLeftAvgPic') this.showLeftAvgPic(args);
    if (command === 'ShowMidAvgPic') this.showMidAvgPic(args);
    if (command === 'ShowRightAvgPic') this.showRightAvgPic(args);
    if (command === 'ShowAvgPic') this.showAvgPic(args);
    if (command === 'HideLeftAvgPic') this.hideLeftAvgPic(args);
    if (command === 'HideMidAvgPic') this.hideMidAvgPic(args);
    if (command === 'HideRightAvgPic') this.hideRightAvgPic(args);
    if (command === 'HideAvgPic') this.hideAvgPic(args);
    if (command === 'AnimateLeftAvgPic') this.animateLeftAvgPic(args);
    if (command === 'AnimateMidAvgPic') this.animateMidAvgPic(args);
    if (command === 'AnimateRightAvgPic') this.animateRightAvgPic(args);
    if (command === 'AnimateAvgPic') this.animateAvgPic(args);
    if (command === 'AnimateAvgBg') this.animateAvgBg(args);
    if (command === 'AvgMove') this.moveAvgPic(args);
};

Game_Interpreter.prototype.startSoraAvgMode = function (args) {
    Sora.AvgUI.isAvgMode = true;

    // Show menu
    Sora.AvgUI.SoraAvgMenu.visible = true;
};

Game_Interpreter.prototype.stopSoraAvgMode = function (args) {
    Sora.AvgUI.isAvgMode = false;

    // Hide Bg
    var soraAvgBg = Sora.AvgUI.SoraAvgBg;
    this.hideSoraAvgBg(args);

    // Clear Cg
    var soraAvgPics = Sora.AvgUI.SoraAvgPictures;
    var avgPicsChildren = soraAvgPics.children;
    avgPicsChildren.splice(0, avgPicsChildren.length);

    // Hide menu
    Sora.AvgUI.SoraAvgMenu.visible = false;

    // Stop Speed Message
    Sora.AvgUI.SpeedMessage = false;
};

Game_Interpreter.prototype.showSoraAvgBg = function (args) {
    var filePath = args[0];
    var interpolatorAbbr = args[1] || "AD";
    var interpolator = Sora.AvgUI.getInterpolatorByAbbr(interpolatorAbbr);
    var duration = Number(args[2]) || 30;
    var soraAvgBg = Sora.AvgUI.SoraAvgBg;
    soraAvgBg.addAttrChangeTask('opacity', 0, 255, interpolator, duration);
    soraAvgBg.bitmap = ImageManager.loadAvgUI(filePath);
    var filePrefix = filePath.split('-')[0];
    soraAvgBg._filePrefix = filePrefix;
};

Game_Interpreter.prototype.hideSoraAvgBg = function (args) {
    var interpolatorAbbr = args[0] || "AD";
    var interpolator = Sora.AvgUI.getInterpolatorByAbbr(interpolatorAbbr);
    var duration = Number(args[1]) || 30;
    var soraAvgBg = Sora.AvgUI.SoraAvgBg;
    soraAvgBg.addAttrChangeTask('opacity', 255, 0, interpolator, duration);
};

Game_Interpreter.prototype.setNameBoxBg = function (args) {
    var filePath = args[0];
    Sora.Param.AvgUINameBoxBg = filePath;
};

Game_Interpreter.prototype.setMessageBoxBg = function (args) {
    var filePath = args[0];
    Sora.Param.AvgUIMessageBoxBg = filePath;
};

Game_Interpreter.prototype.setMessageBoxPadding = function (args) {
    var left = Number(args[0]);
    var right = Number(args[1]);
    var top = Number(args[2]);
    var bottom = Number(args[3]);
    Sora.Param.AvgUIMessageBoxPaddingLeft = left;
    Sora.Param.AvgUIMessageBoxPaddingLeft = right;
    Sora.Param.AvgUIMessageBoxPaddingLeft = top;
    Sora.Param.AvgUIMessageBoxPaddingLeft = bottom;
};

Game_Interpreter.prototype.setMessageBoxRowSpacing = function (args) {
    Sora.AvgUI.AvgUIMessageBoxRowSpacingShift = Number(args[0]);
};

Game_Interpreter.prototype.showLeftAvgPic = function (args) {
    this.showAvgFixedPic(args, 'left');
};

Game_Interpreter.prototype.showMidAvgPic = function (args) {
    this.showAvgFixedPic(args, 'mid');
};

Game_Interpreter.prototype.showRightAvgPic = function (args) {
    this.showAvgFixedPic(args, 'right');
};

Game_Interpreter.prototype.showAvgFixedPic = function (args, positionType) {
    args[3] = args[1];
    args[4] = args[2];
    switch (positionType) {
        case 'left':
            args[1] = 320;
            args[2] = 'left';
            break;
        case 'mid':
            args[1] = 640;
            args[2] = 'mid';
            break;
        case 'right':
            args[1] = 960;
            args[2] = 'right';
    }
    this.showAvgPic(args);
};

Game_Interpreter.prototype.showAvgPic = function (args) {
    var interpolatorAbbr = args[3] || "AD";
    var interpolator = Sora.AvgUI.getInterpolatorByAbbr(interpolatorAbbr);
    var duration = Number(args[4]) || 30;
    Sora.AvgUI.showAvgPic(args[0], args[1], args[2], interpolator, duration);
};

Game_Interpreter.prototype.hideLeftAvgPic = function (args) {
    this.hideAvgFixedPic(args, 'left');
};

Game_Interpreter.prototype.hideMidAvgPic = function (args) {
    this.hideAvgFixedPic(args, 'mid');
};

Game_Interpreter.prototype.hideRightAvgPic = function (args) {
    this.hideAvgFixedPic(args, 'right');
};

Game_Interpreter.prototype.hideAvgFixedPic = function (args, id) {
    this.hideAvgPic(args, id);
};

Game_Interpreter.prototype.hideAvgPic = function (args, id) {
    var interpolatorAbbr = args[0] || "AD";
    var interpolator = Sora.AvgUI.getInterpolatorByAbbr(interpolatorAbbr);
    var duration = Number(args[1]) || 30;
    Sora.AvgUI.hideAvgPic(id, interpolator, duration);
};

Game_Interpreter.prototype.animateLeftAvgPic = function (args) {
    Sora.AvgUI.animateAvgCgSprite('left', args[0], Number(args[1]));
};

Game_Interpreter.prototype.animateMidAvgPic = function (args) {
    Sora.AvgUI.animateAvgCgSprite('mid', args[0], Number(args[1]));
};

Game_Interpreter.prototype.animateRightAvgPic = function (args) {
    Sora.AvgUI.animateAvgCgSprite('right', args[0], Number(args[1]));
};

Game_Interpreter.prototype.animateAvgPic = function (args) {
    Sora.AvgUI.animateAvgCgSprite(args[0], args[1], Number(args[2]));
};

Game_Interpreter.prototype.animateAvgBg = function (args) {
    Sora.AvgUI.animateAvgBgSprite(args[0], Number(args[1]));
};

Game_Interpreter.prototype.moveAvgPic = function (args) {
    Sora.AvgUI.moveAvgPic(args[0], args[1], Number(args[2]));
};

Sora.AvgUI.showAvgPic = function (targetPath, targetX, targetId, interpolator, duration) {
    targetX = Number(targetX);

    var targetSpriteInfo = Sora.AvgUI.getPicFromPics(targetId);
    var targetSprite = null;
    if (targetSpriteInfo === null) {
        targetSprite = new Sprite_SoraAvgAnimate();
        targetSpriteInfo = [];
        targetSpriteInfo[0] = targetSprite;
        targetSprite._soraAvgId = targetId;
        Sora.AvgUI.SoraAvgPictures.addChild(targetSprite);
        targetSpriteInfo[1] = Sora.AvgUI.SoraAvgPictures.children.length - 1;
    }
    targetSprite = targetSpriteInfo[0];
    var bitmap = ImageManager.loadAvgUI(targetPath);
    var x = targetX;
    var y = SceneManager._screenHeight;
    targetSprite.x = x;
    targetSprite.y = y;
    targetSprite.anchor = new Point(0.5, 1);
    targetSprite.addAttrChangeTask('opacity', 0, 255, interpolator, duration);
    targetSprite.bitmap = bitmap;
    var filePrefix = targetPath.split('-')[0];
    targetSprite._filePrefix = filePrefix;
}

Sora.AvgUI.bringPicToFrontById = function (id) {
    var targetSpriteInfo = Sora.AvgUI.getPicFromPics(id);
    var targetIndex = targetSpriteInfo[1];
    bringPicToFrontByIndex(targetIndex);
};

Sora.AvgUI.bringPicToFrontByIndex = function (index) {
    var pics = Sora.AvgUI.SoraAvgPictures;
    var target = pics.children[index];
    pics.removeChildAt(index);
    pics.addChild(target);
};

Sora.AvgUI.hideAvgPic = function (id, interpolator, duration) {
    var targetSpriteInfo = Sora.AvgUI.getPicFromPics(id);
    if (targetSpriteInfo === null) return;
    var targetSprite = targetSpriteInfo[0];
    targetSprite.addAttrChangeTask('opacity', 255, 0, interpolator, duration);
}

Sora.AvgUI.getPicFromPics = function (id) {
    if (Sora.AvgUI.SoraAvgPictures === null) return null;
    var avgPicsChildren = Sora.AvgUI.SoraAvgPictures.children;
    for (var i = 0, len = avgPicsChildren.length; i < len; i++) {
        if (avgPicsChildren[i]._soraAvgId === id) {
            return [avgPicsChildren[i], i];
        }
    }
    return null;
};

Sora.AvgUI.animateAvgCgSprite = function (id, animateType, duration) {
    var targetSpriteInfo = Sora.AvgUI.getPicFromPics(id);
    if (targetSpriteInfo === null) return;
    var targetSprite = targetSpriteInfo[0];
    Sora.AvgUI.animateAvgSprite(targetSprite, animateType, duration);
}

Sora.AvgUI.animateAvgBgSprite = function (animateType, duration) {
    var targetSprite = Sora.AvgUI.SoraAvgBg;
    Sora.AvgUI.animateAvgSprite(targetSprite, animateType, duration);
}

Sora.AvgUI.animateAvgSprite = function (targetSprite, animateType, duration) {
    var ADInterpolator = Sora.AvgUI.InterpolatorTable['AD'];
    var CycleInterpolator = Sora.AvgUI.InterpolatorTable['C'];
    animateType = animateType.toLocaleUpperCase();
    switch (animateType) {
        case "FLIPX":
            targetSprite.addExtraAttrChangeTask("scaleX", 1, -1, ADInterpolator, duration);
            break;
        case "FLIPXBACK":
            targetSprite.addExtraAttrChangeTask("scaleX", -1, 1, ADInterpolator, duration);
            break;
        case "FLIPY":
            targetSprite.addExtraAttrChangeTask("scaleY", 1, -1, ADInterpolator, duration);
            break;
        case "FLIPYBACK":
            targetSprite.addExtraAttrChangeTask("scaleY", -1, 1, ADInterpolator, duration);
            break;
        case "GREY":
            targetSprite.addExtraAttrChangeTask("grey", 0, 128, ADInterpolator, duration);
            break;
        case "GREYBACK":
            targetSprite.addExtraAttrChangeTask("grey", 128, 0, ADInterpolator, duration);
            break;
        case "SHAKEH":
            targetSprite.addAttrChangeTask("x", targetSprite.x, targetSprite.x + 30, CycleInterpolator, duration);
            break;
        case "SHAKEV":
            targetSprite.addAttrChangeTask("y", targetSprite.y, targetSprite.y + 30, CycleInterpolator, duration);
            break;
        case "DARK":
            targetSprite.addExtraAttrChangeTask("rgb", 0, -68, ADInterpolator, duration);
            break;
        case "LIGHT":
            targetSprite.addExtraAttrChangeTask("rgb", -68, 0, ADInterpolator, duration);
            break;
    }
}

Sora.AvgUI.changeAvgCgBrightness = function (realName) {
    if (!Sora.Param.AvgUIAutoChangeBri) return;
    var abbr = Sora.Param.AvgUIRealToAbbr[realName];
    var avgPicsChildren = Sora.AvgUI.SoraAvgPictures.children;
    var frontIndex = -1;
    for (var i = 0, len = avgPicsChildren.length; i < len; i++) {
        var child = avgPicsChildren[i];
        var nowTone = child.getColorTone();
        if (avgPicsChildren[i]._filePrefix === abbr) {
            child.addExtraAttrChangeTask(
                "rgb", nowTone[0], 0,
                Sora.AvgUI.getInterpolatorByAbbr("AD"), 10);
            frontIndex = i;
        } else {
            child.addExtraAttrChangeTask(
                "rgb", nowTone[0], -68,
                Sora.AvgUI.getInterpolatorByAbbr("AD"), 10);
        }
    }
    if (frontIndex >= 0) {
        Sora.AvgUI.bringPicToFrontByIndex(frontIndex);
    }
}

Sora.AvgUI.moveAvgPic = function (orientation, id, num) {
    orientation = orientation.toLocaleUpperCase();
    var children = Sora.AvgUI.SoraAvgPictures.children;
    var targetSpriteInfo = Sora.AvgUI.getPicFromPics(id);
    var targetSprite = targetSpriteInfo[0];
    var index = targetSpriteInfo[1];
    var targetLayer = 0;
    switch (orientation) {
        case "UP":
            targetLayer = Math.min(index + num, children.length);
            break;
        case "DOWN":
            targetLayer = Math.min(index - num, children.length);
            break;
        case "TOP":
            targetLayer = children.length;
            break;
        case "BOTTOM":
            targetLayer = 0;
            break;
    }
    children.splice(index, 1);
    children.splice(targetLayer, 0, targetSprite);
}

//=============================================================================
// New: Sprite_SoraAvgAnimate
//=============================================================================			

function Sprite_SoraAvgAnimate() {
    this.initialize.apply(this, arguments);
}

Sprite_SoraAvgAnimate.prototype = Object.create(Sprite.prototype);
Sprite_SoraAvgAnimate.prototype.constructor = Sprite_SoraAvgAnimate;

Sprite_SoraAvgAnimate.prototype.initialize = function () {
    Sprite.prototype.initialize.call(this);
    this._attrChangeTasks = [];
    this._filePrefix = "";
    this._touching = false;
    this._clickHandler = null;
};

Sprite_SoraAvgAnimate.prototype.update = function () {
    Sprite.prototype.update.call(this);
    this.updateAnimation();
    this.processTouch();
};

Sprite_SoraAvgAnimate.prototype.updateAnimation = function () {
    for (var i = 0; i < this._attrChangeTasks.length; i++) {
        var changeTask = this._attrChangeTasks[i];
        var duration = changeTask['duration'];
        var ticker = changeTask['ticker'];
        ticker++;
        if (ticker > duration) {
            this._attrChangeTasks.splice(i, 1);
            var callback = changeTask['callback'];
            if (callback && (typeof callback === "function")) {
                callback();
            }
            continue;
        }
        var attrName = changeTask['attrName'];
        var from = changeTask['from'];
        var to = changeTask['to'];
        var interpolator = changeTask['interpolator'];
        changeTask['ticker'] = ticker;
        var calcRate = interpolator(ticker / duration);
        var distance = (to - from) * calcRate;
        now = from + distance;
        switch (changeTask.type) {
            case "attr":
                this[attrName] = now;
                break;
            case "method":
                var tone = this.getColorTone();
                switch (attrName) {
                    case "rgb":
                        tone[0] = now;
                        tone[1] = now;
                        tone[2] = now;
                        this.setColorTone(tone);
                        break;
                    case "grey":
                        tone[3] = now;
                        this.setColorTone(tone);
                        break;
                    case "scaleX":
                        this['scale']['x'] = now;
                        break;
                    case "scaleY":
                        this['scale']['y'] = now;
                        break;
                }
                break;
        }
    }
};

Sprite_SoraAvgAnimate.prototype.processTouch = function () {
    if (this.isActive()) {
        if (TouchInput.isTriggered() && this.isButtonTouched()) {
            this._touching = true;
        }
        if (this._touching) {
            if (TouchInput.isReleased() || !this.isButtonTouched()) {
                this._touching = false;
                if (TouchInput.isReleased()) {
                    this.callClickHandler();
                }
            }
        }
    } else {
        this._touching = false;
    }
};

Sprite_SoraAvgAnimate.prototype.isActive = function () {
    var node = this;
    while (node) {
        if (!node.visible) {
            return false;
        }
        node = node.parent;
    }
    return true;
};

Sprite_SoraAvgAnimate.prototype.isButtonTouched = function () {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Sprite_SoraAvgAnimate.prototype.canvasToLocalX = function (x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Sprite_SoraAvgAnimate.prototype.canvasToLocalY = function (y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Sprite_SoraAvgAnimate.prototype.setClickHandler = function (method) {
    this._clickHandler = method;
};

Sprite_SoraAvgAnimate.prototype.callClickHandler = function () {
    if (this._clickHandler) {
        this._clickHandler();
    }
};

Sprite_SoraAvgAnimate.prototype.addAttrChangeTask = function (attrName, from, to, interpolator, duration, callback) {
    Sprite.prototype.update.call(this);
    for (var i = 0; i < this._attrChangeTasks.length; i++) {
        var changeTask = this._attrChangeTasks[i];
        var aName = changeTask['attrName'];
        if (aName === attrName) {
            this._attrChangeTasks.splice(i, 1);
            continue;
        }
    }
    if (duration < 1) duration = 1;
    this._attrChangeTasks.push(
        {
            'type': "attr",
            'attrName': attrName,
            'from': from,
            'to': to,
            'interpolator': interpolator,
            'duration': duration,
            'ticker': 0,
            'callback': callback,
        }
    );
    this[attrName] = from;
};

Sprite_SoraAvgAnimate.prototype.addExtraAttrChangeTask = function (attrName, from, to, interpolator, duration, callback) {
    Sprite.prototype.update.call(this);
    for (var i = 0; i < this._attrChangeTasks.length; i++) {
        var changeTask = this._attrChangeTasks[i];
        var aName = changeTask['attrName'];
        if (aName === attrName) {
            this._attrChangeTasks.splice(i, 1);
            continue;
        }
    }
    this._attrChangeTasks.push(
        {
            'type': "method",
            'attrName': attrName,
            'from': from,
            'to': to,
            'interpolator': interpolator,
            'duration': duration,
            'ticker': 0,
            'callback': callback,
        }
    );
    var tone = this.getColorTone();
    switch (attrName) {
        case "rgb":
            tone[0] = from;
            tone[1] = from;
            tone[2] = from;
            this.setColorTone(tone);
            break;
        case "grey":
            tone[3] = from;
            this.setColorTone(tone);
            break;
        case "scaleX":
            this['scale']['x'] = from;
            break;
        case "scaleY":
            this['scale']['y'] = from;
            break;
    }
};

//=============================================================================
// New: Animation Interpolator
//=============================================================================

Sora.AvgUI.getInterpolatorByAbbr = function (abbr) {
    var key = abbr.toLocaleUpperCase();
    var result = Sora.AvgUI.InterpolatorTable[key];
    if (result == null) {
        console.error("There is no Interpolator's abbr is" + abbr + "!!");
    }
    return Sora.AvgUI.InterpolatorTable[key];
};

// Basic

Sora.AvgUI.LinearInterpolator = function (x) {
    return x;
}

Sora.AvgUI.SmoothStepInterpolator = function (x) {
    return x * x * (3.0 - 2.0 * x);
}

Sora.AvgUI.SpringInterpolator = function (x, f) {
    var factor = f || 0.4;
    return Math.pow(2, -10 * x) * Math.sin((x - factor / 4) * (2 * Math.PI) / factor) + 1;
}

// Android

Sora.AvgUI.AccelerateDecelerateInterpolator = function (x) {
    return (Math.cos((x + 1) * Math.PI) / 2.0) + 0.5;
}

Sora.AvgUI.BounceInterpolator = function (x) {

    function bounce(t) { return t * t * 8; }

    var result;
    if (x < 0.3535)
        result = bounce(x);
    else if (x < 0.7408)
        result = bounce(x - 0.54719) + 0.7;
    else if (x < 0.9644)
        result = bounce(x - 0.8526) + 0.9;
    else
        result = bounce(x - 1.0435) + 0.95;
    return result;
}

Sora.AvgUI.AccelerateInterpolator = function (x, f) {
    var factor = f || 1.0;
    if (factor == 1.0)
        return x * x;
    else
        return Math.pow(x, 2.0 * factor);
}

Sora.AvgUI.AnticipateInterpolator = function (x, t) {
    var tension = t || 2.0;
    return x * x * ((tension + 1.0) * x - tension);
}

Sora.AvgUI.AnticipateOvershootInterpolator = function (x, t) {
    var tension = t || (2.0 * 1.5);

    function a(t, s) { return t * t * ((s + 1) * t - s); }
    function o(t, s) { return t * t * ((s + 1) * t + s); }

    if (x < 0.5)
        0.5 * a(x * 2.0, tension);
    else
        0.5 * (o(x * 2.0 - 2.0, tension) + 2.0);
}

Sora.AvgUI.CycleInterpolator = function (x, c) {
    var cycles = c || 1.0;
    return Math.sin(2.0 * cycles * Math.PI * x);
}

Sora.AvgUI.DecelerateInterpolator = function (x, f) {
    var factor = f || 1.0;
    if (factor == 1.0)
        return (1.0 - (1.0 - x) * (1.0 - x));
    else
        return (1.0 - Math.pow((1.0 - x), 2.0 * factor));
}

Sora.AvgUI.OvershootInterpolator = function (x, t) {
    var tension = t || 2.0;
    x -= 1.0;
    return x * x * ((tension + 1.0) * x + tension) + 1.0;
}

// Advanced

Sora.AvgUI.CubicHermiteInterpolator = function (x, p_0, p_1, m_0, m_1) {

    var x = x;
    var p0 = p_0 || 0;
    var p1 = p_1 || 1;
    var m0 = m_0 || 4;
    var m1 = m_1 || 4;

    function CubicHermite(t, p0, p1, m0, m1) {
        t2 = t * t;
        t3 = t2 * t;
        return (2.0 * t3 - 3.0 * t2 + 1.0) * p0
            + (t3 - 2.0 * t2 + t) * m0
            + (-2.0 * t3 + 3.0 * t2) * p1
            + (t3 - t2) * m1;
    }

    //time, start, end, tangent0, tangent1
    //modify tangent0 and tangent1
    return CubicHermite(x, p0, p1, m0, m1);
}

Sora.AvgUI.InterpolatorTable = {};
Sora.AvgUI.InterpolatorTable["L"] = Sora.AvgUI.LinearInterpolator;
Sora.AvgUI.InterpolatorTable["SS"] = Sora.AvgUI.SmoothStepInterpolator;
Sora.AvgUI.InterpolatorTable["SR"] = Sora.AvgUI.SpringInterpolator;
Sora.AvgUI.InterpolatorTable["AD"] = Sora.AvgUI.AccelerateDecelerateInterpolator;
Sora.AvgUI.InterpolatorTable["B"] = Sora.AvgUI.BounceInterpolator;
Sora.AvgUI.InterpolatorTable["A"] = Sora.AvgUI.AccelerateInterpolator;
Sora.AvgUI.InterpolatorTable["AT"] = Sora.AvgUI.AnticipateInterpolator;
Sora.AvgUI.InterpolatorTable["ATO"] = Sora.AvgUI.AnticipateOvershootInterpolator;
Sora.AvgUI.InterpolatorTable["C"] = Sora.AvgUI.CycleInterpolator;
Sora.AvgUI.InterpolatorTable["D"] = Sora.AvgUI.DecelerateInterpolator;
Sora.AvgUI.InterpolatorTable["O"] = Sora.AvgUI.OvershootInterpolator;
Sora.AvgUI.InterpolatorTable["CH"] = Sora.AvgUI.CubicHermiteInterpolator;

//=============================================================================
// New: Avg Menu Callback
//=============================================================================

Sora.AvgUI.callSpeedMessage = function () {
    Sora.AvgUI.SpeedMessage = true;
};

Sora.AvgUI.callStopSpedMessage = function () {
    Sora.AvgUI.SpeedMessage = false;
};

Sora.AvgUI.callSaveScene = function () {
    Sora.AvgUI.saveData();
    SceneManager.push(Scene_Save);
};

Sora.AvgUI.callLoadScene = function () {
    Sora.AvgUI.saveData();
    SceneManager.push(Scene_Load);
};

Sora.AvgUI.callPlaybackScene = function () {
    // SceneManager.push(Scene_Load);
};

Sora.AvgUI.saveData = function () {
    Sora.AvgUI.IfAnyData = true;
}

Sora.AvgUI.Window_Message_isFastForward = Window_Message.prototype.isFastForward;
Window_Message.prototype.isFastForward = function () {
    result = Sora.AvgUI.SpeedMessage || Sora.AvgUI.Window_Message_isFastForward.call(this);
    return result;
};

//=============================================================================
// Scene_Map Scene_Battle
//=============================================================================			

Sora.AvgUI.SoraAvgBg = null;
Sora.AvgUI.SoraAvgPictures = null;
Sora.AvgUI.SoraAvgWeather = null;
Sora.AvgUI.IfAnyData = false;

Sora.AvgUI.Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function () {
    Sora.AvgUI.Scene_Map_createDisplayObjects.call(this);
    this.createSoraAvgObjects();
};

Sora.AvgUI.Scene_Battle_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function () {
    Sora.AvgUI.Scene_Battle_createDisplayObjects.call(this);
    this.createSoraAvgObjects();
};

Scene_Base.prototype.createSoraAvgObjects = function () {
    if (Sora.AvgUI.IfAnyData) {
        // Reback status
        this._soraAvgBg = Sora.AvgUI.SoraAvgBg;
        this._soraAvgPictures = Sora.AvgUI.SoraAvgPictures;
        this._soraAvgWeather = Sora.AvgUI.SoraAvgWeather;
        Sora.AvgUI.SoraAvgMenu.visible = true;
        Sora.AvgUI.SoraAvgPauseIcon.visible = false;
    } else {
        var nothingBitmap = new Bitmap(1280, 720);

        this._soraAvgBg = new Sprite_SoraAvgAnimate(nothingBitmap);
        this._soraAvgPictures = new Sprite_SoraAvgAnimate(nothingBitmap);
        this._soraAvgWeather = new Sprite_SoraAvgAnimate(nothingBitmap);

        Sora.AvgUI.SoraAvgBg = this._soraAvgBg;
        Sora.AvgUI.SoraAvgPictures = this._soraAvgPictures;
        Sora.AvgUI.SoraAvgWeather = this._soraAvgWeather;
    }
    this.addChildAt(Sora.AvgUI.SoraAvgBg, 1);
    this.addChildAt(Sora.AvgUI.SoraAvgPictures, 2);
    this.addChildAt(Sora.AvgUI.SoraAvgWeather, 3);
    Sora.AvgUI.IfAnyData = false;
}

//=============================================================================
// Window_NameBox
//=============================================================================			

Sora.AvgUI.Window_NameBox_refresh = Window_NameBox.prototype.refresh;
Window_NameBox.prototype.refresh = function (text, position) {
    this.show();
    this._lastNameText = text;
    this._text = Yanfly.Param.MSGNameBoxText + text;
    this._position = position;
    this.width = this.windowWidth();

    // New
    this.height = this.windowHeight();
    this.opacity = 0;
    this.backOpacity = 0;

    this.createContents();
    this.contents.clear();

    // New
    this.setWindowBg();

    this.resetFontSettings();
    this.changeTextColor(this.textColor(Yanfly.Param.MSGNameBoxColor));
    var padding = eval(Yanfly.Param.MSGNameBoxPadding) / 2;

    // Modified
    this.drawTextEx(
        this._text,
        Sora.Param.AvgUINameBoxTextXShift,
        Sora.Param.AvgUINameBoxTextYShift);

    this._parentWindow.adjustWindowSettings();
    this._parentWindow.updatePlacement();
    this.adjustPositionX();
    this.adjustPositionY();
    this.open();
    this.activate();
    this._closeCounter = 4;
    return '';
};

Window_NameBox.prototype.processNormalCharacter = function (textState) {
    var c = textState.text[textState.index++];
    var w = this.textWidth(c);
    this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
    textState.x += w;

    // New
    this._soraBoxName += c;
};

Window_NameBox.prototype.drawTextEx = function (text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();

        // New
        this._soraBoxName = '';

        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }

        // New
        Sora.AvgUI.changeAvgCgBrightness(this._soraBoxName);

        return textState.x - x;
    } else {
        return 0;
    }
};

Window_NameBox.prototype.setWindowBg = function () {
    var bgBitmap = ImageManager.loadAvgUI(Sora.Param.AvgUINameBoxBg);
    var transparentBg = new Bitmap(bgBitmap.width, bgBitmap.height);
    transparentBg.paintOpacity = Sora.Param.AvgUINameBoxBgTransparent;
    transparentBg.blt(bgBitmap, 0, 0, bgBitmap.width, bgBitmap.height, 0, 0);
    this.setSoraBg(transparentBg);
}

Window_NameBox.prototype.close = function () {
    Window_Base.prototype.close.call(this);
    this.setSoraBg(null);
};

Window_NameBox.prototype.standardPadding = function () {
    return 0;
};

Sora.AvgUI.Window_NameBox_windowWidth = Window_NameBox.prototype.windowWidth;
Window_NameBox.prototype.windowWidth = function () {
    return Sora.Param.AvgUINameBoxWidth;
};

Sora.AvgUI.Window_NameBox_windowHeight = Window_NameBox.prototype.windowHeight;
Window_NameBox.prototype.windowHeight = function () {
    return Sora.Param.AvgUINameBoxHeight;
};

Sora.AvgUI.Window_NameBox_adjustPositionX = Window_NameBox.prototype.adjustPositionX;
Window_NameBox.prototype.adjustPositionX = function () {
    this.x = 0;
};

Sora.AvgUI.Window_NameBox_adjustPositionY = Window_NameBox.prototype.adjustPositionY;
Window_NameBox.prototype.adjustPositionY = function () {
    this.y = 490;
};

//=============================================================================
// Window_Message
//=============================================================================			

Sora.AvgUI.SoraAvgMenu = null;
Sora.AvgUI.SoraAvgPauseIcon = null;

Sora.AvgUI.Window_Message_initialize = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function () {
    Sora.AvgUI.Window_Message_initialize.call(this);
    // New
    this.pause = false;
    this.opacity = 0;
    this.backOpacity = 0;
    this.setWindowBg();
    this.setSoraAvgMenu();
    this.setSoraPauseIcon();
};

Window_Message.prototype.setSoraPauseIcon = function() {
    var nothingBitmap = new Bitmap(0, 0);
    this._soraAvgPauseIcon  = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgPauseIcon.anchor = new Point(0.5, 0.5);
    this._soraAvgPauseIcon.x = Sora.Param.AvgUIMessageBoxPauseIconX;
    this._soraAvgPauseIcon.y = Sora.Param.AvgUIMessageBoxPauseIconY;
    var bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMessageBoxPauseIcon);
    this._soraAvgPauseIcon.bitmap = bitmap;
    Sora.AvgUI.SoraAvgPauseIcon = this._soraAvgPauseIcon;
    this._soraAvgPauseIcon.visible = false;
    this.addChild(this._soraAvgPauseIcon);
};

Window_Message.prototype.setSoraAvgMenu = function () {
    var nothingBitmap = new Bitmap(0, 0);
    this._soraAvgMenu = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenu.x = this.x + this.width - Sora.Param.AvgUIMenuWidth;
    this._soraAvgMenu.y = 0;
    var bgBitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuBg);
    var transparentMenuBg = new Bitmap(bgBitmap.width, bgBitmap.height);
    transparentMenuBg.paintOpacity = Sora.Param.AvgUIMenuTransparent;
    transparentMenuBg.blt(bgBitmap, 0, 0, bgBitmap.width, bgBitmap.height, 0, 0);
    this._soraAvgMenu.bitmap = transparentMenuBg;

    this.setSoraAvgMenuDetail();

    Sora.AvgUI.SoraAvgMenu = this._soraAvgMenu;
    this._soraAvgMenu.visible = false;
    this.addChild(this._soraAvgMenu);
}

Window_Message.prototype.setSoraAvgMenuDetail = function () {
    var nothingBitmap = new Bitmap(1280, 720);

    var height = Sora.Param.AvgUIMenuHeight;
    if (Sora.Param.AvgUIMenuAutoHeight) {
        height = Sora.Param.AvgUIMessageBoxHeight / 5;
    }

    this._soraAvgMenuSpeed = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenuSpeed.bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuSpeed);

    this._soraAvgMenuStop = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenuStop.y = height;
    this._soraAvgMenuStop.bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuStop);

    this._soraAvgMenuSave = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenuSave.y = height * 2;
    this._soraAvgMenuSave.bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuSave);

    this._soraAvgMenuLoad = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenuLoad.y = height * 3;
    this._soraAvgMenuLoad.bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuLoad);

    this._soraAvgMenuPlayback = new Sprite_SoraAvgAnimate(nothingBitmap);
    this._soraAvgMenuPlayback.y = height * 4;
    this._soraAvgMenuPlayback.bitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMenuPlayback);

    this._soraAvgMenuSpeed.setClickHandler(Sora.AvgUI.callSpeedMessage);
    this._soraAvgMenuStop.setClickHandler(Sora.AvgUI.callStopSpedMessage);
    this._soraAvgMenuSave.setClickHandler(Sora.AvgUI.callSaveScene);
    this._soraAvgMenuLoad.setClickHandler(Sora.AvgUI.callLoadScene);
    this._soraAvgMenuPlayback.setClickHandler(Sora.AvgUI.callPlaybackScene);

    this._soraAvgMenu.addChild(this._soraAvgMenuSpeed);
    this._soraAvgMenu.addChild(this._soraAvgMenuStop);
    this._soraAvgMenu.addChild(this._soraAvgMenuSave);
    this._soraAvgMenu.addChild(this._soraAvgMenuLoad);
    this._soraAvgMenu.addChild(this._soraAvgMenuPlayback);
}

Window_Message.prototype.isTriggered = function () {
    if(this._soraAvgMenu.visible && this._soraAvgMenu.isButtonTouched()) {
        return false;
    }
    return (Input.isRepeated('ok') || Input.isRepeated('cancel') ||
        TouchInput.isRepeated());
};

Window_Message.prototype.startMessage = function () {
    this._textState = {};
    this._textState.index = 0;
    this._textState.text = this.convertEscapeCharacters($gameMessage.allText());
    this.newPage(this._textState);
    this.updatePlacement();

    // Modified
    // this.updateBackground();

    this.open();
};

Window_Message.prototype.setWindowBg = function () {
    var bgBitmap = ImageManager.loadAvgUI(Sora.Param.AvgUIMessageBoxBg);
    var transparentBg = new Bitmap(bgBitmap.width, bgBitmap.height);
    transparentBg.paintOpacity = Sora.Param.AvgUIMessageBoxBgTransparent;
    transparentBg.blt(bgBitmap, 0, 0, bgBitmap.width, bgBitmap.height, 0, 0);
    this.setSoraBg(transparentBg);
}

// 自动换行 Line Wrap
// 参考 Reference：
// 小优【66RPG：rpg-sheep】【百度贴吧：优加星爱兔子】 - LineWrap.js
Window_Message.prototype.processNormalCharacter = function (textState) {
    var c = textState.text[textState.index];
    var w = this.textWidth(c);

    // New
    var padding = Sora.Param.AvgUIMessageBoxPaddingLeft
        + Sora.Param.AvgUIMessageBoxPaddingRight;
    // Modified
    if (this.width - padding - textState.x >= w) {

        this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
        textState.index++;
        textState.x += w;
    } else {
        this.processNewLine(textState);
        // Modified
        // this.processNormalCharacter(textState);
    }
};

Window_Message.prototype.processNewLine = function (textState) {
    this._lineShowFast = false;
    Window_Base.prototype.processNewLine.call(this, textState);
    if (this.needsNewPage(textState)) {
        this.startPause();
    } else {
        // New
        textState.index--;
        textState._soraLine += 1;
        this.processNormalCharacter(textState);
    }
};

Window_Base.prototype.processNewLine = function (textState) {

    // Modified
    textState.x = textState.left
        + Sora.Param.AvgUIMessageBoxPaddingLeft;
    textState.y += textState.height
        + Sora.Param.AvgUIMessageBoxRowSpacingShift;

    textState.height = this.calcTextHeight(textState, false);
    textState.index++;
};

Window_Message.prototype.needsNewPage = function (textState) {
    // Modified
    var padding = Sora.Param.AvgUIMessageBoxPaddingBottom;
    var totalRowSpacing = (this._soraLine - 1)
        * Sora.Param.AvgUIMessageBoxRowSpacingShift;
    return (!this.isEndOfText(textState) &&
        textState.y + textState.height + padding > this.contents.height);
};

Window_Message.prototype.newPage = function (textState) {
    this.contents.clear();
    this.resetFontSettings();
    this.clearFlags();
    this.loadMessageFace();

    // Modified
    textState.x = this.newLineX()
        + Sora.Param.AvgUIMessageBoxPaddingLeft;
    textState.y = Sora.Param.AvgUIMessageBoxPaddingTop;
    this.setWindowBg();
    if (textState.index === 0) {
        this._soraLine = 1;
    }

    textState.left = this.newLineX();
    textState.height = this.calcTextHeight(textState, false);
};

Sora.AvgUI.Window_Message_adjustWindowSettings = Window_Message.prototype.adjustWindowSettings;
Window_Message.prototype.adjustWindowSettings = function () {
    this.createContents();
};

Window_Message.prototype.standardPadding = function () {
    return 0;
};

Sora.AvgUI.Window_Message_update = Window_Message.prototype.update;
Window_Message.prototype.update = function () {
    Sora.AvgUI.Window_Message_update.call(this);
    this.width = Sora.Param.AvgUIMessageBoxWidth;
    this.height = Sora.Param.AvgUIMessageBoxHeight;
    this.x = 0;
    this.y = SceneManager._boxHeight - this.height;
    this._soraAvgPauseIcon.visible = this._soraPause;
};



// 万恶的 this.pause，它不仅仅是个 flag，它还和暂停标记的显示绑定在一起。
// 为了永远不显示这个暂停标记，并可以自定义暂停标记，我只能在用到它的地
// 方全都改成别的变量表示 = =
// `this.pause` is so annoying. This value not only a flag, but also
// relates with the visiable of the pause icon! 
// Because I want to custom pause icon, so I must change all methods
// using `this.pause` to use another var. = =
Window_Message.prototype.oldestUpdateInput = function() {
    if (this.isAnySubWindowActive()) {
        return true;
    }
    if (this._soraPause) {
        if (this.isTriggered()) {
            Input.update();
            this._soraPause = false;
            if (!this._textState) {
                this.terminateMessage();
            }
        }
        return true;
    }
    return false;
};

Window_Message.prototype.updateInput = function() {
    if (this._soraPause && this.isFastForward()) {
      if (!this._textState) {
        this.soraPause = false;
        this.terminateMessage();
      }
    }
    return this.oldestUpdateInput();
};

Window_Message.prototype.updateMessage = function() {
    if (this._textState) {
        while (!this.isEndOfText(this._textState)) {
            if (this.needsNewPage(this._textState)) {
                this.newPage(this._textState);
            }
            this.updateShowFast();
            this.processCharacter(this._textState);
            if (!this._showFast && !this._lineShowFast) {
                break;
            }
            if (this._soraPause || this._waitCount > 0) {
                break;
            }
        }
        if (this.isEndOfText(this._textState)) {
            this.onEndOfText();
        }
        return true;
    } else {
        return false;
    }
};

Window_Message.prototype.startPause = function() {
    this.startWait(10);
    this._soraPause = true;
};

//=============================================================================
// Window_Base
//=============================================================================			

Window_Base.prototype.initialize = function (x, y, width, height) {
    Window.prototype.initialize.call(this);
    this.loadWindowskin();
    this.move(x, y, width, height);
    this.updatePadding();
    this.updateBackOpacity();
    this.updateTone();

    // New
    this.createSoraBg();

    this.createContents();
    this._opening = false;
    this._closing = false;
    this._dimmerSprite = null;
};

Window_Base.prototype.setSoraBg = function (bitmap) {
    this._bgSprite.bitmap = bitmap;
};

Window_Base.prototype.createSoraBg = function (bitmap) {
    this._bgSprite = new Sprite();
    this.addChildAt(this._bgSprite, 0);
};

Window_Base.prototype.update = function () {
    Window.prototype.update.call(this);

    // New
    this.updateSoraBg();

    this.updateTone();
    this.updateOpen();
    this.updateClose();
    this.updateBackgroundDimmer();
};

Window_Base.prototype.updateSoraBg = function (bitmap) {

};