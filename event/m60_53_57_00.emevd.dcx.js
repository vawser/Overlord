// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1053570100);
    InitializeCommonEvent(1, 9008000, 1053570101);
    InitializeCommonEvent(2, 9008000, 1053570102);
    InitializeCommonEvent(3, 9008000, 1053570103);
    InitializeCommonEvent(4, 9008000, 1053570104);
    InitializeCommonEvent(5, 9008000, 1053570105);
    InitializeCommonEvent(6, 9008000, 1053570106);
    InitializeCommonEvent(7, 9008000, 1053570107);
    InitializeCommonEvent(8, 9008000, 1053570108);
    InitializeCommonEvent(9, 9008000, 1053570109);
    InitializeCommonEvent(10, 9008000, 1053570110);
    InitializeCommonEvent(11, 9008000, 1053570111);
    InitializeCommonEvent(12, 9008000, 1053570112);
    InitializeCommonEvent(13, 9008000, 1053570113);
    InitializeCommonEvent(14, 9008000, 1053570114);
    InitializeCommonEvent(15, 9008000, 1053570115);
    InitializeCommonEvent(16, 9008000, 1053570116);
    InitializeCommonEvent(17, 9008000, 1053570117);
    InitializeCommonEvent(18, 9008000, 1053570118);
    InitializeCommonEvent(19, 9008000, 1053570119);
    InitializeCommonEvent(20, 9008000, 1053570210);
    InitializeCommonEvent(21, 9008000, 1053570120);
    InitializeCommonEvent(22, 9008000, 1053570121);
    InitializeCommonEvent(23, 9008000, 1053570122);
    InitializeCommonEvent(24, 9008000, 1053570123);
    InitializeCommonEvent(25, 9008000, 1053570124);
    InitializeCommonEvent(26, 9008000, 1053570125);
    InitializeCommonEvent(27, 9008000, 1053570126);
    InitializeCommonEvent(28, 9008000, 1053570127);
    InitializeCommonEvent(29, 9008000, 1053570128);
    InitializeCommonEvent(30, 9008000, 1053570129);
    InitializeCommonEvent(31, 9008000, 1053570130);
    InitializeCommonEvent(32, 9008000, 1053570131);
    InitializeCommonEvent(33, 9008000, 1053570132);
    InitializeCommonEvent(34, 9008000, 1053570133);
    InitializeCommonEvent(35, 9008000, 1053570134);
    InitializeCommonEvent(36, 9008000, 1053570135);
    InitializeCommonEvent(37, 9008000, 1053570136);
    InitializeCommonEvent(38, 9008000, 1053570137);
    InitializeCommonEvent(39, 9008000, 1053570138);
    InitializeCommonEvent(40, 9008000, 1053570139);
    InitializeCommonEvent(41, 9008000, 1053570140);
    InitializeCommonEvent(42, 9008000, 1053570141);
    InitializeCommonEvent(43, 9008000, 1053570142);
    InitializeCommonEvent(44, 9008000, 1053570143);
    InitializeCommonEvent(45, 9008000, 1053570144);
    InitializeCommonEvent(46, 9008000, 1053570145);
    InitializeCommonEvent(47, 9008000, 1053570146);
    InitializeCommonEvent(48, 9008000, 1053570147);
    InitializeCommonEvent(49, 9008000, 1053570148);
    InitializeCommonEvent(50, 9008000, 1053570149);
    InitializeCommonEvent(51, 9008000, 1053570150);
    InitializeCommonEvent(52, 9008000, 1053570151);
    InitializeCommonEvent(53, 9008000, 1053570152);
    InitializeCommonEvent(54, 9008000, 1053570153);
    InitializeCommonEvent(55, 9008000, 1053570154);
    InitializeCommonEvent(56, 9008000, 1053570155);
    InitializeCommonEvent(57, 9008000, 1053570156);
    InitializeCommonEvent(58, 9008000, 1053570157);
    InitializeCommonEvent(59, 9008000, 1053570158);
    InitializeCommonEvent(60, 9008000, 1053570159);
    InitializeCommonEvent(61, 9008000, 1053570160);
    InitializeCommonEvent(62, 9008000, 1053570161);
    InitializeCommonEvent(63, 9008000, 1053570162);
    InitializeCommonEvent(64, 9008000, 1053570163);
    InitializeCommonEvent(65, 9008000, 1053570164);
    InitializeCommonEvent(66, 9008000, 1053570165);
    
    InitializeEvent(0, 1053572200, 1053575200);
    InitializeCommonEvent(0, 90005300, 1053570210, 1053570210, 40510, 0, 0);
});

$Event(1053572200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


